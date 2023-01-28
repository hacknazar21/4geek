import React, { useContext } from "react";
import BasketProductCard from "../common/UiKit/BasketProductCard";
import { BasketContext } from "../../context/BasketContext";
import Link from "next/link";

function Basket(props) {
  const { basket, removeBasket } = useContext(BasketContext);

  return (
    <div className="basket__container">
      <div className="basket__box">
        <section className="basket__products">
          {basket?.lines.map((line) => (
            <BasketProductCard key={line.id} line={line} />
          ))}
          <button
            onClick={removeBasket}
            className="basket__clear"
            aria-label="Очистить корзину"
          >
            Очистить корзину
          </button>
        </section>
        <section className="basket__receipt basket-receipt">
          <div className="basket-receipt__sections">
            <div className="basket-receipt__section">
              <div className="basket-receipt__item">
                <div className="basket-receipt__item-name">Товары:</div>
                <div className="basket-receipt__item-value">
                  {basket?.lines.length}
                </div>
              </div>
              <div className="basket-receipt__item">
                <div className="basket-receipt__item-name">Доставка:</div>
                <div className="basket-receipt__item-value">1 000 ₸</div>
              </div>
            </div>
            <div className="basket-receipt__section">
              <div className="basket-receipt__title">Итого:</div>
              <div className="basket-receipt__item">
                <div className="basket-receipt__item-name">Сумма:</div>
                <div className="basket-receipt__item-value">
                  {parseFloat(
                    basket?.total_incl_tax_excl_discounts || "0"
                  ).toLocaleString()}{" "}
                  ₸
                </div>
              </div>
              {basket?.total_incl_tax_excl_discounts !==
                basket?.total_incl_tax && (
                <div className="basket-receipt__item">
                  <div className="basket-receipt__item-name">Скидка:</div>
                  <div className="basket-receipt__item-value">
                    {(
                      parseFloat(basket?.total_incl_tax_excl_discounts || "0") -
                      parseFloat(basket?.total_incl_tax || "0")
                    ).toLocaleString()}{" "}
                    ₸
                  </div>
                </div>
              )}
            </div>
            <div className="basket-receipt__section">
              <div className="basket-receipt__item">
                <div className="basket-receipt__item-name">К оплате:</div>
                <div className="basket-receipt__item-value">
                  <span>
                    {parseFloat(basket?.total_incl_tax || "0").toLocaleString()}{" "}
                    ₸
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="basket-receipt__actions">
            <div className="product-actions__basket">
              <div className="product-actions__basket-actions">
                <Link
                  href="/checkout"
                  className="product-actions__basket-add-btn"
                >
                  <span></span>
                  <span>Перейти к оплате</span>
                </Link>
              </div>
              <div className="product-actions__basket-info">
                <div className="product-actions__basket-info-item">
                  <div className="product-actions__basket-info-name">
                    В кредит
                  </div>
                  <div className="product-actions__basket-info-value">
                    <p>18 083 ₸ х 60 мес</p>
                  </div>
                </div>
                <div className="product-actions__basket-info-item">
                  <div className="product-actions__basket-info-name">
                    В рассрочку
                  </div>
                  <div className="product-actions__basket-info-value">
                    <p>25 416 ₸ х 24 мес</p>
                    <p>50 872 ₸ х 12 мес</p>
                    <p>87 546 ₸ х 6 мес</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Basket;
