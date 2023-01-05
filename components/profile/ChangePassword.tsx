import React from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";

export default function ChangePassword(props) {
  return (
    <section className="profile-section">
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Изменить пароль</h2>
          <form action="" className="profile-form">
            <div className="profile-form__inputs">
              <Input
                label={"Новый пароль"}
                onInput={() => {}}
                className={"form__input"}
                name={"password"}
                onChange={() => {}}
                defaultValue={""}
                type={"password"}
                id={"password"}
              />
              <Input
                label={"Подтвердите новый пароль"}
                onInput={() => {}}
                className={"form__input"}
                name={"password_check"}
                onChange={() => {}}
                defaultValue={""}
                type={"password_check"}
                id={"password"}
              />
            </div>
            <Button
              text={"Сохранить"}
              className={"button_disabled profile-form__submit"}
              onClick={() => {}}
            />
          </form>
        </div>
      </div>
    </section>
  );
}
