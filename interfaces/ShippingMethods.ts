export interface IShippingMethods {
  code: string;
  name: string;
  description: string;
  price: Price;
  is_discounted: boolean;
  discount: number;
}
interface Price {
  currency?: any;
  excl_tax: string;
  incl_tax: string;
  tax: string;
}
