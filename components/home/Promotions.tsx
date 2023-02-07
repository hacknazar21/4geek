import React from "react";
import SeeAll from "../common/SeeAll";
import PromotionCard from "../common/UiKit/PromotionCard";
import Promo1 from "../../src/img/placeholders/promotions/promo1.png";

interface Props {
  title: string;
  promotions: any[];
}

function Promotions({ title, promotions }: Props) {
  if (!!promotions?.length)
    return (
      <section className="home__promotions promotions">
        <div className="promotions__container">
          <div className="section-header promotions__header">
            <h2 className="promotions__title section-title">{title}</h2>
            <SeeAll link="/promotions/" text={"смотреть все"} />
          </div>
          <div className="promotions__grid">
            <div className="promotions__grid-item">
              <PromotionCard image={Promo1.src} />
            </div>
          </div>
        </div>
      </section>
    );
  else return <></>;
}

export default Promotions;
