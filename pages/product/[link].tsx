import React from "react";
import CommonLayout from "../../layouts/common.layout";
import Product from "../../components/Product/Product";
import process from "process";
import { IProduct } from "../../interfaces/Product";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps, GetStaticProps } from "next";

interface Props {
  product: IProduct;
}
function ProductPage(props: Props) {
  const { product } = props;
  return (
    <CommonLayout className={"product"}>
      <Product product={product} />
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  try {
    const res = await fetch(`${process.env.API_HOST}/api/products/${link}`);
    const product: IProduct = await res.json();
    return {
      props: { product }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: { product: {} }, // will be passed to the page component as props
    };
  }
};
export default ProductPage;