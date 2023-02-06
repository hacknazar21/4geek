import React from "react";
import Logo from "../../src/img/logo-bonuses.png";
import Img1 from "../../src/img/placeholders/profile/bonuses/01.png";
import Img2 from "../../src/img/placeholders/profile/bonuses/02.png";
import Img3 from "../../src/img/placeholders/profile/bonuses/03.png";
import Img4 from "../../src/img/placeholders/profile/bonuses/04.png";
import HeaderMobile from "../common/HeaderMobile";
import { useMobile } from "../../hooks/hooks.mobile";
function Bonuses(props) {
  const { isMobile } = useMobile();

  return (
    <section className="profile-section bonuses__section">
      {isMobile && <HeaderMobile title={"Мои бонусы"} />}
      <div className="profile-blocks">
        <div style={{ flex: "1 1 auto" }} className="profile-block">
          <h2 className="profile-title">Мои бонусы</h2>
          <div className="bonuses__box">
            <div className="bonuses__items">
              <div className="bonuses__images">
                <div className="bonuses__main-image">
                  <img src={Logo.src} alt="" />
                </div>
                <div className="bonuses__image">
                  <img src={Img1.src} alt="" />
                </div>
                <div className="bonuses__image">
                  <img src={Img2.src} alt="" />
                </div>
                <div className="bonuses__image">
                  <img src={Img3.src} alt="" />
                </div>
                <div className="bonuses__image">
                  <img src={Img4.src} alt="" />
                </div>
              </div>
              <div className="bonuses__info">
                <h2 className="bonuses__title">Ваш баланс:</h2>
                <div className="bonuses__value">10 050 Б</div>
                <div className="bonuses__danger">Сгорает через: 13 дней</div>
              </div>
            </div>
            <div className="bonuses__text">
              <p>
                С каждого заказа на сайте 4geek на ваш счет начисляются 5% от
                суммы заказа баллами. Баллы можно использовать для оплаты, но не
                более 50% от стоимости товара. Баллы, не используемые долгое
                время сгорают
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Bonuses;
