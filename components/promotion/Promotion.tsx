import React from "react";
import PromoSlider from "./PromoSlider";
import PromoInfo from "./PromoInfo";
import PromoProducts from "./PromoProducts";

function Promotion(props) {
  return (
    <>
      <PromoSlider />
      <PromoInfo />
      <PromoProducts />
    </>
  );
}

export default Promotion;
