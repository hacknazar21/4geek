import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Items from "./Items";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import Prod2 from "../../src/img/placeholders/products/2.png";
import Prod3 from "../../src/img/placeholders/products/3.png";
import Prod4 from "../../src/img/placeholders/products/4.png";
import Prod5 from "../../src/img/placeholders/products/5.png";
import Prod6 from "../../src/img/placeholders/products/6.png";
import Swiper, { Grid, Navigation } from "swiper";
import SVG from "../common/SVG";
import FilterMobile from "../mobile/Filter";
import { useMobile } from "../../hooks/hooks.mobile";

interface SwiperOptions {}

function Category(props) {
  const { isMobile } = useMobile();
  useEffect(() => {
    const classes: HTMLElement = document.querySelector(".category__slider");
    const settings: SwiperOptions = {
      modules: [Navigation, Grid],
      loop: false,
      slidesPerView: 4,
      spaceBetween: 10,
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
          spaceBetween: 6,
        },
        480: {
          slidesPerView: 2.5,
        },
        990: {
          slidesPerView: 4,
        },
      },
    };
    const swiper = new Swiper(classes, settings);
    return () => {
      swiper.destroy();
    };
  }, []);
  return (
    <div className="category__container">
      <h2 className="category__title">
        <span>
          <SVG
            svg={
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z"
                  fill="#4D505A"
                />
              </svg>
            }
          />
        </span>
        Смартфоны Apple
      </h2>
      <div className="category__main">
        {!isMobile && <Filter />}
        {isMobile && <FilterMobile />}
        <Items />
      </div>
      <h2 className="category__title">Избранные аксессуары для iPhone 11</h2>
      <div className="category__slider swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide">
            <ProductCard
              image={Prod1.src}
              name={"Apple Watch Ultra"}
              price={850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod2.src}
              name={"Apple Watch Ultra"}
              price={850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod3.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod4.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod5.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod6.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod1.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod4.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
          <div className="swiper-slide">
            <ProductCard
              image={Prod5.src}
              name={"Apple Watch Ultra"}
              price={850000}
              old_price={1850000}
              link={""}
            />
          </div>
        </div>
        <div className="slider-buttons">
          <button className="slider-button slider-button_prev swiper-button-prev">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z" />
            </svg>
          </button>
          <button className="slider-button slider-button_next swiper-button-next">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Category;
