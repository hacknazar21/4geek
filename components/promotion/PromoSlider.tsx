import Slider from "../common/Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
import { IPromotion } from "../../interfaces/Promotion";
import Image from "../common/Image";

interface Props {
  promotion: IPromotion;
}
function PromoSlider({ promotion }: Props) {
  const options: SwiperOptions = {
    slidesPerView: 1,
    preloadImages: false,
    loop: false,
    autoplay: false,
    spaceBetween: 10,
    lazy: true,
    on: {
      lazyImageLoad: (swiper, slideEl, imageEl) => {
        slideEl.style.backdropFilter = "blur(2px)";
      },
      lazyImageReady: (swiper, slideEl, imageEl) => {
        slideEl.style.backdropFilter = "blur(0px)";
      },
      init: function (swiper) {
        swiper.slides.length <= 1 &&
          (swiper.pagination.el.style.display = "none");
      },
    },
    watchOverflow: true,
  };
  return (
    <section className="promotion__slider-section promotion-slider-section">
      <div className="promotion-slider-section__container">
        <Slider
          isPag={true}
          isNav={false}
          isLazy={true}
          options={options}
          className={"promotion-slider-section__slider"}
        >
          {promotion.images.map((imageItem, id) => (
            <div
              key={imageItem.image + id}
              className="promotion-slider-section__slide promotion-slide"
            >
              <div className="promotion-slide__image">
                <Image src={imageItem.image} />
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default PromoSlider;
