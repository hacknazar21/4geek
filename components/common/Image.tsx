import Loading from "./Loading";
import Thumb from "../../src/img/thumb.png";

interface Props {
  src: string;
  alt?: string;
  thumb?: string;
  className?: string;
}
function Image({ src, alt, className, thumb }: Props) {
  return (
    <>
      <img
        data-src={src}
        src={thumb || Thumb.src}
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
