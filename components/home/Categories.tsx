import React, { useEffect } from "react";
import Swiper, { Navigation, Grid } from "swiper";
import CategoryCard from "../common/UiKit/CategoryCard";
import Cat1 from "../../src/img/placeholders/categories/1.png";
import Cat2 from "../../src/img/placeholders/categories/2.png";
import Cat3 from "../../src/img/placeholders/categories/3.png";
import Cat4 from "../../src/img/placeholders/categories/4.png";
import Cat5 from "../../src/img/placeholders/categories/5.png";
import Cat6 from "../../src/img/placeholders/categories/6.png";
import Cat7 from "../../src/img/placeholders/categories/7.png";
import Cat8 from "../../src/img/placeholders/categories/8.png";
import Cat9 from "../../src/img/placeholders/categories/9.png";
import Cat10 from "../../src/img/placeholders/categories/10.png";
import Cat11 from "../../src/img/placeholders/categories/11.png";
import Cat12 from "../../src/img/placeholders/categories/12.png";

function Categories(props) {
  useEffect(() => {
    const swiper = new Swiper(".categories__slider", {
      modules: [Navigation, Grid],
      loop: false,
      slidesPerView: 6,
      spaceBetween: 11,
      grid: {
        fill: "row",
        rows: 2,
      },
      // Navigation arrows
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        320: {
          slidesPerView: 2.5,
          spaceBetween: 3,
          grid: {
            fill: "row",
            rows: 1,
          },
        },
        390: {
          slidesPerView: 4.5,
          spaceBetween: 6,
          grid: {
            fill: "row",
            rows: 1,
          },
        },
        480: {
          slidesPerView: 3,
        },
        990: {
          slidesPerView: 6,
        },
      },
    });
    return () => {};
  }, []);
  return (
    <section className="home__categories categories">
      <div className="categories__container">
        <h2 className="categories__title section-title">Категории</h2>
        <div className="categories__slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat1.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat2.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat3.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat4.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat5.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat6.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat7.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat8.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat9.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat10.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat11.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat12.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat1.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat2.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat3.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat4.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat5.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat6.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat7.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat8.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat9.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat10.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat11.src} />
            </div>
            <div className="swiper-slide">
              <CategoryCard text={"Смартфоны"} link={""} image={Cat12.src} />
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
    </section>
  );
}

export default Categories;
