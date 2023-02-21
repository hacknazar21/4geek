import React, { useContext, useState } from "react";
import Link from "next/link";
import { BasketContext } from "../../../context/BasketContext";
import { IProduct } from "../../../interfaces/Product";
import { useMobile } from "../../../hooks/hooks.mobile";
import useHttp from "../../../hooks/hooks.http";
import { AuthContext } from "../../../context/AuthContext";
import ErrorWindow from "../../ErrorWindow";
import { ErrorContext } from "../../../context/ErrorContext";
import Image from "../Image";
import Slider from "../Slider";
import { SwiperOptions } from "swiper/types/swiper-options";
enum Mode {
  LIGHT = "light",
  DARK = "dark",
}
interface Props {
  className?: string;
  mode?: "dark" | "light";
  product: IProduct;
}

function ProductCard(props: Props) {
  const [addLoading, setAddLoading] = useState<boolean>(false);

  const { request } = useHttp();
  const { isMobile } = useMobile();

  const { token } = useContext(AuthContext);
  const { showError } = useContext(ErrorContext);
  const { addProductToBasket } = useContext(BasketContext);

  const classes = [
    "product-card",
    props.mode === "light" ? "product-card_light" : "product-card_dark",
    props.className,
  ];
  const imagesSliderOptions: SwiperOptions = {
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
        swiper.slides.length === 1 &&
          (swiper.pagination.el.style.display = "none");
      },
    },
    watchOverflow: true,
  };
  async function addToBasketHandler(event) {
    setAddLoading(true);
    if (!isMobile)
      animateAdd(
        event.target
          .closest("article")
          .querySelector(".product-card__image.swiper-slide-active")
      );
    else animateAddMobile(event.target.closest("article"));
    await addProductToBasket(props.product);
    setAddLoading(false);
  }
  const animateAdd = (product: any) => {
    const cloneProduct = product.cloneNode(true);
    cloneProduct.style.position = "fixed";
    cloneProduct.style.pointerEvents = "none";
    const productPosition = getPosition(product);
    cloneProduct.style.top = `${productPosition.top}px`;
    cloneProduct.style.left = `${productPosition.left}px`;
    cloneProduct.style.transition = "transform 1.2s ease, opacity 1s ease";
    cloneProduct.style.transform = `translate3d(0px, 0px, 0px) scale(1)`;
    cloneProduct.style.height = `auto`;
    cloneProduct.style.zIndex = `1000001`;
    document.body.insertAdjacentElement("beforeend", cloneProduct);
    const basketPosition = getPosition(document.querySelector("#basket"));
    const cloneProductPosition = getPosition(cloneProduct);
    cloneProduct.style.transformOrigin = "top right";
    cloneProduct.style.transform = `translate3d(${
      basketPosition.x -
      cloneProductPosition.x -
      cloneProductPosition.width / 1.2
    }px, ${basketPosition.y - cloneProductPosition.y}px, 0px) scale(0)`;
    cloneProduct.style.opacity = `0`;
    setTimeout(() => {
      cloneProduct.remove();
    }, 1000 + Math.abs(basketPosition.x - cloneProductPosition.x));
  };
  const getPosition = (element: any) => {
    return element.getClientRects()[0];
  };
  const animateAddMobile = (product: any) => {
    const span = document.createElement("span");
    span.classList.add("shine-dot");
    const { x, y, width, height } = product.getBoundingClientRect();
    span.style.top = `${y + height / 2}px`;
    span.style.left = `${x + width / 2}px`;
    document.body.insertAdjacentElement("beforeend", span);
    setTimeout(() => {
      const basket = document.querySelector(
        '.mobile-nav__list-link[href="/basket"]'
      );
      const basketData = basket.getBoundingClientRect();
      span.style.top = `${basketData.y + basketData.height / 2}px`;
      span.style.left = `${basketData.x + basketData.width / 2}px`;
      span.style.transform = "scale(0)";
      setTimeout(() => {
        span.remove();
      }, 3000);
    }, 200);
  };
  async function addToWishListHandler(event) {
    if (!token) {
      showError(
        "Вы должны быть авторизованы, чтобы добавить товар в Список избранного"
      );
      return;
    }
    const addButton = event.target.closest("button");
    let url = "";
    animateAddWishlist(addButton);

    if (addButton.classList.contains("product-card__wishlist_active")) {
      url = `/api/products/${props.product.lookup_slug}/add_to_wishlist/`;
    } else {
      url = `/api/products/${props.product.lookup_slug}/remove_from_wishlist/`;
    }
    await request(url, "POST", null, {
      Authorization: `Bearer ${token}`,
    });
  }
  const animateAddWishlist = (product: any) => {
    product.classList.toggle("product-card__wishlist_active");
  };

  return (
    <article className={classes.join(" ")}>
      {/*<div className="product-card__promo">-{props.product?.availability}%</div>*/}
      <Slider
        isLazy={true}
        isPag={true}
        options={imagesSliderOptions}
        className={"product-card__images"}
        slideClass={"product-card__image"}
        paginationClass={"product-card__images-pagination"}
      >
        {props.product?.images.map((image) => (
          <Image key={image.id} src={image.original} alt={image.caption} />
        )) || []}
      </Slider>
      <button
        onClick={addToWishListHandler}
        aria-label="Добавление в избранное"
        className={
          "product-card__wishlist " +
          (props.product.is_in_wishlist ? "product-card__wishlist_active" : "")
        }
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="25"
          viewBox="0 0 25 25"
          fill="none"
        >
          <path
            d="M20.66 5.49998C19.6 4.43719 18.1948 3.78852 16.6984 3.67115C15.2019 3.55378 13.7128 3.97545 12.5 4.85998C11.2277 3.91362 9.64402 3.48449 8.06795 3.65902C6.49188 3.83355 5.04047 4.59876 4.006 5.80057C2.97154 7.00237 2.43085 8.5515 2.49283 10.136C2.55481 11.7205 3.21485 13.2227 4.34003 14.34L10.55 20.56C11.07 21.0718 11.7704 21.3586 12.5 21.3586C13.2296 21.3586 13.93 21.0718 14.45 20.56L20.66 14.34C21.8276 13.1652 22.483 11.5763 22.483 9.91998C22.483 8.26371 21.8276 6.67472 20.66 5.49998V5.49998ZM19.25 12.96L13.04 19.17C12.9694 19.2413 12.8853 19.298 12.7926 19.3366C12.6999 19.3753 12.6005 19.3952 12.5 19.3952C12.3996 19.3952 12.3002 19.3753 12.2075 19.3366C12.1148 19.298 12.0307 19.2413 11.96 19.17L5.75003 12.93C4.96579 12.1283 4.52664 11.0514 4.52664 9.92998C4.52664 8.80852 4.96579 7.73164 5.75003 6.92998C6.54919 6.14097 7.627 5.69855 8.75003 5.69855C9.87306 5.69855 10.9509 6.14097 11.75 6.92998C11.843 7.02371 11.9536 7.09811 12.0755 7.14887C12.1973 7.19964 12.328 7.22578 12.46 7.22578C12.592 7.22578 12.7227 7.19964 12.8446 7.14887C12.9665 7.09811 13.0771 7.02371 13.17 6.92998C13.9692 6.14097 15.047 5.69855 16.17 5.69855C17.2931 5.69855 18.3709 6.14097 19.17 6.92998C19.9651 7.72113 20.4186 8.79217 20.4336 9.91367C20.4485 11.0352 20.0237 12.1179 19.25 12.93V12.96Z"
            fill="#898D9E"
          />
        </svg>
      </button>
      <Link
        href={"/product/[link]"}
        as={`/product/${props.product?.lookup_slug}`}
        className="product-card__title"
      >
        <h3>{props.product?.title}</h3>
      </Link>
      <div className="product-card__info">
        <div className="product-card__price-box">
          <div className="product-card__price">
            {!!props.product?.price &&
              parseFloat(props.product.price.toString()).toLocaleString(
                "ru-RU",
                {
                  maximumSignificantDigits: 3,
                }
              )}{" "}
            ₸
          </div>
          {/*<div className="product-card__old-price">{props.old_price} ₸</div>*/}
        </div>
        <button
          onClick={addToBasketHandler}
          disabled={addLoading}
          className="product-card__button product-button"
        >
          {addLoading ? "Добавление" : "В корзину"}
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
