import React, { useEffect, useState } from "react";
import Input from "../common/UiKit/Input";
import Select from "../common/Select";
import Button from "../common/UiKit/Button";
import Popup from "../common/Popup";
import { useStorage } from "../../hooks/hooks.storage";
import { IUserAddresses } from "../../interfaces/UserAddresses";

interface Props {
  address: IUserAddresses;
  onChangeAddress: (address) => void;
}
function ChangeAddress({ address, onChangeAddress }: Props) {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [formData, setFormData] = useState({});
  const {
    add: addAddressToStorage,
    getAvlID,
    removeById,
  } = useStorage("4GeekUserAddress");
  function formChangeHandler(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }
  function addAddressClickHandler(e) {
    e.preventDefault();
    const addressId = getAvlID();
    removeById(address.id);
    addAddressToStorage({ ...formData, id: addressId });
    onChangeAddress({ ...formData, id: addressId });
    setIsOpenModal(false);
  }
  useEffect(() => {
    if (!!address) {
      setFormData({
        address_name: address.address_name,
        country: address.country,
        city: address.city,
        district: address.district,
        street: address.street,
        house: address.house,
        apartment: address.apartment,
        entrance: address.entrance,
        floor: address.floor,
        intercom: address.intercom,
        postcode: address.postcode,
        notes: address.notes,
      });
    }
  }, [address]);

  return (
    <>
      <button
        onClick={(e) => {
          e.preventDefault();
          setIsOpenModal(true);
        }}
        className="checkout-tab__radio-settings-button"
      >
        Редактировать
      </button>
      <Popup active={isOpenModal} setActive={setIsOpenModal} className={""}>
        <h2 className="profile-title">Редактировать адрес</h2>
        <form className="profile-form">
          <div className="profile-form__inputs">
            <Input
              label={"Название: рабочий, домашний, загородный"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"address_name"}
              defaultValue={address.address_name}
              type={"text"}
              id={"address_name"}
            />
            <Select
              selectClass={"input-box"}
              label={"Страна"}
              title={"Выбрать страну..."}
              callback={formChangeHandler} // Callback on select...
              name={"country"} // The name of the select...
              defaultValue={address.country}
              items={[{ name: "Казахстан", value: "KZ" }]} // Array of the select's els in format {name: "", value: ""}...
            />
            <Select
              selectClass={"input-box"}
              label={"Город"}
              title={"Выбрать город..."}
              callback={formChangeHandler} // Callback on select...
              defaultValue={address.city}
              name={"city"} // The name of the select...
              items={[{ name: "Алматы", value: "Алматы" }]} // Array of the select's els in format {name: "", value: ""}...
            />
            <Input
              label={"Район"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"district"}
              defaultValue={address.district}
              type={"text"}
              id={"district"}
            />
            <Input
              label={"Улица"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"street"}
              defaultValue={address.street}
              type={"text"}
              id={"street"}
            />
            <div className="profile-form__inputs-section">
              <Input
                label={"Дом"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"house"}
                defaultValue={address.house}
                type={"text"}
                id={"house"}
              />
              <Input
                label={"Квартира / Офис"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"apartment"}
                defaultValue={address.apartment}
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
                defaultValue={address.entrance}
                type={"text"}
                id={"entrance"}
              />
              <Input
                label={"Этаж"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"floor"}
                defaultValue={address.floor}
                type={"text"}
                id={"floor"}
              />
              <Input
                label={"Домофон"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"intercom"}
                defaultValue={address.intercom}
                type={"text"}
                id={"intercom"}
              />
            </div>
            <Input
              label={"Почтовый индекс"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"postcode"}
              defaultValue={address.postcode}
              type={"text"}
              id={"postcode"}
            />
            <Input
              label={"Комментарий к адресу"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"notes"}
              defaultValue={address.notes}
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

export default ChangeAddress;
