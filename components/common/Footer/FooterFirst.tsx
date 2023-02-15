import React, { useEffect, useState } from "react";
import Logo from "../../../src/img/logo.png";
import LogoHalyk from "../../../src/img/logo-halyk.png";
import useHttp from "../../../hooks/hooks.http";
import { IPagination } from "../../../interfaces/Pagination";
import { ICategory } from "../../../interfaces/Category";
import Link from "next/link";
import { useMobile } from "../../../hooks/hooks.mobile";
function FooterFirst(props) {
  const { isMobile } = useMobile();
  const { request } = useHttp();
  const [categories, setCategories] = useState<IPagination<ICategory>>(null);
  async function getCategories() {
    const data: IPagination<ICategory> = await request("/api/categories/");
    setCategories({ ...data });
  }
  useEffect(() => {
    getCategories();
  }, []);
  return (
    <section className="footer-first">
      <div className="footer-first__container">
        <div className="footer-first__logos">
          <div className="footer-first__logo">
            <Link href="/">
              <img src={Logo.src} alt="" />
            </Link>
          </div>
          <div className="footer-first__logo">
            <a href="https://epayment.kz/" target="_blank" rel="noreferrer">
              <img src={LogoHalyk.src} alt="" />
            </a>
          </div>
        </div>
        <menu className="footer-first__menu">
          <div className="footer-first__menu-column">
            <h4 className="footer-first__section-title">Категории</h4>
            <ul className="footer-menu__list">
              {categories?.results.map((category) => (
                <li key={category.id} className="footer-menu__list-item">
                  <Link
                    href="/catalog/[link]"
                    as={"/catalog/" + category.lookup_slug}
                    className="footer-menu__link"
                  >
                    {category.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-first__menu-column">
            <h4 className="footer-first__section-title">Клиентам</h4>
            <ul className="footer-menu__list">
              <li className="footer-menu__list-item">
                <Link href="/contacts" className="footer-menu__link">
                  Контакты
                </Link>
              </li>
              <li className="footer-menu__list-item">
                <Link href="/about" className="footer-menu__link">
                  О компании
                </Link>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__link">
                  Trade in
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__link">
                  Доставка
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__link">
                  Гарантии
                </a>
              </li>
              <li className="footer-menu__list-item">
                <a href="" className="footer-menu__link">
                  Постоянным клиентам
                </a>
              </li>
            </ul>
            {isMobile && (
              <div className="footer-first__menu-column">
                <h4 className="footer-first__section-title">Контакты</h4>
                <ul className="footer-menu__list">
                  <li className="footer-menu__list-item">
                    <a href="tel: +77757222255" className="footer-menu__link">
                      +7 (775) 722 22 55
                    </a>
                  </li>
                  <li className="footer-menu__list-item">
                    <a
                      href="mailto:telefonik.almaty@gmail.com"
                      className="footer-menu__link"
                    >
                      telefonik.almaty@gmail.com
                    </a>
                  </li>
                </ul>
              </div>
            )}
          </div>
          {!isMobile && (
            <div className="footer-first__menu-column">
              <h4 className="footer-first__section-title">Контакты</h4>
              <ul className="footer-menu__list">
                <li className="footer-menu__list-item">
                  <a href="tel: +77757222255" className="footer-menu__link">
                    +7 (775) 722 22 55
                  </a>
                </li>
                <li className="footer-menu__list-item">
                  <a
                    href="mailto:telefonik.almaty@gmail.com"
                    className="footer-menu__link"
                  >
                    telefonik.almaty@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          )}
        </menu>
        <form action="" className="footer-first__form">
          <h4 className="footer-first__section-title">Подпишись на новости</h4>
          <div className="footer-first__input-box">
            <input
              required={true}
              type="email"
              placeholder="Введите ваш Email"
              className="footer-first__input"
            />
            <button type="submit" className="footer-first__form-submit">
              <span>Отправить</span>
              <svg
                width="18"
                height="18"
                viewBox="0 0 18 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.54208 7.88482C2.67761 8.28033 2.85842 9.48946 3.84719 9.49511L8.05087 9.51206C8.13562 9.51206 8.16387 9.54596 8.16387 9.63071L8.17517 13.8061C8.17517 14.778 9.38995 14.9983 9.81936 14.0604L14.0965 4.80551C14.5541 3.81674 13.7857 3.16133 12.8422 3.59639L3.54208 7.88482ZM4.88681 8.47809C4.84161 8.47809 4.82466 8.42724 4.87551 8.39898L12.8422 4.75466C12.91 4.72641 12.9495 4.76596 12.9156 4.83376L9.26564 12.7778C9.24304 12.8343 9.18654 12.823 9.18654 12.7722L9.20914 8.96965C9.20914 8.62499 9.04529 8.45549 8.68933 8.45549L4.88681 8.47809Z"
                  fill="#1C1C1E"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default FooterFirst;
