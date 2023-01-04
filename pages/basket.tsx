import React from "react";
import CommonLayout from "../layouts/common.layout";
import Basket from "../components/basket/Basket";

function BasketPage(props) {
  return (
    <CommonLayout className={"basket"}>
      <Basket />
    </CommonLayout>
  );
}

export default BasketPage;
