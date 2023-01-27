import React, { createContext, useEffect, useState } from "react";
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
import process from "process";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
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
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
}
function Product({ product, constructors, attributes, reviews }: Props) {
  const [recommended, setRecommended] = useState<IRecommendedCategory[]>([]);
  const [similar, setSimilar] = useState<IProduct[]>([]);
  const {
    query: { link },
  } = useRouter();
  const { request } = useHttp();
  useEffect(() => {
    setSimilar([]);
    setRecommended([]);
    (async () => {
      const r1 = request(`/api/products/${link}/recommended_categories/`);
      const r2 = request(`/api/products/${link}/similar/`);
      const recommended: IRecommendedCategory[] = await r1;
      setRecommended(recommended);
      const similar: IProduct[] = await r2;
      setSimilar(similar);
    })();
  }, [link]);

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
            key={recommendedItem.id}
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
