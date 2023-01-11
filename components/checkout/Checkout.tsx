import React, { useState } from "react";
import CheckoutProductCard from "../common/UiKit/CheckoutProductCard";
import CheckoutTab from "./CheckoutTab";
import Input from "../common/UiKit/Input";
import AddAddress from "./radio-content/AddAddress";

function Checkout(props) {
  const [checkedValue, setCheckedValue] = useState({
    customer_address: "Самовывоз",
    customer_payment_method: "Оплата картой сейчас",
    customer_bonuses: false,
  });
  function checkedHandler(e) {
    e.target.type === "radio" &&
      setCheckedValue((prevState) => ({
        ...prevState,
        ...{
          [e.target.name]: e.target.value,
        },
      }));
    e.target.type === "checkbox" &&
      setCheckedValue((prevState) => ({
        ...prevState,
        ...{
          [e.target.name]: e.target.checked,
        },
      }));
  }
  return (
    <section className="checkout__section">
      <div className="checkout__container">
        <div className="checkout__box">
          <form className="checkout__main">
            <h1 className="section-title checkout__title">Оформление заказа</h1>
            <CheckoutTab title={"Покупатель"} number={1} isDefaultOpen={true}>
              <div className="checkout-tab__inputs">
                <Input
                  label={"Имя"}
                  required={true}
                  name={"name"}
                  id={"name"}
                  onInput={() => {}}
                  type={"text"}
                  onChange={() => {}}
                />
                <Input
                  label={"Номер телефона"}
                  required={true}
                  name={"phone_number"}
                  id={"phone_number"}
                  onInput={() => {}}
                  type={"tel"}
                  onChange={() => {}}
                />
                <Input
                  label={"E-Mail"}
                  required={true}
                  name={"email"}
                  id={"email"}
                  onInput={() => {}}
                  type={"email"}
                  onChange={() => {}}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                  }}
                  className="checkout-tab__submit"
                >
                  Подтвердить
                </button>
              </div>
            </CheckoutTab>
            <CheckoutTab title={"Адрес доставки"} number={2}>
              <div className="checkout-tab__box">
                <div className="checkout-tab__inputs">
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_address"}
                      id={"customer_address"}
                      value={"Самовывоз"}
                      defaultChecked={true}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_address">Самовывоз</label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_address"}
                      id={"customer_address2"}
                      value={"Рабочий адрес"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_address2">Рабочий адрес</label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_address"}
                      id={"customer_address3"}
                      value={"Домашний адрес"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_address3">Домашний адрес</label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_address"}
                      id={"customer_address4"}
                      value={"Добавить адрес"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_address4">Добавить адрес</label>
                  </div>
                </div>
                <div className="checkout-tab__radio-contents">
                  {checkedValue["customer_address"] === "Самовывоз" && <></>}
                  {checkedValue["customer_address"] === "Рабочий адрес" && (
                    <div className="checkout-tab__radio-content">
                      <div className="checkout-tab__radio-text">
                        <p>
                          Казахстан 2144112 Карагандинская обл., Қарағанды 19
                          мкр, 51 д., кв. 12, под. 2, дмф. 56, эт. 5
                        </p>
                      </div>
                      <div className="checkout-tab__radio-settings-buttons">
                        <button className="checkout-tab__radio-settings-button">
                          Редактировать
                        </button>
                        <button className="checkout-tab__radio-settings-button">
                          Удалить
                        </button>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  )}
                  {checkedValue["customer_address"] === "Домашний адрес" && (
                    <div className="checkout-tab__radio-content">
                      <div className="checkout-tab__radio-text">
                        <p>
                          Казахстан 100000 Карагандинская обл., Қарағанды 19
                          мкр, 51 д., кв. 56, под. 2, дмф. 56, эт. 5
                        </p>
                      </div>
                      <div className="checkout-tab__radio-settings-buttons">
                        <button className="checkout-tab__radio-settings-button">
                          Редактировать
                        </button>
                        <button className="checkout-tab__radio-settings-button">
                          Удалить
                        </button>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  )}
                  {checkedValue["customer_address"] === "Добавить адрес" && (
                    <AddAddress />
                  )}
                </div>
              </div>
            </CheckoutTab>
            <CheckoutTab title={"Способы оплаты"} number={3}>
              <div className="checkout-tab__box">
                <div className="checkout-tab__inputs">
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_payment_method"}
                      id={"customer_payment_method"}
                      value={"Оплата картой сейчас"}
                      defaultChecked={true}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_payment_method">
                      Оплата картой сейчас
                    </label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_payment_method"}
                      id={"customer_payment_method2"}
                      value={"В кредит"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_payment_method2">В кредит</label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_payment_method"}
                      id={"customer_payment_method3"}
                      value={"Наличными при получении"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_payment_method3">
                      Наличными при получении
                    </label>
                  </div>
                  <div className="checkout-tab__radio">
                    <input
                      type="radio"
                      name={"customer_payment_method"}
                      id={"customer_payment_method4"}
                      value={"Картой при получении"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_payment_method4">
                      Картой при получении
                    </label>
                  </div>
                </div>
                <div className="checkout-tab__radio-contents">
                  {checkedValue["customer_payment_method"] ===
                    "Оплата картой сейчас" && (
                    <div className="checkout-tab__radio-content">
                      <div className="checkout-tab__radio-text">
                        <p>
                          Вы можете совершать покупки в Интернете с помощью
                          платежной карты еще более безопасно. После того, как
                          Вы подтвердите заказ, Вы будете перенаправлены на
                          защищенную страницу сервиса, на которой необходимо
                          будет ввести данные Вашей платежной карточки. ✓ Оплата
                          возможна картами Visa и MasterCard ✓ При оплате картой
                          на сайте, передача товара осуществляется только по
                          предъявлению удостоверения личности.
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  )}
                  {checkedValue["customer_payment_method"] === "В кредит" && (
                    <></>
                  )}
                  {checkedValue["customer_payment_method"] ===
                    "Наличными при получении" && (
                    <div className="checkout-tab__radio-content">
                      <div className="checkout-tab__radio-text">
                        <p>
                          При самовывозе Вы можете оплатить товар наличными на
                          кассе выбранной торговой точки. При доставке Вы можете
                          произвести оплату наличными курьеру интернет-магазина.
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  )}
                  {checkedValue["customer_payment_method"] ===
                    "Картой при получении" && (
                    <div className="checkout-tab__radio-content">
                      <div className="checkout-tab__radio-text">
                        <p>
                          Вы можете оплатить Ваш заказ банковской картой или с
                          помощью QR при получении. Оплата будет произведена с
                          помощью ручного терминала банковских карт
                          (POS-терминал). При необходимости покупателю
                          необходимо предъявить документ, удостоверяющий
                          личность.
                        </p>
                      </div>
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                        }}
                        className="checkout-tab__submit"
                      >
                        Подтвердить
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </CheckoutTab>
            <CheckoutTab title={"Бонусы и акции"} number={4}>
              <div className="checkout-tab__box">
                <div className="checkout-tab__inputs">
                  <div className="checkout-tab__radio">
                    <input
                      type="checkbox"
                      name={"customer_bonuses"}
                      id={"customer_bonuses"}
                      onChange={checkedHandler}
                    />
                    <label htmlFor="customer_bonuses">
                      Использовать бонусы
                    </label>
                  </div>
                </div>
                <div className="checkout-tab__radio-contents">
                  <div
                    className={
                      "checkout-tab__radio-content " +
                      (!checkedValue["customer_bonuses"] ? "no-active" : "")
                    }
                  >
                    <div className="checkout-tab__radio-text">
                      <p>
                        <span>1 Бонус = 1 тенге.</span> Ваши бонусы будут
                        списаны автоматически. Баллы, не используемые долгое
                        время сгорают.
                      </p>
                    </div>
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                      }}
                      disabled={!checkedValue["customer_bonuses"]}
                      className="checkout-tab__submit"
                    >
                      Подтвердить
                    </button>
                  </div>
                </div>
              </div>
            </CheckoutTab>
          </form>
          <div className="checkout__receipt checkout-receipt">
            <div className="checkout-receipt__box">
              <div className="checkout-receipt__header">
                <p>Количество товаров: 5</p>
                <button aria-label="Изменить состав заказа">Изменить</button>
              </div>
              <div className="checkout-receipt__body">
                <div className="checkout-receipt__item">
                  <div className="checkout-receipt__name">Доставка:</div>
                  <div className="checkout-receipt__value">1 000 ₸</div>
                </div>
                <div className="checkout-receipt__item">
                  <div className="checkout-receipt__name">К оплате:</div>
                  <div className="checkout-receipt__value">
                    <span>460 900 ₸</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-receipt__products">
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
              <CheckoutProductCard />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
