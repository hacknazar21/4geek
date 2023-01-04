import React from "react";
import Logo from "../src/img/logo-auth.png";
import Input from "./common/UiKit/Input";
import Button from "./common/UiKit/Button";
import Link from "next/link";

export default function RestorePassword(props) {
  return (
    <section className="auth-section registration__section">
      <div className="registration__container">
        <div className="auth-logo registration__logo">
          <img src={Logo.src} alt="" />
        </div>
        <form action="" className="auth-form form registration__form">
          <div className="form__tabs one">
            <Link href="" className="form__tab active">
              <p>Сброс пароля</p>
            </Link>
          </div>
          <div className="form__inputs">
            <Input
              label={"E-mail"}
              onInput={() => {}}
              className={"form__input"}
              name={"email"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"email"}
            />
            <Input
              label={"На ваш email отправлен 6-значный код:"}
              onInput={() => {}}
              className={"form__input"}
              name={"code"}
              onChange={() => {}}
              defaultValue={""}
              type={"text"}
              id={"code"}
            />
            <Input
              label={"Новый пароль"}
              onInput={() => {}}
              className={"form__input"}
              name={"new_password"}
              onChange={() => {}}
              defaultValue={""}
              type={"password"}
              id={"new_password"}
            />
            <Input
              label={"Подтвердите новый пароль"}
              onInput={() => {}}
              className={"form__input"}
              name={"new_password_check"}
              onChange={() => {}}
              defaultValue={""}
              type={"password"}
              id={"new_password_check"}
            />
          </div>
          <Button
            text={"Сброс пароля"}
            className={"button_disabled form__submit"}
            onClick={() => {}}
          />
        </form>
      </div>
    </section>
  );
}
