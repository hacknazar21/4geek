import React, { useState } from "react";
import Popup from "../../common/Popup";
import Input from "../../common/UiKit/Input";
import Select from "../../common/Select";
import Button from "../../common/UiKit/Button";
import { useStorage } from "../../../hooks/hooks.storage";

interface Props {
  onAddAddress: (address) => void;
}
function AddAddress({ onAddAddress }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const { add: addAddressToStorage } = useStorage("4GeekUserAddress");
  function formChangeHandler(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  function addAddressClickHandler(e) {
    e.preventDefault();
    addAddressToStorage(formData);
    onAddAddress(formData);
    setIsOpenModal(false);
  }
  return (
    <>
      <div className="checkout-tab__radio-content">
        <div className="checkout-tab__radio-text">
          <p>
            У вас нет добавленных адресов. Добавьте, чтобы курьер смог доставить
            вам заказ.
          </p>
        </div>
        <div className="checkout-tab__radio-settings-buttons">
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsOpenModal(true);
            }}
            className="checkout-tab__radio-settings-button checkout-tab__radio-settings-button_active"
          >
            Добавить новый адрес
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
      <Popup active={isOpenModal} setActive={setIsOpenModal} className={""}>
        <h2 className="profile-title">Добавить новый адрес</h2>
        <form className="profile-form">
          <div className="profile-form__inputs">
            <Input
              label={"Название: рабочий, домашний, загородный"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"address_name"}
              defaultValue={""}
              type={"text"}
              id={"address_name"}
            />
            <Select
              selectClass={"input-box"}
              label={"Страна"}
              title={"Выбрать страну..."}
              callback={formChangeHandler} // Callback on select...
              name={"country"} // The name of the select...
              items={[{ name: "Казахстан", value: "KZ" }]} // Array of the select's els in format {name: "", value: ""}...
            />
            <Select
              selectClass={"input-box"}
              label={"Город"}
              title={"Выбрать город..."}
              callback={formChangeHandler} // Callback on select...
              name={"city"} // The name of the select...
              items={[{ name: "Алматы", value: "Алматы" }]} // Array of the select's els in format {name: "", value: ""}...
            />
            <Input
              label={"Район"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"district"}
              defaultValue={""}
              type={"text"}
              id={"district"}
            />
            <Input
              label={"Улица"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"street"}
              defaultValue={""}
              type={"text"}
              id={"street"}
            />
            <div className="profile-form__inputs-section">
              <Input
                label={"Дом"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"house"}
                defaultValue={""}
                type={"text"}
                id={"house"}
              />
              <Input
                label={"Квартира / Офис"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"apartment"}
                defaultValue={""}
                type={"text"}
                id={"apartment"}
              />
            </div>
            <div className="profile-form__inputs-section">
              <Input
                label={"Подъезд"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"entrance"}
                defaultValue={""}
                type={"text"}
                id={"entrance"}
              />
              <Input
                label={"Этаж"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"floor"}
                defaultValue={""}
                type={"text"}
                id={"floor"}
              />
              <Input
                label={"Домофон"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"intercom"}
                defaultValue={""}
                type={"text"}
                id={"intercom"}
              />
            </div>
            <Input
              label={"Почтовый индекс"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"postcode"}
              defaultValue={""}
              type={"text"}
              id={"postcode"}
            />
            <Input
              label={"Комментарий к адресу"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"notes"}
              defaultValue={""}
              type={"textarea"}
              id={"notes"}
            />
          </div>
          <Button
            text={"Добавить"}
            className={"button_active profile-form__submit"}
            onClick={addAddressClickHandler}
          />
        </form>
      </Popup>
    </>
  );
}

export default AddAddress;
