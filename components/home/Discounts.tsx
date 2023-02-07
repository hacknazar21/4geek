import React, { useEffect } from "react";
import Swiper, { Grid, Navigation } from "swiper";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import Prod2 from "../../src/img/placeholders/products/2.png";
import Prod3 from "../../src/img/placeholders/products/3.png";
import Prod4 from "../../src/img/placeholders/products/4.png";
import Prod5 from "../../src/img/placeholders/products/5.png";
import Prod6 from "../../src/img/placeholders/products/6.png";
import { SwiperOptions } from "swiper/types/swiper-options";
import Slider from "../common/Slider";
import { IProduct } from "../../interfaces/Product";
interface Props {
  products: IProduct[];
  title: string;
}
function Discounts({ products, title }: Props) {
  const settings: SwiperOptions = {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,
    grid: {
      fill: "row",
      rows: 2,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 6,
        grid: {
          fill: "row",
          rows: 1,
        },
      },
      480: {
        slidesPerView: 2.5,
      },
      990: {
        slidesPerView: 4,
      },
    },
  };
  return (
    <section className="home__discounts discounts">
      <div className="discounts__container">
        <h2 className="discounts__title section-title">{title}</h2>
        <Slider
          options={settings}
          isPag={false}
          isNav={true}
          className={"discounts__slider"}
        >
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Discounts;
