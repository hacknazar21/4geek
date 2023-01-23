import React, { useEffect, useRef } from "react";
import PromotionCard from "../common/UiKit/PromotionCard";
import Promo1 from "../../src/img/placeholders/promotions/promo1.png";
import Promo2 from "../../src/img/placeholders/promotions/promo2.png";
import Promo3 from "../../src/img/placeholders/promotions/promo3.png";
import SVG from "../common/SVG";
import { useRouter } from "next/router";

function Promotions(props) {
  const router = useRouter();

  return (
    <section className="promotions-page">
      <div className="promotions-page__container">
        <h1
          onClick={() => {
            router.back();
          }}
          className="promotions-page__title category__title"
        >
          <span>
            <SVG
              svg={
                <svg
                  width="28"
                  height="28"
                  viewBox="0 0 28 28"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z"
                    fill="#4D505A"
                  />
                </svg>
              }
            />
          </span>
          Акции и спец предложения
        </h1>
        <div className="promotions-page__box">
          <PromotionCard
            title={"Скидка"}
            text={"на первый заказ через наше приложение"}
            link={""}
            image={Promo1.src}
          />
          <PromotionCard
            title={"Лови момент"}
            text={"Вы можете оформить рассчоку на год !"}
            link={""}
            image={Promo2.src}
          />
          <PromotionCard
            title={"Всем яблок"}
            text={"Вы можете оформить рассчоку на год !"}
            link={""}
            image={Promo3.src}
          />
          <PromotionCard
            title={"Скидка"}
            text={"на первый заказ через наше приложение"}
            link={""}
            image={Promo1.src}
          />
          <PromotionCard
            title={"Лови момент"}
            text={"Вы можете оформить рассчоку на год !"}
            link={""}
            image={Promo2.src}
          />
          <PromotionCard
            title={"Всем яблок"}
            text={"Вы можете оформить рассчоку на год !"}
            link={""}
            image={Promo3.src}
          />
          <PromotionCard
            title={"Всем яблок"}
            text={"Вы можете оформить рассчоку на год !"}
            link={""}
            image={Promo3.src}
          />
          <PromotionCard
            title={"Скидка"}
            text={"на первый заказ через наше приложение"}
            link={""}
            image={Promo1.src}
          />
        </div>
      </div>
    </section>
  );
}

export default Promotions;
