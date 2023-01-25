import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import ChangePassword from "../../components/profile/ChangePassword";
import process from "process";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";

function ChangePasswordPage({ categories }) {
  return (
    <CommonLayout className={"profile"} categories={categories}>
      <ProfileLayout>
        <ChangePassword />
      </ProfileLayout>
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
export default ChangePasswordPage;
