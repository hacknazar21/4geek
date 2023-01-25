import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Login from "../../../components/Login";
import RestorePassword from "../../../components/RestorePassword";
import process from "process";
import { IPagination } from "../../../interfaces/Pagination";
import { ICategory } from "../../../interfaces/Category";
import { GetServerSideProps } from "next";

function RestorePasswordPage({ categories }) {
  return (
    <CommonLayout className={"login"} categories={categories}>
      <RestorePassword />
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
export default RestorePasswordPage;
