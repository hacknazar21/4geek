import React from "react";

function PromoInfo(props) {
  return (
    <section className="promotion__info promotion-info">
      <div className="promotion-info__container">
        <h2 className="promotion-info__title section-title">
          Обновись вместе с Apple!
        </h2>
        <div className="promotion-info__text">
          <p>
            Apple выпустили очень много крутых новинок и самое время обновиться
            по выгодным ценам! Покупай iPhone 14 в рассрочку аж до 18 месяцев, а
            также обменяй свои старые девайсы по программе Trade-In на щедрые
            скидки до 30 ноября.
          </p>
          <p>
            Чтобы узнать точный размер персональной скидки, приходи в любой
            розничный магазин Technodom в твоём городе и пройди быструю оценку
            легко и просто. Обновись выгодно вместе с нами, мы ждём тебя!
          </p>
        </div>
      </div>
    </section>
  );
}

export default PromoInfo;
