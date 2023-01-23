import React from "react";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import Prod2 from "../../src/img/placeholders/products/2.png";
import Prod3 from "../../src/img/placeholders/products/3.png";
import Prod4 from "../../src/img/placeholders/products/4.png";
import Prod5 from "../../src/img/placeholders/products/5.png";
import Prod6 from "../../src/img/placeholders/products/6.png";
import { SwiperOptions } from "swiper/types/swiper-options";
import Slider from "../common/Slider";

function HotProducts(props) {
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
    <section className="home__hot-products hot-products">
      <div className="hot-products__container">
        <h2 className="hot-products__title section-title">
          <span>
            <svg
              width="16"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.56934 19.9873C12.2979 19.9873 15.4619 16.7969 15.4619 11.998C15.4619 4.05273 8.66797 0.730469 3.97461 0.730469C3.07812 0.730469 2.48926 1.06445 2.48926 1.70605C2.48926 1.95215 2.60352 2.21582 2.79688 2.44434C3.87793 3.74512 4.88867 5.16895 4.89746 6.85645C4.89746 7.03223 4.88867 7.19043 4.85352 7.36621C4.33496 6.28516 3.47363 5.65234 2.69141 5.65234C2.27832 5.65234 1.99707 5.94238 1.99707 6.39941C1.99707 6.66309 2.05859 7.15527 2.05859 7.58594C2.05859 9.59863 0.529297 10.6445 0.529297 13.8789C0.529297 17.5439 3.33301 19.9873 7.56934 19.9873ZM7.78027 17.2803C6.14551 17.2803 5.06445 16.3047 5.06445 14.8369C5.06445 13.3076 6.13672 12.7979 6.27734 11.7432C6.29492 11.6377 6.37402 11.5938 6.4707 11.6729C6.85742 12.0244 7.1123 12.4639 7.32324 12.9912C7.77148 12.3145 7.94727 11.04 7.78906 9.66895C7.77148 9.55469 7.85938 9.49316 7.96484 9.53711C9.86328 10.4072 10.8828 12.2881 10.8828 14.0459C10.8828 15.8037 9.82812 17.2803 7.78027 17.2803Z"
                fill="#EC6646"
              />
            </svg>
          </span>
          Офигенные товары
        </h2>
        <Slider
          options={settings}
          isPag={false}
          isNav={true}
          className={"hot-products__slider"}
        >
          <ProductCard
            image={Prod1.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod2.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod3.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod4.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod5.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod6.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod1.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod4.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
          <ProductCard
            image={Prod5.src}
            name={"Apple Watch Ultra"}
            price={850000}
            old_price={1850000}
          />
        </Slider>
      </div>
    </section>
  );
}

export default HotProducts;
