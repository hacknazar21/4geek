import React, { useContext, useEffect, useState } from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";
import Select from "../common/Select";
import useForm from "../../hooks/hooks.form";
import useHttp from "../../hooks/hooks.http";
import { IPagination } from "../../interfaces/Pagination";
import { IUserAddresses } from "../../interfaces/UserAddresses";
import { ProfileContext } from "../../context/ProfileContext";
import { AuthContext } from "../../context/AuthContext";
import Loading from "../common/Loading";

function DeliveryAddress(props) {
  const { request, loading: loadingAddresses } = useHttp();
  const { profile } = useContext(ProfileContext);
  const { token } = useContext(AuthContext);
  const { formSubmitHandler, formChangeHandler, loading, setForm } =
    useForm(getUserAddresses);
  const [userAddresses, setUserAddresses] = useState([]);

  async function getUserAddresses() {
    const data: IPagination<IUserAddresses> = await request(
      "/api/useraddresses/",
      "GET",
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    setUserAddresses([...data.results]);

    document.querySelectorAll("input").forEach((input) => {
      input.value = "";
    });
  }
  useEffect(() => {
    if (token) getUserAddresses();
  }, [token]);

  async function addressDeleteHandler(id) {
    const data: IPagination<IUserAddresses> = await request(
      "/api/useraddresses/" + id,
      "DELETE",
      null,
      {
        Authorization: `Bearer ${token}`,
      }
    );
    await getUserAddresses();
  }

  return (
    <section className="profile-section delivery-address__section">
      {loadingAddresses && <Loading />}
      <div className="profile-blocks delivery-address__blocks">
        {!loading &&
          userAddresses.map((userAddress: IUserAddresses) => (
            <div
              key={userAddress.id}
              className="delivery-address__item delivery-address-item"
            >
              <div className="delivery-address-item__name">
                <p>{userAddress.address_name}</p>
              </div>
              <div className="delivery-address-item__value">
                <p>
                  {profile?.first_name} {profile?.last_name}
                </p>
                <p>{userAddress.country}</p>
                <p>{userAddress.postcode}</p>
                <p>
                  {userAddress.district} обл., {userAddress.city}
                </p>
                <p>
                  {userAddress.street}, {userAddress.house} д., кв.{" "}
                  {userAddress.apartment}, под. {userAddress.entrance}, дмф.{" "}
                  {userAddress.intercom}, эт. {userAddress.floor}
                </p>
                <p>{profile?.phone_number}</p>
              </div>
              <div className="delivery-address-item__buttons">
                <button className="delivery-address-item__button">
                  Редактировать
                </button>
                <button
                  onClick={() => {
                    addressDeleteHandler(userAddress.id);
                  }}
                  className="delivery-address-item__button"
                >
                  Удалить
                </button>
              </div>
            </div>
          ))}
      </div>
      <div
        style={{ flex: "1 1 auto" }}
        className="profile-block delivery-address__item"
      >
        <h2 className="profile-title">Добавить новый адрес</h2>
        <form
          action="/api/useraddresses/"
          method={"POST"}
          data-method={"POST"}
          className="profile-form"
          onSubmit={formSubmitHandler}
        >
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
            onClick={() => {}}
          />
        </form>
      </div>
    </section>
  );
}

export default DeliveryAddress;
