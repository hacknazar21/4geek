import { IImage } from "./Image";

export interface IProduct {
  url: string;
  upc: string;
  id: number;
  title: string;
  description: string;
  structure: string;
  date_created: Date;
  date_updated: Date;
  recommended_products: string[];
  attributes: Attribute[];
  categories: string[];
  product_class: string;
  images: IImage[];
  price: number;
  availability: string;
  stockrecords: string;
  options: Option[];
  children: Child[];
  lookup_slug: string;
  is_in_wishlist: boolean;
}

interface Attribute {
  name: string;
  value: string[];
  code: string;
}

interface Option {
  url: string;
  code: string;
  name: string;
  type: string;
  required: boolean;
  help_text: string;
  order: number;
  option_group: string;
}

interface Attribute2 {
  name: string;
  value: string;
  code: string;
}

interface Option2 {
  url: string;
  code: string;
  name: string;
  type: string;
  required: boolean;
  help_text: string;
  order: number;
  option_group: string;
}

interface Child {
  url: string;
  upc: string;
  id: number;
  title: string;
  structure: string;
  date_created: Date;
  date_updated: Date;
  recommended_products: string[];
  attributes: Attribute2[];
  categories: string[];
  product_class: string;
  price: string;
  availability: string;
  options: Option2[];
}
