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
import { getDataFromAPI, isMobileView } from "../../helpers/server";
import Head from "next/head";
import { useMobile } from "../../hooks/hooks.mobile";
import MProduct from "../../components/Product/Mobile/MProduct";
import { IBlock } from "../../interfaces/Block";

interface Props {
  product: IProduct;
  categories: IPagination<ICategory>;
  constructors: IProductConstructor[];
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
  review: IBlock<any>;
  isMobileServer: boolean;
}
function ProductPage(props: Props) {
  const { product, categories, constructors, attributes, reviews, review } =
    props;
  const { isMobile } = useMobile();
  return (
    <>
      <Head>
        <title>{product?.title || "Loading..."}</title>
      </Head>
      <CommonLayout className={"product"} categories={categories}>
        {!isMobile && (
          <Product
            product={product}
            constructors={constructors}
            attributes={attributes}
            reviews={reviews}
            review={review}
          />
        )}
        {isMobile && (
          <MProduct
            product={product}
            constructors={constructors}
            attributes={attributes}
            reviews={reviews}
            review={review}
          />
        )}
      </CommonLayout>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  const cookies = context.req.headers.cookie;

  try {
    const props = {};
    await Promise.all([
      getDataFromAPI<IProduct>(`/api/products/${link}`, cookies),
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
      getDataFromAPI<IProductConstructor[]>(
        `/api/products/${link}/constructors/`,
        cookies
      ),
      getDataFromAPI<IAttribute[]>(
        `/api/products/${link}/attributes/`,
        cookies
      ),
      getDataFromAPI<IPagination<IReview>>(
        `/api/products/reviews/?product__lookup_slug=${link}`,
        cookies
      ),
      getDataFromAPI<IBlock<any>>(
        `/api/products/${link}/review_page/`,
        cookies
      ),
    ]).then((data) => {
      props["product"] = data[0];
      props["categories"] = data[1];
      props["constructors"] = data[2];
      props["attributes"] = data[3];
      props["reviews"] = data[4];
      props["review"] = data[5];
    });
    props["isMobileServer"] = isMobileView(context);
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
