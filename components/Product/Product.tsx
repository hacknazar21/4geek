import React, { createContext, useEffect } from "react";
import Actions from "./Actions";
import FirstSlider from "./FirstSlider";
import SecondSlider from "./SecondSlider";
import Info from "./Info";
import ThirdSlider from "./ThirdSlider";
import { IProduct } from "../../interfaces/Product";
const product: IProduct = null;
export const ProductContext = createContext({
  product,
});
function Product({ product }) {
  return (
    <ProductContext.Provider value={{ product }}>
      <Actions />
      <FirstSlider />
      <SecondSlider />
      <Info />
      <ThirdSlider />
    </ProductContext.Provider>
  );
}

export default Product;
