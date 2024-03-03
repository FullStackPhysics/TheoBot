import { Subscription } from '@lemonsqueezy/lemonsqueezy.js'
import { IntervalUnit } from './general'

export interface Plan {
  productId: number
  variantId: number
  name?: string // Product name
  description?: string
  variantName: string
  sort: number
  status: string
  price: number
  interval: IntervalUnit
  intervalCount: number
  subscriptions: Subscription[]
}
