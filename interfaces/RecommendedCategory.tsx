import { IProduct } from "./Product";

export interface IRecommendedCategory {
  id: string;
  name: string;
  products: IProduct[];
}
