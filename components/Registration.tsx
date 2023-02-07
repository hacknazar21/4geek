import React, { useContext, useEffect, useState } from "react";
import Logo from "../src/img/logo-auth.png";
import Input from "./common/UiKit/Input";
import Button from "./common/UiKit/Button";
import Link from "next/link";
import useForm from "../hooks/hooks.form";
import useAuth from "../hooks/hooks.auth";
import { useRouter } from "next/router";
import useHttp from "../hooks/hooks.http";
import { AuthContext } from "../context/AuthContext";
import { ProfileContext } from "../context/ProfileContext";
import Loading from "./common/Loading";
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
  const { request } = useHttp();
  const { login, token } = useContext(AuthContext);
  const { reInitProfile } = useContext(ProfileContext);
  const { formChangeHandler, formSubmitHandler, loading } = useForm(regSuccess);

  const [isCode, setIsCode] = useState(false);
  const [isCodeSend, setIsCodeSend] = useState(false);
  const [timer, setTimer] = useState(30);

  async function regSuccess(data: RegData) {
    if (!isCode) {
      window.scrollTo(0, 0);
      login(data.access, data.refresh);
      setIsCode(true);
    } else {
      reInitProfile();
      await router.push("/profile/my-profile");
    }
  }
  async function sendCodeClickHandler(e) {
    e.preventDefault();
    if (isCodeSend) return;
    try {
      await request("/api/auth/request_verification_code/", "POST", null, {
        Authorization: `Bearer ${token}`,
      });
    } catch (e) {
      console.log(e.message);
    }
    setIsCodeSend(true);
    // Запуск таймера
    setInterval(() => {
      setTimer((prevState) => prevState - 1);
    }, 1000);
  }
  useEffect(() => {
    if (timer === 0) {
      setIsCodeSend(false);
      setTimer(30);
    }
  }, [timer]);

  return (
    <section className="auth-section registration__section">
      <div className="registration__container">
        <div className="auth-logo registration__logo">
          <img src={Logo.src} alt="" />
        </div>
        <form
          action={
            isCode ? "/api/auth/confirm_verification/" : "/api/auth/register/"
          }
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
          {!isCode && (
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
          )}
          {isCode && (
            <div className="form__inputs">
              <Input
                label={"На ваш email отправлен 6-значный код:"}
                onInput={formChangeHandler}
                className={"form__input"}
                name={"code"}
                type={"text"}
                id={"code"}
                additionalButton={
                  <button onClick={sendCodeClickHandler}>
                    Отправить код повторно {isCodeSend && "через: " + timer}
                  </button>
                }
              />
              <Input name={"detail"} type={"hidden"} disabled={true} />
            </div>
          )}
          <Button
            text={isCode ? "Зарегистрироваться" : "Далее"}
            className={"button_disabled form__submit"}
            onClick={() => {}}
          />
          {loading && <Loading style={{ right: 0, left: "initial" }} />}
        </form>
      </div>
    </section>
  );
}

export default Registration;
