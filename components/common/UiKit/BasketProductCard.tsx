import React from "react";

function BasketProductCard(props) {
  return (
    <article className="basket-product">
      <div className="basket-product__image">
        <img
          src="https://www.mechta.kz/images/product/20117/30000001802_2-480.webp"
          alt=""
        />
      </div>
      <div className="basket-product__info">
        <div className="basket-product__price-box">
          <div className="basket-product__price">459 900 ₸</div>
          <div className="basket-product__old-price">500 000 ₸</div>
        </div>
        <h3 className="basket-product__name">
          Смартфон Apple iPhone 13 128GB Blue
        </h3>
        <div className="basket-product__sku">Код товара: 0125984</div>
        <div className="basket-product__counter">
          <span></span>
          <span>1</span>
          <span></span>
        </div>
      </div>
      <div className="basket-product__actions">
        <button className="basket-product__delete">
          <span>Удалить</span>
          <span></span>
          <span></span>
        </button>
      </div>
    </article>
  );
}

export default BasketProductCard;
