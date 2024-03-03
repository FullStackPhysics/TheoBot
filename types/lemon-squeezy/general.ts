export interface BaseListResponse {
  meta: object
  jsonapi: {
    version: '1.0'
  }
  links: object
  included?: Record<string, any>
}
export interface BaseIndividualResponse {
  jsonapi: {
    version: '1.0'
  }
  links: object
  included?: Record<string, any>
}
export interface BaseApiObject {
  type: string
  id: string
  relationships: object
  links: object
}
export interface SubscriptionAttributes {
  /**
   * The ID of the store this subscription belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this subscription belongs to.
   */
  customer_id: number
  /**
   * The ID of the order associated with this subscription.
   */
  order_id: number
  /**
   * The ID of the order item associated with this subscription.
   */
  order_item_id: number
  /**
   * The ID of the product associated with this subscription.
   */
  product_id: number
  /**
   * The ID of the variant associated with this subscription.
   */
  variant_id: number
  /**
   * The name of the product.
   */
  product_name: string
  /**
   * The name of the variant.
   */
  variant_name: string
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The status of the subscription.
   */
  status: 'on_trial' | 'active' | 'paused' | 'unpaid' | 'cancelled' | 'expired'
  /**
   * The title-case formatted status of the subscription.
   */
  status_formatted:
    | 'On Trial'
    | 'Active'
    | 'Paused'
    | 'Unpaid'
    | 'Cancelled'
    | 'Expired'
  /**
   * Lowercase brand of the card used to pay for the latest subscription payment.
   */
  card_brand:
    | 'visa'
    | 'mastercard'
    | 'amex'
    | 'discover'
    | 'jcb'
    | 'diners'
    | 'unionpay'
    | null
  /**
   * The last 4 digits of the card used to pay for the latest subscription payment.
   */
  card_last_four: string | null
  /**
   * An object containing the payment collection pause behaviour options for the subscription, if set.
   */
  pause: {
    /**
     * Defines payment pause behaviour, can be one of:
     *
     *  - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged
     *  - `free` - Offer your subscription services for free, whilst halting payment collection
     */
    mode: 'void' | 'free'
    /**
     * An ISO-8601 formatted date-time string indicating when the subscription will continue collecting payments
     */
    resumes_at: string
  } | null
  /**
   * A boolean indicating if the subscription has been cancelled.
   */
  cancelled: boolean
  /**
   * If the subscription has a free trial, an ISO-8601 formatted date-time indicating when the trial period ends.
   */
  trial_ends_at: string | null
  /**
   * An integer representing the day of the month on which subscription invoice payments are collected.
   */
  billing_anchor: number
  /**
   * An object representing the first subscription item belonging to this subscription.
   */
  first_subscription_item: {
    /**
     * ID of the subscription item.
     */
    id: number
    /**
     * ID of the related subscription.
     */
    subscription_id: number
    /**
     * ID of the subscription item's price.
     */
    price_id: number
    /**
     * Quantity of the subscription item.
     */
    quantity: number
    /**
     * Date the subscription item was created (ISO 8601 format).
     */
    created_at: string
    /**
     * Date the subscription item was updated (ISO 8601 format).
     */
    updated_at: string
  }
  /**
   * URLs for the customer to manage the subscription.
   */
  urls: {
    /**
     * A signed URL for managing payment and billing information for the subscription, valid for 24 hours.
     */
    update_payment_method: string
    /**
     *  A pre-signed URL to the Customer Portal, which allows customers to fully manage their subscriptions and billing information from within your application. The URL is valid for 24 hours from time of request.
     */
    customer_portal: string
  }
  /**
   * Date indicating the end of the current billing cycle, and when the next invoice will be issued (ISO 8601 format).
   */
  renews_at: string | null
  /**
   * Date indicating when the subscription will expire or has expired (ISO 8601 format).
   */
  ends_at: string | null
  /**
   * Date the subscription was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the subscription was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the customer was created within test mode.
   */
  test_mode: boolean
}
export interface SubscriptionObject extends BaseApiObject {
  attributes: SubscriptionAttributes
}
export interface SubscriptionsResponse extends BaseListResponse {
  data: SubscriptionObject[]
}
export interface SubscriptionResponse extends BaseIndividualResponse {
  data: SubscriptionObject
}
export interface StoreAttributes {
  /**
   * The name of the store.
   */
  name: string
  /**
   * The slug used to identify the store.
   */
  slug: string
  /**
   * The domain of the store in the format {slug}.lemonsqueezy.com.
   */
  domain: string
  /**
   * The fully-qualified URL for the store (e.g. https://{slug}.lemonsqueezy.com).
   */
  url: string
  /**
   * The URL for the store avatar.
   */
  avatar_url: string
  /**
   * The current billing plan for the store.
   */
  plan: string
  /**
   * The ISO 3166-1 two-letter country code for the store.
   */
  country: string
  /**
   * The full country name for the store.
   */
  country_nicename: string
  /**
   * The ISO 4217 currency code for the store.
   */
  currency: string
  /**
   * A count of the all-time total sales made by this store.
   */
  total_sales: number
  /**
   * A positive integer in cents representing the total all-time revenue of the store in USD.
   */
  total_revenue: number
  /**
   * A count of the sales made by this store in the last 30 days.
   */
  thirty_day_sales: number
  /**
   * A positive integer in cents representing the total revenue of the store in USD in the last 30 days.
   */
  thirty_day_revenue: number
  /**
   * Date the store was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the store was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface StoreObject extends BaseApiObject {
  attributes: StoreAttributes
}
export interface StoresResponse extends BaseListResponse {
  data: StoreObject[]
}
export interface StoreResponse extends BaseIndividualResponse {
  data: StoreObject
}
export interface CustomerAttributes {
  /**
   * The ID of the store this customer belongs to.
   */
  store_id: number
  /**
   * The full name of the customer.
   */
  name: string
  /**
   * The email address of the customer.
   */
  email: string
  /**
   * The email marketing status of the customer.
   */
  status:
    | 'subscribed'
    | 'unsubscribed'
    | 'archived'
    | 'requires_verification'
    | 'invalid_email'
    | 'bounced'
  /**
   * The city of the customer.
   */
  city: string | null
  /**
   * The region of the customer.
   */
  region: string | null
  /**
   * The country of the customer.
   */
  country: string
  /**
   * A positive integer in cents representing the total revenue from the customer (USD).
   */
  total_revenue_currency: number
  /**
   * A positive integer in cents representing the monthly recurring revenue from the customer (USD).
   */
  mrr: number
  /**
   * The formatted status of the customer.
   */
  status_formatted:
    | 'Subscribed'
    | 'Unsubscribed'
    | 'Archived'
    | 'Requires Verification'
    | 'Invalid Email'
    | 'Bounced'
  /**
   * The formatted country of the customer.
   */
  country_formatted: string
  /**
   * A human-readable string representing the total revenue from the customer (e.g. $9.99).
   */
  total_revenue_currency_formatted: string
  /**
   * A human-readable string representing the monthly recurring revenue from the customer (e.g. $9.99).
   */
  mrr_formatted: string
  /**
   * URLs for the customer to manage subscriptions.
   */
  urls: {
    /**
     * A pre-signed URL to the Customer Portal, which allows customers to fully manage their subscriptions and billing information from within your application. The URL is valid for 24 hours from time of request.
     */
    customer_portal: string | null
  }
  /**
   * Date the customer was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the customer was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the customer was created within test mode.
   */
  test_mode: boolean
}
export interface CustomerObject extends BaseApiObject {
  attributes: CustomerAttributes
}
export interface CustomersResponse extends BaseListResponse {
  data: CustomerObject[]
}
export interface CustomerResponse extends BaseIndividualResponse {
  data: CustomerObject
}
export interface UserAttributes {
  /**
   * The name of the user.
   */
  name: string
  /**
   * The email address of the user.
   */
  email: string
  /**
   * A randomly generated hex color code for the user.
   */
  color: string
  /**
   * A URL to the avatar image for this user.
   */
  avatar_url: string
  /**
   * Has the value true if the user has uploaded a custom avatar image.
   */
  has_custom_avatar: string
  /**
   * Date the user was created (ISO 8601 format).
   */
  createdAt: string
  /**
   * Date the user was updated (ISO 8601 format).
   */
  updatedAt: string
}
export interface UserObject extends BaseApiObject {
  attributes: UserAttributes
}
export interface UserResponse extends BaseIndividualResponse {
  data: UserObject
}
export interface ProductAttributes {
  /**
   * The ID of the store this product belongs to.
   */
  store_id: number
  /**
   * The name of the product.
   */
  name: string
  /**
   * The slug used to identify the product.
   */
  slug: string
  /**
   * The description of the product in HTML.
   */
  description: string
  /**
   * The status of the product.
   */
  status: 'draft' | 'published'
  /**
   * The formatted status of the product.
   */
  status_formatted: 'Draft' | 'Published'
  /**
   * A URL to the thumbnail image for this product (if one exists). The image will be 100x100px in size.
   */
  thumb_url: string | null
  /**
   * A URL to the large thumbnail image for this product (if one exists). The image will be 1000x1000px in size.
   */
  large_thumb_url: string | null
  /**
   * A positive integer in cents representing the price of the product.
   */
  price: number
  /**
   * A human-readable string representing the price of the product (e.g. $9.99).
   */
  price_formatted: string
  /**
   * If this product has multiple variants, this will be a positive integer in cents representing the price of the cheapest variant. Otherwise, it will be null.
   */
  from_price: number | null
  /**
   * If this product has multiple variants, this will be a positive integer in cents representing the price of the most expensive variant. Otherwise, it will be null.
   */
  to_price: number | null
  /**
   * Has the value true if this is a “pay what you want” product where the price can be set by the customer at checkout.
   */
  pay_what_you_want: boolean
  /**
   * A URL to purchase this product using the Lemon Squeezy checkout.
   */
  buy_now_url: string
  /**
   * Date the product was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the product was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the product was created within test mode.
   */
  test_mode: boolean
}
export interface ProductObject extends BaseApiObject {
  attributes: ProductAttributes
}
export interface ProductsResponse extends BaseListResponse {
  data: ProductObject[]
}
export interface ProductResponse extends BaseIndividualResponse {
  data: ProductObject
}
export interface VariantAttributes {
  /**
   * The ID of the product this variant belongs to.
   */
  product_id: number
  /**
   * The name of the variant.
   */
  name: string
  /**
   * The slug used to identify the variant.
   */
  slug: string
  /**
   * The description of the variant in HTML.
   */
  description: string
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  price: number
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  is_subscription: boolean
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  interval: 'day' | 'week' | 'month' | 'year' | null
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  interval_count: number | null
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  has_free_trial: boolean
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  trial_interval: 'day' | 'week' | 'month' | 'year' | null
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  trial_interval_count: number | null
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  pay_what_you_want: boolean
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  min_price: number
  /**
   * @deprecated Price information has been moved to Price objects.
   */
  suggested_price: number
  /**
   * A boolean representing if this variant should generate license keys for the customer on purchase.
   */
  has_license_keys: boolean
  /**
   * The maximum number of times a license key can be activated for this variant
   */
  license_activation_limit: number
  /**
   * A boolean representing if license key activations are unlimited for this variant.
   */
  is_license_limit_unlimited: boolean
  /**
   * The number of units (specified in the `license_length_unit attribute`) until a license key expires.
   */
  license_length_value: number | null
  /**
   * The unit linked with the `license_length_value` attribute.
   */
  license_length_unit: 'days' | 'months' | 'years' | null
  /**
   * A boolean representing if license keys should never expire.
   */
  is_license_length_unlimited: boolean
  /**
   * An integer representing the order of this variant when displayed on the checkout.
   */
  sort: number
  /**
   * The status of the variant.
   */
  status: 'pending' | 'draft' | 'published'
  /**
   * The formatted status of the variant.
   */
  status_formatted: 'Pending' | 'Draft' | 'Published'
  /**
   * Date the variant was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the variant was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the variant was created within test mode.
   */
  test_mode: boolean
}
export interface VariantObject extends BaseApiObject {
  attributes: VariantAttributes
}
export interface VariantsResponse extends BaseListResponse {
  data: VariantObject[]
}
export interface VariantResponse extends BaseIndividualResponse {
  data: VariantObject
}
export interface CheckoutProductOptions {
  /**
   * A custom name for the product.
   */
  name: string
  /**
   * A custom description for the product.
   */
  description: string
  /**
   * An array of image URLs to use as the product's media.
   */
  media: string[]
  /**
   * A custom URL to redirect to after a successful purchase.
   */
  redirect_url: string
  /**
   * A custom text to use for the order receipt email button.
   */
  receipt_button_text: string
  /**
   * A custom URL to use for the order receipt email button.
   */
  receipt_link_url: string
  /**
   * A custom thank you note to use for the order receipt email.
   */
  receipt_thank_you_note: string
  /**
   * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
   */
  enabled_variants: number[]
}
export interface CheckoutCheckoutOptions {
  /**
   * A boolean indicating whether to show the checkout overlay.
   */
  embed: boolean
  /**
   * A boolean indicating whether to show product media.
   */
  media: boolean
  /**
   * A boolean indicating whether to show the store log.
   */
  logo: boolean
  /**
   * A boolean indicating whether to show the product description
   * */
  desc: boolean
  /**
   * A boolean indicating whether to show the discount code.
   */
  discount: boolean
  /**
   * A boolean indicating whether to use the dark theme.
   */
  dark: boolean
  /**
   * A boolean indicating whether to show the text "You will be charged..."
   */
  subscription_preview: boolean
  /**
   * A custom hex color to use for the checkout button.
   */
  button_color: string
}
export interface CheckoutCheckoutData {
  /**
   * A pre-filled email address.
   */
  email: string
  /**
   * A pre-filled name.
   */
  name: string
  /**
   * A pre-filled billing address.
   */
  billing_address: {
    /**
     * A country in a ISO 3166-1 alpha-2 format
     */
    country: string
    /**
     * A zip/postal code.
     */
    address_zip: string
  }
  /**
   * A pre-filled tax number.
   */
  tax_number: string
  /**
   * A pre-filled discount code.
   */
  discount_code: string
  /**
   * An object containing any custom data to be passed to the checkout.
   */
  custom: Record<string, any>
  /**
   * A list containing quantity data objects.
   */
  variant_quantities: Array<{
    quantity: number
    variant_id: number
  }>
}
export interface CheckoutPreview {
  /**
   * The ISO 4217 currency code of the store.
   */
  currency: string
  /**
   * The currency conversion rate used to determine the price of the checkout in USD.
   */
  currency_rate: number
  /**
   * A positive integer in cents representing the subtotal of the checkout in the store currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the total discount value applied to the checkout in the store currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the checkout in the store currency.
   */
  tax: number
  /**
   * A positive integer in cents representing the total price of the checkout in the store currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the checkout in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the checkout in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the checkout in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total price of the checkout in USD.
   */
  total_usd: number
  /**
   * A human-readable string representing the subtotal of the checkout in the store currency.
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the checkout in the store currency.
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the tax applied to the checkout in the store currency.
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total price of the checkout in the store currency.
   */
  total_formatted: string
}
export interface CheckoutAttributes {
  /**
   * The ID of the store this checkout belongs to.
   */
  store_id: number
  /**
   * The ID of the variant associated with this checkout.
   */
  variant_id: number
  /**
   * A positive integer in cents representing the custom price of the variant.
   */
  custom_price: number | null
  /**
   * An object containing any overridden product options for this checkout.
   */
  product_options: CheckoutProductOptions
  /**
   * An object containing checkout options for this checkout.
   */
  checkout_options: CheckoutCheckoutOptions
  /**
   * An object containing any prefill or custom data to be used in the checkout.
   */
  checkout_data: CheckoutCheckoutData
  /**
   * An object containin pricing information for this checkout. Will be `false` if `preview` was not `true` in the request.
   */
  preview: CheckoutPreview | false
  /**
   * Date the checkout expires (ISO 8601 format).
   */
  expires_at: string | null
  /**
   * Date the checkout was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the checkout was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the checkout was created within test mode.
   */
  test_mode: boolean
  /**
   * The unique URL to access the checkout.
   */
  url: string
}
export interface CheckoutObject extends BaseApiObject {
  attributes: CheckoutAttributes
}
export interface CheckoutsResponse extends BaseListResponse {
  data: CheckoutObject[]
}
export interface CheckoutResponse extends BaseIndividualResponse {
  data: CheckoutObject
}
export interface OrderAttributes {
  /**
   * The ID of the store this order belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this order belongs to.
   */
  customer_id: number
  /**
   * The unique identifier (UUID) for this order.
   */
  identifier: string
  /**
   * An integer representing the sequential order number for this store.
   */
  order_number: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The ISO 4217 currency code for the order.
   */
  currency: string
  /**
   * The currency conversion rate used to determine the price of the checkout in USD.
   */
  currency_rate: string
  /**
   * A positive integer in cents representing the subtotal of the order in the order currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the total discount value applied to the order in the order currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the order in the order currency.
   */
  tax: number
  /**
   * A positive integer in cents representing the total cost of the order in the order currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the order in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the order in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the order in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total cost of the order in USD.
   */
  total_usd: number
  /**
   * The name of the tax rate applied to the order.
   */
  tax_name: string | null
  /**
   * If tax is applied to the order, this will be the rate of tax displayed as a decimal percentage as a string.
   */
  tax_rate: string
  /**
   * The status of the order.
   */
  status: 'pending' | 'failed' | 'paid' | 'refunded'
  /**
   * The formatted status of the order.
   */
  status_formatted: 'Pending' | 'Failed' | 'Paid' | 'Refunded'
  /**
   * A boolean indicating if the order has been refunded.
   */
  refunded: boolean
  /**
   * Date the order was refuned (ISO 8601 format).
   */
  refunded_at: string | null
  /**
   * A human-readable string representing the subtotal of the order in the order currency.
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the order in the order currency.
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the tax applied to the order in the order currency.
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total cost of the order in the order currency.
   */
  total_formatted: string
  /**
   * An object representing the first order item belonging to this order.
   */
  first_order_item: {
    /**
     * The ID of the order item.
     */
    id: number
    /**
     * The ID of the order.
     */
    order_id: number
    /**
     * The ID of the product.
     */
    product_id: number
    /**
     * The ID of the product variant.
     */
    variant_id: number
    /**
     * The name of the product.
     */
    product_name: string
    /**
     * The name of the product variant.
     */
    variant_name: string
    /**
     * A positive integer in cents representing the price of the order item in the order currency.
     */
    price: number
    /**
     * Date the order item was created (ISO 8601 format).
     */
    created_at: string
    /**
     * Date the order item was updated (ISO 8601 format).
     */
    updated_at: string
    /**
     * A boolean indicating if the order item was created within test mode.
     */
    test_mode: boolean
  }
  urls: {
    /**
     * A signed URL for viewing the order in the customer's My Orders page.
     */
    receipt: string
  }
  /**
   * Date the order was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the order was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the order was created within test mode.
   */
  test_mode: boolean
}
export interface OrderObject extends BaseApiObject {
  attributes: OrderAttributes
}
export interface OrdersResponse extends BaseListResponse {
  data: OrderObject[]
}
export interface OrderResponse extends BaseIndividualResponse {
  data: OrderObject
}
export interface FileAttributes {
  /**
   * The ID of the variant this file belongs to.
   */
  variant_id: number
  /**
   * The unique identifier (UUID) for this file.
   */
  identifier: string
  /**
   * The name of the file.
   */
  name: string
  /**
   * The file extension of the file.
   */
  extension: string
  /**
   * The unique URL to download the file.
   */
  download_url: string
  /**
   * A positive integer in bytes representing the size of the file.
   */
  size: number
  /**
   * The human-readable size of the file.
   */
  size_formatted: string
  /**
   * The software version of this file.
   */
  version: string | null
  /**
   * An integer representing the order of this file when displayed.
   */
  sort: number
  /**
   * The status of the file
   */
  status: 'draft' | 'published'
  /**
   * Date the file was created (ISO 8601 format).
   */
  createdAt: string
  /**
   * Date the file was updated (ISO 8601 format).
   */
  updatedAt: string
  /**
   * A boolean indicating if the file was created within test mode.
   */
  test_mode: boolean
}
export interface FileObject extends BaseApiObject {
  attributes: FileAttributes
}
export interface FilesResponse extends BaseListResponse {
  data: FileObject[]
}
export interface FileResponse extends BaseIndividualResponse {
  data: FileObject
}
export interface SubscriptionInvoiceAttributes {
  /**
   * The ID of the Store this subscription invoice belongs to.
   */
  store_id: number
  /**
   * The ID of the Subscription associated with this subscription invoice.
   */
  subscription_id: number
  /**
   * The ID of the customer this subscription invoice belongs to.
   */
  customer_id: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The reason for the invoice being generated.
   */
  billing_reason: 'initial' | 'renewal' | 'updated'
  /**
   * Lowercase brand of the card used to pay for the invoice.
   */
  card_brand:
    | 'visa'
    | 'mastercard'
    | 'amex'
    | 'discover'
    | 'jcb'
    | 'diners'
    | 'unionpay'
    | null
  /**
   * The last 4 digits of the card used to pay for the invoice.
   */
  card_last_four: string | null
  /**
   * The ISO 4217 currency code for the invoice
   */
  currency: string
  /**
   * The currency conversion rate used to determine the price of the checkout in USD.
   */
  currency_rate: string
  /**
   * The status of the invoice.
   */
  status: 'pending' | 'paid' | 'void' | 'refunded'
  /**
   * The formatted status of the invoice.
   */
  status_formatted: 'Pending' | 'Paid' | 'Void' | 'Refunded'
  /**
   * A boolean value indicating whether the invoice has been refunded.
   */
  refunded: boolean
  /**
   * Date the order was refuned (ISO 8601 format).
   */
  refunded_at: string | null
  /**
   * A positive integer in cents representing the subtotal of the invoice in the invoice currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the total discount value applied to the invoice in the invoice currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the invoice in the invoice currency.
   */
  tax: number
  /**
   * A positive integer in cents representing the total cost of the invoice in the invoice currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the invoice in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the invoice in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the invoice in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total cost of the invoice in USD.
   */
  total_usd: number
  /**
   * A human-readable string representing the subtotal of the invoice in the invoice currency (e.g. $9.99).
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the invoice in the invoice currency (e.g. $9.99).
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the tax applied to the invoice in the invoice currency (e.g. $9.99).
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total cost of the invoice in the invoice currency (e.g. $9.99).
   */
  total_formatted: string
  /**
   * An object of customer-facing URLs for the invoice.
   */
  urls: {
    /**
     * The unique URL to download a PDF of the invoice (will be `null` if status is `pending`).
     */
    invoice_url: string | null
  }
  /**
   * Date the subscription invoice was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the subscription invoice was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the subscription invoice was created within test mode.
   */
  test_mode: boolean
}
export interface SubscriptionInvoiceObject extends BaseApiObject {
  attributes: SubscriptionInvoiceAttributes
}
export interface SubscriptionInvoicesResponse extends BaseListResponse {
  data: SubscriptionInvoiceObject[]
}
export interface SubscriptionInvoiceResponse extends BaseIndividualResponse {
  data: SubscriptionInvoiceObject
}
export interface SubscriptionItemAttributes {
  /**
   * The ID of the Subscription this subscription item belongs to.
   */
  subscription_id: number
  /**
   * The ID of the Price this subscription item belongs to.
   */
  price_id: number
  /**
   * A positive integer representing the unit quantity of this subscription item.
   */
  quantity: number
  /**
   * A boolean value indicating whether the related subscription product/variant has usage-based billing enabled.
   */
  is_usage_based: boolean
  /**
   * Date the subscription item was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the subscription item was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface SubscriptionItemObject extends BaseApiObject {
  attributes: SubscriptionItemAttributes
}
export interface SubscriptionItemResponse extends BaseIndividualResponse {
  data: SubscriptionItemObject
}
export interface SubscriptionItemUsageResponse {
  jsonapi: {
    version: '1.0'
  }
  meta: {
    /**
     * Date the billing period started (ISO 8601 format).
     */
    period_start: string
    /**
     * Date the billing period will end (ISO 8601 format).
     */
    period_end: string
    /**
     * A positive integer representing the usage total.
     */
    quantity: number
    /**
     * The interval unit of the subscription's variant.
     */
    interval_unit: 'day' | 'week' | 'month' | 'year'
    /**
     * The interval count of the subscription's variant.
     */
    interval_quantity: number
  }
}
export interface UsageRecordAttributes {
  /**
   * The ID of the Subscription item this usage record belongs to.
   */
  subscription_item_id: number
  /**
   * A positive integer representing the unit usage reported.
   */
  quantity: number
  /**
   * The export type of record.
   */
  action: 'increment' | 'set'
  /**
   * Date the usage record was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the usage record was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface UsageRecordObject extends BaseApiObject {
  attributes: UsageRecordAttributes
}
export interface UsageRecordsResponse extends BaseListResponse {
  data: UsageRecordObject[]
}
export interface UsageRecordResponse extends BaseIndividualResponse {
  data: UsageRecordObject
}
export interface DiscountAttributes {
  /**
   * The ID of the store this discount belongs to.
   */
  store_id: number
  /**
   * The name of the discount.
   */
  name: string
  /**
   * The discount code that can be used at checkout.
   */
  code: string
  /**
   * The amount of discount to apply to the order.
   */
  amount: number
  /**
   * The export export typ of the amount.
   */
  amount_type: 'percent' | 'fixed'
  /**
   * A boolean indicating if the discount can only be applied to certain products/variants.
   */
  is_limited_to_products: boolean
  /**
   * A boolean indicating if the discount can only be redeemed a limited number of times.
   */
  is_limited_redemptions: boolean
  /**
   * If is_limited_redemptions is true, this is the maximum number of redemptions.
   */
  max_redemptions: number
  /**
   * Date the discount is valid from (ISO 8601 format).
   */
  starts_at: string | null
  /**
   * Date the discount expires (ISO 8601 format).
   */
  expires_at: string | null
  /**
   * When applied to a subscription, how often the discount should be applied.
   */
  duration: 'once' | 'repeating' | 'forever'
  /**
   * If duration is repeating, this specifies how many months the discount should apply.
   */
  duration_in_months: number
  /**
   * The status of the discount.
   */
  status: 'draft' | 'published'
  /**
   * The formatted status of the discount.
   */
  status_formatted: 'Draft' | 'Published'
  /**
   * Date the discount was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the discount was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the subscription invoice was created within test mode.
   */
  test_mode: boolean
}
export interface DiscountObject extends BaseApiObject {
  attributes: DiscountAttributes
}
export interface DiscountsResponse extends BaseListResponse {
  data: DiscountObject[]
}
export interface DiscountResponse extends BaseIndividualResponse {
  data: DiscountObject
}
export interface DiscountRedemptionAttributes {
  /**
   * The ID of the discount this redemption belongs to.
   */
  discount_id: number
  /**
   * The ID of the order this redemption belongs to.
   */
  order_id: number
  /**
   * The name of the discount.
   */
  discount_name: string
  /**
   * The discount code that was used at checkout.
   */
  discount_code: string
  /**
   * The amount of the discount.
   */
  discount_amount: number
  /**
   * The export export typ of the discount_amount.
   */
  discount_amount_type: 'percent' | 'fixed'
  /**
   * A positive integer in cents representing the amount of the discount that was applied to the order (in the order currency).
   */
  amount: number
  /**
   * Date the discount redemption was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the discount redemption was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface DiscountRedemptionObject extends BaseApiObject {
  attributes: DiscountRedemptionAttributes
}
export interface DiscountRedemptionsResponse extends BaseListResponse {
  data: DiscountRedemptionObject[]
}
export interface DiscountRedemptionResponse extends BaseIndividualResponse {
  data: DiscountRedemptionObject
}
export interface LicenseKeyAttributes {
  /**
   * The ID of the store this license key belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this license key belongs to.
   */
  customer_id: number
  /**
   * The ID of the order associated with this license key.
   */
  order_id: number
  /**
   * The ID of the order item associated with this license key.
   */
  order_item_id: number
  /**
   * The ID of the product associated with this license key.
   */
  product_id: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The full license key.
   */
  key: string
  /**
   * A “short” representation of the license key, made up of the string “XXXX-” followed by the last 12 characters of the license key.
   */
  key_short: string
  /**
   * The activation limit of this license key.
   */
  activation_limit: number
  /**
   * A count of the number of instances this license key has been activated on.
   */
  instances_count: number
  /**
   * A boolean indicating if this license key has been disabled.
   */
  disabled: boolean
  /**
   * The status of the license key.
   */
  status: 'inactive' | 'active' | 'expired' | 'disabled'
  /**
   * The formatted status of the license key.
   */
  status_formatted: 'Inactive' | 'Active' | 'Expired' | 'Disabled'
  /**
   * Date the license key expires (ISO 8601 format).
   */
  expires_at: string | null
  /**
   * Date the license key was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the license key was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface LicenseKeyObject extends BaseApiObject {
  attributes: LicenseKeyAttributes
}
export interface LicenseKeysResponse extends BaseListResponse {
  data: LicenseKeyObject[]
}
export interface LicenseKeyResponse extends BaseIndividualResponse {
  data: LicenseKeyObject
}
export interface LicenseKeyInstanceAttributes {
  /**
   * The ID of the license key this instance belongs to.
   */
  license_key_id: number
  /**
   * The unique identifier (UUID) for this instance.
   */
  identifier: string
  /**
   * The name of the license key instance.
   */
  name: string
  /**
   * Date the license key instance was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the license key instance was updated (ISO 8601 format).
   */
  updated_at: string
}
export interface LicenseKeyInstanceObject extends BaseApiObject {
  attributes: LicenseKeyInstanceAttributes
}
export interface LicenseKeyInstancesResponse extends BaseListResponse {
  data: LicenseKeyInstanceObject[]
}
export interface LicenseKeyInstanceResponse extends BaseIndividualResponse {
  data: LicenseKeyInstanceObject
}
export type WebhookEvent =
  | 'order_created'
  | 'order_refunded'
  | 'subscription_created'
  | 'subscription_updated'
  | 'subscription_cancelled'
  | 'subscription_resumed'
  | 'subscription_expired'
  | 'subscription_paused'
  | 'subscription_unpaused'
  | 'subscription_payment_success'
  | 'subscription_payment_failed'
  | 'subscription_payment_recovered'
  | 'license_key_created'
  | 'license_key_updated'
