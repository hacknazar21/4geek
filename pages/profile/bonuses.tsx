import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import Bonuses from "../../components/profile/Bonuses";
import process from "process";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";

function BonusesPage({ categories }) {
  return (
    <CommonLayout className={"profile"} categories={categories}>
      <ProfileLayout>
        <Bonuses />
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
export default BonusesPage;
