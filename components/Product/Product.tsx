import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";

import Actions from "./Actions";
import Info from "./Info";
import ThirdSlider from "./ThirdSlider";
import ProductSlider from "./ProductSlider";

import { IProduct } from "../../interfaces/Product";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IRecommendedCategory } from "../../interfaces/RecommendedCategory";
import { IAttribute } from "../../interfaces/Attribute";
import { IPagination } from "../../interfaces/Pagination";
import { IReview } from "../../interfaces/Review";
import { IBlock } from "../../interfaces/Block";
import { AuthContext } from "../../context/AuthContext";

const productInit: IProduct = null;
const constructorsInit: IProductConstructor[] = [];
const similarInit: IProduct[] = [];
const recommendedInit: IRecommendedCategory[] = [];
const attributesInit: IAttribute[] = [];
const reviewsInit: IPagination<IReview> = null;

export const ProductContext = createContext({
  product: productInit,
  constructors: constructorsInit,
  attributes: attributesInit,
  reviews: reviewsInit,
  recommended: recommendedInit,
});
interface Props {
  product: IProduct;
  constructors: IProductConstructor[];
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
  review: IBlock<any>;
}
function Product({
  product,
  constructors,
  attributes,
  reviews,
  review,
}: Props) {
  const [recommended, setRecommended] = useState<IRecommendedCategory[]>([]);
  const [similar, setSimilar] = useState<IProduct[]>([]);
  const {
    query: { link },
  } = useRouter();
  const { request } = useHttp();
  const { token } = useContext(AuthContext);
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
  async function addToWishListHandler(event) {
    animateAddWishlist(event.target.closest("span"));
    await request(
      `/api/products/${product.lookup_slug}/add_to_wishlist/`,
      "POST",
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
  }
  const animateAddWishlist = (product: any) => {
    product.classList.toggle("product-card__wishlist_active");
  };
  return (
    <ProductContext.Provider
      value={{
        product,
        constructors,
        attributes,
        reviews,
        recommended,
      }}
    >
      <Actions addToWishListHandler={addToWishListHandler} />
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
      <Info attributes={attributes} reviews={reviews} review={review} />
      <ThirdSlider similar={similar} />
    </ProductContext.Provider>
  );
}

export default Product;
