import { Line } from "./Basket";

export interface IOrder {
  id: number;
  number: string;
  basket: string;
  lines: {
    product: {
      image: string;
      title: string;
    };
    quantity: number;
    price_currency: string;
    price_excl_tax: string;
    price_incl_tax: string;
    price_incl_tax_excl_discounts: string;
    price_excl_tax_excl_discounts: string;
  }[];
  billing_address: BillingAddress;
  currency: string;
  total_incl_tax: string;
  total_excl_tax: string;
  shipping_incl_tax: string;
  shipping_excl_tax: string;
  shipping_address: ShippingAddress;
  shipping_method: string;
  shipping_code: string;
  status: string;
  email: string;
  date_placed: string;
  payment_url: string;
  offer_discounts: string;
  voucher_discounts: string;
  surcharges: Surcharge[];
  customer_email: string;
  customer_name: string;
  customer_phone: string;
}

interface BillingAddress {
  id: number;
  country: string;
  district: string;
  street: string;
  house: string;
  apartment: string;
  entrance: string;
  floor: string;
  intercom: string;
  title: string;
  first_name: string;
  last_name: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  state: string;
  postcode: string;
  search_text: string;
}

interface ShippingAddress {
  id: number;
  country: string;
  district: string;
  street: string;
  house: string;
  apartment: string;
  entrance: string;
  floor: string;
  intercom: string;
  title: string;
  first_name: string;
  last_name: string;
  line1: string;
  line2: string;
  line3: string;
  line4: string;
  state: string;
  postcode: string;
  search_text: string;
  phone_number: string;
  notes: string;
}

interface Surcharge {
  name: string;
  code: string;
  incl_tax: string;
  excl_tax: string;
}
