import React, { useEffect } from "react";
import CommonLayout from "../../layouts/common.layout";
import Product from "../../components/Product/Product";
import process from "process";
import { IProduct } from "../../interfaces/Product";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IAttribute } from "../../interfaces/Attribute";
import { IReview } from "../../interfaces/Review";

interface Props {
  product: IProduct;
  categories: IPagination<ICategory>;
  constructors: IProductConstructor[];
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
}
function ProductPage(props: Props) {
  const { product, categories, constructors, attributes, reviews } = props;
  return (
    <CommonLayout className={"product"} categories={categories}>
      <Product
        product={product}
        constructors={constructors}
        attributes={attributes}
        reviews={reviews}
      />
    </CommonLayout>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  try {
    let product: IProduct = null;
    let categories: IPagination<ICategory> = null;
    let constructors: IProductConstructor[] = null;
    let attributes: IAttribute[] = null;
    let reviews: IPagination<IReview> = null;
    await Promise.all([
      fetch(`${process.env.API_HOST}/api/products/${link}`),
      fetch(`${process.env.API_HOST}/api/categories/`),
      fetch(`${process.env.API_HOST}/api/products/${link}/constructors/`),
      fetch(`${process.env.API_HOST}/api/products/${link}/attributes/`),
      fetch(
        `${process.env.API_HOST}/api/products/reviews/?product__lookup_slug=${link}`
      ),
    ]).then(async (results) => {
      await Promise.all([...results.map((result) => result.json())]).then(
        (jsons) => {
          product = jsons[0];
          categories = jsons[1];
          constructors = jsons[2];
          attributes = jsons[3];
          reviews = jsons[4];
        }
      );
    });
    return {
      props: {
        product,
        categories,
        constructors,
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
