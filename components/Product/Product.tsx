import React from "react";
import Actions from "./Actions";
import FirstSlider from "./FirstSlider";
import SecondSlider from "./SecondSlider";
import Info from "./Info";
import ThirdSlider from "./ThirdSlider";

function Product(props) {
  return (
    <>
      <Actions />
      <FirstSlider />
      <SecondSlider />
      <Info />
      <ThirdSlider />
    </>
  );
}

export default Product;
