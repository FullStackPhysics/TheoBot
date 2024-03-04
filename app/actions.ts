'use server'

import { revalidatePath } from 'next/cache'
import { notFound, redirect } from 'next/navigation'
import { kv } from '@vercel/kv'

import { auth } from '@/auth'
import { type Chat } from '@/lib/types'
import { configureLemonSqueezy } from './config/lemonsqueezy'
import { Plan, type Subscription } from '@prisma/client'
import { prisma } from './config/prisma'
import {
  Variant,
  cancelSubscription,
  createCheckout,
  getProduct,
  getSubscription,
  listPrices,
  listProducts,
  updateSubscription
} from '@lemonsqueezy/lemonsqueezy.js'

export async function getChats(userId?: string | null) {
  if (!userId) {
    return []
  }

  try {
    const pipeline = kv.pipeline()
    const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true
    })

    for (const chat of chats) {
      pipeline.hgetall(chat)
    }

    const results = await pipeline.exec()

    return results as Chat[]
  } catch (error) {
    return []
  }
}

export async function getChat(id: string, userId: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`)

  if (!chat || (userId && chat.userId !== userId)) {
    return null
  }

  return chat
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  const session = await auth()

  if (!session) {
    return {
      error: 'Unauthorized'
    }
  }

  //Convert uid to string for consistent comparison with session.user.id
  const uid = String(await kv.hget(`chat:${id}`, 'userId'))

  if (uid !== session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  await kv.del(`chat:${id}`)
  await kv.zrem(`user:chat:${session.user.id}`, `chat:${id}`)

  revalidatePath('/')
  return revalidatePath(path)
}

export async function clearChats() {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  const chats: string[] = await kv.zrange(`user:chat:${session.user.id}`, 0, -1)
  if (!chats.length) {
    return redirect('/')
  }
  const pipeline = kv.pipeline()

  for (const chat of chats) {
    pipeline.del(chat)
    pipeline.zrem(`user:chat:${session.user.id}`, chat)
  }

  await pipeline.exec()

  revalidatePath('/')
  return redirect('/')
}

export async function getSharedChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`)

  if (!chat || !chat.sharePath) {
    return null
  }

  return chat
}

export async function shareChat(id: string) {
  const session = await auth()

  if (!session?.user?.id) {
    return {
      error: 'Unauthorized'
    }
  }

  const chat = await kv.hgetall<Chat>(`chat:${id}`)

  if (!chat || chat.userId !== session.user.id) {
    return {
      error: 'Something went wrong'
    }
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`
  }

  await kv.hmset(`chat:${chat.id}`, payload)

  return payload
}

/**
 * This action will create a checkout on Lemon Squeezy.
 */
export async function getCheckoutURL(variantId: number, embed = false) {
  configureLemonSqueezy()

  const session = await auth()

  if (!session?.user) {
    throw new Error('User is not authenticated.')
  }

  const checkout = await createCheckout(
    process.env.LEMONSQUEEZY_STORE_ID!,
    variantId,
    {
      checkoutOptions: {
        embed,
        media: false,
        logo: !embed
      },
      checkoutData: {
        email: session.user.email ?? undefined,
        custom: {
          user_id: session.user.id
        }
      },
      productOptions: {
        enabledVariants: [variantId],
        redirectUrl: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard/billing/`,
        receiptButtonText: 'Go to Dashboard',
        receiptThankYouNote: 'Thank you for signing up to Lemon Stand!'
      }
    }
  )

  return checkout.data?.data.attributes.url
}
/**
 * This action will get the subscriptions for the current user.
 */
export async function getUserSubscriptions() {
  const session = await auth()
  const userId = session?.user?.id

  if (!userId) {
    notFound()
  }
  const userSubscriptions: Subscription[] = await prisma.subscription.findMany({
    where: { userId: userId }
  })

  return userSubscriptions
}

/**
 * This action will get the subscription URLs (update_payment_method and
 * customer_portal) for the given subscription ID.
 *
 */
