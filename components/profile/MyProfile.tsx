import React, { useContext, useEffect, useState } from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";
import { AuthContext } from "../../context/AuthContext";
import { ProfileContext } from "../../context/ProfileContext";
import useForm from "../../hooks/hooks.form";
import useHttp from "../../hooks/hooks.http";
import { useMobile } from "../../hooks/hooks.mobile";
import HeaderMobile from "../common/HeaderMobile";

function MyProfile() {
  const { profile, updateProfile, reInitProfile } = useContext(ProfileContext);
  const { token } = useContext(AuthContext);
  const [isChange, setIsChange] = useState(!profile?.is_verified);
  const [isCodeSend, setIsCodeSend] = useState(false);
  const [timer, setTimer] = useState(30);
  const { request } = useHttp();
  const { isMobile } = useMobile();

  const { formChangeHandler, formSubmitHandler } = useForm(
    profile?.is_verified ? updateProfile : reInitProfile
  );

  function changeClickHandler(e) {
    if (profile?.is_verified) {
      if (!isChange) e.preventDefault();
      setIsChange((prevState) => !prevState);
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
    <section className="profile-section">
      {!!profile && isMobile && (
        <HeaderMobile
          title={profile?.is_verified ? "Мой профиль" : "Подтверждение почты"}
        />
      )}
      {!!profile && (
        <div className="profile-blocks">
          <div style={{ flex: "1 1 auto" }} className="profile-block">
            {!isMobile && (
              <h2 className="profile-title">
                {profile?.is_verified ? "Мой профиль" : "Подтверждение почты"}
              </h2>
            )}
            <form
              action={
                profile?.is_verified
                  ? "/api/profile/"
                  : "/api/auth/confirm_verification/"
              }
              data-method={profile?.is_verified ? "PATCH" : "POST"}
              method={profile?.is_verified ? "PATCH" : "POST"}
              onSubmit={formSubmitHandler}
              className="profile-form"
            >
              {profile?.is_verified && (
                <div className="profile-form__inputs">
                  <Input
                    label={"Имя"}
                    onInput={formChangeHandler}
                    className={"form__input"}
                    name={"first_name"}
                    defaultValue={profile?.first_name}
                    type={"text"}
                    id={"first_name"}
                    disabled={!isChange}
                  />
                  <Input
                    label={"Фамилия"}
                    onInput={formChangeHandler}
                    className={"form__input"}
                    name={"last_name"}
                    defaultValue={profile?.last_name}
                    type={"text"}
                    id={"last_name"}
                    disabled={!isChange}
                  />
                  <Input
                    label={"Номер телефона"}
                    onInput={formChangeHandler}
                    className={"form__input"}
                    name={"phone_number"}
                    defaultValue={profile?.phone_number}
                    type={"tel"}
                    id={"phone_number"}
                    disabled={!isChange}
                  />
                  <Input
                    label={"E-Mail"}
                    onInput={formChangeHandler}
                    className={"form__input"}
                    name={"email"}
                    defaultValue={profile?.email}
                    type={"text"}
                    id={"email"}
                    disabled={!isChange}
                  />
                  <Input name={"detail"} type={"hidden"} disabled={true} />
                </div>
              )}
              {!profile?.is_verified && (
                <div className="profile-form__inputs">
                  <Input
                    label={"На ваш email отправлен 6-значный код:"}
                    onInput={formChangeHandler}
                    className={"form__input"}
                    name={"code"}
                    type={"text"}
                    id={"code"}
                    additionalButton={
                      <button
                        disabled={isCodeSend}
                        onClick={sendCodeClickHandler}
                      >
                        Отправить код повторно {isCodeSend && "через: " + timer}
                      </button>
                    }
                  />
                  <Input name={"detail"} type={"hidden"} disabled={true} />
                </div>
              )}
              <Button
                text={
                  !isChange && profile?.is_verified
                    ? "Редактировать"
                    : isChange && profile?.is_verified
                    ? "Сохранить изменения"
                    : "Подтвердить"
                }
                className={
                  (!isChange ? "button_disabled" : "button_active") +
                  " profile-form__submit"
                }
                onClick={changeClickHandler}
              />
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default MyProfile;
