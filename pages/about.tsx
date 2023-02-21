import React from "react";
import CommonLayout from "../layouts/common.layout";
import About from "../components/about/About";
import process from "process";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetStaticProps } from "next";
import Head from "next/head";

function AboutPage({ categories }) {
  return (
    <>
      <Head>
        <title>О компании</title>
      </Head>
      <CommonLayout className={"about"} categories={categories}>
        <About />
      </CommonLayout>
    </>
  );
}
export const getStaticProps: GetStaticProps = async (ctx) => {
  try {
    const resCategories = await fetch(
      `${process.env.API_HOST}/api/categories/`
    );
    const categories: IPagination<ICategory> = await resCategories.json();
    return { props: { categories }, revalidate: 900 };
  } catch (e) {
    return {
      props: { categories: {}, revalidate: 900 }, // will be passed to the page component as props
    };
  }
};

export default AboutPage;
