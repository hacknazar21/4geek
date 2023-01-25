import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Login from "../../../components/Login";
import { GetServerSideProps } from "next";
import { IPagination } from "../../../interfaces/Pagination";
import { ICategory } from "../../../interfaces/Category";
import process from "process";
import { IProduct } from "../../../interfaces/Product";

function LoginPage({ categories }) {
  return (
    <CommonLayout categories={categories} className={"login"}>
      <Login />
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const resCategories = await fetch(`${process.env.API_HOST}/api/categories/`);
  const categories: IPagination<ICategory> = await resCategories.json();
  return {
    props: { categories }, // will be passed to the page component as props
  };
};
export default LoginPage;
