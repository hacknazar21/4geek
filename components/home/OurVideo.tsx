import React from "react";
import VideoCard from "../common/UiKit/VideoCard";
import SeeAll from "../common/SeeAll";
import { SwiperOptions } from "swiper/types/swiper-options";
import Slider from "../common/Slider";

function OurVideo(props) {
  const settings: SwiperOptions = {
    loop: false,
    slidesPerView: 4,
    spaceBetween: 10,
    autoplay: true,
    speed: 800,
    breakpoints: {
      320: {
        slidesPerView: 1.2,
        spaceBetween: 12,
      },
      480: {
        slidesPerView: 2.5,
      },
      990: {
        slidesPerView: 3,
      },
    },
  };

  return (
    <section className="home__our-video our-video">
      <div className="our-video__container">
        <div className="section-header our-video__header">
          <h2 className="our-video__title section-title">Наши видосики</h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <Slider
          options={settings}
          isPag={false}
          isNav={true}
          className={"hot-products__slider"}
        >
          <VideoCard
            title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
            video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
          />
          <VideoCard
            title={
              "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
            }
            video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
          />
          <VideoCard
            title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
            video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
          />
          <VideoCard
            title={
              "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
            }
            video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
          />
          <VideoCard
            title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
            video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
          />
          <VideoCard
            title={
              "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
            }
            video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
          />
        </Slider>
      </div>
    </section>
  );
}

export default OurVideo;
