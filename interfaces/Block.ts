import { IProduct } from "./Product";
import { ICategory } from "./Category";

export interface IBlock<T> {
  blocks: Block<T>[];
  title: string;
  codename: string;
}
interface Block<T> {
  block_type:
    | "COMPOSITE"
    | "BANNER"
    | "STATIC"
    | "DATA"
    | "SINGLE_OBJECT"
    | "PRODUCT_LIST";

  data_content_type: "CATEGORY" | "BENEFIT" | "VIDEO" | "BLOGPOST";
  image?: string;
  banner_image: string | null;
  banner_url: string | null;
  data: T[] | null;
  data_url: any;
  children: any;
  related_object?: RelatedObject | null;
  codename: string;
  title?: string;
  subtitle: any;
  text: string;
  products: IProduct[];
  additional_data: any;
}
interface RelatedObject {
  id: number;
  model: string;
  created_at: string;
  updated_at: string;
  title: string;
  description: string;
  url: string;
  pk: string;
  preview_url: string;
}