export interface WebhookAttributes {
  /**
   * The ID of the store this webhook belongs to.
   */
  store_id: number
  /**
   * The URL that events will be sent to.
   */
  url: string
  /**
   * An array of events that will be sent.
   */
  events: Array<WebhookEvent>
  /**
   * Date the webhook was last sent (ISO 8601 format).
   */
  last_sent_at: string | null
  /**
   * Date the webhook was created (ISO 8601 format).
   */
  created_at: string
  /**
   * Date the webhook was updated (ISO 8601 format).
   */
  updated_at: string
  /**
   * A boolean indicating if the webhook was created within test mode.
   */
  test_mode: boolean
}
export interface WebhookObject extends BaseApiObject {
  attributes: WebhookAttributes
}
export interface WebhooksResponse extends BaseListResponse {
  data: WebhookObject[]
}
export interface WebhookResponse extends BaseIndividualResponse {
  data: WebhookObject
}

export interface PaginatedOptions {
  /**
   * Number of records to return (between 1 and 100)
   */
  perPage?: number
  /**
   * Page of records to return
   */
  page?: number
}
export interface GetStoresOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<
    'products' | 'discounts' | 'license-keys' | 'subscriptions' | 'webhooks'
  >
}
export interface GetStoreOptions {
  /**
   * The ID of the store to retrieve
   */
  id: string | number
  /**
   * List of record export types to include
   */
  include?: Array<
    'products' | 'discounts' | 'license-keys' | 'subscriptions' | 'webhooks'
  >
}
export interface GetProductsOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'store' | 'variants'>
  /**
   * Filter products by store
   */
  storeId?: number
}
export interface GetProductOptions {
  /**
   * The ID of the store to retrieve
   */
  id: string
  /**
   * List of record export types to include
   */
  include?: Array<'store' | 'variants'>
}
export interface GetVariantsOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'product' | 'files'>
  /**
   * Filter variants by product
   */
  productId?: number
}
export interface GetVariantOptions {
  /**
   * The ID of the variant to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<'product' | 'files'>
}
export interface GetPricesOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'variant'>
  /**
   * Filter prices by variant
   */
  variantId?: number
}
export interface GetPriceOptions {
  /**
   * The ID of the price to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<'variant'>
}
export interface GetCheckoutsOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'store' | 'variant'>
  /**
   * Filter variants by store
   */
  storeId?: number
  /**
   * Filter checkouts by variant
   */
  variantId?: number
}
export interface GetCheckoutOptions {
  /**
   * The ID of the checkout to retrieve
   */
  id: string
  /**
   * List of record export types to include
   */
  include?: Array<'store' | 'variant'>
}
export interface CreateCheckoutOptions {
  /**
   * An object of values used to configure the checkout
   *
   * @see https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
   */
  attributes?: object
  /**
   * The ID of the store
   */
  storeId: number
  /**
   * The ID of the variant
   */
  variantId: number
}
export interface GetCustomersOptions extends PaginatedOptions {
  /**
   * Filter customers by email address
   */
  email?: string
  /**
   * List of record export types to include
   */
  include?: Array<'license-keys' | 'orders' | 'store' | 'subscriptions'>
  /**
   * Filter customers by store
   */
  storeId?: number
}
export interface GetCustomerOptions {
  /**
   * The ID of the customer to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<'license-keys' | 'orders' | 'store' | 'subscriptions'>
}
export interface GetOrdersOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<
    | 'customer'
    | 'discount-redemptions'
    | 'license-keys'
    | 'order-items'
    | 'store'
    | 'subscriptions'
  >
  /**
   * Filter orders by store
   */
  storeId?: number
  /**
   * Filter orders by email address
   */
  userEmail?: number
}
export interface GetOrderOptions {
  /**
   * The ID of the order to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<
    | 'customer'
    | 'discount-redemptions'
    | 'license-keys'
    | 'order-items'
    | 'store'
    | 'subscriptions'
  >
}
export interface GetFilesOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'variant'>
  /**
   * Filter files by variant
   */
  variantId?: number
}
export interface GetFileOptions {
  /**
   * The ID of the file to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<'variant'>
}
export interface GetOrderItemsOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<'order' | 'product' | 'variant'>
  /**
   * Filter order items by order
   */
  orderId?: number
  /**
   * Filter order items by product
   */
  productId?: number
  /**
   * Filter order items by variant
   */
  variantId?: number
}
export interface GetOrderItemOptions {
  /**
   * The ID of the order item to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<'order' | 'product' | 'variant'>
}
export interface GetSubscriptionsOptions extends PaginatedOptions {
  /**
   * List of record export types to include
   */
  include?: Array<
    'store' | 'customer' | 'order' | 'order-item' | 'product' | 'variant'
  >
  /**
   * Filter subscriptions by store
   */
  storeId?: number
  /**
   * Filter subscriptions by order
   */
  orderId?: number
  /**
   * Filter subscriptions by order item
   */
  orderItemId?: number
  /**
   * Filter subscriptions by product
   */
  productId?: number
  /**
   * Filter subscriptions by variant
   */
  variantId?: number
  /**
   * Filter subscriptions by status
   */
  status?:
    | 'on_trial'
    | 'active'
    | 'paused'
    | 'past_due'
    | 'unpaid'
    | 'cancelled'
    | 'expired'
}
export interface GetSubscriptionOptions {
  /**
   * The ID of the subscription to retrieve
   */
  id: number
  /**
   * List of record export types to include
   */
  include?: Array<
    'store' | 'customer' | 'order' | 'order-item' | 'product' | 'variant'
  >
}
export interface BaseUpdateSubscriptionOptions {
  /**
   * The ID of the subscription to update
   */
  id: number
}
export interface UpdateSubscriptionOptions
  extends BaseUpdateSubscriptionOptions {
  /**
   * The ID of the product (required when changing plans)
   */
  productId?: number
  /**
   * The ID of the variant (required when changing plans)
   */
  variantId?: number
  /**
   * Set the proration when changing plans. If ommitted, proration will occur at the next renewal date.
   */
  proration?: 'immediate' | 'disable'
  /**
   * Change the billing day used for renewal charges. Must be a number between 1 and 31
   */
  billingAnchor?: number
}
export interface PauseSubscriptionOptions
  extends BaseUpdateSubscriptionOptions {
  /**
   * Type of pause
   *
   * @default "void"
   */
  mode?: 'void' | 'free'
  /**
   * Date to automatically resume the subscription (ISO 8601 format datetime)
   */
  resumesAt?: string
}
export interface GetSubscriptionInvoicesOptions extends PaginatedOptions {
  /**
   * List of record types to include
   */
  include?: Array<'store' | 'subscription'>
  /**
   * Filter subscription invoices by store
   */
  storeId?: number
  /**
   * Filter subscription invoices by status
   */
  status?: 'paid' | 'pending' | 'void' | 'refunded'
  /**
   * Filter subscription invoices by refunded
   */
  refunded?: boolean
  /**
   * Filter subscription invoices by subscription
   */
  subscriptionId?: number
}
export interface GetSubscriptionInvoiceOptions {
  /**
   * The ID of the subscription invoice to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'store' | 'subscription'>
}
export interface GetSubscriptionItemsOptions extends PaginatedOptions {
  /**
   * List of record types to include
   */
  include?: Array<'subscription' | 'price' | 'usage-records'>
  /**
   * Filter subscription items by subscription
   */
  subscriptionId?: number
  /**
   * Filter subscription items by price
   */
  priceId?: number
}
export interface GetSubscriptionItemOptions {
  /**
   * The ID of the subscription item to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'subscription' | 'price' | 'usage-records'>
}
export interface UpdateSubscriptionItemOptions {
  /**
   * The ID of the subscription item to update
   */
  id: number
  /**
   * The new quantity for the subscription item
   */
  quantity: number
}
export interface GetSubscriptionItemUsageOptions {
  /**
   * The ID of the subscription item to get usage for
   */
  id: number
}
export interface GetUsageRecordsOptions extends PaginatedOptions {
  /**
   * List of record types to include
   */
  include?: Array<'subscription-item'>
  /**
   * Filter usage records by subscription item
   */
  subscriptionItemId?: number
}
export interface GetUsageRecordOptions {
  /**
   * The ID of the usage record to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'subscription-item'>
}
export interface CreateUsageRecordOptions {
  /**
   * The ID of the subscription item to report usage for
   */
  subscriptionItemId: number
  /**
   * The number of units to report
   */
  quantity: number
  /**
   * Type of record
   */
  action?: 'increment' | 'set'
}
export interface GetDiscountsOptions extends PaginatedOptions {
  /**
   * Filter discounts by store
   */
  storeId?: number
  /**
   * List of record types to include
   */
  include?: Array<'store' | 'variants' | 'discount-redemptions'>
}
export interface GetDiscountOptions {
  /**
   * The ID of the discount to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'store' | 'variants' | 'discount-redemptions'>
}
export interface CreateDiscountOptions {
  /**
   * Store to create a discount in
   */
  storeId: number
  /**
   * Name of discount
   */
  name: string
  /**
   * Discount code (uppercase letters and numbers, between 3 and 256 characters)
   */
  code: string
  /**
   * Amount the discount is for
   */
  amount: number
  /**
   * Type of discount
   */
  amountType?: 'percent' | 'fixed'
  /**
   * Duration of discount
   */
  duration?: 'once' | 'repeating' | 'forever'
  /**
   * Number of months to repeat the discount for
   */
  durationInMonths?: number
  /**
   * Limit the discount to certain variants
   */
  variantIds?: number[]
  /**
   * The total number of redemptions allowed
   */
  maxRedemptions?: number
  /**
   * Date the discount code starts on (ISO 8601 format)
   */
  startsAt?: string
  /**
   * Date the discount code expires on (ISO 8601 format)
   */
  expiresAt?: string
}
export interface DeleteDiscountOptions {
  /**
   * The ID of the discount to delete
   */
  id: number
}
export interface GetDiscountRedemptionsOptions extends PaginatedOptions {
  /**
   * Filter discount redemptions by discount
   */
  discountId?: number
  /**
   * Filter discount redemptions by order
   */
  orderId?: number
  /**
   * List of record types to include
   */
  include?: Array<'discount' | 'order'>
}
export interface GetDiscountRedemptionOptions {
  /**
   * ID of the discount to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'discount' | 'order'>
}
export interface GetLicenseKeysOptions extends PaginatedOptions {
  /**
   * Filter license keys by store
   */
  storeId?: number
  /**
   * Filter license keys by order
   */
  orderId?: number
  /**
   * Filter license keys by order item
   */
  orderItemId?: number
  /**
   * Filter license keys by product
   */
  productId?: number
  /**
   * List of record types to include
   */
  include?: Array<
    | 'store'
    | 'customer'
    | 'order'
    | 'order-item'
    | 'product'
    | 'license-key-instances'
  >
}
export interface GetLicenseKeyOptions {
  /**
   * ID of the license key to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<
    | 'store'
    | 'customer'
    | 'order'
    | 'order-item'
    | 'product'
    | 'license-key-instances'
  >
}
export interface GetLicenseKeyInstancesOptions extends PaginatedOptions {
  /**
   * Filter license key instances by license key
   */
  licenseKeyId?: number
  /**
   * List of record types to include
   */
  include?: Array<'license-key'>
}
export interface GetLicenseKeyInstanceOptions {
  /**
   * ID of the license key instance to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'license-key'>
}
export interface GetWebhooksOptions extends PaginatedOptions {
  /**
   * Filter webhooks by store
   */
  storeId?: number
  /**
   * List of record types to include
   */
  include?: Array<'store'>
}
export interface GetWebhookOptions {
  /**
   * ID of the license key instance to retrieve
   */
  id: number
  /**
   * List of record types to include
   */
  include?: Array<'store'>
}
export interface CreateWebhookOptions {
  /**
   * ID of the store the webhook is for
   */
  storeId: number
  /**
   * Endpoint URL that the webhooks should be sent to
   */
  url: string
  /**
   * List of webhook events to receive
   *
   * @see https://docs.lemonsqueezy.com/help/webhooks#event-types
   */
  events: Array<WebhookEvent>
  /**
   * Signing secret (between 6 and 40 characters
   */
  secret: string
}
export interface UpdateWebhookOptions {
  /**
   * ID of the webhook to update
   */
  id: number
  /**
   * Endpoint URL that the webhooks should be sent to
   */
  url?: string
  /**
   * List of webhook events to receive
   *
   * @see https://docs.lemonsqueezy.com/help/webhooks#event-types
   */
  events?: Array<WebhookEvent>
  /**
   * Signing secret (between 6 and 40 characters
   */
  secret?: string
}
export interface DeleteWebhookOptions {
  /**
   * ID of the webhook to delete
   */
  id: number
}

