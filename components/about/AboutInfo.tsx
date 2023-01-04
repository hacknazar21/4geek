import React from "react";
import Logo from "../../src/img/logo.png";
function AboutInfo(props) {
  return (
    <section className="about__info about-info">
      <div className="about-info__container">
        <div className="about-info__header">
          <h1 className="about-info__title">
            Добро пожаловать на сайт интернет-магазина 4geek!
          </h1>
          <div className="about-info__header-image">
            <img src={Logo.src} alt="" />
          </div>
        </div>
        <div className="about-info__text">
          <p>
            Мы стараемся изменить представление о том, каким должен быть
            идеальный магазин. Теперь не надо толпится в очередях, бегать по
            этажам в поисках необходимого и возится с оплатой на кассе. Мы
            создаем платформу, которая позволит искателям электроники и товаров
            для
          </p>
          <p>
            гиков просмотреть все характеристики товара, сравнить с другими
            производителями и отправить товар в виртуальную корзину. А удобная и
            быстрая система курьерская система доставит вам товар в кратчайшие
            сроки.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
