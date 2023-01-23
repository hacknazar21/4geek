import React, { useEffect, useRef } from "react";
import { SwiperOptions } from "swiper/types/swiper-options";
import Swiper, { Grid, Navigation, Pagination } from "swiper";

interface Props {
  children: typeof React.Children | JSX.Element[];
  options: SwiperOptions;
  className?: string;
  buttonNext?: string;
  buttonPrev?: string;
  buttons?: string;
  isNav?: boolean;
  isPag?: boolean;
}
function Slider(props: Props) {
  const nextBtn = useRef(null);
  const prevBtn = useRef(null);
  const paginationRef = useRef(null);
  const sliderRef = useRef(null);
  const classes = ["swiper", props.className];

  useEffect(() => {
    if (sliderRef) {
      const defaultOptions: SwiperOptions = {};
      defaultOptions["modules"] = [Navigation, Pagination, Grid];
      if (props.isNav) {
        defaultOptions["navigation"] = {
          prevEl: prevBtn.current,
          nextEl: nextBtn.current,
        };
      }
      if (props.isPag) {
        defaultOptions["pagination"] = {
          el: paginationRef.current,
          type: "bullets",
          clickable: true,
        };
      }
      const swiper = new Swiper(sliderRef.current, {
        ...defaultOptions,
        ...props.options,
      });
      return () => {
        swiper.destroy();
      };
    }
  }, [sliderRef]);
  return (
    <div ref={sliderRef} className={classes.join(" ")}>
      <div className="swiper-wrapper">
        {React.Children.map(props.children, (child) => (
          <div className="swiper-slide">{child}</div>
        ))}
      </div>
      {props.isPag && (
        <div ref={paginationRef} className="swiper-pagination"></div>
      )}
      {props.isNav && (
        <>
          <button
            ref={prevBtn}
            className={
              "slider-button slider-button_prev swiper-button-prev " +
              props.buttonPrev
            }
          >
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
          <button
            ref={nextBtn}
            className={
              "slider-button slider-button_next swiper-button-next " +
              props.buttonNext
            }
          >
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
        </>
      )}
    </div>
  );
}

export default Slider;
