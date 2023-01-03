import React from "react";
import Link from "next/link";
enum Mode {
  LIGHT = "light",
  DARK = "dark",
}
interface Props {
  className?: string;
  mode?: "dark" | "light";
  promo?: number;
  image: string;
  name: string;
  price: number;
  old_price?: number;
  link: string;
}

function ProductCard(props: Props) {
  const classes = [
    "product-card",
    props.mode === "light" ? "product-card_light" : "product-card_dark",
    props.className,
  ];
  return (
    <article className={classes.join(" ")}>
      {props.promo && props.promo !== 0 && (
        <div className="product-card__promo">-{props.promo}%</div>
      )}
      <div className="product-card__image">
        <img loading={"lazy"} src={props.image} alt="" />
      </div>
      <Link href={props.link || ""} className="product-card__title">
        <h3>{props.name}</h3>
      </Link>
      <div className="product-card__info">
        <div className="product-card__price-box">
          <div className="product-card__price">{props.price} ₸</div>
          {props.old_price && (
            <div className="product-card__old-price">{props.old_price} ₸</div>
          )}
        </div>
        <button className="product-card__button product-button">
          В корзину
        </button>
      </div>
    </article>
  );
}

export default ProductCard;
