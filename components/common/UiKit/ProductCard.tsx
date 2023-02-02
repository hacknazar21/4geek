import React, { useContext } from "react";
import Link from "next/link";
import { BasketContext } from "../../../context/BasketContext";
import { IProduct } from "../../../interfaces/Product";
import { useMobile } from "../../../hooks/hooks.mobile";
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
  const { addProductToBasket } = useContext(BasketContext);
  const { isMobile } = useMobile();
  const classes = [
    "product-card",
    props.mode === "light" ? "product-card_light" : "product-card_dark",
    props.className,
  ];
  async function addToBasketHandler(event) {
    if (!isMobile) animateAdd(event.target.closest("article"));
    else animateAddMobile(event.target.closest("article"));
    await addProductToBasket(props.product);
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
    product.parentElement.insertAdjacentElement("beforeend", cloneProduct);
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
  return (
    <article className={classes.join(" ")}>
      <div className="product-card__promo">-{props.product?.availability}%</div>
      <div className="product-card__image">
        <img
          loading={"lazy"}
          src={
            (!!props.product?.images &&
              !!props.product?.images.length &&
              props.product.images[0].original) ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNk+M9QDwADhgGAWjR9awAAAABJRU5ErkJggg=="
          }
          alt={
            (!!props.product?.images &&
              !!props.product?.images.length &&
              props.product.images[0].caption) ||
            ""
          }
        />
      </div>
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
              parseFloat(props.product.price.toString()).toLocaleString()}{" "}
            ₸
          </div>
          {/*<div className="product-card__old-price">{props.old_price} ₸</div>*/}
        </div>
        <button
          onClick={addToBasketHandler}
          className="product-card__button product-button"
        >
          В корзину
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
