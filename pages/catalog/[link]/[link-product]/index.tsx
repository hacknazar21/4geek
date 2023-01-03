import React from "react";
import CommonLayout from "../../../../layouts/common.layout";
import Product from "../../../../components/Product/Product";

function ProductPage(props) {
  return (
    <CommonLayout className={"product"}>
      <Product />
    </CommonLayout>
  );
}

export default ProductPage;
