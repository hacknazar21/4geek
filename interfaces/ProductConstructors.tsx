interface Choice {
  value: string;
  product_slug: string;
  is_selected: boolean;
  in_stock: boolean;
}
export interface IProductConstructor {
  id: string;
  group_type: string;
  choices: Choice[];
}
