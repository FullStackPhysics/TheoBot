import { Data, VariantData } from '@/types/lemon-squeezy/general'
import { Plan } from '@/types/lemon-squeezy/plan'
import { VariantWithProductInfo } from '@/types/lemon-squeezy/variant'
import {
  lemonSqueezySetup,
  listPrices,
  listVariants
} from '@lemonsqueezy/lemonsqueezy.js'

export const dynamic = 'force-dynamic' // Don't cache API results

export default async function Page() {
  return <p>Done!</p>
}