/**
 * @deprecated Deprecated since version 2.0.0. It will be removed with the
 * next major version. Use the new setup method.
 *
 * @see https://github.com/lmsqueezy/lemonsqueezy.js?tab=readme-ov-file#usage.
 */
declare class LemonSqueezy {
  protected apiKey: string
  apiUrl: string
  constructor(apiKey: string)
  /**
   * Builds a params object for the API query based on provided and allowed
   * filters.
   *
   * Also converts pagination parameters `page` to `page[number]` and `perPage`
   * to `page[size]`
   *
   * @param [args] Arguments to the API method
   * @param [allowedFilters] List of filters the API query permits
   * (camelCase)
   */
  private _buildParams
  /**
   * Send an API query to the LemonSqueezy API
   *
   * @param [path] The path to the API endpoint.
   * @param [method] POST, GET, PATCH, DELETE.
   * @param [params] URL query parameters.
   * @param [payload] Object/JSON payload.
   *
   * @returns JSON response from the API or throws an error.
   */
  private _query
  /**
   * Get current user
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getAuthenticatedUser`
   * function.
   *
   * @returns JSON
   */
  getUser(): Promise<UserResponse>
  /**
   * Get stores
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getStore` function
   * instead.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listStores` function
   * instead.
   *
   * @param [params]
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A paginated list of `store` objects ordered by name.
   */
  getStores(params?: GetStoresOptions): Promise<StoresResponse>
  /**
   * Retrieve a store.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getStore` function
   * instead.
   *
   * @param storeId (Required) The given store id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A store object.
   */
  getStore(p: GetStoreOptions): Promise<StoreResponse>
  /**
   * Get customers
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listCustomers` function
   * instead.
   *
   * @param [params]
   * @param [params.storeId] Filter customers by store
   * @param [params.email] Filter customers by email address
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A paginated list of customer objects ordered by `created_at` (descending).
   */
  getCustomers(params?: GetCustomersOptions): Promise<CustomersResponse>
  /**
   * Get a customer
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getCustomer` function
   * instead.
   *
   * @param customerId The given customer id.
   * @param [params]
   * @param [params.id]
   * @param [params.include] List of record types to include
   *
   * @returns A customer object.
   */
  getCustomer(p: GetCustomerOptions): Promise<CustomerResponse>
  /**
   * Get products
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listProducts` function
   * instead.
   *
   * @param [params] Additional parameters.
   * @param [params.storeId] Filter products by store
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A paginated list of product objects ordered by `name`.
   */
  getProducts(params?: GetProductsOptions): Promise<ProductsResponse>
  /**
   * Get a product
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getProduct` function
   * instead.
   *
   * @param productId The given product id.
   * @param [params]
   * @param [params.id]
   * @param [params.include] List of record types to include
   *
   * @returns A product object.
   */
  getProduct(p: GetProductOptions): Promise<ProductResponse>
  /**
   * Get variants
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listVariants` function
   * instead.
   *
   * @param [params]
   * @param [params.productId Filter variants by product
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns {Object} JSON
   */
  getVariants(params?: GetVariantsOptions): Promise<VariantsResponse>
  /**
   * Get a variant
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getVariant` function
   * instead.
   *
   * @param {Object} params
   * @param {number} params.id
   * @param {Array<"product" | "files">} [params.include] List of record types to include
   *
   * @returns {Object} JSON
   */
  getVariant(p: GetVariantOptions): Promise<VariantResponse>
  /**
   * Get prices
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listPrices` function
   * instead.
   *
   * @param [params]
   * @param [params.variantId] Filter prices by variant
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A paginated list of price objects ordered by `created_at` (descending).
   */
  getPrices(params?: GetPricesOptions): Promise<unknown>
  /**
   * Get a price
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listPrices` function
   * instead.
   *
   * @param priceId The given price id.
   * @param [params]
   * @param [params.include] List of record types to include
   *
   * @returns A price object.
   */
  getPrice(p: GetPriceOptions): Promise<unknown>
  /**
   * Get files
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listFiles` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.variantId] (Optional) Only return files belonging to the variant with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of file objects ordered by `sort`.
   */
  getFiles(params?: GetFilesOptions): Promise<FilesResponse>
  /**
   * Retrieve a file.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getFile` function
   * instead.
   *
   * @param fileId The given file id
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A file object.
   */
  getFile(p: GetFileOptions): Promise<FileResponse>
  /**
   * Get orders.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listOrders` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.storeId] (Optional) Only return orders belonging to the store with this ID.
   * @param [params.filter.userEmail] (Optional) Only return orders where the `user_email` field is equal to this email address.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of order objects ordered by `created_at` (descending).
   */
  getOrders(params?: GetOrdersOptions): Promise<OrdersResponse>
  /**
   * Retrieve an order.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getOrder` function
   * instead.
   *
   * @param orderId The given order id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns An order object.
   */
  getOrder(p: GetOrderOptions): Promise<OrderResponse>
  /**
   * List all order items.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listOrderItems` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.orderId] (Optional) Only return order items belonging to the order with this ID.
   * @param [params.filter.productId] (Optional) Only return order items belonging to the product with this ID.
   * @param [params.filter.variantId] (Optional) Only return order items belonging to the variant with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of order item objects ordered by `id`.
   */
  getOrderItems(params?: GetOrderItemsOptions): Promise<unknown>
  /**
   * Retrieve an order item.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getOrderItem` function
   * instead.
   *
   * @param orderItemId The given order item id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns An order item object.
   */
  getOrderItem(p: GetOrderItemOptions): Promise<unknown>
  /**
   * Get all subscriptions.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listSubscriptions` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter.storeId] (Optional) Only return subscriptions belonging to the store with this ID.
   * @param [params.filter.orderId] (Optional) Only return subscriptions belonging to the order with this ID.
   * @param [params.filter.orderItemId] (Optional) Only return subscriptions belonging to the order item with this ID.
   * @param [params.filter.productId] (Optional) Only return subscriptions belonging to the product with this ID.
   * @param [params.filter.variantId] (Optional) Only return subscriptions belonging to the variant with this ID.
   * @param [params.filter.userEmail] (Optional) Only return subscriptions where the `user_email` field is equal to this email address.
   * @param [params.filter.status] (Optional) Only return subscriptions with this status.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of subscription objects ordered by `created_at` (descending).
   */
  getSubscriptions(
    params?: GetSubscriptionsOptions
  ): Promise<SubscriptionsResponse>
  /**
   * Retrieve a subscription.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getSubscription` function
   * instead.
   *
   * @param subscriptionId The given subscription id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A subscription object.
   */
  getSubscription(p: GetSubscriptionOptions): Promise<SubscriptionResponse>
  /**
   * Update a subscription's plan
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateSubscription` function
   * instead.
   *
   * @param params.id
   * @param [params.variantId] ID of variant (required if changing plans)
   * @param [params.productId] ID of product (required if changing plans)
   * @param [params.billingAnchor] Set the billing day (1–31) used for renewal charges
   * @param {"immediate" | "disable"} [params.proration] If not included, proration will occur at the next renewal date.
   *                                   Use 'immediate' to charge a prorated amount immediately.
   *                                   Use 'disable' to charge a full ammount immediately.
   *
   * @returns {Object} JSON
   */
  updateSubscription(
    p: UpdateSubscriptionOptions
  ): Promise<SubscriptionResponse>
  /**
   * Cancel a subscription.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `cancelSubscription` function
   * instead.
   *
   * @param subscriptionId The given subscription id
   * @returns The Subscription object in a cancelled state.
   */
  cancelSubscription(
    p: BaseUpdateSubscriptionOptions
  ): Promise<SubscriptionResponse>
  /**
   * Resume (un-cancel) a subscription
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateSubscription` function
   * instead.
   *
   * @param subscriptionId The given subscription id
   * @returns The Subscription object.
   */
  resumeSubscription(
    p: BaseUpdateSubscriptionOptions
  ): Promise<SubscriptionResponse>
  /**
   * Pause a subscription
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateSubscription` function
   * instead.
   *
   * @param subscriptionId The given subscription id
   * @param [params] (Optional) Additional parameters.
   * @param [params.mode] Pause mode: "void" (default) or "free"
   * @param [params.resumesAt] Date to automatically resume the subscription (ISO 8601 format)
   *
   * @returns {Object} JSON
   */
  pauseSubscription(p: PauseSubscriptionOptions): Promise<SubscriptionResponse>
  /**
   * Unpause a subscription.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateSubscription` function
   * instead.
   *
   * @param subscriptionId The given subscription id
   * @returns The Subscription object.
   */
  unpauseSubscription(
    p: BaseUpdateSubscriptionOptions
  ): Promise<SubscriptionResponse>
  /**
   * Get subscription invoices
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listSubscriptionInvoices` function
   * instead.
   *
   * @param [params]
   * @param [params.storeId] Filter subscription invoices by store
   * @param [params.status] Filter subscription invoices by status
   * @param [params.refunded] Filter subscription invoices by refunded
   * @param [params.subscriptionId] Filter subscription invoices by subscription
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A paginated list of subscription invoice objects ordered by `created_at` (descending).
   */
  getSubscriptionInvoices(
    params?: GetSubscriptionInvoicesOptions
  ): Promise<SubscriptionInvoicesResponse>
  /**
   * Retrieve a subscription invoice.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getSubscriptionInvoice` function
   * instead.
   *
   * @param subscriptionInvoiceId The given subscription invoice id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A subscription invoice object.
   */
  getSubscriptionInvoice(
    p: GetSubscriptionInvoiceOptions
  ): Promise<SubscriptionInvoiceResponse>
  /**
   * List all subscription items.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listSubscriptionItems` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.subscriptionId] (Optional) Only return subscription items belonging to a subscription with this ID.
   * @param [params.filter.priceId] (Optional) Only return subscription items belonging to a price with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of subscription item objects ordered by `created_at` (descending).
   */
  getSubscriptionItems(
    params?: GetSubscriptionItemsOptions
  ): Promise<SubscriptionItemResponse>
  /**
   * Retrieve a subscription item.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getSubscriptionItem` function
   * instead.
   *
   * @param subscriptionItemId The given subscription item id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A subscription item object.
   */
  getSubscriptionItem(
    p: GetSubscriptionItemOptions
  ): Promise<SubscriptionItemResponse>
  /**
   * Update a subscription item.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateSubscriptionItem` function
   * instead.
   *
   * Note: this endpoint is only used with quantity-based billing.
   * If the related subscription's product/variant has usage-based billing
   * enabled, this endpoint will return a `422 Unprocessable Entity` response.
   *
   * @param subscriptionItemId The given subscription item id.
   * @param quantity The unit quantity of the subscription.
   * @returns A subscription item object.
   */
  updateSubscriptionItem(
    p: UpdateSubscriptionItemOptions
  ): Promise<SubscriptionItemResponse>
  /**
   * Retrieve a subscription item's current usage.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getSubscriptionItemCurrentUsage` function
   * instead.
   *
   * Note: this endpoint is only for subscriptions with usage-based billing
   * enabled. It will return a `404 Not Found` response if the related
   * subscription product/variant does not have usage-based billing enabled.
   *
   * @param subscriptionItemId The given subscription item id.
   * @returns A meta object containing usage information.
   */
  getSubscriptionItemUsage(
    p: GetSubscriptionItemUsageOptions
  ): Promise<SubscriptionItemUsageResponse>
  /**
   * Get all usage records.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listUsageRecords` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.subscriptionItemId] (Optional) Only return usage records belonging to the subscription item with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of usage record objects ordered by `created_at` (descending).
   */
  getUsageRecords(
    params?: GetUsageRecordsOptions
  ): Promise<UsageRecordsResponse>
  /**
   * Retrieve a usage record.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getUsageRecord` function
   * instead.
   *
   * @param params.id The usage record id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A usage record object.
   */
  getUsageRecord(p: GetUsageRecordOptions): Promise<UsageRecordResponse>
  /**
   * Create a usage record
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `createUsageRecord` function
   * instead.
   *
   * @param params
   * @param params.subscriptionItemId The ID of the subscription item to report usage for
   * @param params.quantity The number of units to report
   * @param [params.action] Type of record
   *
   * @returns A usage record object.
   */
  createUsageRecord(p: CreateUsageRecordOptions): Promise<UsageRecordResponse>
  /**
   * List all discounts.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listDiscounts` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.storeId] (Optional) Only return discounts belonging to the store with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of discount objects ordered by `created_at`.
   */
  getDiscounts(params?: GetDiscountsOptions): Promise<DiscountsResponse>
  /**
   * Retrieve a discount.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getDiscount` function
   * instead.
   *
   * @param params.id The usage record id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A discount object.
   */
  getDiscount(p: GetDiscountOptions): Promise<DiscountResponse>
  /**
   * Create a discount
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `createDiscount` function
   * instead.
   *
   * @param params
   * @param params.storeId Store to create a discount in
   * @param params.name Name of discount
   * @param params.code Discount code (uppercase letters and numbers, between 3 and 256 characters)
   * @param params.amount Amount the discount is for
   * @param params.amountType Type of discount
   * @param [params.duration] Duration of discount
   * @param [params.durationInMonths] Number of months to repeat the discount for
   * @param [params.variantIds] Limit the discount to certain variants
   * @param [params.maxRedemptions] The total number of redemptions allowed
   * @param [params.startsAt] Date the discount code starts on (ISO 8601 format)
   * @param [params.expiresAt] Date the discount code expires on (ISO 8601 format)
   *
   * @returns A discount object.
   */
  createDiscount(p: CreateDiscountOptions): Promise<DiscountResponse>
  /**
   * Delete a discount.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `deleteDiscount` function
   * instead.
   *
   * @param params.id The given discount id.
   * @returns A `204 No Content` response on success.
   */
  deleteDiscount(p: DeleteDiscountOptions): Promise<void>
  /**
   * List all discount redemptions.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listDiscountRedemption` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.discountId] (Optional) Only return discount redemptions belonging to the discount with this ID.
   * @param [params.filter.orderId] (Optional) Only return discount redemptions belonging to the order with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of discount redemption objects ordered by `created_at` (descending).
   */
  getDiscountRedemptions(
    params?: GetDiscountRedemptionsOptions
  ): Promise<DiscountRedemptionsResponse>
  /**
   * Retrieve a discount redemption.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getDiscountRedemption` function
   * instead.
   *
   * @param discountRedemptionId The given discount redemption id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A discount redemption object.
   */
  getDiscountRedemption(
    p: GetDiscountRedemptionOptions
  ): Promise<DiscountRedemptionResponse>
  /**
   * List all license keys.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listLicenseKeys` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.storeId] (Optional) Only return license keys belonging to the store with this ID.
   * @param [params.filter.orderId] (Optional) (Optional) Only return license keys belonging to the order with this ID.
   * @param [params.filter.orderItemId] (Optional) Only return license keys belonging to the order item with this ID.
   * @param [params.filter.productId] (Optional) Only return license keys belonging to the product with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of license key objects ordered by `id`.
   */
  getLicenseKeys(params?: GetLicenseKeysOptions): Promise<LicenseKeysResponse>
  /**
   * Retrieve a license key.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getLicenseKey` function
   * instead.
   *
   * @param params parameters.
   * @param params.id The license key id.
   * @param [params.include] (Optional) Related resources.
   * @returns A license key object.
   */
  getLicenseKey(p: GetLicenseKeyOptions): Promise<LicenseKeyResponse>
  /**
   * Get license key instances
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listLicenseKeyInstances` function
   * instead.
   *
   * @param {Object} [params]
   * @param {number} [params.licenseKeyId] Filter license keys instances by license key
   * @param {number} [params.perPage] Number of records to return (between 1 and 100)
   * @param {number} [params.page] Page of records to return
   * @param {Array<"license-key">} [params.include] List of record types to include
   *
   * @returns {Object} JSON
   */
  getLicenseKeyInstances(
    params?: GetLicenseKeyInstancesOptions
  ): Promise<LicenseKeyInstancesResponse>
  /**
   * Retrieve a license key instance.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getLicenseKeyInstance` function
   * instead.
   *
   * @param params.id The given license key instance id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A license key instance object.
   */
  getLicenseKeyInstance({
    id,
    ...params
  }: GetLicenseKeyInstanceOptions): Promise<LicenseKeyInstanceResponse>
  /**
   * List all checkouts.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listCheckouts` function
   * instead.
   *
   * @param [params] (Optional) Additional parameters.
   * @param [params.filter] (Optional) Filter parameters.
   * @param [params.filter.storeId] (Optional) Only return products belonging to the store with this ID.
   * @param [params.filter.variantId] (Optional) Only return products belonging to the variant with this ID.
   * @param [params.page] (Optional) Custom paginated queries.
   * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
   * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
   * @param [params.include] (Optional) Related resources.
   * @returns A paginated list of checkout objects ordered by `created_at` (descending).
   */
  getCheckouts(params?: GetCheckoutsOptions): Promise<CheckoutsResponse>
  /**
   * Retrieve a checkout.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getCheckout` function
   * instead.
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getCheckout` function
   * instead.
   *
   * @param params.id (Required) The checkout id.
   * @param [params] (Optional) Additional parameters.
   * @param [params.include] (Optional) Related resources.
   * @returns A checkout object.
   */
  getCheckout(p: GetCheckoutOptions): Promise<CheckoutResponse>
  /**
   * Create a checkout
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `createCheckout` function
   * instead.
   *
   * @param params
   * @param params.storeId
   * @param params.variantId
   * @param [params.attributes] An object of values used to configure the checkout
   *
   * @see https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
   *
   * @returns {Object} JSON
   */
  createCheckout(p: CreateCheckoutOptions): Promise<CheckoutResponse>
  /**
   * Get webhooks
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `listWebhooks` function
   * instead.
   *
   * @param [params]
   * @param [params.storeId] Filter webhooks by store
   * @param [params.perPage] Number of records to return (between 1 and 100)
   * @param [params.page] Page of records to return
   * @param [params.include] List of record types to include
   *
   * @returns A webhook object.
   */
  getWebhooks(params?: GetWebhooksOptions): Promise<WebhooksResponse>
  /**
   * Get a webhook
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `getWebhook` function
   * instead.
   *
   * @param params
   * @param params.id
   * @param [params.include] List of record types to include
   *
   * @returns A webhook object.
   */
  getWebhook(p: GetWebhookOptions): Promise<WebhookResponse>
  /**
   * Create a webhook
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `createWebhook` function
   * instead.
   *
   * @param params
   * @param params.storeId ID of the store the webhook is for
   * @param params.url Endpoint URL that the webhooks should be sent to
   * @param params.events List of webhook events to receive
   * @param params.secret Signing secret (between 6 and 40 characters)
   *
   * @returns A webhook object.
   */
  createWebhook(p: CreateWebhookOptions): Promise<WebhookResponse>
  /**
   * Update a webhook
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `updateWebhook` function
   * instead.
   *
   * @param params
   * @param params.id
   * @param [params.url] Endpoint URL that the webhooks should be sent to
   * @param [params.events] List of webhook events to receive
   * @param [params.secret] Signing secret (between 6 and 40 characters)
   *
   * @returns A webhook object.
   */
  updateWebhook(p: UpdateWebhookOptions): Promise<WebhookResponse>
  /**
   * Delete a webhook
   *
   * @deprecated Deprecated since version 2.0.0. It will be removed with the
   * next major version. Use the new setup method and `deleteWebhook` function
   * instead.
   *
   * @param params
   * @param params.id
   */
  deleteWebhook(p: DeleteWebhookOptions): Promise<null>
}

