import React from "react";
import Logo from "../../src/img/logo.png";
function AboutInfo(props) {
  return (
    <section className="about__info about-info">
      <div className="about-info__container">
        <div className="about-info__header">
          <h1 className="about-info__title">
            Добро пожаловать на сайт интернет-магазина «TELEFONIK!»
          </h1>
          <div className="about-info__header-image">
            <img src={Logo.src} alt="" />
          </div>
        </div>
        <div className="about-info__text">
          <p>
            Компания «TELEFONIK» успешно занимается реализацией товаров в сфере
            продаж мобильных устройств и мобильных аксессуаров на территории
            Республики Казахстан уже более 9 лет, имея более 20 розничных
            торговых точек и сотни тысяч довольных клиентов.
          </p>
          <p>
            «TELEFONIK» это лидирующая сеть магазинов по продаже мобильных
            устройств и мобильных аксессуаров, опережающая по ассортименту и
            сервису других представителей на рынке Казахстана.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutInfo;
