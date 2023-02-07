import React from "react";
import VideoCard from "../common/UiKit/VideoCard";
import SeeAll from "../common/SeeAll";
import { SwiperOptions } from "swiper/types/swiper-options";
import Slider from "../common/Slider";

interface Props {
  videos: {
    id: number;
    model: string;
    created_at: Date;
    updated_at: Date;
    title: string;
    description: string;
    url: string;
    pk: string;
    preview_url: string;
  }[];
  title: string;
}
function OurVideo({ title, videos }: Props) {
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
          <h2 className="our-video__title section-title">{title}</h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <Slider
          options={settings}
          isPag={false}
          isNav={true}
          className={"hot-products__slider"}
        >
          {videos.map((video) => (
            <VideoCard
              key={video.id}
              title={video.title}
              video={video.url}
              image={video.preview_url}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default OurVideo;