export type Config = {
  /**
   * `Lemon Squeezy` API Key
   */
  apiKey?: string
  /**
   * Fires after a fetch response error
   *
   * @param error Error
   * @returns void
   */
  onError?: (error: Error) => void
}

/**
 * Lemon squeezy setup.
 *
 * @param config The config.
 * @returns User configuration.
 */
declare function lemonSqueezySetup(config: Config): Config

export type FetchResponse<T> = {
  statusCode: number | null
  data: T | null
  error: Error | null
}

export type Data<A, R = unknown> = {
  /**
   * The export type of the resource (e.g. `products`, `orders`, etc.)
   */
  type: string
  /**
   * The id of the resource
   */
  id: string
  /**
   * An object representing the resources data
   */
  attributes: A
  relationships: R
  /**
   * API Url
   */
  links: {
    self: string
  }
}

export type Links = {
  self: string
  first: string
  last: string
  next?: string
  prev?: string
}

export type MetaPage = {
  currentPage: number
  from: number
  lastPage: number
  perPage: number
  to: number
  total: number
}
export type Meta$1 = {
  test_mode: boolean
  page: MetaPage
  period_start: string
  period_end: string
  quantity: number
  interval_unit: IntervalUnit
  interval_quantity: number
}

export type Page = {
  number?: number
  size?: number
}
export type Params<I = string[], F = Record<string, unknown>> = Partial<{
  include: I
  filter: F
  page: Page
}>

export type Types =
  | 'stores'
  | 'customers'
  | 'products'
  | 'variants'
  | 'prices'
  | 'files'
  | 'orders'
  | 'order-items'
  | 'subscriptions'
  | 'subscription-invoices'
  | 'subscription-items'
  | 'usage-records'
  | 'discounts'
  | 'discount-redemptions'
  | 'license-keys'
  | 'license-key-instances'
  | 'checkouts'
  | 'webhooks'
export type RelationshipKeys =
  | 'store'
  | 'product'
  | 'variant'
  | 'customer'
  | 'order'
  | 'order-item'
  | 'subscription'
  | 'price'
  | 'price-model'
  | 'subscription-item'
  | 'discount'
  | 'license-key'
  | Types
export type RelationshipLinks = {
  links: {
    related: string
    self: string
  }
  data?: {
    id: string
    type: Types
  }[]
}
export type Relationships = Record<RelationshipKeys, RelationshipLinks>

export type LemonSqueezyResponse<
  D,
  M = unknown,
  L = unknown,
  I = Data<Record<string, unknown>>[]
> = {
  jsonapi: {
    version: string
  }
  links: L
  meta: M
  data: D
  included?: I
}

export type Flatten<T> = T extends object
  ? T extends Array<infer U>
    ? Flatten<U>[]
    : {
        [P in keyof T]: Flatten<T[P]>
      }
  : T
export type IntervalUnit = 'day' | 'week' | 'month' | 'year'

/**
 * ISO 3166-1 alpha-2
 *
 * https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2#Officially_assigned_code_elements
 */
export type ISO3166Alpha2CountryCode =
  | 'AD'
  | 'AE'
  | 'AF'
  | 'AG'
  | 'AI'
  | 'AL'
  | 'AM'
  | 'AO'
  | 'AQ'
  | 'AR'
  | 'AS'
  | 'AT'
  | 'AU'
  | 'AW'
  | 'AX'
  | 'AZ'
  | 'BA'
  | 'BB'
  | 'BD'
  | 'BE'
  | 'BF'
  | 'BG'
  | 'BH'
  | 'BI'
  | 'BJ'
  | 'BL'
  | 'BM'
  | 'BN'
  | 'BO'
  | 'BQ'
  | 'BR'
  | 'BS'
  | 'BT'
  | 'BV'
  | 'BW'
  | 'BY'
  | 'BZ'
  | 'CA'
  | 'CC'
  | 'CD'
  | 'CF'
  | 'CG'
  | 'CH'
  | 'CI'
  | 'CK'
  | 'CL'
  | 'CM'
  | 'CN'
  | 'CO'
  | 'CR'
  | 'CU'
  | 'CV'
  | 'CW'
  | 'CX'
  | 'CY'
  | 'CZ'
  | 'DE'
  | 'DJ'
  | 'DK'
  | 'DM'
  | 'DO'
  | 'DZ'
  | 'EC'
  | 'EE'
  | 'EG'
  | 'EH'
  | 'ER'
  | 'ES'
  | 'ET'
  | 'FI'
  | 'FJ'
  | 'FK'
  | 'FM'
  | 'FO'
  | 'FR'
  | 'GA'
  | 'GB'
  | 'GD'
  | 'GE'
  | 'GF'
  | 'GG'
  | 'GH'
  | 'GI'
  | 'GL'
  | 'GM'
  | 'GN'
  | 'GP'
  | 'GQ'
  | 'GR'
  | 'GS'
  | 'GT'
  | 'GU'
  | 'GW'
  | 'GY'
  | 'HK'
  | 'HM'
  | 'HN'
  | 'HR'
  | 'HT'
  | 'HU'
  | 'ID'
  | 'IE'
  | 'IL'
  | 'IM'
  | 'IN'
  | 'IO'
  | 'IQ'
  | 'IR'
  | 'IS'
  | 'IT'
  | 'JE'
  | 'JM'
  | 'JO'
  | 'JP'
  | 'KE'
  | 'KG'
  | 'KH'
  | 'KI'
  | 'KM'
  | 'KN'
  | 'KP'
  | 'KR'
  | 'KW'
  | 'KY'
  | 'KZ'
  | 'LA'
  | 'LB'
  | 'LC'
  | 'LI'
  | 'LK'
  | 'LR'
  | 'LS'
  | 'LT'
  | 'LU'
  | 'LV'
  | 'LY'
  | 'MA'
  | 'MC'
  | 'MD'
  | 'ME'
  | 'MF'
  | 'MG'
  | 'MH'
  | 'MK'
  | 'ML'
  | 'MM'
  | 'MN'
  | 'MO'
  | 'MP'
  | 'MQ'
  | 'MR'
  | 'MS'
  | 'MT'
  | 'MU'
  | 'MV'
  | 'MW'
  | 'MX'
  | 'MY'
  | 'MZ'
  | 'NA'
  | 'NC'
  | 'NE'
  | 'NF'
  | 'NG'
  | 'NI'
  | 'NL'
  | 'NO'
  | 'NP'
  | 'NR'
  | 'NU'
  | 'NZ'
  | 'OM'
  | 'PA'
  | 'PE'
  | 'PF'
  | 'PG'
  | 'PH'
  | 'PK'
  | 'PL'
  | 'PM'
  | 'PN'
  | 'PR'
  | 'PS'
  | 'PT'
  | 'PW'
  | 'PY'
  | 'QA'
  | 'RE'
  | 'RO'
  | 'RS'
  | 'RU'
  | 'RW'
  | 'SA'
  | 'SB'
  | 'SC'
  | 'SD'
  | 'SE'
  | 'SG'
  | 'SH'
  | 'SI'
  | 'SJ'
  | 'SK'
  | 'SL'
  | 'SM'
  | 'SN'
  | 'SO'
  | 'SR'
  | 'SS'
  | 'ST'
  | 'SV'
  | 'SX'
  | 'SY'
  | 'SZ'
  | 'TC'
  | 'TD'
  | 'TF'
  | 'TG'
  | 'TH'
  | 'TJ'
  | 'TK'
  | 'TL'
  | 'TM'
  | 'TN'
  | 'TO'
  | 'TR'
  | 'TT'
  | 'TV'
  | 'TW'
  | 'TZ'
  | 'UA'
  | 'UG'
  | 'UM'
  | 'US'
  | 'UY'
  | 'UZ'
  | 'VA'
  | 'VC'
  | 'VE'
  | 'VG'
  | 'VI'
  | 'VN'
  | 'VU'
  | 'WF'
  | 'WS'
  | 'YE'
  | 'YT'
  | 'ZA'
  | 'ZM'
  | 'ZW'
/**
 * ISO 4217 Currency Code
 *
 * https://en.wikipedia.org/wiki/ISO_4217#Active_codes_(list_one)
 */
export type ISO4217CurrencyCode =
  | 'AED'
  | 'AFN'
  | 'ALL'
  | 'AMD'
  | 'ANG'
  | 'AOA'
  | 'ARS'
  | 'AUD'
  | 'AWG'
  | 'AZN'
  | 'BAM'
  | 'BBD'
  | 'BDT'
  | 'BGN'
  | 'BHD'
  | 'BIF'
  | 'BMD'
  | 'BND'
  | 'BOB'
  | 'BOV'
  | 'BRL'
  | 'BSD'
  | 'BTN'
  | 'BWP'
  | 'BYN'
  | 'BZD'
  | 'CAD'
  | 'CDF'
  | 'CHE'
  | 'CHF'
  | 'CHW'
  | 'CLF'
  | 'CLP'
  | 'CNY'
  | 'COP'
  | 'COU'
  | 'CRC'
  | 'CUP'
  | 'CVE'
  | 'CZK'
  | 'DJF'
  | 'DKK'
  | 'DOP'
  | 'DZD'
  | 'EGP'
  | 'ERN'
  | 'ETB'
  | 'EUR'
  | 'FJD'
  | 'FKP'
  | 'GBP'
  | 'GEL'
  | 'GHS'
  | 'GIP'
  | 'GMD'
  | 'GNF'
  | 'GTQ'
  | 'GYD'
  | 'HKD'
  | 'HNL'
  | 'HTG'
  | 'HUF'
  | 'IDR'
  | 'ILS'
  | 'INR'
  | 'IQD'
  | 'IRR'
  | 'ISK'
  | 'JMD'
  | 'JOD'
  | 'JPY'
  | 'KES'
  | 'KGS'
  | 'KHR'
  | 'KMF'
  | 'KPW'
  | 'KRW'
  | 'KWD'
  | 'KYD'
  | 'KZT'
  | 'LAK'
  | 'LBP'
  | 'LKR'
  | 'LRD'
  | 'LSL'
  | 'LYD'
  | 'MAD'
  | 'MDL'
  | 'MGA'
  | 'MKD'
  | 'MMK'
  | 'MNT'
  | 'MOP'
  | 'MRU'
  | 'MUR'
  | 'MVR'
  | 'MWK'
  | 'MXN'
  | 'MXV'
  | 'MYR'
  | 'MZN'
  | 'NAD'
  | 'NGN'
  | 'NIO'
  | 'NOK'
  | 'NPR'
  | 'NZD'
  | 'OMR'
  | 'PAB'
  | 'PEN'
  | 'PGK'
  | 'PHP'
  | 'PKR'
  | 'PLN'
  | 'PYG'
  | 'QAR'
  | 'RON'
  | 'RSD'
  | 'RUB'
  | 'RWF'
  | 'SAR'
  | 'SBD'
  | 'SCR'
  | 'SDG'
  | 'SEK'
  | 'SGD'
  | 'SHP'
  | 'SLL'
  | 'SOS'
  | 'SRD'
  | 'SSP'
  | 'STN'
  | 'SYP'
  | 'SZL'
  | 'THB'
  | 'TJS'
  | 'TMT'
  | 'TND'
  | 'TOP'
  | 'TRY'
  | 'TTD'
  | 'TWD'
  | 'TZS'
  | 'UAH'
  | 'UGX'
  | 'USD'
  | 'USN'
  | 'UYI'
  | 'UYU'
  | 'UZS'
  | 'VES'
  | 'VND'
  | 'VUV'
  | 'WST'
  | 'XAF'
  | 'XAG'
  | 'XAU'
  | 'XBA'
  | 'XBB'
  | 'XBC'
  | 'XBD'
  | 'XCD'
  | 'XDR'
  | 'XFU'
  | 'XOF'
  | 'XPD'
  | 'XPF'
  | 'XPT'
  | 'XSU'
  | 'XTS'
  | 'XUA'
  | 'XXX'
  | 'YER'
  | 'ZAR'
  | 'ZMW'

export type Attributes$i = {
  /**
   * The name of the user.
   */
  name: string
  /**
   * The email address of the user.
   */
  email: string
  /**
   * A randomly generated hex color code for the user. We use this internally as the background color of an avatar if the user has not uploaded a custom avatar.
   */
  color: string
  /**
   * A URL to the avatar image for this user. If the user has not uploaded a custom avatar, this will point to their Gravatar URL.
   */
  avatar_url: string
  /**
   * Has the value `true` if the user has uploaded a custom avatar image.
   */
  has_custom_avatar: boolean
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   * e.g. "2021-05-24T14:08:31.000000Z"
   */
  createdAt: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   * e.g. "2021-08-26T13:24:54.000000Z"
   */
  updatedAt: string
}
export type User = LemonSqueezyResponse<
  Omit<Data<Attributes$i>, 'relationships'>,
  Pick<Meta$1, 'test_mode'>,
  Pick<Links, 'self'>
>

/**
 * Retrieve the authenticated user.
 *
 * @returns A user object.
 */
declare function getAuthenticatedUser(): Promise<FetchResponse<User>>

export type Attributes$h = {
  /**
   * The name of the store.
   */
  name: string
  /**
   * The slug used to identify the store.
   */
  slug: string
  /**
   * The domain of the store, either in the format `{slug}.lemonsqueezy.com` or a [custom domain](https://docs.lemonsqueezy.com/help/domains/adding-a-custom-domain).
   */
  domain: string
  /**
   * The fully-qualified URL for the store (e.g. `https://{slug}.lemonsqueezy.com` or `https://customdomain.com` when a [custom domain](https://docs.lemonsqueezy.com/help/domains/adding-a-custom-domain) is set up).
   */
  url: string
  /**
   * The URL for the store avatar.
   */
  avatar_url: string
  /**
   * The current billing plan for the store (e.g. `fresh`, `sweet`).
   */
  plan: string
  /**
   * The [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) two-letter country code for the store (e.g.`US`, `GB`, etc).
   */
  country: ISO3166Alpha2CountryCode
  /**
   * The full country name for the store (e.g. `United States`, `United Kingdom`, etc).
   */
  country_nicename: string
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the store (e.g. `USD`, `GBP`, etc).
   */
  currency: ISO4217CurrencyCode
  /**
   * A count of the all-time total sales made by this store.
   */
  total_sales: number
  /**
   * A positive integer in cents representing the total all-time revenue of the store in USD.
   */
  total_revenue: number
  /**
   * A count of the sales made by this store in the last 30 days.
   */
  thirty_day_sales: number
  /**
   * A positive integer in cents representing the total revenue of the store in USD in the last 30 days.
   */
  thirty_day_revenue: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
}
export type StoreData = Data<
  Attributes$h,
  Pick<
    Relationships,
    | 'products'
    | 'orders'
    | 'subscriptions'
    | 'discounts'
    | 'license-keys'
    | 'webhooks'
  >
>
export type Store = Omit<
  LemonSqueezyResponse<StoreData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListStores = LemonSqueezyResponse<
  StoreData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'last' | 'first'>
>
export type GetStoreParams = Pick<
  Params<(keyof StoreData['relationships'])[]>,
  'include'
>
export type ListStoresParams = Omit<Params<GetStoreParams['include']>, 'filter'>

/**
 * Retrieve a store.
 *
 * @param storeId (Required) The given store id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A store object.
 */
declare function getStore(
  storeId: number | string,
  params?: GetStoreParams
): Promise<FetchResponse<Store>>
/**
 * List all stores.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of `store` objects ordered by name.
 */
declare function listStores(
  params?: ListStoresParams
): Promise<FetchResponse<ListStores>>

export type MarketingStatus =
  | 'subscribed'
  | 'unsubscribed'
  | 'archived'
  | 'requires_verification'
  | 'invalid_email'
  | 'bounced'
