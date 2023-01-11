import React from "react";

export default function CheckoutProductCard(props) {
  return (
    <article className="checkout-product">
      <div className="checkout-product__image">
        <img
          src="https://www.mechta.kz/images/product/20117/30000001802_2-480.webp"
          alt=""
        />
      </div>
      <div className="checkout-product__info">
        <div className="checkout-product__price-box">
          <div className="checkout-product__price">459 900 ₸</div>
          <div className="checkout-product__old-price">500 000 ₸</div>
        </div>
        <h3 className="checkout-product__name">
          Смартфон Apple iPhone 13 128GB Blue
        </h3>
        <div className="checkout-product__count">Количество: 1</div>
      </div>
    </article>
  );
}
