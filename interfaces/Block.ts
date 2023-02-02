import { IProduct } from "./Product";
import { ICategory } from "./Category";

export interface IBlock {
  blocks: Block[];
  title: string;
  codename: string;
}
interface Block {
  block_type: "COMPOSITE" | "BANNER" | "STATIC" | "DATA" | "SINGLE_OBJECT";
  image?: string;
  banner_image: string | null;
  banner_url: string | null;
  data: IProduct[] | ICategory[];
  data_url: any;
  children: any;
  related_object?: RelatedObject | null;
  codename: string;
  title?: string;
  subtitle: any;
  text: string;
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
