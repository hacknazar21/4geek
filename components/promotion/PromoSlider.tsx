import React from "react";
import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import { Pagination } from "swiper";
import Img1 from "../../src/img/placeholders/promotion/01.png";
function PromoSlider(props) {
  const options: SwiperOptions = {
    modules: [Pagination],
  };
  return (
    <section className="promotion__slider-section promotion-slider-section">
      <div className="promotion-slider-section__container">
        <Slider
          isPag={true}
          isNav={false}
          options={options}
          className={"promotion-slider-section__slider"}
        >
          <div className="promotion-slider-section__slide promotion-slide">
            <div className="promotion-slide__image">
              <img src={Img1.src} alt="" />
            </div>
            <div className="promotion-slide__text">
              <h2 className="promotion-slide__title">Всем яблок</h2>
              <div className="promotion-slide__subtitle">
                <p>Мы можете оформить рассрочку на год!</p>
              </div>
              <div className="promotion-slide__info">
                <p>0-0-12</p>
              </div>
            </div>
          </div>
          <div className="promotion-slider-section__slide promotion-slide">
            <div className="promotion-slide__image">
              <img src={Img1.src} alt="" />
            </div>
            <div className="promotion-slide__text">
              <h2 className="promotion-slide__title">Всем яблок 2</h2>
              <div className="promotion-slide__subtitle">
                <p>Мы можете оформить рассрочку на год!</p>
              </div>
              <div className="promotion-slide__info">
                <p>0-0-12</p>
              </div>
            </div>
          </div>
          <div className="promotion-slider-section__slide promotion-slide">
            <div className="promotion-slide__image">
              <img src={Img1.src} alt="" />
            </div>
            <div className="promotion-slide__text">
              <h2 className="promotion-slide__title">Всем яблок 3</h2>
              <div className="promotion-slide__subtitle">
                <p>Мы можете оформить рассрочку на год!</p>
              </div>
              <div className="promotion-slide__info">
                <p>0-0-12</p>
              </div>
            </div>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default PromoSlider;
