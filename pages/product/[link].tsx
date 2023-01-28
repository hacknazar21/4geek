import React from "react";
import CommonLayout from "../../layouts/common.layout";
import Product from "../../components/Product/Product";
import { IProduct } from "../../interfaces/Product";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IAttribute } from "../../interfaces/Attribute";
import { IReview } from "../../interfaces/Review";
import { getDataFromAPI } from "../../helpers/server";

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
    const props = {};
    await Promise.all([
      getDataFromAPI<IProduct>(`/api/products/${link}`),
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`),
      getDataFromAPI<IProductConstructor[]>(
        `/api/products/${link}/constructors/`
      ),
      getDataFromAPI<IAttribute[]>(`/api/products/${link}/attributes/`),
      getDataFromAPI<IPagination<IReview>>(
        `/api/products/reviews/?product__lookup_slug=${link}`
      ),
    ]).then((data) => {
      props["product"] = data[0];
      props["categories"] = data[1];
      props["constructors"] = data[2];
      props["attributes"] = data[3];
      props["reviews"] = data[4];
    });
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        product: {},
        categories: {},
        constructors: [],
        attributes: [],
        reviews: {},
      }, // will be passed to the page component as props
    };
  }
};
export default ProductPage;
