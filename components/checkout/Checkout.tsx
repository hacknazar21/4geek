import React, { useContext, useState } from "react";
import CheckoutProductCard from "../common/UiKit/CheckoutProductCard";
import CheckoutTab from "./CheckoutTab";
import Input from "../common/UiKit/Input";
import AddAddress from "./radio-content/AddAddress";
import { BasketContext } from "../../pages/_app";
import { IPaymentMethod } from "../../interfaces/PaymentMethod";
import { IShippingMethods } from "../../interfaces/ShippingMethods";
import { IPoints } from "../../interfaces/Points";

interface Props {
  paymentMethods: IPaymentMethod[];
  shippingMethods: IShippingMethods[];
  points: IPoints[];
}
function Checkout({ paymentMethods, shippingMethods, points }: Props) {
  const { basket } = useContext(BasketContext);
  const [checkedValue, setCheckedValue] = useState({
    customer_address: "Самовывоз",
    payment_source: paymentMethods[0].code,
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
                  name={"customer_name"}
                  id={"customer_name"}
                  onInput={() => {}}
                  type={"text"}
                  onChange={() => {}}
                />
                <Input
                  label={"Номер телефона"}
                  required={true}
                  name={"customer_phone"}
                  id={"customer_phone"}
                  onInput={() => {}}
                  type={"tel"}
                  onChange={() => {}}
                />
                <Input
                  label={"E-Mail"}
                  required={true}
                  name={"customer_email"}
                  id={"customer_email"}
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
                  {paymentMethods.map((paymentMethod) => (
                    <div key={paymentMethod.id} className="checkout-tab__radio">
                      <input
                        type="radio"
                        name={"payment_source"}
                        id={paymentMethod.code}
                        value={paymentMethod.code}
                        defaultChecked={
                          checkedValue["payment_source"] === paymentMethod.code
                        }
                        onChange={checkedHandler}
                      />
                      <label htmlFor={paymentMethod.code}>
                        {paymentMethod.name}
                      </label>
                    </div>
                  ))}
                </div>
                <div className="checkout-tab__radio-contents">
                  {paymentMethods.map((paymentMethod) => {
                    if (checkedValue["payment_source"] === paymentMethod.code) {
                      return (
                        <div
                          key={paymentMethod.code}
                          className="checkout-tab__radio-content"
                        >
                          <div className="checkout-tab__radio-text">
                            <p>{paymentMethod.description}</p>
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
                      );
                    }
                  })}
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
                {basket && <p>Количество товаров: {basket.lines.length}</p>}
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
                    <span>
                      {basket &&
                        parseFloat(
                          basket?.total_incl_tax
                        ).toLocaleString()}{" "}
                      ₸
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="checkout-receipt__products">
              {basket &&
                basket.lines.map((line) => (
                  <CheckoutProductCard key={line.id} line={line} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Checkout;
