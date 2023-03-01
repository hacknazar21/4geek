import BG_Image from "../../src/img/contacts/contacts-bg.png";
import Input from "../common/UiKit/Input";
import HeaderMobile from "../common/HeaderMobile";
import { useMobile } from "../../hooks/hooks.mobile";

function Contacts(props) {
  /* Кастомные хуки */
  const { isMobile } = useMobile();
  return (
    <>
      {isMobile && <HeaderMobile title={"Контакты"} />}
      <section className="contacts-page">
        <div className="contacts-page__container">
          <div className="contacts-page__items">
            <div className="contacts-page__item contacts-item contacts-page__item_first">
              <div className="contacts-item__bg-image">
                <img src={BG_Image.src} alt="" />
              </div>
              <h2 className="contacts-item__title">Наши контактные данные:</h2>
              <div className="contacts-item__content">
                <div className="contacts-item__section contacts-section">
                  <h3 className="contacts-section__title">Телефоны:</h3>
                  <div className="contacts-section__items">
                    <a
                      href="tel:+77757222255"
                      className="contacts-section__item"
                    >
                      +7 (775) 722 22 55
                    </a>
                  </div>
                </div>
                <div className="contacts-item__section contacts-section">
                  <h3 className="contacts-section__title">Реквизиты:</h3>
                  <div className="contacts-section__items">
                    <div className="contacts-section__item">
                      ИП "КИМ ЛЮБОВЬ"
                    </div>
                    <div className="contacts-section__item">
                      ИИН 970210401582
                    </div>
                    <div className="contacts-section__item">
                      050011, Республика Казахстан г. Алматы, ул. Рихарда Зорге,
                      18
                    </div>
                  </div>
                </div>
                <div className="contacts-item__section contacts-section">
                  <h3 className="contacts-section__title">
                    Электронная почта:
                  </h3>
                  <div className="contacts-section__items">
                    <a
                      href="mailto:telefonik.almaty@gmail.com"
                      className="contacts-section__item"
                    >
                      telefonik.almaty@gmail.com
                    </a>
                  </div>
                </div>
                <div className="contacts-item__section contacts-section">
                  <h3 className="contacts-section__title">Время работы:</h3>
                  <div className="contacts-section__items">
                    <p className="contacts-section__item">
                      Пн – Пт: 09:00 – 17:00
                    </p>
                    <p className="contacts-section__item">Сб: 09.00 - 14.00</p>
                    <p className="contacts-section__item">Вс: выходной</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contacts-page__item contacts-page__item_second">
              <h2 className="contacts-item__title">Остались вопросы?</h2>
              <div className="contacts-item__subtitle">
                <p>
                  Если по каким-либо причинам Вы не смогли связаться с нами,
                  заполните форму обратной связи и мы обязательно перезвоним Вам
                  в удобное для Вас время.
                </p>
              </div>
              <form action="" className="contacts-item__form contacts-form">
                <div className="contacts-form__row contacts-form__row_flex">
                  <Input
                    className="contacts-form__input"
                    onInput={() => {}}
                    name={"name"}
                    required={true}
                    type={"text"}
                    label={null}
                    placeholder={"Имя"}
                    id={"name"}
                    defaultValue={null}
                  />
                  <Input
                    className="contacts-form__input"
                    onInput={() => {}}
                    name={"phone_number"}
                    required={true}
                    type={"tel"}
                    placeholder={"Номер телефона"}
                    id={"phone_number"}
                    defaultValue={null}
                  />
                </div>
                <div className="contacts-form__row">
                  <Input
                    className="contacts-form__input"
                    onInput={() => {}}
                    name={"email"}
                    required={true}
                    type={"text"}
                    placeholder={"Email"}
                    id={"email"}
                    defaultValue={null}
                  />
                </div>
                <div className="contacts-form__row">
                  <Input
                    className="contacts-form__input"
                    onInput={() => {}}
                    name={"message"}
                    required={true}
                    type={"textarea"}
                    placeholder={"Сообщение"}
                    id={"message"}
                    defaultValue={null}
                  />
                </div>
                <div className="contacts-form__row">
                  <button type="submit" className="contacts-form__submit">
                    Оставить комментарий
                  </button>
                </div>
                <div className="contacts-form__row">
                  <p className="contacts-form__additional">
                    Нажимая кнопку, вы соглашаетесь на обработку персональных
                    данных
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contacts;
