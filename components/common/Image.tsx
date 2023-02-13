import React from "react";
import Loading from "./Loading";
interface Props {
  src: string;
  alt?: string;
  className?: string;
}
function Image({ src, alt, className }: Props) {
  return (
    <>
      <img
        data-src={src}
        alt={alt}
        className={className + " " + "swiper-lazy"}
      />
      <div className="swiper-lazy-preloader">
        <Loading
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%) scale(0.5)",
          }}
        />
      </div>
    </>
  );
}

export default Image;
