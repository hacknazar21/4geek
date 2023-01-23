import React, { useState } from "react";
import Logo from "../src/img/logo-auth.png";
import Input from "./common/UiKit/Input";
import Button from "./common/UiKit/Button";
import Link from "next/link";
import useForm from "../hooks/hooks.form";
import useAuth from "../hooks/hooks.auth";
import { useRouter } from "next/router";

export default function RestorePassword(props) {
  const router = useRouter();
  const { formChangeHandler, formSubmitHandler, loading } = useForm(regSuccess);
  const { login } = useAuth();
  const [isCodeSend, setIsCodeSend] = useState(false);
  async function regSuccess() {
    if (isCodeSend) await router.push("/auth/login");
    else setIsCodeSend(true);
  }
  return (
    <section className="auth-section registration__section">
      <div className="registration__container">
        <div className="auth-logo registration__logo">
          <img src={Logo.src} alt="" />
        </div>
        <form
          action={
            isCodeSend
              ? "/api/auth/reset_password/confirm/"
              : "/api/auth/reset_password/request/"
          }
          method="POST"
          data-method="POST"
          onSubmit={formSubmitHandler}
          className="auth-form form registration__form"
        >
          <div className="form__tabs one">
            <Link href="" className="form__tab active">
              <p>Сброс пароля</p>
            </Link>
          </div>
          <div className="form__inputs">
            <Input
              label={"E-mail"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"email"}
              defaultValue={""}
              type={"email"}
              id={"email"}
            />
            {isCodeSend && (
              <>
                <Input
                  label={"На ваш email отправлен 6-значный код:"}
                  onInput={formChangeHandler}
                  className={"form__input"}
                  name={"code"}
                  defaultValue={""}
                  type={"text"}
                  id={"code"}
                />
                <Input
                  label={"Новый пароль"}
                  onInput={formChangeHandler}
                  className={"form__input"}
                  name={"new_password"}
                  defaultValue={""}
                  type={"password"}
                  id={"new_password"}
                />
                <Input
                  label={"Подтвердите новый пароль"}
                  onInput={formChangeHandler}
                  className={"form__input"}
                  name={"new_password_check"}
                  defaultValue={""}
                  type={"password"}
                  id={"new_password_check"}
                />
              </>
            )}
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
