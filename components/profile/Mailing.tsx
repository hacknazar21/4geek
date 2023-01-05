import React from "react";

function Mailing(props) {
  return (
    <section className={"profile-section mailing__section"}>
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Рассылки</h2>
          <form className="mailing__items">
            <div className="mailing__item mailing-item">
              <h3 className="mailing-item__title">Электронная почта</h3>
              <div className="mailing-item__checkbox">
                <input
                  defaultChecked={true}
                  type="radio"
                  id={"email"}
                  name={"mailing_method"}
                />
                <label htmlFor="email">
                  Распродажи и секретные промокоды на товары
                </label>
              </div>
            </div>
            <div className="mailing__item mailing-item">
              <h3 className="mailing-item__title">СМС-сообщение</h3>
              <div className="mailing-item__checkbox">
                <input type="radio" id={"sms"} name={"mailing_method"} />
                <label htmlFor="sms">
                  Бонусные акции, скидки и специальные предложения Наши
                  подписчики первыми узнают о самых интересных скидках!
                </label>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Mailing;
