import React, { useEffect } from "react";
import CommonLayout from "../../layouts/common.layout";
import Promotions from "../../components/promotions/Promotions";
import { useRouter } from "next/router";

function PromotionsPage(props) {
  return (
    <CommonLayout className={"promotions"}>
      <Promotions />
    </CommonLayout>
  );
}

export default PromotionsPage;
