import React from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";

function MyProfile(props) {
  return (
    <section className="profile-section">
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Мой профиль</h2>
          <form action="" className="profile-form">
            <div className="profile-form__inputs">
              <Input
                label={"Имя"}
                onInput={() => {}}
                className={"form__input"}
                name={"name"}
                onChange={() => {}}
                defaultValue={""}
                type={"text"}
                id={"name"}
              />
              <Input
                label={"Фамилия"}
                onInput={() => {}}
                className={"form__input"}
                name={"surname"}
                onChange={() => {}}
                defaultValue={""}
                type={"text"}
                id={"surname"}
              />
              <Input
                label={"Номер телефона"}
                onInput={() => {}}
                className={"form__input"}
                name={"phone_number"}
                onChange={() => {}}
                defaultValue={""}
                type={"tel"}
                id={"phone_number"}
              />
              <Input
                label={"E-Mail"}
                onInput={() => {}}
                className={"form__input"}
                name={"email"}
                onChange={() => {}}
                defaultValue={""}
                type={"text"}
                id={"email"}
              />
            </div>
            <Button
              text={"Сохранить изменения"}
              className={"button_disabled profile-form__submit"}
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
