import { VariantData } from './general'

export interface VariantWithProductInfo extends VariantData {
  product: Record<string, unknown>
}
