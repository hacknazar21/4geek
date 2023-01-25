import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import process from "process";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetServerSideProps } from "next";
interface Props {
  categories: IPagination<ICategory>;
  children: any;
  className: string;
}
export default function CommonLayout({
  children,
  className,
  categories,
}: Props) {
  const classes = ["main", className];
  return (
    <div className={"wrapper wrapper-" + className}>
      <Header categories={categories.results} />
      <main className={classes.join(" ")}>{children}</main>
      <Footer />
    </div>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  try {
    const res = await fetch(process.env.API_HOST + "/api/categories/");
    const categories: IPagination<ICategory> = await res.json();
    return { props: { categories, isMobileView } };
  } catch (e) {
    return {
      props: { categories: {}, isMobileView }, // will be passed to the page component as props
    };
  }
};