export async function getSubscriptionURLs(id: string) {
  configureLemonSqueezy()
  const subscription = await getSubscription(id)

  if (subscription.error) {
    throw new Error(subscription.error.message)
  }

  return subscription.data?.data.attributes.urls
}

/**
 * This action will cancel a subscription on Lemon Squeezy.
 */
export async function cancelSub(id: string) {
  configureLemonSqueezy()

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions()

  // Check if the subscription exists
  const subscription = userSubscriptions.find(sub => sub.lemonSqueezyId === id)

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`)
  }

  const cancelledSub = await cancelSubscription(id)

  if (cancelledSub.error) {
    throw new Error(cancelledSub.error.message)
  }

  // Update the db
  try {
    await prisma.subscription.update({
      where: { lemonSqueezyId: id },
      data: {
        status: cancelledSub.data?.data.attributes.status,
        statusFormatted: cancelledSub.data?.data.attributes.status_formatted,
        endsAt: cancelledSub.data?.data.attributes.ends_at
          ? new Date(cancelledSub.data.data.attributes.ends_at)
          : new Date(Date.now())
      }
    })
  } catch (error) {
    throw new Error(`Failed to cancel Subscription #${id} in the database.`)
  }

  revalidatePath('/')

  return cancelledSub
}

/**
 * This action will pause a subscription on Lemon Squeezy.
 */
export async function pauseUserSubscription(id: string) {
  configureLemonSqueezy()

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions()

  // Check if the subscription exists
  const subscription = userSubscriptions.find(sub => sub.lemonSqueezyId === id)

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`)
  }

  const returnedSub = await updateSubscription(id, {
    pause: {
      mode: 'void'
    }
  })

  // Update the db
  try {
    const data: any = {
      status: returnedSub.data?.data.attributes.status,
      statusFormatted: returnedSub.data?.data.attributes.status_formatted,
      isPaused: returnedSub.data?.data.attributes.pause !== null
    }
    returnedSub.data?.data.attributes.ends_at
      ? (data.endsAt = returnedSub.data?.data.attributes.ends_at)
      : null

    await prisma.subscription.update({
      where: { lemonSqueezyId: id },
      data
    })
  } catch (error) {
    throw new Error(`Failed to pause Subscription #${id} in the database.`)
  }

  revalidatePath('/')

  return returnedSub
}

/**
 * This action will unpause a subscription on Lemon Squeezy.
 */
export async function unpauseUserSubscription(id: string) {
  configureLemonSqueezy()

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions()

  // Check if the subscription exists
  const subscription = userSubscriptions.find(sub => sub.lemonSqueezyId === id)

  if (!subscription) {
    throw new Error(`Subscription #${id} not found.`)
  }

  const returnedSub = await updateSubscription(id, {
    // @ts-expect-error -- null is a valid value for pause
    pause: null
  })

  // Update the db
  try {
    const data: any = {
      status: returnedSub.data?.data.attributes.status,
      statusFormatted: returnedSub.data?.data.attributes.status_formatted,
      isPaused: returnedSub.data?.data.attributes.pause !== null
    }
    returnedSub.data?.data.attributes.ends_at
      ? (data.endsAt = returnedSub.data?.data.attributes.ends_at)
      : null

    await prisma.subscription.update({
      where: { lemonSqueezyId: id },
      data: data
    })
  } catch (error) {
    throw new Error(`Failed to pause Subscription #${id} in the database.`)
  }

  revalidatePath('/')

  return returnedSub
}

/**
 * This action will sync the product variants from Lemon Squeezy with the
 * Plans database model. It will only sync the 'subscription' variants.
 */
