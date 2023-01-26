import React, { useContext, useEffect, useRef } from "react";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import Prod2 from "../../src/img/placeholders/products/2.png";
import Prod3 from "../../src/img/placeholders/products/3.png";
import Prod4 from "../../src/img/placeholders/products/4.png";
import Prod5 from "../../src/img/placeholders/products/5.png";
import Prod6 from "../../src/img/placeholders/products/6.png";
import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import { ProductContext } from "./Product";

export default function ThirdSlider(props) {
  const { similar } = useContext(ProductContext);
  const sliderOptions: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
  };
  if (!!similar?.length)
    return (
      <>
        <section id={"same_products"} className="product__slider-box">
          <div className="product__container">
            <h2 className="product__section-title section-title">
              Похожие товары
            </h2>
            <Slider options={sliderOptions} className={"product__slider-3"}>
              {similar.map((similar) => (
                <ProductCard product={similar} />
              ))}
            </Slider>
          </div>
        </section>
      </>
    );
  return <></>;
}
