import React from "react";
import CommonLayout from "../layouts/common.layout";
import Basket from "../components/basket/Basket";
import { GetServerSideProps } from "next";
import MBasket from "../components/basket/mobile/MBasket";

function BasketPage({ isMobileView }) {
  return (
    <CommonLayout className={"basket"}>
      {!isMobileView && <Basket />}
      {isMobileView && <MBasket />}
    </CommonLayout>
  );
}
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  try {
    return { props: { isMobileView } };
  } catch (e) {
    return {
      props: { isMobileView }, // will be passed to the page component as props
    };
  }
};
export default BasketPage;
