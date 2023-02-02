import React from "react";
interface Props {
  src: string;
  alt?: string;
  className?: string;
}
function Image({ src, alt, className }: Props) {
  return (
    <img data-src={src} alt={alt} className={className + " " + "swiper-lazy"} />
  );
}

export default Image;