export async function syncPlans() {
  configureLemonSqueezy()

  // Fetch all the variants from the database.
  const productVariants: Plan[] = await prisma.plan.findMany()

  // Helper function to add a variant to the productVariants array and sync it with the database.
  async function _addVariant(variant: Omit<Plan, 'id'>) {
    // eslint-disable-next-line no-console -- allow
    console.log(`Syncing variant ${variant.name} with the database...`)

    // Sync the variant with the plan in the database.
    const newVariant = await prisma.plan.upsert({
      where: { variantId: variant.variantId },
      create: variant,
      update: variant
    })

    /* eslint-disable no-console -- allow */
    console.log(`${variant.name} synced with the database...`)

    productVariants.push(newVariant)
  }

  // Fetch products from the Lemon Squeezy store.
  const products = await listProducts({
    filter: { storeId: process.env.LEMONSQUEEZY_STORE_ID },
    include: ['variants']
  })

  // Loop through all the variants.
  const allVariants = products.data?.included as Variant['data'][] | undefined

  // for...of supports asynchronous operations, unlike forEach.
  if (allVariants) {
    /* eslint-disable no-await-in-loop -- allow */
    for (const v of allVariants) {
      const variant = v.attributes

      // Skip draft variants or if there's more than one variant, skip the default
      // variant. See https://docs.lemonsqueezy.com/api/variants
      if (
        variant.status === 'draft' ||
        (allVariants.length !== 1 && variant.status === 'pending')
      ) {
        // `return` exits the function entirely, not just the current iteration.
        continue
      }

      // Fetch the Product name.
      const productName =
        (await getProduct(variant.product_id)).data?.data.attributes.name ?? ''

      // Fetch the Price object.
      const variantPriceObject = await listPrices({
        filter: {
          variantId: v.id
        }
      })

      const currentPriceObj = variantPriceObject.data?.data.at(0)
      const isUsageBased =
        currentPriceObj?.attributes.usage_aggregation !== null
      const interval = currentPriceObj?.attributes.renewal_interval_unit
      const intervalCount =
        currentPriceObj?.attributes.renewal_interval_quantity
      const trialInterval = currentPriceObj?.attributes.trial_interval_unit
      const trialIntervalCount =
        currentPriceObj?.attributes.trial_interval_quantity

      const price = isUsageBased
        ? currentPriceObj?.attributes.unit_price_decimal
        : currentPriceObj.attributes.unit_price

      const priceString = price !== null ? price?.toString() ?? '' : ''

      const isSubscription =
        currentPriceObj?.attributes.category === 'subscription'

      // If not a subscription, skip it.
      if (!isSubscription) {
        continue
      }

      await _addVariant({
        name: variant.name,
        description: variant.description,
        price: priceString,
        interval: interval ? interval : 'unknown',
        intervalCount: intervalCount ? intervalCount : 1,
        isUsageBased,
        productId: variant.product_id,
        productName,
        variantId: parseInt(v.id) as unknown as number,
        trialInterval: trialInterval ? trialInterval : 'unknown',
        trialIntervalCount: trialIntervalCount ? trialIntervalCount : 1,
        sort: variant.sort,
        createdAt: new Date(variant.created_at),
        updatedAt: new Date(variant.updated_at)
      })
    }
  }

  return productVariants
}

export async function changePlan(currentPlanId: string, newPlanId: string) {
  configureLemonSqueezy()

  // Get user subscriptions
  const userSubscriptions = await getUserSubscriptions()

  // Check if the subscription exists
  const subscription = userSubscriptions.find(
    sub => sub.planId === currentPlanId
  )

  if (!subscription) {
    throw new Error(`No subscription with plan id #${currentPlanId} was found.`)
  }

  // Get the new plan details from the database.
  const newPlan = await prisma.plan.findFirst({ where: { id: newPlanId } })

  if (!newPlan) throw new Error(`No plan with plan id #${newPlanId} was found.`)
  // Send request to Lemon Squeezy to change the subscription.
  const updatedSub = await updateSubscription(subscription.lemonSqueezyId, {
    variantId: newPlan.variantId
  })

  // Save in db
  try {
    await prisma.subscription.update({
      where: { lemonSqueezyId: subscription.id },
      data: {
        planId: newPlanId,
        price: newPlan.price,
        endsAt: updatedSub.data?.data.attributes.ends_at
          ? new Date(updatedSub.data.data.attributes.ends_at)
          : undefined
      }
    })
  } catch (error) {
    throw new Error(
      `Failed to update Subscription #${subscription.lemonSqueezyId} in the database.`
    )
  }

  revalidatePath('/')

  return updatedSub
}
