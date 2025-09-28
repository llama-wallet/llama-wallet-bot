import { User } from "./user"

export interface Invoice {
  title: string
  description: string
  start_parameter: string
  currency: string
  total_amount: number
}

export interface ShippingAddress {
  country_code: string
  state: string
  city: string
  street_line1: string
  street_line2: string
  post_code: string
}

export interface OrderInfo {
  name?: string
  phone_number?: string
  email?: string
  shipping_address?: ShippingAddress
}

export interface SuccessfulPayment {
  currency: string
  total_amount: number
  invoice_payload: string
  shipping_option_id?: string
  order_info?: OrderInfo
  telegram_payment_charge_id: string
  provider_payment_charge_id: string
}

export interface RefundedPayment {
  currency: string
  total_amount: number
  invoice_payload: string
  telegram_payment_charge_id: string
  provider_payment_charge_id?: string
}

export interface ShippingQuery {
  id: string
  from: User
  invoice_payload: string
  shipping_address: ShippingAddress
}

export interface PreCheckoutQuery {
  id: string
  from: User
  currency: string
  total_amount: number
  invoice_payload: string
  shipping_option_id?: string
  order_info?: OrderInfo
}
