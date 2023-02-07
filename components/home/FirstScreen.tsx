import React from "react";
import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import { useMobile } from "../../hooks/hooks.mobile";
import Image from "../common/Image";
interface Props {
  slides: {
    block_type: string;
    image: any;
    banner_image: string;
    banner_url: any;
    data: any;
    data_url: any;
    children: any;
    related_object: any;
    products: any;
    codename: string;
    title: string;
    subtitle: any;
    text: string;
    additional_data: any;
  }[];
}
function FirstScreen({ slides }: Props) {
  const { isMobile } = useMobile();
  const options: SwiperOptions = {
    slidesPerView: 1,
    preloadImages: false,
    loop: false,
    autoplay: true,
    spaceBetween: 10,
    lazy: true,
    on: {
      lazyImageLoad: (swiper, slideEl, imageEl) => {
        slideEl.style.opacity = "0";
        slideEl.style.transition = "opacity 0.3s ease";
      },
      lazyImageReady: (swiper, slideEl, imageEl) => {
        slideEl.style.opacity = "1";
      },
    },
  };
  const renderBullet = (index, className) => {
    return `<span class="${className} first-screen__slider-pagination">${slides[index].title}</span>`;
  };
  const renderBulletMobile = (index, className) => {
    return `<span class="${className} first-screen__slider-pagination_mobile"></span>`;
  };
  return (
    <section className="home__first-screen first-screen">
      <div className="first-screen__container">
        {!isMobile && (
          <Slider
            options={options}
            isLazy={true}
            isPag={true}
            renderBullet={renderBullet}
            className={"first-screen__slider"}
          >
            {slides.map((slide, id) => (
              <a
                href={slide.banner_url}
                key={id}
                className="first-screen__slider-img"
              >
                <Image src={slide.banner_image} alt={slide.codename} />
              </a>
            ))}
          </Slider>
        )}
        {isMobile && (
          <Slider
            options={options}
            isPag={true}
            renderBullet={renderBulletMobile}
            className={"first-screen__slider"}
          >
            {slides.map((slide, id) => (
              <a
                href={slide.banner_url}
                key={id}
                className="first-screen__slider-img"
              >
                <Image src={slide.banner_image} alt={slide.codename} />
              </a>
            ))}
          </Slider>
        )}
      </div>
    </section>
  );
}

export default FirstScreen;
