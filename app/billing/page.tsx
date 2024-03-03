/* /app/billing/page.tsx */

import {
  lemonSqueezySetup,
  listPrices,
  listVariants
} from '@lemonsqueezy/lemonsqueezy.js'
import Plans from './plans'
import { Metadata } from 'next'
import { Data, VariantData } from '@/types/lemon-squeezy/general'
import { VariantWithProductInfo } from '@/types/lemon-squeezy/variant'
import { Plan } from '@/types/lemon-squeezy/plan'

export const metaData: Metadata = {
  title: 'Billing'
}

export async function getPlans() {
  lemonSqueezySetup({ apiKey: `${process.env.LEMONSQUEEZY_API_KEY}` })
  let hasNextPage = true
  let page = 1

  let variants: VariantData[] = []
  let products: Data<Record<string, unknown>, unknown>[] = []
  let variantWithProductInfo: VariantWithProductInfo[] = []
  while (hasNextPage) {
    const resp = await listVariants({
      include: ['product'],
      page: { number: page, size: 50 }
    })

    variants = resp.data?.data ? variants.concat(resp.data.data) : variants
    products = resp.data?.included
      ? products.concat(resp.data.included)
      : products

    resp.data?.included?.forEach(productData => products.push(productData))

    const lastPage = resp.data?.meta.page.lastPage

    if (lastPage && lastPage > page) {
      page += 1
    } else {
      hasNextPage = false
    }

    const prods: { [key: string]: Record<string, unknown> } = {}
    for (let i = 0; i < products.length; i++) {
      prods[products[i].id] = products[i]['attributes']
    }
    for (let i = 0; i < variants.length; i++) {
      variantWithProductInfo.push({
        ...variants[i],
        product: prods[variants[i].attributes.product_id]
      })
    }
  }

  let variantId, variant, product, productId
  let plans: Plan[] = []
  for (let i = 0; i < variantWithProductInfo.length; i++) {
    variant = variantWithProductInfo[i]

    if (!variant.attributes.is_subscription) {
      console.log(`Variant ${variant.id} is not a subscription`)
      continue
    }

    if (
      String(variant.product['store_id']) !==
      `${process.env.LEMONSQUEEZY_STORE_ID}`
    ) {
      console.log(`Variant ${variant.id} is not within this store`)
      continue
    }

    variantId = parseInt(variant.id)
    product = variant['product']
    productId = variant.attributes.product_id

    let prices = await listPrices({
      filter: { variantId: variantId },
      page: { size: 100 }
    })

    let variant_price = prices.data?.data
      ? prices.data.data[0].attributes.unit_price
      : null

    variant = variant.attributes

    const plan: Plan = {
      productId: productId,
      name: String(product['name']),
      variantName: variant.name,
      subscriptions: [],
      variantId: variantId,
      status: variant.status,
      sort: variant.sort,
      description: variant.description,
      price: variant_price ? variant_price : 0,
      interval: variant.interval ? variant.interval : 'month',
      intervalCount: variant.interval_count ? variant.interval_count : 0
    }

    plans.push(plan)
  }
  return plans
}

export default async function Page() {
  const plans = await getPlans()

  const subscription = null // TODO

  return (
    <div className="flex flex-col container justify-center col-align-c h-full w-3/4 mx-auto">
      <h1 className="text-xl font-bold mb-3">Billing</h1>
      <Plans plans={plans} subscription={subscription} />
    </div>
  )
}
