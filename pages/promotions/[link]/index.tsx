import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Promotion from "../../../components/promotion/Promotion";

function PromotionPage(props) {
  return (
    <CommonLayout className={"promotion"}>
      <Promotion />
    </CommonLayout>
  );
}

export default PromotionPage;
