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
import { IProduct } from "../../interfaces/Product";
interface Props {
  title: string;
  products: IProduct[];
}
export default function ProductSlider({ title, products, id }: Props) {
  const sliderOptions: SwiperOptions = {
    slidesPerView: 4,
    spaceBetween: 10,
  };
  return (
    <>
      <section id={"recommended-" + id} className="product__slider-box">
        <div className="product__container">
          <h2 className="product__section-title section-title">{title}</h2>
          <Slider options={sliderOptions} className={"product__slider"}>
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </Slider>
        </div>
      </section>
    </>
  );
}
