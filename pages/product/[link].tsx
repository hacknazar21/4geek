import React, { useEffect } from "react";
import CommonLayout from "../../layouts/common.layout";
import Product from "../../components/Product/Product";
import process from "process";
import { IProduct } from "../../interfaces/Product";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps, GetStaticProps } from "next";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IRecommendedCategory } from "../../interfaces/RecommendedCategory";
import { IAttribute } from "../../interfaces/Attribute";
import { IReview } from "../../interfaces/Review";

interface Props {
  product: IProduct;
  categories: IPagination<ICategory>;
  constructors: IProductConstructor[];
  recommended: IRecommendedCategory[];
  similar: IProduct[];
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
}
function ProductPage(props: Props) {
  const {
    product,
    categories,
    constructors,
    recommended,
    similar,
    attributes,
    reviews,
  } = props;
  return (
    <CommonLayout className={"product"} categories={categories}>
      <Product
        product={product}
        constructors={constructors}
        recommended={recommended}
        similar={similar}
        attributes={attributes}
        reviews={reviews}
      />
    </CommonLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  try {
    const res = await fetch(`${process.env.API_HOST}/api/products/${link}`);
    const product: IProduct = await res.json();
    const resCategories = await fetch(
      `${process.env.API_HOST}/api/categories/`
    );
    const categories: IPagination<ICategory> = await resCategories.json();
    const resConstructors = await fetch(
      `${process.env.API_HOST}/api/products/${link}/constructors/`
    );
    const constructors: IProductConstructor[] = await resConstructors.json();
    const resRecommended = await fetch(
      `${process.env.API_HOST}/api/products/${link}/recommended_categories/`
    );
    const recommended: IRecommendedCategory[] = await resRecommended.json();
    const resSimilar = await fetch(
      `${process.env.API_HOST}/api/products/${link}/similar/`
    );
    const similar: IProduct[] = await resSimilar.json();
    const resAttributes = await fetch(
      `${process.env.API_HOST}/api/products/${link}/attributes/`
    );
    const attributes: IAttribute[] = await resAttributes.json();
    const resReviews = await fetch(
      `${process.env.API_HOST}/api/products/reviews/?product__lookup_slug=${link}`
    );
    const reviews: IPagination<IReview> = await resReviews.json();
    return {
      props: {
        product,
        categories,
        constructors,
        recommended,
        similar,
        attributes,
        reviews,
      }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: {
        product: {},
        categories: {},
        constructors: [],
        recommended: [],
        similar: [],
        attributes: [],
        reviews: {},
      }, // will be passed to the page component as props
    };
  }
};
export default ProductPage;
