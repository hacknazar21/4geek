import React from "react";
import CommonLayout from "../layouts/common.layout";
import Basket from "../components/basket/Basket";
import { GetServerSideProps } from "next";
import process from "process";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import Favourite from "../components/favourite/Favourite";

function FavouritePage({ isMobileView, categories }) {
  return (
    <CommonLayout className={"favourite"} categories={categories}>
      <Favourite />
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);

  try {
    const resCategories = await fetch(
      `${process.env.API_HOST}/api/categories/`
    );
    const categories: IPagination<ICategory> = await resCategories.json();
    return { props: { isMobileView, categories } };
  } catch (e) {
    return {
      props: { isMobileView }, // will be passed to the page component as props
    };
  }
};
export default FavouritePage;
