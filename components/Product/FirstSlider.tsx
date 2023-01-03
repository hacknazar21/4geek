import React, { useEffect, useRef } from "react";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import Prod2 from "../../src/img/placeholders/products/2.png";
import Prod3 from "../../src/img/placeholders/products/3.png";
import Prod4 from "../../src/img/placeholders/products/4.png";
import Prod5 from "../../src/img/placeholders/products/5.png";
import Prod6 from "../../src/img/placeholders/products/6.png";
import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";

export default function FirstSlider(props) {
  const sliderOptions: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
  };
  return (
    <>
      <section id={"accessories"} className="product__slider-box">
        <div className="product__container">
          <h2 className="product__section-title section-title">Аксессуары</h2>
          <Slider options={sliderOptions} className={"product__slider"}>
            <ProductCard
              image={Prod1.src}
              name={"Apple Watch Ultra"}
              price={850000}
              link={""}
            />
            <ProductCard
              image={Prod2.src}
              name={"Apple Watch Ultra"}
              price={850000}
              link={""}
            />
            <ProductCard
              image={Prod3.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod4.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod5.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod6.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod1.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod4.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
            <ProductCard
              image={Prod5.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </Slider>
        </div>
      </section>
    </>
  );
}
