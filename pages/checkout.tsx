import React from "react";
import CommonLayout from "../layouts/common.layout";
import Checkout from "../components/checkout/Checkout";
import process from "process";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetServerSideProps } from "next";
import { IPaymentMethod } from "../interfaces/PaymentMethod";
import { IShippingMethods } from "../interfaces/ShippingMethods";

function CheckoutPage({
  isMobileView,
  categories,
  paymentMethods,
  shippingMethods,
  points,
}) {
  return (
    <CommonLayout className={"checkout"} categories={categories}>
      <Checkout
        paymentMethods={paymentMethods}
        shippingMethods={shippingMethods}
        points={points}
      />
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
    const resPaymentMethods = await fetch(
      `${process.env.API_HOST}/api/basket/payment-methods/`
    );
    const paymentMethods: IPaymentMethod[] = await resPaymentMethods.json();
    const resShippingMethods = await fetch(
      `${process.env.API_HOST}/api/basket/payment-methods/`
    );
    const shippingMethods: IShippingMethods[] = await resShippingMethods.json();
    const resPoints = await fetch(`${process.env.API_HOST}/api/pickup/points/`);
    const points: IShippingMethods[] = await resPoints.json();
    return {
      props: {
        isMobileView,
        categories,
        paymentMethods,
        shippingMethods,
        points,
      },
    };
  } catch (e) {
    return {
      props: { isMobileView }, // will be passed to the page component as props
    };
  }
};
export default CheckoutPage;
