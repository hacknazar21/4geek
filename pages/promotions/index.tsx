import React from "react";
import CommonLayout from "../../layouts/common.layout";
import Promotions from "../../components/promotions/Promotions";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../helpers/server";
import { IPromotion } from "../../interfaces/Promotion";

interface Props {
  categories: IPagination<ICategory>;
  promotions: IPagination<IPromotion>;
}

function PromotionsPage({ categories, promotions }: Props) {
  return (
    <CommonLayout className={"promotions"} categories={categories}>
      <Promotions promotions={promotions} />
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.headers.cookie;
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<IPromotion>>(
        `/api/content/benefits/`,
        cookies
      ),
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
    ]).then((data) => {
      props["promotions"] = data[0];
      props["categories"] = data[1];
    });
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        promotions: {},
        categories: {},
      }, // will be passed to the page component as props
    };
  }
};

export default PromotionsPage;
