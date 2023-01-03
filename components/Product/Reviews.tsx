import React from "react";
import Rating from "react-rating";

function Reviews(props) {
  return (
    <section className="product__reviews product-reviews">
      <div className="product-reviews__box">
        <div className="product-reviews__rating">
          <Rating
            emptySymbol={"rating-item"}
            initialRating={5}
            readonly={true}
            fullSymbol={"rating-item-fill"}
          />
          <span></span>
          <span>5.0 / 5</span>
        </div>
        <div className="product-reviews__items">
          <div className="product-reviews__item product-reviews-item">
            <div className="product-reviews-item__header">
              <div className="product-reviews-item__name">
                <span>Алёна Блин</span>
                <Rating
                  emptySymbol={"rating-item"}
                  initialRating={5}
                  readonly={true}
                  fullSymbol={"rating-item-fill"}
                />
              </div>
              <div className="product-reviews-item__date">
                <span>11 сентября 2022</span>
              </div>
            </div>
            <div className="product-reviews-item__body">
              <p>
                Пользуюсь уже неделю всё исправно работает и не зависает.
                Рекомендую брать от этого продавца и доставка быстрая, персонал
                вежливый. Помогли выбрать телефон. Буду еще отсюда покупать!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Reviews;
