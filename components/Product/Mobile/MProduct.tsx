import React, { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/router";
import useHttp from "../../../hooks/hooks.http";

import MActions from "./MActions";

import { IProduct } from "../../../interfaces/Product";
import { IProductConstructor } from "../../../interfaces/ProductConstructors";
import { IRecommendedCategory } from "../../../interfaces/RecommendedCategory";
import { IAttribute } from "../../../interfaces/Attribute";
import { IPagination } from "../../../interfaces/Pagination";
import { IReview } from "../../../interfaces/Review";
import HeaderMobile from "../../common/HeaderMobile";
import ProductSlider from "../ProductSlider";
import Info from "../Info";
import ThirdSlider from "../ThirdSlider";
import { IBlock } from "../../../interfaces/Block";
import { AuthContext } from "../../../context/AuthContext";
import { ProfileContext } from "../../../context/ProfileContext";
import { ErrorContext } from "../../../context/ErrorContext";

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
  review: IBlock;
}
function MProduct({
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
  const { reInitProfile } = useContext(ProfileContext);
  const { showError } = useContext(ErrorContext);

  useEffect(() => {
    if (!!link) {
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
    }
  }, [link]);
  async function addToWishListHandler(event) {
    if (!!token) {
      animateAddWishlist(event.target.closest("span"));
      await request(
        `/api/products/${product.lookup_slug}/add_to_wishlist/`,
        "POST",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
    } else {
      showError(
        "Вы должны быть авторизованы, чтобы добавить товар в Список избранного"
      );
    }
  }
  const animateAddWishlist = (product: any) => {
    product.classList.toggle("product-card__wishlist_active");
  };
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
      <HeaderMobile title={product.title} />
      <MActions addToWishListHandler={addToWishListHandler} />
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
      <>{!!similar.length && <ThirdSlider similar={similar} />}</>
    </ProductContext.Provider>
  );
}

export default MProduct;
