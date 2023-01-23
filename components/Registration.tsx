import React from "react";
import Logo from "../src/img/logo-auth.png";
import Input from "./common/UiKit/Input";
import Button from "./common/UiKit/Button";
import Link from "next/link";
import useForm from "../hooks/hooks.form";
import useAuth from "../hooks/hooks.auth";
import { useRouter } from "next/router";
interface RegData {
  id: string;
  first_name: string;
  last_name: string;
  email: string;
  access: string;
  refresh: string;
}
function Registration(props) {
  const router = useRouter();
  const { formChangeHandler, formSubmitHandler, loading } = useForm(regSuccess);
  const { login } = useAuth();

  function regSuccess(data: RegData) {
    login(data.access, data.refresh).then(async () => {
      await router.push("/profile/my-profile");
    });
  }
  return (
    <section className="auth-section registration__section">
      <div className="registration__container">
        <div className="auth-logo registration__logo">
          <img src={Logo.src} alt="" />
        </div>
        <form
          action="/api/auth/register/"
          data-method={"POST"}
          onSubmit={formSubmitHandler}
          className="auth-form form registration__form"
        >
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
              required={true}
              label={"Имя"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"first_name"}
              defaultValue={""}
              type={"text"}
              id={"first_name"}
            />
            <Input
              required={true}
              label={"Фамилия"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"last_name"}
              defaultValue={""}
              type={"text"}
              id={"last_name"}
            />
            <Input
              required={true}
              label={"E-mail"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"email"}
              defaultValue={""}
              type={"email"}
              id={"email"}
            />
            <Input
              required={true}
              label={"Пароль"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"password"}
              defaultValue={""}
              type={"password"}
              id={"password"}
            />
            <Input
              required={true}
              label={"Повторите пароль"}
              onInput={formChangeHandler}
              className={"form__input"}
              name={"password_check"}
              defaultValue={""}
              type={"password"}
              id={"password_check"}
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