export type Attributes$g = {
  /**
   * The ID of the store this customer belongs to.
   */
  store_id: number
  /**
   * The full name of the customer.
   */
  name: string
  /**
   * The email address of the customer.
   */
  email: string
  /**
   * The email marketing status of the customer. One of
   *
   * - `subscribed` - This customer is subscribed to marketing emails.
   * - `unsubscribed` - This customer has unsubscribed from marketing emails.
   * - `archived` - This customer has been archived and will no longer receive marketing emails.
   * - `requires_verification` - The customers email address need to be verified (happens automatically).
   * - `invalid_email` - The customers email address has failed validation.
   * - `bounced` - The customers email has hard bounced.
   */
  status: MarketingStatus
  /**
   * The city of the customer.
   */
  city: string | null
  /**
   * The region of the customer.
   */
  region: string | null
  /**
   * The country of the customer.
   */
  country: ISO3166Alpha2CountryCode | null
  /**
   * A positive integer in cents representing the total revenue from the customer (USD).
   */
  total_revenue_currency: number
  /**
   * A positive integer in cents representing the monthly recurring revenue from the customer (USD).
   */
  mrr: number
  /**
   * The formatted status of the customer.
   */
  status_formatted: string
  /**
   * The formatted country of the customer.
   */
  country_formatted: string | null
  /**
   * A human-readable string representing the total revenue from the customer (e.g. `$9.99`).
   */
  total_revenue_currency_formatted: string
  /**
   * A human-readable string representing the monthly recurring revenue from the customer (e.g. `$9.99`).
   */
  mrr_formatted: string
  /**
   * An object of customer-facing URLs. It contains:
   *
   * - `customer_portal` - A pre-signed URL to the [Customer Portal](https://docs.lemonsqueezy.com/help/online-store/customer-portal), which allows customers to fully manage their subscriptions and billing information from within your application. The URL is valid for 24 hours from time of request. Will be `null` if the customer has not bought a subscription in your store.
   */
  urls: {
    customer_portal: string | null
  }
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type CustomerData = Data<
  Attributes$g,
  Pick<Relationships, 'store' | 'orders' | 'subscriptions' | 'license-keys'>
>
export type GetCustomerParams = Pick<
  Params<(keyof CustomerData['relationships'])[]>,
  'include'
>
export type ListCustomersParams = Params<
  GetCustomerParams['include'],
  {
    storeId?: string | number
    email?: string
  }
>
export type NewCustomer = Pick<Attributes$g, 'name' | 'email'> &
  Partial<Pick<Attributes$g, 'city' | 'country' | 'region'>>
export type UpdateCustomer = Partial<
  NewCustomer & {
    status: 'archived'
  }
>
export type Customer = Omit<
  LemonSqueezyResponse<CustomerData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListCustomers = LemonSqueezyResponse<
  CustomerData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'last' | 'first'>
>

/**
 * Create a customer.
 *
 * @param storeId (Required)The Store ID.
 * @param customer (Required) The new customer information.
 * @param customer.name (Required) The name of the customer.
 * @param customer.email (Required) The email of the customer.
 * @param customer.city (Optional) The city of the customer.
 * @param customer.region (Optional) The region of the customer.
 * @param customer.country (Optional) The [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) two-letter country code for the customer (e.g. `US`, `GB`, etc).
 * @returns A customer object.
 */
declare function createCustomer(
  storeId: number | string,
  customer: NewCustomer
): Promise<FetchResponse<Customer>>
/**
 * Update a customer.
 *
 * @param customerId The customer id.
 * @param customer The customer information that needs to be updated.
 * @param customer.name (Optional) The name of the customer.
 * @param customer.email (Optional) The email of the customer.
 * @param customer.city (Optional) The city of the customer.
 * @param customer.region (Optional) The region of the customer.
 * @param customer.country (Optional) The [ISO 3166-1](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) two-letter country code for the customer (e.g. `US`, `GB`, etc).
 * @param customer.status (Optional) The email marketing status of the customer. Only one value: `archived`.
 * @returns A customer object.
 */
declare function updateCustomer(
  customerId: string | number,
  customer: UpdateCustomer
): Promise<FetchResponse<Customer>>
/**
 * Archive a customer.
 *
 * @param customerId The customer id.
 * @returns A customer object.
 */
declare function archiveCustomer(
  customerId: string | number
): Promise<FetchResponse<Customer>>
/**
 * Retrieve a customer.
 *
 * @param customerId The given customer id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A customer object.
 */
declare function getCustomer(
  customerId: string | number,
  params?: GetCustomerParams
): Promise<FetchResponse<Customer>>
/**
 * List all customers.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return customers belonging to the store with this ID.
 * @param [params.filter.email] (Optional) Only return customers where the email field is equal to this email address.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of customer objects ordered by `created_at` (descending).
 */
declare function listCustomers(
  params?: ListCustomersParams
): Promise<FetchResponse<ListCustomers>>

export type Attributes$f = {
  /**
   * The ID of the store this product belongs to.
   */
  store_id: number
  /**
   * The name of the product.
   */
  name: string
  /**
   * The slug used to identify the product.
   */
  slug: string
  /**
   * The description of the product in HTML.
   */
  description: string
  /**
   * The status of the product. Either `draft` or `published`.
   */
  status: 'published' | 'draft'
  /**
   * The formatted status of the product.
   */
  status_formatted: string
  /**
   * A URL to the thumbnail image for this product (if one exists). The image will be 100x100px in size.
   */
  thumb_url: string
  /**
   * A URL to the large thumbnail image for this product (if one exists). The image will be 1000x1000px in size.
   */
  large_thumb_url: string
  /**
   * A positive integer in cents representing the price of the product.
   */
  price: number
  /**
   * A human-readable string representing the price of the product (e.g. `$9.99`).
   */
  price_formatted: string
  /**
   * If this product has multiple variants, this will be a positive integer in cents representing the price of the cheapest variant. Otherwise, it will be `null`.
   */
  from_price: number | null
  /**
   * If this product has multiple variants, this will be a positive integer in cents representing the price of the most expensive variant. Otherwise, it will be `null`.
   */
  to_price: number | null
  /**
   * Has the value `true` if this is a “pay what you want” product where the price can be set by the customer at checkout.
   */
  pay_what_you_want: boolean
  /**
   * A URL to purchase this product using the Lemon Squeezy checkout.
   */
  buy_now_url: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type ProductData = Data<
  Attributes$f,
  Pick<Relationships, 'store' | 'variants'>
>
export type GetProductParams = Pick<
  Params<(keyof ProductData['relationships'])[]>,
  'include'
>
export type ListProductsParams = Params<
  GetProductParams['include'],
  {
    storeId?: string | number
  }
>
export type Product = Omit<
  LemonSqueezyResponse<ProductData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListProducts = LemonSqueezyResponse<
  ProductData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a product.
 *
 * @param productId The given product id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A product object.
 */
declare function getProduct(
  productId: number | string,
  params?: GetProductParams
): Promise<FetchResponse<Product>>
/**
 * List all products.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return products belonging to the store with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of product objects ordered by `name`.
 */
declare function listProducts(
  params?: ListProductsParams
): Promise<FetchResponse<ListProducts>>

export type VariantStatus = 'pending' | 'draft' | 'published'
export type DeprecatedAttributes = {
  /**
   * `Deprecated` A positive integer in cents representing the price of the variant.
   */
  price: number
  /**
   * `Deprecated` Has the value true if this variant is a subscription.
   */
  is_subscription: boolean
  /**
   * `Deprecated` If this variant is a subscription, this is the frequency at which a subscription is billed. One of
   *
   * - `day`
   * - `week`
   * - `month`
   * - `year`
   */
  interval: null | IntervalUnit
  /**
   * `Deprecated` If this variant is a subscription, this is the number of intervals (specified in the `interval` attribute) between subscription billings. For example, `interval=month` and `interval_count=3` bills every 3 months.
   */
  interval_count: null | number
  /**
   * `Deprecated` Has the value `true` if this variant has a free trial period. Only available if the variant is a subscription.
   */
  has_free_trial: boolean
  /**
   * `Deprecated` The interval unit of the free trial. One of
   *
   * - `day`
   * - `week`
   * - `month`
   * - `year`
   */
  trial_interval: IntervalUnit
  /**
   * `Deprecated` If interval count of the free trial. For example, a variant with `trial_interval=day` and `trial_interval_count=14` would have a free trial that lasts 14 days.
   */
  trial_interval_count: number
  /**
   * `Deprecated` Has the value true if this is a “pay what you want” variant where the price can be set by the customer at checkout.
   */
  pay_what_you_want: boolean
  /**
   * `Deprecated` If `pay_what_you_want` is `true`, this is the minimum price this variant can be purchased for, as a positive integer in cents.
   */
  min_price: number
  /**
   * `Deprecated` If `pay_what_you_want` is `true`, this is the suggested price for this variant shown at checkout, as a positive integer in cents.
   */
  suggested_price: number
}
export type Attributes$e = {
  /**
   * The ID of the product this variant belongs to.
   */
  product_id: number
  /**
   * The name of the variant.
   */
  name: string
  /**
   * The slug used to identify the variant.
   */
  slug: string
  /**
   * The description of the variant in HTML.
   */
  description: string
  /**
   * Has the value `true` if this variant should generate license keys for the customer on purchase.
   */
  has_license_keys: boolean
  /**
   * The maximum number of times a license key can be activated for this variant.
   */
  license_activation_limit: number
  /**
   * Has the value `true` if license key activations are unlimited for this variant.
   */
  is_license_limit_unlimited: boolean
  /**
   * The number of units (specified in the `license_length_unit` attribute) until a license key expires.
   */
  license_length_value: number
  /**
   * The unit linked with the `license_length_value` attribute. One of
   *
   * - `days`
   * - `months`
   * - `years`
   *
   * For example, `license_length_value=3` and `license_length_unit=months` license keys will expire after 3 months.
   */
  license_length_unit: 'days' | 'months' | 'years'
  /**
   * Has the value `true` if license keys should never expire.
   *
   * Note: If the variant is a subscription, the license key expiration will be linked to the status of the subscription (e.g. the license will expire when the subscription expires).
   */
  is_license_length_unlimited: boolean
  /**
   * An integer representing the order of this variant when displayed on the checkout.
   */
  sort: number
  /**
   * The status of the variant. One of
   *
   * - `pending`
   * - `draft`
   * - `published`
   *
   * Note: If a variant has a `pending` status and its product has no other variants, it is considered the “default” variant and is not shown as a separate option at checkout.
   */
  status: VariantStatus
  /**
   * The formatted status of the variant.
   */
  status_formatted: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type VariantData = Data<
  Attributes$e & DeprecatedAttributes,
  Pick<Relationships, 'product' | 'files' | 'price-model'>
>
export type GetVariantParams = Pick<
  Params<(keyof VariantData['relationships'])[]>,
  'include'
>
export type ListVariantsParams = Params<
  GetVariantParams['include'],
  {
    productId?: number | string
    status?: VariantStatus
  }
>
export type Variant = Omit<
  LemonSqueezyResponse<VariantData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListVariants = LemonSqueezyResponse<
  VariantData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a variant.
 *
 * @param variantId The given variant id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A variant object.
 */
declare function getVariant(
  variantId: number | string,
  params?: GetVariantParams
): Promise<FetchResponse<Variant>>
/**
 * List all variants
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.productId] (Optional) Only return variants belonging to the product with this ID.
 * @param [params.filter.status] (Optional) Only return variants with this status.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of variant objects ordered by `sort`.
 */
declare function listVariants(
  params?: ListVariantsParams
): Promise<FetchResponse<ListVariants>>

export type Category = 'one_time' | 'subscription' | 'lead_magnet' | 'pwyw'
export type Scheme = 'standard' | 'package' | 'graduated' | 'volume'
export type UsageAggregation =
  | 'sum'
  | 'last_during_period'
  | 'last_ever'
  | 'max'
export type TaxCode = 'eservice' | 'ebook' | 'saas'
export type Tier = {
  /**
   * The top limit of this tier. Will be an integer or `"inf"` (for "infinite") if this is the highest-level tier.
   */
  last_unit: string | number
  /**
   * A positive integer in cents representing the price of each unit.
   */
  unit_price: number
  /**
   * A positive decimal string in cents representing the price of each unit. Will be `null` if usage-based billing is not activated on this price's variant.
   */
  unit_price_decimal: string | null
  /**
   * An optional fixed fee charged alongside the unit price.
   */
  fixed_fee: number
}
export type Attributes$d = {
  /**
   * The ID of the variant this price belongs to.
   */
  variant_id: number
  /**
   * The export type of variant this price was created for. One of
   *
   * `one_time` - A regular product
   * `subscription` - A subscription
   * `lead_magnet` - A free lead magnet
   * `pwyw` - "Pay what you want" product
   */
  category: Category
  /**
   * The pricing model for this price. One of
   *
   * `standard`
   * `package`
   * `graduated`
   * `volume`
   */
  scheme: Scheme
  /**
   * The export type of usage aggregation in use if usage-based billing is activated. One of
   *
   * - `sum` - Sum of usage during period
   * - `last_during_period` - Most recent usage during a period
   * - `last_ever` - Most recent usage
   * - `max` - Maximum usage during period
   *
   * Will be `null` if usage-based billing is not activated on this price's variant.
   */
  usage_aggregation: UsageAggregation | null
  /**
   * A positive integer in cents representing the price.
   *
   * Not used for volume and graduated pricing (tier data is used instead).
   *
   * Note: If `usage_aggregation` is enabled for this price, `unit_price` will be null and `unit_price_decimal` will be used instead.
   */
  unit_price: number
  /**
   * A positive decimal string in cents representing the price.
   *
   * Not used for volume and graduated pricing (tier data is used instead).
   *
   * Note: If `usage_aggregation` is not enabled for this price, `unit_price_decimal` will be `null` and `unit_price` will be used instead.
   */
  unit_price_decimal: string | null
  /**
   * A boolean indicating if the price has a setup fee.
   * Will be `null` for non-subscription pricing.
   */
  setup_fee_enabled: boolean | null
  /**
   * A positive integer in cents representing the setup fee.
   * Will be `null` for non-subscription pricing.
   */
  setup_fee: number | null
  /**
   * The number of units included in each package when using package pricing.
   *
   * Will be `1` for standard, graduated and volume pricing.
   */
  package_size: number
  /**
   * A list of pricing tier objects when using volume and graduated pricing.
   *
   * Tiers have three values:
   *
   * - `last_unit` - The top limit of this tier. Will be an integer or `"inf"` (for "infinite") if this is the highest-level tier.
   * - `unit_price` - A positive integer in cents representing the price of each unit.
   * - `unit_price_decimal` - A positive decimal string in cents representing the price of each unit. Will be `null` if usage-based billing is not activated on this price's variant.
   * - `fixed_fee` - An optional fixed fee charged alongside the unit price.
   *
   * Will be `null` for standard and package pricing.
   */
  tiers: Tier[] | null
  /**
   * If the price's variant is a subscription, the billing interval. One of
   *
   * - `day`
   * - `week`
   * - `week`
   * - `year`
   *
   * Will be `null` if the product is not a subscription.
   */
  renewal_interval_unit: IntervalUnit | null
  /**
   * If the price's variant is a subscription, this is the number of intervals (specified in the `renewal_interval_unit` attribute) between subscription billings.
   *
   * For example, `renewal_interval_unit=month` and `renewal_interval_quantity=3` bills every 3 months.
   *
   * Will be `null` if the product is not a subscription.
   */
  renewal_interval_quantity: number | null
  /**
   * The interval unit of the free trial. One of
   *
   * - `day`
   * - `week`
   * - `week`
   * - `year`
   *
   * Will be `null` if there is no trial.
   */
  trial_interval_unit: IntervalUnit | null
  /**
   * The interval count of the free trial. For example, a variant with `trial_interval_unit=day` and `trial_interval_quantity=14` would have a free trial that lasts 14 days.
   *
   * Will be `null` if there is no trial.
   */
  trial_interval_quantity: number | null
  /**
   * If `category` is `pwyw`, this is the minimum price this variant can be purchased for, as a positive integer in cents.
   *
   * Will be `null` for all other categories.
   */
  min_price: number | null
  /**
   * If `category` is `pwyw`, this is the suggested price for this variant shown at checkout, as a positive integer in cents.
   *
   * Will be `null` for all other categories.
   */
  suggested_price: null
  /**
   * The product's [tax category](https://docs.lemonsqueezy.com/help/products/tax-categories). One of
   *
   * - `eservice`
   * - `ebook`
   * - `saas`
   */
  tax_code: TaxCode
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
}
export type PriceData = Data<Attributes$d, Pick<Relationships, 'variant'>>
export type GetPriceParams = Pick<
  Params<(keyof PriceData['relationships'])[]>,
  'include'
>
export type ListPricesParams = Params<
  GetPriceParams['include'],
  {
    variantId?: string | number
  }
>
export type Price = Omit<
  LemonSqueezyResponse<PriceData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListPrices = LemonSqueezyResponse<
  PriceData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a price.
 *
 * @param priceId The given price id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A price object.
 */
declare function getPrice(
  priceId: number | string,
  params?: GetPriceParams
): Promise<FetchResponse<Price>>
/**
 * List all prices.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.variantId] Only return prices belonging to the variant with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of price objects ordered by `created_at` (descending).
 */
declare function listPrices(
  params?: ListPricesParams
): Promise<FetchResponse<ListPrices>>

export type Attributes$c = {
  /**
   * The ID of the variant this file belongs to.
   */
  variant_id: number
  /**
   * The unique identifier (UUID) for this file.
   */
  identifier: string
  /**
   * The name of the file (e.g. `example.pdf`).
   */
  name: string
  /**
   * The file extension of the file (e.g. `pdf`).
   */
  extension: string
  /**
   * The unique URL to download the file.
   *
   * Note: for security reasons, download URLs are signed, expire after 1 hour and are rate-limited to 10 downloads per day per IP address.
   */
  download_url: string
  /**
   * A positive integer in bytes representing the size of the file.
   */
  size: number
  /**
   * The human-readable size of the file (e.g. `5.5 MB`).
   */
  size_formatted: string
  /**
   * The software version of this file (if one exists, e.g. `1.0.0`).
   */
  version: string
  /**
   * An integer representing the order of this file when displayed.
   */
  sort: number
  /**
   * The status of the file. Either `draft` or `published`.
   */
  status: 'draft' | 'published'
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  createdAt: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updatedAt: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type FileData = Data<Attributes$c, Pick<Relationships, 'variant'>>
export type GetFileParams = Pick<
  Params<(keyof FileData['relationships'])[]>,
  'include'
>
export type ListFilesParams = Params<
  GetFileParams['include'],
  {
    variantId?: string | number
  }
>
export type File = Omit<
  LemonSqueezyResponse<FileData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListFiles = LemonSqueezyResponse<
  FileData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a file.
 *
 * @param fileId The given file id
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A file object.
 */
declare function getFile(
  fileId: number | string,
  params?: GetFileParams
): Promise<FetchResponse<File>>
/**
 * List all files.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.variantId] (Optional) Only return files belonging to the variant with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of file objects ordered by `sort`.
 */
declare function listFiles(
  params?: ListFilesParams
): Promise<FetchResponse<ListFiles>>

export type OrderStatus = 'pending' | 'failed' | 'paid' | 'refunded'
export type FirstOrderItem = {
  /**
   * The ID of the order item.
   */
  id: number
  /**
   * The ID of the order.
   */
  order_id: number
  /**
   * The ID of the product.
   */
  product_id: number
  /**
   * The ID of the product variant.
   */
  variant_id: number
  /**
   * The ID of the price.
   *
   * Note: Not in the documentation, but in the response
   */
  price_id: number
  /**
   * A positive integer representing the quantity of this order item.
   *
   * Note: Not in the documentation, but in the response
   */
  quantity: number
  /**
   * The name of the product.
   */
  product_name: string
  /**
   * The name of the product variant.
   */
  variant_name: string
  /**
   * A positive integer in cents representing the price of the order item in the order currency.
   */
  price: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the order item was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the order item was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the order was made in test mode.
   */
  test_mode: boolean
}
export type Attributes$b = {
  /**
   * The ID of the store this order belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this order belongs to.
   */
  customer_id: number
  /**
   * The unique identifier (UUID) for this order.
   */
  identifier: string
  /**
   * An integer representing the sequential order number for this store.
   */
  order_number: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the order (e.g. `USD`, `GBP`, etc).
   */
  currency: ISO4217CurrencyCode
  /**
   * If the order currency is USD, this will always be `1.0`. Otherwise, this is the currency conversion rate used to determine the cost of the order in USD at the time of purchase.
   */
  currency_rate: string
  /**
   * A positive integer in cents representing the subtotal of the order in the order currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the setup fee of the order in the order currency.
   */
  setup_fee: number
  /**
   * A positive integer in cents representing the total discount value applied to the order in the order currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the order in the order currency.
   */
  tax: number
  /**
   * A positive integer in cents representing the total cost of the order in the order currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the order in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the setup fee of the order in USD.
   */
  setup_fee_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the order in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the order in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total cost of the order in USD.
   */
  total_usd: number
  /**
   * The name of the tax rate (e.g. `VAT`, `Sales Tax`, etc) applied to the order. Will be `null` if no tax was applied.
   */
  tax_name: string | null
  /**
   * If tax is applied to the order, this will be the rate of tax as a decimal percentage.
   */
  tax_rate: string
  /**
   * A boolean indicating if the order was created with tax inclusive or exclusive pricing.
   */
  tax_inclusive: boolean
  /**
   * The status of the order. One of
   *
   * - `pending`
   * - `failed`
   * - `paid`
   * - `refunded`
   */
  status: OrderStatus
  /**
   * The formatted status of the order.
   */
  status_formatted: string
  /**
   * Has the value `true` if the order has been refunded.
   */
  refunded: boolean
  /**
   * If the order has been refunded, this will be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the order was refunded.
   */
  refunded_at: Date | null
  /**
   * A human-readable string representing the subtotal of the order in the order currency (e.g. `$9.99`).
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the setup fee of the order in the order currency (e.g. $9.99).
   */
  setup_fee_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the order in the order currency (e.g. `$9.99`).
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the tax applied to the order in the order currency (e.g. `$9.99)`.
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total cost of the order in the order currency (e.g. `$9.99`).
   */
  total_formatted: string
  /**
   * An object representing the [first order](https://docs.lemonsqueezy.com/api/order-items) item belonging to this order.
   *
   * - `id` - The ID of the order item.
   * - `order_id` - The ID of the order.
   * - `product_id` - The ID of the product.
   * - `variant_id` - The ID of the product variant.
   * - `product_name` - The name of the product.
   * - `variant_name` - The name of the product variant.
   * - `price` - A positive integer in cents representing the price of the order item in the order currency.
   * - `created_at` - An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the order item was created.
   * - `updated_at` - An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the order item was last updated.
   * - `test_mode` - A boolean indicating if the order was made in test mode.
   */
  first_order_item: FirstOrderItem
  /**
   * An object of customer-facing URLs for this order. It contains:
   *
   * - `receipt` - A pre-signed URL for viewing the order in the customer's [My Orders](https://docs.lemonsqueezy.com/help/online-store/my-orders) page.
   */
  urls: {
    receipt: string
  }
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type OrderData = Data<
  Attributes$b,
  Pick<
    Relationships,
    | 'store'
    | 'customer'
    | 'order-items'
    | 'subscriptions'
    | 'license-keys'
    | 'discount-redemptions'
  >
>
export type GetOrderParams = Pick<
  Params<(keyof OrderData['relationships'])[]>,
  'include'
>
export type ListOrdersParams = Params<
  GetOrderParams['include'],
  {
    storeId?: string | number
    userEmail?: string
  }
>
export type Order = Omit<
  LemonSqueezyResponse<OrderData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListOrders = LemonSqueezyResponse<
  OrderData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve an order.
 *
 * @param orderId The given order id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns An order object.
 */
declare function getOrder(
  orderId: number | string,
  params?: GetOrderParams
): Promise<FetchResponse<Order>>
/**
 * List all orders.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return orders belonging to the store with this ID.
 * @param [params.filter.userEmail] (Optional) Only return orders where the `user_email` field is equal to this email address.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of order objects ordered by `created_at` (descending).
 */
declare function listOrders(
  params?: ListOrdersParams
): Promise<FetchResponse<ListOrders>>

export type Attributes$a = {
  /**
   * The ID of the order this order item belongs to.
   */
  order_id: number
  /**
   * The ID of the product associated with this order item.
   */
  product_id: number
  /**
   * The ID of the variant associated with this order item.
   */
  variant_id: number
  /**
   * The ID of the price.
   *
   * Note: Not in the documentation, but in the response
   */
  price_id: number
  /**
   * The name of the product.
   */
  product_name: string
  /**
   * The name of the variant.
   */
  variant_name: string
  /**
   * A positive integer in cents representing the price of this order item (in the order currency).
   *
   * Note, for “pay what you want” products the price will be whatever the customer entered at checkout.
   */
  price: number
  /**
   * A positive integer representing the quantity of this order item.
   */
  quantity: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the order was made in test mode.
   *
   * Note: Not in the documentation, but in the response
   */
  test_mode: boolean
}
export type OrderItemData = Data<
  Attributes$a,
  Pick<Relationships, 'order' | 'product' | 'variant'>
>
export type GetOrderItemParams = Pick<
  Params<(keyof OrderItemData['relationships'])[]>,
  'include'
>
export type ListOrderItemsParams = Params<
  GetOrderItemParams['include'],
  {
    orderId?: string | number
    productId?: string | number
    variantId?: string | number
  }
>
export type OrderItem = Omit<
  LemonSqueezyResponse<OrderItemData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListOrderItems = LemonSqueezyResponse<
  OrderItemData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve an order item.
 *
 * @param orderItemId The given order item id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns An order item object.
 */
declare function getOrderItem(
  orderItemId: number | string,
  params?: GetOrderItemParams
): Promise<FetchResponse<OrderItem>>
/**
 * List all order items.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.orderId] (Optional) Only return order items belonging to the order with this ID.
 * @param [params.filter.productId] (Optional) Only return order items belonging to the product with this ID.
 * @param [params.filter.variantId] (Optional) Only return order items belonging to the variant with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of order item objects ordered by `id`.
 */
declare function listOrderItems(
  params?: ListOrderItemsParams
): Promise<FetchResponse<ListOrderItems>>

export type SubscriptionStatus =
  | 'on_trial'
  | 'active'
  | 'paused'
  | 'pause'
  | 'past_due'
  | 'unpaid'
  | 'cancelled'
  | 'expired'
  | 'cancelled'
export type CardBrand =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'jcb'
  | 'diners'
  | 'unionpay'
export type Pause = {
  /**
   * - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged.
   * - `free` - Offer your subscription services for free, whilst halting payment collection.
   */
  mode: 'void' | 'free'
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription will continue collecting payments.
   */
  resumes_at?: string | null
}
export type FirstSubscriptionItem = {
  /**
   * The ID of the subscription item.
   */
  id: number
  /**
   * The ID of the subscription.
   */
  subscription_id: number
  /**
   * The ID of the price
   */
  price_id: number
  /**
   * The quantity of the subscription item.
   */
  quantity: number
  /**
   * A boolean value indicating whether the related subscription product/variant has usage-based billing enabled.
   *
   * Note: Not in the documentation, but in the response
   */
  is_usage_based: boolean
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was last updated.
   */
  updated_at: string
}
export type Attributes$9 = {
  /**
   * The ID of the store this subscription belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this subscription belongs to.
   */
  customer_id: number
  /**
   * The ID of the order associated with this subscription.
   */
  order_id: number
  /**
   * The ID of the order item associated with this subscription.
   */
  order_item_id: number
  /**
   * The ID of the product associated with this subscription.
   */
  product_id: number
  /**
   * The ID of the variant associated with this subscription.
   */
  variant_id: number
  /**
   * The name of the product.
   */
  product_name: string
  /**
   * The name of the variant.
   */
  variant_name: string
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The status of the subscription. One of
   *
   * - `on_trial`
   * - `active`
   * - `paused` - The subscription's payment collection has been paused. See the `pause` attribute below for more information.
   * - `past_due` - A renewal payment has failed. The subscription will go through [4 payment retries](https://docs.lemonsqueezy.com/help/online-store/recovery-dunning#failed-payments) over the course of 2 weeks. If a retry is successful, the subscription's status changes back to `active`. If all four retries are unsuccessful, the status is changed to `unpaid`.
   * - `unpaid` - [Payment recovery](https://docs.lemonsqueezy.com/help/online-store/recovery-dunning#failed-payments) has been unsuccessful in capturing a payment after 4 attempts. If dunning is enabled in your store, your dunning rules now will determine if the subscription becomes `expired` after a certain period. If dunning is turned off, the status remains `unpaid` (it is up to you to determine what this means for users of your product).
   * - `cancelled` - The customer or store owner has cancelled future payments, but the subscription is still technically active and valid (on a "grace period"). The `ends_at` value shows the date-time when the subscription is scheduled to expire.
   * - `expired` - The subscription has ended (either it had previously been `cancelled` and the grace period created from its final payment has run out, or it was previously `unpaid` and the subscription was not re-activated during dunning). The `ends_at` value shows the date-time when the subscription expired. Customers should no longer have access to your product.
   */
  status: SubscriptionStatus
  /**
   * The title-case formatted status of the subscription.
   *
   * For example, when `status` is `active`, `status_formatted` will be `Active` and `past_due` will be `Past due`.
   */
  status_formatted: string
  /**
   * Lowercase brand of the card used to pay for the latest subscription payment. One of
   *
   * - `visa`
   * - `mastercard`
   * - `amex`
   * - `discover`
   * - `jcb`
   * - `diners`
   * - `unionpay`
   *
   * Will be empty for non-card payments.
   */
  card_brand: CardBrand | null
  /**
   * The last 4 digits of the card used to pay for the latest subscription payment. Will be empty for non-card payments.
   */
  card_last_four: string | null
  /**
   * An object containing the payment collection pause behavior options for the subscription, if set. Options include:
   *
   * - `mode` - Defines payment pause behavior, can be one of:
   *    - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged.
   *    - `free` - Offer your subscription services for free, whilst halting payment collection.
   * - `resumes_at` - (Optional) An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription will continue collecting payments.
   *
   * For a subscription that isn't in the `paused` state, the pause object will be `null`.
   */
  pause: Pause | null
  /**
   * A boolean indicating if the subscription has been cancelled.
   *
   * When `cancelled` is `true`:
   *
   * - `status` will be `cancelled`
   * - `ends_at` will be populated with a date-time string
   */
  cancelled: boolean
  /**
   * If the subscription has a free trial (`status` is `on_trial`), this will be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the trial period ends. For all other status values, this will be `null`.
   */
  trial_ends_at: string | null
  /**
   * An integer representing a day of the month (`21` equals `21st day of the month`). This is the day on which subscription invoice payments are collected.
   */
  billing_anchor: number
  /**
   * An object representing the first subscription item belonging to this subscription.
   *
   * - `id` - The ID of the subscription item.
   * - `subscription_id` - The ID of the subscription.
   * - `price_id` - The ID of the price
   * - `quantity` - The quantity of the subscription item.
   * - `created_at` - An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was created.
   * - `updated_at` - An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was last updated.
   *
   * Will be `null` if there is no subscription item, for example if the subscription is currently in a free trial.
   */
  first_subscription_item: FirstSubscriptionItem | null
  /**
   * An object of customer-facing URLs for managing the subscription. It contains
   *
   * - `update_payment_method` - A pre-signed URL for managing payment and billing information for the subscription. This can be used in conjunction with [Lemon.js](https://docs.lemonsqueezy.com/help/lemonjs/what-is-lemonjs) to allow your customer to change their billing information from within your application. The URL is valid for 24 hours from time of request.
   * - `customer_portal` - A pre-signed URL to the [Customer Portal](https://docs.lemonsqueezy.com/help/online-store/customer-portal), which allows customers to fully manage their subscriptions and billing information from within your application. The URL is valid for 24 hours from time of request.
   */
  urls: {
    update_payment_method: string
    customer_portal: string
    customer_portal_update_subscription: string
  }
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating the end of the current billing cycle, and when the next invoice will be issued. This also applies to `past_due` subscriptions; `renews_at` will reflect the next renewal charge attempt.
   */
  renews_at: string
  /**
   * f the subscription has as `status` of `cancelled` or `expired`, this will be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription expires (or expired). For all other `status` values, this will be `null`.
   */
  ends_at: string | null
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type SubscriptionData = Data<
  Attributes$9,
  Pick<
    Relationships,
    | 'store'
    | 'customer'
    | 'order'
    | 'order-item'
    | 'product'
    | 'variant'
    | 'subscription-items'
    | 'subscription-invoices'
  >
>
export type GetSubscriptionParams = Pick<
  Params<(keyof SubscriptionData['relationships'])[]>,
  'include'
>
export type ListSubscriptionsParams = Params<
  GetSubscriptionParams['include'],
  {
    /**
     * Only return subscriptions belonging to the store with this ID.
     */
    storeId?: string | number
    /**
     * Only return subscriptions belonging to the order with this ID.
     */
    orderId?: string | number
    /**
     * Only return subscriptions belonging to the order item with this ID.
     */
    orderItemId?: string | number
    /**
     * Only return subscriptions belonging to the product with this ID.
     */
    productId?: string | number
    /**
     * Only return subscriptions belonging to the variant with this ID.
     */
    variantId?: string | number
    /**
     * Only return subscriptions where the `user_email` field is equal to this email address.
     */
    userEmail?: string
    /**
     * Only return subscriptions with this status.
     */
    status?: SubscriptionStatus
  }
>
export type UpdateSubscription = Partial<{
  /**
   * The ID of the [Variant](https://docs.lemonsqueezy.com/api/variants) you want to switch this subscription to. Required if changing a subscription's product/variant.
   */
  variantId: number
  /**
   * An object containing the payment collection pause behavior options for the subscription. Options include:
   *
   * - `mode` - Defines payment pause behavior, can be one of:
   *    - `void` - If you can't offer your services for a period of time (for maintenance as an example), you can void invoices so your customers aren't charged.
   *    - `free` - Offer your subscription services for free, whilst halting payment collection.
   * - `resumes_at` (optional) - An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription will continue collecting payments.
   *
   * You can set the pause object to `null` to unpause the subscription.
   */
  pause: {
    mode: 'void' | 'free'
    resumesAt?: string | null
  }
  /**
   * Set as `true` to cancel the subscription. You can resume a subscription (before the `ends_at` date) by setting this to `false`.
   */
  cancelled: boolean
  /**
   * - Use an integer representing a day of the month (`21` equals `21st day of the month`) to change the day on which subscription invoice payments are collected.
   * - Use `null` or `0` to reset the billing anchor to the current date. Doing this will also remove an active trial.
   *
   * Setting this value to a valid integer (1-31) will set the billing anchor to the next occurrence of that day. For example, if on the 21st of January you set the subscription billing anchor to the 1st, the next occurrence of that day is February 1st. All invoices from that point on will be generated on the 1st of the month.
   *
   * If the current month doesn’t contain the day that matches your `billing_anchor` (for example, if the `billing_anchor` is 31 and the month is November), the customer will be charged on the last day of the month.
   *
   * When setting a new billing anchor day, we calculate the next occurrence and issue a paid, prorated trial which ends on the next occurrence date. When the trial ends, the customer is charged for the full prorated amount.
   */
  billingAnchor: number | null
  /**
   * If `true`, any updates to the subscription will be charged immediately. A new prorated invoice will be generated and payment attempted. Defaults to `false`. Note that this will be overridden by the `disable_prorations` option if used.
   */
  invoiceImmediately: boolean
  /**
   * If `true`, no proration will be charged and the customer will simply be charged the new price at the next renewal. Defaults to `false`. Note that this will override the `invoice_immediately` option if used.
   */
  disableProrations: boolean
}>
export type Subscription = Omit<
  LemonSqueezyResponse<SubscriptionData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListSubscriptions = LemonSqueezyResponse<
  SubscriptionData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a subscription.
 *
 * @param subscriptionId The given subscription id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A subscription object.
 */
declare function getSubscription(
  subscriptionId: number | string,
  params?: GetSubscriptionParams
): Promise<FetchResponse<Subscription>>
/**
 * Update a subscription.
 *
 * @param subscriptionId The given subscription id.
 * @param subscription Subscription information that needs to be updated.
 * @returns A subscription object.
 */
declare function updateSubscription(
  subscriptionId: string | number,
  updateSubscription: UpdateSubscription
): Promise<FetchResponse<Subscription>>
/**
 * Cancel a subscription.
 *
 * @param subscriptionId The given subscription id
 * @returns The Subscription object in a cancelled state.
 */
declare function cancelSubscription(
  subscriptionId: string | number
): Promise<FetchResponse<Subscription>>
/**
 * List all subscriptions.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter.storeId] (Optional) Only return subscriptions belonging to the store with this ID.
 * @param [params.filter.orderId] (Optional) Only return subscriptions belonging to the order with this ID.
 * @param [params.filter.orderItemId] (Optional) Only return subscriptions belonging to the order item with this ID.
 * @param [params.filter.productId] (Optional) Only return subscriptions belonging to the product with this ID.
 * @param [params.filter.variantId] (Optional) Only return subscriptions belonging to the variant with this ID.
 * @param [params.filter.userEmail] (Optional) Only return subscriptions where the `user_email` field is equal to this email address.
 * @param [params.filter.status] (Optional) Only return subscriptions with this status.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of subscription objects ordered by `created_at` (descending).
 */
declare function listSubscriptions(
  params?: ListSubscriptionsParams
): Promise<FetchResponse<ListSubscriptions>>

export type InvoiceBillingReason = 'initial' | 'renewal' | 'renewal'
export type InvoiceCardBrand =
  | 'visa'
  | 'mastercard'
  | 'amex'
  | 'discover'
  | 'jcb'
  | 'diners'
  | 'unionpay'
export type InvoiceStatus = 'pending' | 'paid' | 'void' | 'refunded'
export type Attributes$8 = {
  /**
   * The ID of the [Store](https://docs.lemonsqueezy.com/api/stores#the-store-object) this subscription invoice belongs to.
   */
  store_id: number
  /**
   * The ID of the [Subscription](https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object) associated with this subscription invoice.
   */
  subscription_id: number
  /**
   * The ID of the customer this subscription invoice belongs to.
   */
  customer_id: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The reason for the invoice being generated.
   *
   * - `initial` - The initial invoice generated when the subscription is created.
   * - `renewal` - A renewal invoice generated when the subscription is renewed.
   * - `renewal` - An invoice generated when the subscription is updated.
   */
  billing_reason: InvoiceBillingReason
  /**
   * Lowercase brand of the card used to pay for the invoice. One of
   *
   * - `visa`
   * - `mastercard`
   * - `amex`
   * - `discover`
   * - `jcb`
   * - `diners`
   * - `unionpay`
   *
   * Will be empty for non-card payments.
   */
  card_brand: InvoiceCardBrand | null
  /**
   * The last 4 digits of the card used to pay for the invoice. Will be empty for non-card payments.
   */
  card_last_four: string | null
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code for the invoice (e.g. `USD`, `GBP`, etc).
   */
  currency: ISO4217CurrencyCode
  /**
   * If the invoice currency is USD, this will always be `1.0`. Otherwise, this is the currency conversion rate used to determine the cost of the invoice in USD at the time of payment.
   */
  currency_rate: string
  /**
   * The status of the invoice. One of
   *
   * - `pending` - The invoice is waiting for payment.
   * - `paid` - The invoice has been paid.
   * - `void` - The invoice was cancelled or cannot be paid.
   * - `refunded` - The invoice was paid but has since been fully refunded.
   */
  status: InvoiceStatus
  /**
   * The formatted status of the invoice.
   */
  status_formatted: string
  /**
   * A boolean value indicating whether the invoice has been refunded.
   */
  refunded: boolean
  /**
   * If the invoice has been refunded, this will be an [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the invoice was refunded. Otherwise, it will be `null`.
   */
  refunded_at: string | null
  /**
   * A positive integer in cents representing the subtotal of the invoice in the invoice currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the total discount value applied to the invoice in the invoice currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the invoice in the invoice currency.
   */
  tax: number
  /**
   * A boolean indicating if the order was created with tax inclusive or exclusive pricing.
   */
  tax_inclusive: boolean
  /**
   * A positive integer in cents representing the total cost of the invoice in the invoice currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the invoice in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the invoice in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the invoice in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total cost of the invoice in USD.
   */
  total_usd: number
  /**
   * A human-readable string representing the subtotal of the invoice in the invoice currency (e.g. `$9.99`).
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the invoice in the invoice currency (e.g. `$9.99`).
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the tax applied to the invoice in the invoice currency (e.g. `$9.99`).
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total cost of the invoice in the invoice currency (e.g. `$9.99`).
   */
  total_formatted: string
  /**
   * An object of customer-facing URLs for the invoice. It contains:
   *
   * - `invoice_url` - The unique URL to download a PDF of the invoice. Note: for security reasons, download URLs are signed (but do not expire). Will be `null` if status is `pending`.
   */
  urls: {
    invoice_url: string | null
  }
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the invoice was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the invoice was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type SubscriptionInvoiceData = Data<
  Attributes$8,
  Pick<Relationships, 'store' | 'subscription' | 'customer'>
>
export type GetSubscriptionInvoiceParams = Pick<
  Params<(keyof SubscriptionInvoiceData['relationships'])[]>,
  'include'
>
export type ListSubscriptionInvoicesParams = Params<
  GetSubscriptionInvoiceParams['include'],
  {
    /**
     * Only return subscription invoices belonging to the store with this ID.
     */
    storeId?: string | number
    /**
     * Only return subscription invoices with this status.
     */
    status?: InvoiceStatus
    /**
     * Only return subscription invoices that are `refunded` (the value should be `true` or `false`).
     */
    refunded?: boolean
    /**
     * Only return subscription invoices belonging to a subscription with this ID.
     */
    subscriptionId?: string | number
  }
>
export type SubscriptionInvoice = Omit<
  LemonSqueezyResponse<SubscriptionInvoiceData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListSubscriptionInvoices = LemonSqueezyResponse<
  SubscriptionInvoiceData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a subscription invoice.
 *
 * @param subscriptionInvoiceId The given subscription invoice id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A subscription invoice object.
 */
declare function getSubscriptionInvoice(
  subscriptionInvoiceId: number | string,
  params?: GetSubscriptionInvoiceParams
): Promise<FetchResponse<SubscriptionInvoice>>
/**
 * List all subscription invoices.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return subscription invoices belonging to the store with this ID.
 * @param [params.filter.status] (Optional) Only return subscription invoices with this status.
 * @param [params.filter.refunded] (Optional) Only return subscription invoices that are `refunded` (the value should be `true` or `false`).
 * @param [params.filter.subscriptionId] (Optional) Only return subscription invoices belonging to a subscription with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of subscription invoice objects ordered by `created_at` (descending).
 */
declare function listSubscriptionInvoices(
  params?: ListSubscriptionInvoicesParams
): Promise<FetchResponse<ListSubscriptionInvoices>>

export type Attributes$7 = {
  /**
   * The ID of the [Subscription](https://docs.lemonsqueezy.com/api/subscriptions#the-subscription-object) associated with this subscription item.
   */
  subscription_id: number
  /**
   * The ID of the [Price](https://docs.lemonsqueezy.com/api/prices#the-price-object) associated with this subscription item.
   */
  price_id: number
  /**
   * A positive integer representing the unit quantity of this subscription item.
   *
   * Will be  if the related subscription product/variant has usage-based billing enabled.
   */
  quantity: number
  /**
   * A boolean value indicating whether the related subscription product/variant has usage-based billing enabled.
   */
  is_usage_based: boolean
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the subscription item was last updated.
   */
  updated_at: string
}
export type SubscriptionItemData = Data<
  Attributes$7,
  Pick<Relationships, 'subscription' | 'price' | 'usage-records'>
>
export type GetSubscriptionItemParams = Pick<
  Params<(keyof SubscriptionItemData['relationships'])[]>,
  'include'
>
export type ListSubscriptionItemsParams = Params<
  GetSubscriptionItemParams['include'],
  {
    subscriptionId?: number | string
    priceId?: number | string
  }
>
export type SubscriptionItem = Omit<
  LemonSqueezyResponse<SubscriptionItemData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type SubscriptionItemCurrentUsage = Omit<
  LemonSqueezyResponse<
    unknown,
    Pick<
      Meta$1,
      | 'period_start'
      | 'period_end'
      | 'quantity'
      | 'interval_unit'
      | 'interval_quantity'
    >
  >,
  'data' | 'links'
>
export type ListSubscriptionItems = LemonSqueezyResponse<
  SubscriptionItemData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>
export type UpdateSubscriptionItem = {
  /**
   * The unit quantity of the subscription.
   */
  quantity: number
  /**
   * If `true`, any updates to the subscription will be charged immediately. A new prorated invoice will be generated and payment attempted. Defaults to `false`. Note that this will be overridden by the `disable_prorations` option if used.
   *
   * [Read about proration in the Developer Guide.](https://docs.lemonsqueezy.com/guides/developer-guide/managing-subscriptions#handling-proration)
   */
  invoiceImmediately?: boolean
  /**
   * If `true`, no proration will be charged and the customer will simply be charged the new price at the next renewal. Defaults to `false`. Note that this will override the `invoice_immediately` option if used.
   * [Read about proration in the Developer Guide.](https://docs.lemonsqueezy.com/guides/developer-guide/managing-subscriptions#handling-proration)
   */
  disableProrations?: boolean
}

/**
 * Retrieve a subscription item.
 *
 * @param subscriptionItemId The given subscription item id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A subscription item object.
 */
declare function getSubscriptionItem(
  subscriptionItemId: number | string,
  params?: GetSubscriptionItemParams
): Promise<FetchResponse<SubscriptionItem>>
/**
 * Retrieve a subscription item's current usage.
 *
 * Note: this endpoint is only for subscriptions with usage-based billing enabled. It will return a `404 Not Found` response if the related subscription product/variant does not have usage-based billing enabled.
 *
 * @param subscriptionItemId The given subscription item id.
 * @returns A meta object containing usage information.
 */
declare function getSubscriptionItemCurrentUsage(
  subscriptionItemId: number | string
): Promise<FetchResponse<SubscriptionItemCurrentUsage>>
/**
 * List all subscription items.
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.subscriptionId] (Optional) Only return subscription items belonging to a subscription with this ID.
 * @param [params.filter.priceId] (Optional) Only return subscription items belonging to a price with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of subscription item objects ordered by `created_at` (descending).
 */
declare function listSubscriptionItems(
  params?: ListSubscriptionItemsParams
): Promise<FetchResponse<ListSubscriptionItems>>
/**
 * Update a subscription item.
 *
 * Note: this endpoint is only used with quantity-based billing.
 * If the related subscription's product/variant has usage-based billing
 * enabled, this endpoint will return a `422 Unprocessable Entity` response.
 *
 * @param subscriptionItemId The given subscription item id.
 * @param quantity The unit quantity of the subscription.
 * @deprecated It will be removed with the next major version. Use the 'updateSubscriptionItem' parameter instead.
 * @returns A subscription item object.
 */
declare function updateSubscriptionItem(
  subscriptionItemId: string | number,
  quantity: number
): ReturnType<typeof _updateSubscriptionItem>
/**
 * Update a subscription item.
 *
 * Note: this endpoint is only used with quantity-based billing.
 * If the related subscription's product/variant has usage-based billing
 * enabled, this endpoint will return a `422 Unprocessable Entity` response.
 *
 * @param subscriptionItemId The given subscription item id.
 * @param updateSubscriptionItem (Required) Update subscription item info.
 * @param updateSubscriptionItem.quantity (Required) The unit quantity of the subscription.
 * @param [updateSubscriptionItem.invoiceImmediately] (Optional) If `true`, any updates to the subscription will be charged immediately. A new prorated invoice will be generated and payment attempted. Defaults to `false`. Note that this will be overridden by the `disable_prorations` option if used.
 * @param [updateSubscriptionItem.disableProrations] (Optional) If `true`, no proration will be charged and the customer will simply be charged the new price at the next renewal. Defaults to `false`. Note that this will override the `invoice_immediately` option if used.
 * @returns A subscription item object.
 */
declare function updateSubscriptionItem(
  subscriptionItemId: string | number,
  updateSubscriptionItem: UpdateSubscriptionItem
): ReturnType<typeof _updateSubscriptionItem>
declare function _updateSubscriptionItem(
  subscriptionItemId: string | number,
  updateSubscriptionItem: number | UpdateSubscriptionItem
): Promise<FetchResponse<SubscriptionItem>>

export type UsageRecordAction = 'increment' | 'set'
export type Attributes$6 = {
  /**
   * The ID of the subscription item this usage record belongs to.
   */
  subscription_item_id: number
  /**
   * A positive integer representing the usage to be reported.
   */
  quantity: number
  /**
   * The export type of record. One of
   *
   * - `increment` - The provided quantity was added to existing records for the current billing period.
   * - `set` - The provided quantity was set as the total usage for the current billing period.
   */
  action: UsageRecordAction
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
}
export type UsageRecordData = Data<
  Attributes$6,
  Pick<Relationships, 'subscription-item'>
>
export type GetUsageRecordParams = Pick<
  Params<(keyof UsageRecordData['relationships'])[]>,
  'include'
>
export type ListUsageRecordsParams = Params<
  GetUsageRecordParams['include'],
  {
    subscriptionItemId?: number | string
  }
>
export type NewUsageRecord = {
  /**
   * A positive integer representing the usage to be reported.
   */
  quantity: number
  /**
   * The export type of record. One of
   *
   * - `increment` - Add the provided quantity to existing records for the current billing period.
   * - `set` - Set the quantity for the current billing period to the provided quantity.
   *
   * Defaults to `increment` if omitted.
   *
   * Note: increment should only be used alongside the "Sum of usage during period" aggregation setting. set should be only used alongside "Most recent usage during a period" and "Most recent usage" aggregation settings. [Read more about aggregation settings](https://docs.lemonsqueezy.com/help/products/usage-based-billing#usage-aggregation-setting).
   *
   * @default increment
   */
  action?: UsageRecordAction
  /**
   * The subscription item id this usage record belongs to.
   */
  subscriptionItemId: number | string
}
export type UsageRecord = Omit<
  LemonSqueezyResponse<UsageRecordData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListUsageRecords = LemonSqueezyResponse<
  UsageRecordData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

export type AmountType = 'percent' | 'fixed'
export type Duration = 'once' | 'repeating' | 'forever'
export type Attributes$5 = {
  /**
   * The ID of the store this discount belongs to.
   */
  store_id: number
  /**
   * The name of the discount.
   */
  name: string
  /**
   * The discount code that can be used at checkout. Made up of uppercase letters and numbers and between 3 and 256 characters long.
   */
  code: string
  /**
   * The amount of discount to apply to the Discount. Either a fixed amount in cents or a percentage depending on the value of `amount_type`.
   */
  amount: number
  /**
   * The export type of the amount. Either `percent` or `fixed`.
   */
  amount_type: AmountType
  /**
   * Has the value `true` if the discount can only be applied to certain products/variants.
   */
  is_limited_to_products: boolean
  /**
   * Has the value `true` if the discount can only be redeemed a limited number of times.
   */
  is_limited_redemptions: boolean
  /**
   * If `is_limited_redemptions` is `true`, this is the maximum number of redemptions.
   */
  max_redemptions: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the discount is valid from. Can be `null` if no start date is specified.
   */
  starts_at: string | null
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the discount expires. Can be `null` if no expiration date is specified.
   */
  expires_at: string | null
  /**
   * If the discount is applied to a subscription, this specifies how often the discount should be applied. One of
   *
   * - `once` - The discount will be applied to the initial payment only.
   * - `repeating` - The discount will be applied to a certain number of payments (use in combination with `duration_in_months`.
   * - `forever` - The discount will apply to all payments.
   */
  duration: Duration
  /**
   * If `duration` is `repeating`, this specifies how many months the discount should apply.
   */
  duration_in_months: number
  /**
   * The status of the discount. Either `draft` or `published`.
   */
  status: 'published' | 'draft'
  /**
   * The formatted status of the discount.
   */
  status_formatted: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type DiscountData = Data<
  Attributes$5,
  Pick<Relationships, 'store' | 'variants' | 'discount-redemptions'>
>
export type GetDiscountParams = Pick<
  Params<(keyof DiscountData['relationships'])[]>,
  'include'
>
export type ListDiscountsParams = Params<
  GetDiscountParams['include'],
  {
    storeId?: string | number
  }
>
export type NewDiscount = {
  /**
   * The store id this discount belongs to.
   */
  storeId: number | string
  /**
   * If `isLimitedToProducts` is `true`, the variant(s) the discount belongs to (this is not required otherwise).
   */
  variantIds: Array<number | string>
  /**
   * The name of the discount.
   */
  name: string
  /**
   * The discount code that can be used at checkout. Uppercase letters and numbers are allowed. Must be between 3 and 256 characters.
   *
   * @default An 8-character string of uppercase letters and numbers. e.g. `I0NTQZNG`
   */
  code?: string
  /**
   * The amount of discount to apply to the order. Either a fixed amount in cents or a percentage depending on the value of `amountType`.
   *
   * - `1000` means `$10` when `amountType` is `fixed`.
   * - `10` means `10%` when `amountType` is `percent`.
   */
  amount: number
  /**
   * The type of the amount. Either `percent` or `fixed`.
   */
  amountType: AmountType
  /**
   * Set this to true if the discount should only be applied to certain products/variants. See details in the Relationships section below.
   */
  isLimitedToProducts?: boolean
  /**
   * Set this to `true` if the discount should only be redeemed a limited number of times. See `maxRedemptions` below.
   */
  isLimitedRedemptions?: boolean
  /**
   * If `isLimitedToProducts` is `true`, this is the maximum number of redemptions.
   */
  maxRedemptions?: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the discount is valid from. Can omitted or `null` if no start date is specified.
   */
  startsAt?: string | null
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the discount expires. Can omitted or `null` if the discount is perpetual.
   */
  expiresAt?: string | null
  /**
   * If the discount is applied to a subscription, this specifies how often the discount should be applied. One of
   *
   * - `once` - The discount will be applied to the initial payment only.
   * - `repeating` - The discount will be applied to a certain number of payments (use in combination with `duration_in_months`.
   * - `forever` - The discount will apply to all payments.
   *
   * Defaults to `once` if omitted.
   * @default `once`
   */
  duration?: Duration
  /**
   * If `duration` is `repeating`, this specifies how many months the discount should apply. Defaults to `1` if omitted.
   *
   * Note: for yearly subscription, the value needs to be `years x 12`, so `24` if you want the discount to repeat for the first two yearly payments. We do not recommend repeated discounts for daily or weekly subscriptions.
   *
   * @default `1`
   */
  durationInMonths?: number
  /**
   * Set this to `true` if the discount should only be applied to test mode orders.
   */
  testMode?: boolean
}
export type Discount = Omit<
  LemonSqueezyResponse<DiscountData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListDiscounts = LemonSqueezyResponse<
  DiscountData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Create a discount.
 *
 * @param discount New discount info.
 * @returns A discount object.
 */
declare function createDiscount(
  discount: NewDiscount
): Promise<FetchResponse<Discount>>
/**
 * List all discounts.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return discounts belonging to the store with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of discount objects ordered by `created_at`.
 */
declare function listDiscounts(
  params?: ListDiscountsParams
): Promise<FetchResponse<ListDiscounts>>
/**
 * Retrieve a discount.
 *
 * @param discountId The given discount id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A discount object.
 */
declare function getDiscount(
  discountId: number | string,
  params?: GetDiscountParams
): Promise<FetchResponse<Discount>>
/**
 * Delete a discount.
 *
 * @param discountId The given discount id.
 * @returns A `204 No Content` response on success.
 */
declare function deleteDiscount(
  discountId: string | number
): Promise<FetchResponse<null>>

export type Attributes$4 = {
  /**
   * The ID of the discount this redemption belongs to.
   */
  discount_id: number
  /**
   * The ID of the order this redemption belongs to.
   */
  order_id: number
  /**
   * The name of the discount.
   */
  discount_name: string
  /**
   * The discount code that was used at checkout.
   */
  discount_code: string
  /**
   * The amount of the discount. Either a fixed amount in cents or a percentage depending on the value of `discount_amount_type`.
   */
  discount_amount: number
  /**
   * The type of the discount_amount. Either `percent` or `fixed`.
   */
  discount_amount_type: 'percent' | 'fixed'
  /**
   * A positive integer in cents representing the amount of the discount that was applied to the order (in the order currency).
   */
  amount: number
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
}
export type DiscountRedemptionData = Data<
  Attributes$4,
  Pick<Relationships, 'discount' | 'order'>
>
export type GetDiscountRedemptionParams = Pick<
  Params<(keyof DiscountRedemptionData['relationships'])[]>,
  'include'
>
export type ListDiscountRedemptionsParams = Params<
  GetDiscountRedemptionParams['include'],
  {
    discountId?: number | string
    orderId?: number | string
  }
>
export type DiscountRedemption = Omit<
  LemonSqueezyResponse<DiscountRedemptionData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListDiscountRedemptions = LemonSqueezyResponse<
  DiscountRedemptionData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a discount redemption.
 *
 * @param discountRedemptionId The given discount redemption id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A discount redemption object.
 */
declare function getDiscountRedemption(
  discountRedemptionId: number | string,
  params?: GetDiscountRedemptionParams
): Promise<FetchResponse<DiscountRedemption>>
/**
 * List all discount redemptions.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.discountId] (Optional) Only return discount redemptions belonging to the discount with this ID.
 * @param [params.filter.orderId] (Optional) Only return discount redemptions belonging to the order with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of discount redemption objects ordered by `created_at` (descending).
 */
declare function listDiscountRedemptions(
  params?: ListDiscountRedemptionsParams
): Promise<FetchResponse<ListDiscountRedemptions>>

export type LicenseKeyStatus$1 = 'inactive' | 'active' | 'expired' | 'disabled'
export type Attributes$3 = {
  /**
   * The ID of the store this license key belongs to.
   */
  store_id: number
  /**
   * The ID of the customer this license key belongs to.
   */
  customer_id: number
  /**
   * The ID of the order associated with this license key.
   */
  order_id: number
  /**
   * The ID of the order item associated with this license key.
   */
  order_item_id: number
  /**
   * The ID of the product associated with this license key.
   */
  product_id: number
  /**
   * The full name of the customer.
   */
  user_name: string
  /**
   * The email address of the customer.
   */
  user_email: string
  /**
   * The full license key.
   */
  key: string
  /**
   * A “short” representation of the license key, made up of the string “XXXX-” followed by the last 12 characters of the license key.
   */
  key_short: string
  /**
   * The activation limit of this license key.
   */
  activation_limit: number
  /**
   * A count of the number of instances this license key has been activated on.
   */
  instances_count: number
  /**
   * Has the value `true` if this license key has been disabled.
   */
  disabled: number
  /**
   * The status of the license key. One of
   *
   * - `inactive`
   * - `active`
   * - `expired`
   * - `disabled`
   */
  status: LicenseKeyStatus$1
  /**
   * The formatted status of the license key.
   */
  status_formatted: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the license key expires. Can be `null` if the license key is perpetual.
   */
  expires_at: string | null
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type LicenseKeyData = Data<
  Attributes$3,
  Pick<
    Relationships,
    | 'store'
    | 'customer'
    | 'order'
    | 'order-item'
    | 'product'
    | 'license-key-instances'
  >
>
export type GetLicenseKeyParams = Pick<
  Params<(keyof LicenseKeyData['relationships'])[]>,
  'include'
>
export type ListLicenseKeysParams = Params<
  GetLicenseKeyParams['include'],
  {
    /**
     * Only return license keys belonging to the store with this ID.
     */
    storeId?: number | string
    /**
     * Only return license keys belonging to the order with this ID.
     */
    orderId?: number | string
    /**
     * Only return license keys belonging to the order item with this ID.
     */
    orderItemId?: number | string
    /**
     * Only return license keys belonging to the product with this ID.
     */
    productId?: number | string
    /**
     * Only return license keys with this status.
     */
    status?: LicenseKeyStatus$1
  }
>
export type UpdateLicenseKey = {
  /**
   * The activation limit of this license key. Assign `null` to set the activation limit to "unlimited".
   */
  activationLimit?: number | null
  /**
   * If `true`, the license key will have "disabled" status.
   */
  disabled?: boolean
}
export type LicenseKey$1 = Omit<
  LemonSqueezyResponse<LicenseKeyData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListLicenseKeys = LemonSqueezyResponse<
  LicenseKeyData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a license key.
 *
 * @param licenseKeyId The license key id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A license key object.
 */
declare function getLicenseKey(
  licenseKeyId: number | string,
  params?: GetLicenseKeyParams
): Promise<FetchResponse<LicenseKey$1>>
/**
 * List all license keys.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return license keys belonging to the store with this ID.
 * @param [params.filter.orderId] (Optional) (Optional) Only return license keys belonging to the order with this ID.
 * @param [params.filter.orderItemId] (Optional) Only return license keys belonging to the order item with this ID.
 * @param [params.filter.productId] (Optional) Only return license keys belonging to the product with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of license key objects ordered by `id`.
 */
declare function listLicenseKeys(
  params?: ListLicenseKeysParams
): Promise<FetchResponse<ListLicenseKeys>>
/**
 * Update a license key.
 *
 * @param licenseKeyId The license key id.
 * @param licenseKey (Optional) Values to be updated.
 * @param [licenseKey.activationLimit] (Optional) The activation limit of this license key. Assign `null` to set the activation limit to "unlimited".
 * @param [licenseKey.disabled] (Optional) If `true`, the license key will have "disabled" status.
 * @returns A license key object.
 */
declare function updateLicenseKey(
  licenseKeyId: string | number,
  licenseKey: UpdateLicenseKey
): Promise<FetchResponse<LicenseKey$1>>

export type Attributes$2 = {
  /**
   * The ID of the license key this instance belongs to.
   */
  license_key_id: number
  /**
   * The unique identifier (UUID) for this instance. This is the `instance_id` returned when [activating a license key](https://docs.lemonsqueezy.com/help/licensing/license-api#post-v1-licenses-activate).
   */
  identifier: string
  /**
   * The name of the license key instance.
   */
  name: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
}
export type LicenseKeyInstanceData = Data<
  Attributes$2,
  Pick<Relationships, 'license-key'>
>
export type GetLicenseKeyInstanceParams = Pick<
  Params<(keyof LicenseKeyInstanceData['relationships'])[]>,
  'include'
>
export type ListLicenseKeyInstancesParams = Params<
  GetLicenseKeyInstanceParams['include'],
  {
    licenseKeyId?: number | string
  }
>
export type LicenseKeyInstance = Omit<
  LemonSqueezyResponse<LicenseKeyInstanceData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListLicenseKeyInstances = LemonSqueezyResponse<
  LicenseKeyInstanceData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>

/**
 * Retrieve a license key instance.
 *
 * @param licenseKeyInstanceId The given license key instance id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A license key instance object.
 */
declare function getLicenseKeyInstance(
  licenseKeyInstanceId: number | string,
  params?: GetLicenseKeyInstanceParams
): Promise<FetchResponse<LicenseKeyInstance>>
/**
 * List all license key instances.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.licenseKeyId] (Optional) The license key ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of license key instance objects ordered by `id`.
 */
declare function listLicenseKeyInstances(
  params?: ListLicenseKeyInstancesParams
): Promise<FetchResponse<ListLicenseKeyInstances>>

export type ProductOptions = {
  /**
   * A custom name for the product
   */
  name: string
  /**
   * A custom description for the product
   */
  description: string
  /**
   * An array of image URLs to use as the product's media
   */
  media: string[]
  /**
   * A custom URL to redirect to after a successful purchase
   */
  redirect_url: string
  /**
   * A custom text to use for the order receipt email button
   */
  receipt_button_text: string
  /**
   * A custom URL to use for the order receipt email button
   */
  receipt_link_url: string
  /**
   * A custom thank you note to use for the order receipt email
   */
  receipt_thank_you_note: string
  /**
   * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
   */
  enabled_variants: number[]
  /**
   * A custom text to use for order payment success message alert title
   *
   * Note: Not in the documentation, but in the response
   */
  confirmation_title: string
  /**
   * A custom text to use for order payment success message alert content
   *
   * Note: Not in the documentation, but in the response
   */
  confirmation_message: string
  /**
   * A custom text to use for order payment success message alert button
   *
   * Note: Not in the documentation, but in the response
   */
  confirmation_button_text: string
}
export type CheckoutOptions = {
  /**
   * If `true`, show the [checkout overlay](https://docs.lemonsqueezy.com/help/checkout/checkout-overlay)
   */
  embed: boolean
  /**
   * If `false`, hide the product media
   */
  media: boolean
  /**
   * If `false`, hide the store logo
   */
  logo: boolean
  /**
   * If `false`, hide the product description
   */
  desc: boolean
  /**
   * If `false`, hide the discount code field
   */
  discount: boolean
  quantity: number
  /**
   * If `true`, use the dark theme
   */
  dark: boolean
  /**
   * If `false`, hide the "You will be charged..." subscription preview text
   */
  subscription_preview: boolean
  /**
   * A custom hex color to use for the checkout button. Text within the button will be either white or dark depending on the brightness of your button color.
   */
  button_color: string
}
export type CheckoutData = {
  /**
   * A pre-filled email address
   */
  email: string
  /**
   * A pre-filled name
   */
  name: string
  billing_address: {
    /**
     * A pre-filled billing address country in a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
     */
    country: ISO3166Alpha2CountryCode
    /**
     * A pre-filled billing address zip/postal code
     */
    zip: string
  }
  /**
   * A pre-filled tax number
   */
  tax_number: string
  /**
   * A pre-filled discount code
   */
  discount_code: string
  /**
   * An object containing any custom data to be passed to the checkout
   */
  custom: unknown[] | Record<string, unknown>
  /**
   * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
   */
  variant_quantities: number[]
}
export type Preview = {
  /**
   * The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the store (e.g. `USD`, `GBP`, etc).
   */
  currency: ISO4217CurrencyCode
  /**
   * If the store currency is USD, this will always be `1.0`. Otherwise, this is the currency conversion rate used to determine the price of the checkout in USD at the time of purchase.
   */
  currency_rate: number
  /**
   * A positive integer in cents representing the subtotal of the checkout in the store currency.
   */
  subtotal: number
  /**
   * A positive integer in cents representing the total discount value applied to the checkout in the store currency.
   */
  discount_total: number
  /**
   * A positive integer in cents representing the tax applied to the checkout in the store currency.
   */
  tax: number
  /**
   * A positive integer in cents representing the setup fee of the checkout in USD.
   */
  setup_fee_usd: number
  /**
   * A positive integer in cents representing the setup fee.
   */
  setup_fee: number
  /**
   * A positive integer in cents representing the total price of the checkout in the store currency.
   */
  total: number
  /**
   * A positive integer in cents representing the subtotal of the checkout in USD.
   */
  subtotal_usd: number
  /**
   * A positive integer in cents representing the total discount value applied to the checkout in USD.
   */
  discount_total_usd: number
  /**
   * A positive integer in cents representing the tax applied to the checkout in USD.
   */
  tax_usd: number
  /**
   * A positive integer in cents representing the total price of the checkout in USD.
   */
  total_usd: number
  /**
   * A human-readable string representing the subtotal of the checkout in the store currency (e.g. `$9.99`).
   */
  subtotal_formatted: string
  /**
   * A human-readable string representing the total discount value applied to the checkout in the store currency (e.g. `$9.99`).
   */
  discount_total_formatted: string
  /**
   * A human-readable string representing the setup fee of the checkout in the store currency (e.g. `$9.99`).
   */
  setup_fee_formatted: string
  /**
   * A human-readable string representing the tax applied to the checkout in the store currency (e.g. `$9.99`).
   */
  tax_formatted: string
  /**
   * A human-readable string representing the total price of the checkout in the store currency (e.g. `$9.99`).
   */
  total_formatted: string
}
export type Attributes$1 = {
  /**
   * The ID of the store this checkout belongs to.
   */
  store_id: number
  /**
   * The ID of the variant associated with this checkout.
   *
   * Note: by default, all variants of the related product will be shown in the checkout, with your selected variant highlighted. If you want hide to other variants, you can utilise the `product_options.enabled_variants` option to determine which variant(s) are displayed in the checkout.
   */
  variant_id: number
  /**
   * If the value is not `null`, this represents a positive integer in cents representing the custom price of the variant.
   */
  custom_price: null | number
  /**
   * An object containing any overridden product options for this checkout. Possible options include:
   *
   * - `name` - A custom name for the product
   * - `description` - A custom description for the product
   * - `media` - An array of image URLs to use as the product's media
   * - `redirect_url` - A custom URL to redirect to after a successful purchase
   * - `receipt_button_text` - A custom text to use for the order receipt email button
   * - `receipt_link_url` - A custom URL to use for the order receipt email button
   * - `receipt_thank_you_note` - A custom thank you note to use for the order receipt email
   * - `enabled_variants` - An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
   */
  product_options: ProductOptions
  /**
   * An object containing checkout options for this checkout. Possible options include:
   *
   * - `embed` - If `true`, show the [checkout overlay](https://docs.lemonsqueezy.com/help/checkout/checkout-overlay)
   * - `media` - If `false`, hide the product media
   * - `logo` - If `false`, hide the store logo
   * - `desc` - If `false`, hide the product description
   * - `discount` - If `false`, hide the discount code field
   * - `dark` - If `true`, use the dark theme
   * - `subscription_preview` - If `false`, hide the "You will be charged..." subscription preview text
   * - `button_color` - A custom hex color to use for the checkout button. Text within the button will be either white or dark depending on the brightness of your button color.
   */
  checkout_options: CheckoutOptions
  /**
   * An object containing any [prefill](https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields) or [custom data](https://docs.lemonsqueezy.com/help/checkout/passing-custom-data) to be used in the checkout. Possible options include:
   *
   * - `email` - A pre-filled email address
   * - `name` - A pre-filled name
   * - `billing_address.country` - A pre-filled billing address country in a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * - `billing_address.zip` - A pre-filled billing address zip/postal code
   * - `tax_number` - A pre-filled tax number
   * - `discount_code` - A pre-filled discount code
   * - `custom` - An object containing any custom data to be passed to the checkout
   * - `variant_quantities` - A list containing quantity data objects
   */
  checkout_data: CheckoutData
  /**
   * If `preview` is passed as `true` in the request, the Checkout object will contain a `preview` object. This contains pricing information for the checkout, including tax, any discount applied, and the total price.
   *
   * The `preview` object is only available when the checkout is created.
   *
   * Values returned:
   *
   * - `currency` - The [ISO 4217](https://en.wikipedia.org/wiki/ISO_4217) currency code of the store (e.g. `USD`, `GBP`, etc).
   * - `currency_rate` - If the store currency is USD, this will always be `1.0`. Otherwise, this is the currency conversion rate used to determine the price of the checkout in USD at the time of purchase.
   * - `subtotal` - A positive integer in cents representing the subtotal of the checkout in the store currency.
   * - `discount_total` - A positive integer in cents representing the total discount value applied to the checkout in the store currency.
   * - `tax` - A positive integer in cents representing the tax applied to the checkout in the store currency.
   * - `total` - A positive integer in cents representing the total price of the checkout in the store currency.
   * - `subtotal_usd` - A positive integer in cents representing the subtotal of the checkout in USD.
   * - `discount_total_usd` - A positive integer in cents representing the total discount value applied to the checkout in USD.
   * - `tax_usd` - A positive integer in cents representing the tax applied to the checkout in USD.
   * - `total_usd` - A positive integer in cents representing the total price of the checkout in USD.
   * - `subtotal_formatted` - A human-readable string representing the subtotal of the checkout in the store currency (e.g. `$9.99`).
   * - `discount_total_formatted` - A human-readable string representing the total discount value applied to the checkout in the store currency (e.g. `$9.99`).
   * - `tax_formatted` - A human-readable string representing the tax applied to the checkout in the store currency (e.g. `$9.99`).
   * - `total_formatted` - A human-readable string representing the total price of the checkout in the store currency (e.g. `$9.99`).
   */
  preview: Preview
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the checkout expires. Can be `null` if the checkout is perpetual.
   */
  expires_at: null | string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
  /**
   * The unique URL to access the checkout. Note: for security reasons, download URLs are signed. If the checkout `expires_at` is set, the URL will expire after the specified time.
   */
  url: string
}
export type CheckoutResponseData = Data<
  Attributes$1,
  Pick<Relationships, 'store' | 'variant'>
>
export type NewCheckout = {
  /**
   * The store this checkout belongs to.
   */
  /**
   * The variant associated with this checkout.
   *
   * Note: by default, all variants of the related product will be shown in the checkout, with your selected variant highlighted. If you want hide to other variants, you can utilize the `productOptions.enabledVariants` option to determine which variant(s) are displayed in the checkout.
   */
  /**
   * A positive integer in cents representing the custom price of the variant.
   *
   * Note: If the product purchased is a subscription, this custom price is used for all renewal payments. If the subscription's variant changes in the future (i.e. the customer is moved to a different subscription "tier") the new variant's price will be used from that moment forward.
   */
  customPrice?: number
  /**
   * An object containing any overridden product options for this checkout. Possible options include:
   *
   * - `name` - A custom name for the product
   * - `description` - A custom description for the product
   * - `media` - An array of image URLs to use as the product's media
   * - `redirectUrl` - A custom URL to redirect to after a successful purchase
   * - `receiptButtonText` - A custom text to use for the order receipt email button
   * - `receiptLinkUrl` - A custom URL to use for the order receipt email button
   * - `receiptThankYouNote` - A custom thank you note to use for the order receipt email
   * - `enabledVariants` - An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
   */
  productOptions?: {
    /**
     * A custom name for the product
     */
    name?: string
    /**
     * A custom description for the product
     */
    description?: string
    /**
     * An array of image URLs to use as the product's media
     */
    media?: string[]
    /**
     * A custom URL to redirect to after a successful purchase
     */
    redirectUrl?: string
    /**
     * A custom text to use for the order receipt email button
     */
    receiptButtonText?: string
    /**
     * A custom URL to use for the order receipt email button
     */
    receiptLinkUrl?: string
    /**
     * A custom thank you note to use for the order receipt email
     */
    receiptThankYouNote?: string
    /**
     * An array of variant IDs to enable for this checkout. If this is empty, all variants will be enabled.
     */
    enabledVariants?: number[]
    /**
     * A custom text to use for order payment success message alert title
     */
    confirmationTitle?: string
    /**
     * A custom text to use for order payment success message alert content
     */
    confirmationMessage?: string
    /**
     * A custom text to use for order payment success message alert button
     */
    confirmationButtonText?: string
  }
  /**
   * An object containing checkout options for this checkout. Possible options include:
   *
   * - `embed` - If `true`, show the [checkout overlay](https://docs.lemonsqueezy.com/help/checkout/checkout-overlay)
   * - `media` - If `false`, hide the product media
   * - `logo` - If `false`, hide the store logo
   * - `desc` - If `false`, hide the product description
   * - `discount` - If `false`, hide the discount code field
   * - `dark` - If `true`, use the dark theme
   * - `subscription_preview` - If `false`, hide the "You will be charged..." subscription preview text
   * - `buttonColor` - A custom hex color to use for the checkout button. Text within the button will be either white or dark depending on the brightness of your button color.
   */
  checkoutOptions?: {
    /**
     * If `true`, show the checkout overlay
     */
    embed?: boolean
    /**
     *  If `false`, hide the product media
     */
    media?: boolean
    /**
     *  If `false`, hide the store logo
     */
    logo?: boolean
    /**
     * If `false`, hide the product description
     */
    desc?: boolean
    /**
     *  If `false`, hide the discount code field
     */
    discount?: boolean
    /**
     * If `true`, use the dark theme
     */
    dark?: boolean
    /**
     * If `false`, hide the "You will be charged..." subscription preview text
     */
    subscriptionPreview?: boolean
    /**
     * A custom hex color to use for the checkout button
     */
    buttonColor?: string
  }
  /**
   * An object containing any [prefill](https://docs.lemonsqueezy.com/help/checkout/prefilling-checkout-fields) or [custom data](https://docs.lemonsqueezy.com/help/checkout/passing-custom-data) to be used in the checkout. Possible options include:
   *
   * - `email` - A pre-filled email address
   * - `name` - A pre-filled name
   * - `billingAddress.country` - A pre-filled billing address country in a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
   * - `billingAddress.zip` - A pre-filled billing address zip/postal code
   * - `taxNumber` - A pre-filled tax number
   * - `discountCode` - A pre-filled discount code
   * - `custom` - An object containing any custom data to be passed to the checkout
   * - `variantQuantities` - A list containing quantity data objects
   */
  checkoutData?: {
    /**
     * A pre-filled email address
     */
    email?: string
    /**
     * A pre-filled name
     */
    name?: string
    billingAddress?: {
      /**
       * A pre-filled billing address country in a [ISO 3166-1 alpha-2](https://en.wikipedia.org/wiki/ISO_3166-1_alpha-2) format
       */
      country?: ISO3166Alpha2CountryCode
      /**
       * A pre-filled billing address zip/postal code
       */
      zip?: string
    }
    /**
     * A pre-filled tax number
     */
    taxNumber?: string
    /**
     * A pre-filled discount discountCode
     */
    discountCode?: string
    /**
     * An object containing any custom data to be passed to the checkout
     */
    custom?: Record<string, unknown>
    /**
     *  A list containing quantity data objects
     */
    variantQuantities?: {
      variantId: number
      quantity: number
    }[]
  }
  /**
   * A boolean indicating whether to return a preview of the checkout. If `true`, the checkout will include a `preview` object with the checkout preview data.
   */
  preview?: boolean
  /**
   * A boolean indicating whether the checkout should be created in test mode.
   */
  testMode?: boolean
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the checkout expires. Can be null if the checkout is perpetual.
   */
  expiresAt?: null | string
}
export type GetCheckoutParams = Pick<
  Params<(keyof CheckoutResponseData['relationships'])[]>,
  'include'
>
export type ListCheckoutsParams = Params<
  GetCheckoutParams['include'],
  {
    storeId?: number | string
    variantId?: string | number
  }
>
export type Checkout = Omit<
  LemonSqueezyResponse<CheckoutResponseData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListCheckouts = LemonSqueezyResponse<
  CheckoutResponseData[],
  Pick<Meta$1, 'page'>,
  Omit<Links, 'self'>
>

/**
 * Create a checkout.
 *
 * @param storeId (Required) The given store id.
 * @param variantId (Required) The given variant id.
 * @param [checkout] (Optional) A new checkout info.
 * @returns A checkout object.
 *
 * @see https://docs.lemonsqueezy.com/api/checkouts#create-a-checkout
 */
declare function createCheckout(
  storeId: number | string,
  variantId: number | string,
  checkout?: NewCheckout
): Promise<FetchResponse<Checkout>>
/**
 * Retrieve a checkout.
 *
 * @param checkoutId (Required) The checkout id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A checkout object.
 */
declare function getCheckout(
  checkoutId: number | string,
  params?: GetCheckoutParams
): Promise<FetchResponse<Checkout>>
/**
 * List all checkouts.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return products belonging to the store with this ID.
 * @param [params.filter.variantId] (Optional) Only return products belonging to the variant with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of checkout objects ordered by `created_at` (descending).
 */
declare function listCheckouts(
  params?: ListCheckoutsParams
): Promise<FetchResponse<ListCheckouts>>

export type Events =
  | 'order_created'
  | 'order_refunded'
  | 'subscription_created'
  | 'subscription_updated'
  | 'subscription_cancelled'
  | 'subscription_resumed'
  | 'subscription_expired'
  | 'subscription_paused'
  | 'subscription_unpaused'
  | 'subscription_payment_success'
  | 'subscription_payment_failed'
  | 'subscription_payment_recovered'
  | 'subscription_payment_refunded'
  | 'license_key_created'
  | 'license_key_updated'
export type Attributes = {
  /**
   * The ID of the store this webhook belongs to.
   */
  store_id: number
  /**
   * The URL that events will be sent to.
   */
  url: string
  /**
   * An array of events that will be sent.
   */
  events: Events[]
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the last webhook event was sent. Will be `null` if no events have been sent yet.
   */
  last_sent_at: string | null
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was created.
   */
  created_at: string
  /**
   * An [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) formatted date-time string indicating when the object was last updated.
   */
  updated_at: string
  /**
   * A boolean indicating if the object was created within test mode.
   */
  test_mode: boolean
}
export type WebhookData = Data<Attributes, Pick<Relationships, 'store'>>
export type GetWebhookParams = Pick<
  Params<(keyof WebhookData['relationships'])[]>,
  'include'
>
export type ListWebhooksParams = Params<
  GetWebhookParams['include'],
  {
    storeId?: number | string
  }
>
export type Webhook = Omit<
  LemonSqueezyResponse<WebhookData, unknown, Pick<Links, 'self'>>,
  'meta'
>
export type ListWebhooks = LemonSqueezyResponse<
  WebhookData[],
  Pick<Meta$1, 'page'>,
  Pick<Links, 'first' | 'last'>
>
export type NewWebhook = {
  /**
   * (Required) A valid URL of the endpoint that should receive webhook events.
   */
  url: string
  /**
   * (Required) An array of webhook event export types that should be sent to the webhook endpoint. [See the list of available event export types](https://docs.lemonsqueezy.com/help/webhooks#event-export types).
   */
  events: Events[]
  /**
   * (Required) A string used by Lemon Squeezy to sign requests for increased security. (Learn about receiving signed requests)[https://docs.lemonsqueezy.com/help/webhooks#signing-requests].
   *
   * Note: The `secret` is never returned in the API. To view the secret of a webhook, open the webhook in your dashboard.
   */
  secret: string
  /**
   * Set this to `true` if the webhook should be created in test mode.
   */
  testMode?: boolean
}
export type UpdateWebhook = {
  url?: string
  events?: Events[]
  secret?: string
}

/**
 * Create a webhook.
 *
 * @param storeId The store id.
 * @param webhook a new webhook info.
 * @returns A webhook object.
 */
declare function createWebhook(
  storeId: number | string,
  webhook: NewWebhook
): Promise<FetchResponse<Webhook>>
/**
 * Retrieve a webhook.
 *
 * @param webhookId The given webhook id.
 * @param [params] (Optional) Additional parameters.
 * @param [params.include] (Optional) Related resources.
 * @returns A webhook object.
 */
declare function getWebhook(
  webhookId: number | string,
  params?: GetWebhookParams
): Promise<FetchResponse<Webhook>>
/**
 * Update a webhook.
 *
 * @param webhookId The webhook id.
 * @param webhook The webhook info you want to update.
 * @returns A webhook object.
 */
declare function updateWebhook(
  webhookId: number | string,
  webhook: UpdateWebhook
): Promise<FetchResponse<Webhook>>
/**
 * Delete a webhook.
 *
 * @param webhookId The webhook id.
 * @returns A `204` status code and `No Content` response on success.
 */
declare function deleteWebhook(
  webhookId: number | string
): Promise<FetchResponse<null>>
/**
 * List all webhooks.
 *
 * @param [params] (Optional) Additional parameters.
 * @param [params.filter] (Optional) Filter parameters.
 * @param [params.filter.storeId] (Optional) Only return webhooks belonging to the store with this ID.
 * @param [params.page] (Optional) Custom paginated queries.
 * @param [params.page.number] (Optional) The parameter determine which page to retrieve.
 * @param [params.page.size] (Optional) The parameter to determine how many results to return per page.
 * @param [params.include] (Optional) Related resources.
 * @returns A paginated list of webhook objects ordered by `created_at`.
 */
declare function listWebhooks(
  params?: ListWebhooksParams
): Promise<FetchResponse<ListWebhooks>>

export type Meta = {
  store_id: number
  order_id: number
  order_item_id: number
  product_id: number
  product_name: string
  variant_id: number
  variant_name: string
  customer_id: number
  customer_name: string
  customer_email: string
}
export type LicenseKeyStatus = 'inactive' | 'active' | 'expired' | 'disabled'
export type LicenseKey = {
  id: number
  status: LicenseKeyStatus
  key: string
  activation_limit: number
  activation_usage: number
  created_at: string
  expires_at: string | null
  test_mode: boolean
}
export type Instance = {
  id: string
  name: string
  created_at: string
}
export type LicenseResponse = {
  error: string | null
  license_key: LicenseKey
  instance?: Instance | null
  meta: Meta
}
export type ActivateLicense = {
  activated: boolean
} & LicenseResponse
export type ValidateLicense = {
  valid: boolean
} & LicenseResponse
export type DeactivateLicense = {
  deactivated: boolean
} & Omit<LicenseResponse, 'instance'>
