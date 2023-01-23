import React from "react";
import CategoryCard from "../common/UiKit/CategoryCard";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { SwiperOptions } from "swiper/types/swiper-options";
import Slider from "../common/Slider";
interface Props {
  categories: IPagination<ICategory>;
}
function Categories(props: Props) {
  const params: SwiperOptions = {
    loop: false,
    slidesPerView: 6,
    spaceBetween: 11,
    grid: {
      fill: "row",
      rows: 2,
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
  };
  const { categories } = props;
  return (
    <section className="home__categories categories">
      <div className="categories__container">
        <h2 className="categories__title section-title">Категории</h2>
        <Slider
          options={params}
          isNav={true}
          isPag={false}
          buttons={""}
          buttonNext={""}
          buttonPrev={""}
          className={"categories__slider"}
        >
          {categories.results.map((category) => (
            <CategoryCard
              key={category.id}
              text={category.name}
              link={"/catalog/" + category.lookup_slug}
              image={category.image}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Categories;
