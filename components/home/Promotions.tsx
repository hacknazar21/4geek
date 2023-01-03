import React from "react";
import SeeAll from "../common/SeeAll";
import PromotionCard from "../common/UiKit/PromotionCard";
import Promo1 from "../../src/img/placeholders/promotions/promo1.png";
import Promo2 from "../../src/img/placeholders/promotions/promo2.png";
import Promo3 from "../../src/img/placeholders/promotions/promo3.png";
function Promotions(props) {
  return (
    <section className="home__promotions promotions">
      <div className="promotions__container">
        <div className="section-header promotions__header">
          <h2 className="promotions__title section-title">
            Акции и спец предложения
          </h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <div className="promotions__grid">
          <div className="promotions__grid-item">
            <PromotionCard
              title={"Скидка"}
              bigTitle={"– 30%"}
              text={"на первый заказ через наше приложение"}
              link={""}
              image={Promo1.src}
            />
          </div>
          <div className="promotions__grid-item">
            <PromotionCard
              title={"Лови момент"}
              text={"Вы можете оформить рассчоку на год !"}
              link={""}
              image={Promo2.src}
            />
          </div>
          <div className="promotions__grid-item">
            <PromotionCard
              title={"Всем яблок"}
              text={"Вы можете оформить рассчоку на год !"}
              link={""}
              image={Promo3.src}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Promotions;
