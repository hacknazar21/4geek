import React, { useEffect } from "react";
import Swiper from "swiper";
import VideoCard from "../common/UiKit/VideoCard";
import SeeAll from "../common/SeeAll";

function OurVideo(props) {
  useEffect(() => {
    const swiper = new Swiper(".our-video__slider", {
      modules: [],
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
    });
    return () => {};
  }, []);
  return (
    <section className="home__our-video our-video">
      <div className="our-video__container">
        <div className="section-header our-video__header">
          <h2 className="our-video__title section-title">Наши видосики</h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <div className="our-video__slider swiper">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <VideoCard
                title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
                video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
              />
            </div>
            <div className="swiper-slide">
              <VideoCard
                title={
                  "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
                }
                video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
              />
            </div>
            <div className="swiper-slide">
              <VideoCard
                title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
                video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
              />
            </div>
            <div className="swiper-slide">
              <VideoCard
                title={
                  "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
                }
                video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
              />
            </div>
            <div className="swiper-slide">
              <VideoCard
                title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
                video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
              />
            </div>
            <div className="swiper-slide">
              <VideoCard
                title={
                  "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
                }
                video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVideo;
