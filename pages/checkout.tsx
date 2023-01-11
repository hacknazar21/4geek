import React from "react";
import CommonLayout from "../layouts/common.layout";
import Checkout from "../components/checkout/Checkout";

function CheckoutPage(props) {
  return (
    <CommonLayout className={"checkout"}>
      <Checkout />
    </CommonLayout>
  );
}

export default CheckoutPage;
