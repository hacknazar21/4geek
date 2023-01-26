import React, { createContext, useEffect } from "react";
import Actions from "./Actions";
import FirstSlider from "./FirstSlider";
import SecondSlider from "./SecondSlider";
import Info from "./Info";
import ThirdSlider from "./ThirdSlider";
import { IProduct } from "../../interfaces/Product";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IRecommendedCategory } from "../../interfaces/RecommendedCategory";
import ProductSlider from "./ProductSlider";
import { IAttribute } from "../../interfaces/Attribute";
import { IPagination } from "../../interfaces/Pagination";
import { IReview } from "../../interfaces/Review";
const productInit: IProduct = null;
const constructorsInit: IProductConstructor[] = [];
const similarInit: IProduct[] = [];
const recommendedInit: IRecommendedCategory[] = [];
const attributesInit: IAttribute[] = [];
const reviewsInit: IPagination<IReview> = null;
export const ProductContext = createContext({
  product: productInit,
  constructors: constructorsInit,
  similar: similarInit,
  recommended: recommendedInit,
  attributes: attributesInit,
  reviews: reviewsInit,
});
interface Props {
  product: IProduct;
  constructors: IProductConstructor[];
  recommended: IRecommendedCategory[];
  similar: IProduct[];
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
}
function Product({
  product,
  constructors,
  recommended,
  similar,
  attributes,
  reviews,
}: Props) {
  return (
    <ProductContext.Provider
      value={{
        product,
        constructors,
        similar,
        recommended,
        attributes,
        reviews,
      }}
    >
      <Actions />
      <>
        {recommended.map((recommendedItem) => (
          <ProductSlider
            id={recommendedItem.id}
            title={recommendedItem.name}
            products={recommendedItem.products}
          />
        ))}
      </>
      <Info />
      <ThirdSlider />
    </ProductContext.Provider>
  );
}

export default Product;
