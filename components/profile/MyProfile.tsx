import React, { useContext, useState } from "react";
import Input from "../common/UiKit/Input";
import Button from "../common/UiKit/Button";
import { ProfileContext } from "../../pages/_app";
import useForm from "../../hooks/hooks.form";

function MyProfile(props) {
  const { profile, updateProfile } = useContext(ProfileContext);
  const [isChange, setIsChange] = useState(false);
  const { formChangeHandler, formSubmitHandler, setError } =
    useForm(updateProfile);

  function changeClickHandler(e) {
    if (!isChange) e.preventDefault();
    setIsChange((prevState) => !prevState);
    // if (profile?.is_verified) setIsChange((prevState) => !prevState);
    // else
    //   setError([
    //     {
    //       name: "detail",
    //       value:
    //         "Ваш аккаунт не верифицирован. Вы не можете воспользоваться данной функцией",
    //     },
    //   ]);
  }
  return (
    <section className="profile-section">
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Мой профиль</h2>
          <form
            action="/api/profile/"
            data-method={"PATCH"}
            method={"PATCH"}
            onSubmit={formSubmitHandler}
            className="profile-form"
          >
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
            <Button
              text={!isChange ? "Редактировать" : "Сохранить изменения"}
              className={
                (!isChange ? "button_disabled" : "button_active") +
                " profile-form__submit"
              }
              onClick={changeClickHandler}
            />
          </form>
        </div>
      </div>
    </section>
  );
}

export default MyProfile;
