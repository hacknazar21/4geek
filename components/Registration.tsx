import React from "react";
import Logo from "../src/img/logo-auth.png";
import Input from "./common/UiKit/Input";
import Button from "./common/UiKit/Button";
import Link from "next/link";
function Registration(props) {
  return (
    <section className="auth-section registration__section">
      <div className="registration__container">
        <div className="auth-logo registration__logo">
          <img src={Logo.src} alt="" />
        </div>
        <form action="" className="auth-form form registration__form">
          <div className="form__tabs">
            <Link href="/auth/login" className="form__tab">
              <p>Войти</p>
            </Link>
            <Link href="/auth/registration" className="form__tab active">
              <p>Зарегистрироваться</p>
            </Link>
          </div>
          <div className="form__inputs">
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
              label={"E-mail"}
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
            text={"Зарегистрироваться "}
            className={"button_disabled form__submit"}
            onClick={() => {}}
          />
        </form>
      </div>
    </section>
  );
}

export default Registration;
