import React from "react";
import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import { useMobile } from "../../hooks/hooks.mobile";
import Image from "../common/Image";

function FirstScreen(props) {
  const { isMobile, width } = useMobile();
  const dataTest = ["Распродажа", "Рассрочка", "MacBook", "Polaris скидка"];
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
    return `<span class="${className} first-screen__slider-pagination">${dataTest[index]}</span>`;
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
            <div className="first-screen__slider-img">
              <Image
                src={
                  "https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fbanners%2Ffirst-sale-v2-1080.png&w=3840&q=100"
                }
              />
            </div>
            <div className="first-screen__slider-img">
              <Image src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fcredit-calculator%2Fbanners%2F0-0-20-slider-desktop.png&w=3840&q=100" />
            </div>
            <div className="first-screen__slider-img">
              <Image src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fbanners%2Fnew-mac-1080.png&w=3840&q=100" />
            </div>
            <div className="first-screen__slider-img">
              <Image src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fpolaris%2Fimages%2Fpolaris-1080.png&w=3840&q=100" />
            </div>
          </Slider>
        )}
        {isMobile && (
          <Slider
            options={options}
            isPag={true}
            renderBullet={renderBulletMobile}
            className={"first-screen__slider"}
          >
            <div className="first-screen__slider-img">
              <img
                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fbanners%2Ffirst-sale-v2-1080.png&w=3840&q=100"
                alt=""
              />
            </div>
            <div className="first-screen__slider-img">
              <img
                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fcredit-calculator%2Fbanners%2F0-0-20-slider-desktop.png&w=3840&q=100"
                alt=""
              />
            </div>
            <div className="first-screen__slider-img">
              <img
                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fbanners%2Fnew-mac-1080.png&w=3840&q=100"
                alt=""
              />
            </div>
            <div className="first-screen__slider-img">
              <img
                src="https://www.technodom.kz/_next/image?url=https%3A%2F%2Fwww.technodom.kz%2Funder%2Fpolaris%2Fimages%2Fpolaris-1080.png&w=3840&q=100"
                alt=""
              />
            </div>
          </Slider>
        )}
      </div>
    </section>
  );
}

export default FirstScreen;
