import { IProduct } from "./Product";

export interface Line {
  id: number;
  product: IProduct;
  quantity: number;
  attributes: any[];
  price_currency: string;
  price_excl_tax: string;
  price_incl_tax: string;
  price_incl_tax_excl_discounts: string;
  price_excl_tax_excl_discounts: string;
  is_tax_known: boolean;
  warning?: any;
  stockrecord: string;
  date_created: Date;
  date_updated: Date;
}
export interface IBasket {
  id: number;
  status: string;
  lines: Line[];
  url: string;
  owner?: any;
  total_incl_tax: string;
  total_incl_tax_excl_discounts: string;
  currency: string;
  voucher_discounts: any[];
  offer_discounts: any[];
}
