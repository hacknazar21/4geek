import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Promotion from "../../../components/promotion/Promotion";
import { IPagination } from "../../../interfaces/Pagination";
import { ICategory } from "../../../interfaces/Category";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../../helpers/server";
import { IPromotion } from "../../../interfaces/Promotion";

interface Props {
  categories: IPagination<ICategory>;
  promotion: IPromotion;
}

function PromotionPage({ categories, promotion }: Props) {
  return (
    <CommonLayout className={"promotion"} categories={categories}>
      <Promotion promotion={promotion} />
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const { link } = context.params;
    const cookies = context.req.headers.cookie;
    const props = {};
    await Promise.all([
      getDataFromAPI<IPromotion>(`/api/content/benefits/${link}`, cookies),
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
    ]).then((data) => {
      props["promotion"] = data[0];
      props["categories"] = data[1];
    });
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        promotion: {},
        categories: {},
      }, // will be passed to the page component as props
    };
  }
};

export default PromotionPage;
