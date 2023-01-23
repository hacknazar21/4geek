import React from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";

function DeliveryAddress(props) {
  return (
    <section className="profile-section delivery-address__section">
      <div className="profile-blocks delivery-address__blocks">
        <div className="delivery-address__item delivery-address-item">
          <div className="delivery-address-item__name">
            <p>Домашний адрес</p>
          </div>
          <div className="delivery-address-item__value">
            <p>Сергей Ким</p>
            <p>Казахстан</p>
            <p>100000</p>
            <p>Карагандинская обл., Қарағанды</p>
            <p>19 мкр, 51 д., кв. 56, под. 2, дмф. 56, эт. 5</p>
            <p>+7 747 304 47 94</p>
          </div>
          <div className="delivery-address-item__buttons">
            <button className="delivery-address-item__button">
              Редактировать
            </button>
            <button className="delivery-address-item__button">Удалить</button>
          </div>
        </div>
        <div className="delivery-address__item delivery-address-item">
          <div className="delivery-address-item__name">
            <p>Домашний адрес</p>
          </div>
          <div className="delivery-address-item__value">
            <p>Сергей Ким</p>
            <p>Казахстан</p>
            <p>100000</p>
            <p>Карагандинская обл., Қарағанды</p>
            <p>19 мкр, 51 д., кв. 56, под. 2, дмф. 56, эт. 5</p>
            <p>+7 747 304 47 94</p>
          </div>
          <div className="delivery-address-item__buttons">
            <button className="delivery-address-item__button">
              Редактировать
            </button>
            <button className="delivery-address-item__button">Удалить</button>
          </div>
        </div>
      </div>
      <div
        style={{ flex: "1 1 auto" }}
        className="profile-block delivery-address__item"
      >
        <h2 className="profile-title">Добавить новый адрес</h2>
        <form action="" className="profile-form">
          <div className="profile-form__inputs">
            <Input
              label={"Название: рабочий, домашний, загородный"}
              onInput={() => {}}
              className={"form__input"}
              name={"title"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"title"}
            />
            <Input
              label={"Город"}
              onInput={() => {}}
              className={"form__input"}
              name={"country"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"country"}
            />
            <Input
              label={"Улица"}
              onInput={() => {}}
              className={"form__input"}
              name={"street"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"street"}
            />
            <Input
              label={"Дом"}
              onInput={() => {}}
              className={"form__input"}
              name={"house"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"house"}
            />
          </div>
          <Button
            text={"Сохранить изменения"}
            className={"button_disabled profile-form__submit"}
            onClick={() => {}}
          />
        </form>
      </div>
    </section>
  );
}

export default DeliveryAddress;
