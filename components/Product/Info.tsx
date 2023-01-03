import React from "react";
import TabBar from "../common/Tabs/TabBar";
import TabBarItem from "../common/Tabs/TabBarItem";
import Review from "./Review";
import Features from "./Features";
import Reviews from "./Reviews";

function Info(props) {
  return (
    <section id={"review"} className="product__info product-tabs">
      <div className="product-tabs__container">
        <div className="product-tabs__box">
          <TabBar>
            <TabBarItem label={"Обзор"}>
              <Review />
            </TabBarItem>
            <TabBarItem label={"Характеристики"}>
              <Features />
            </TabBarItem>
            <TabBarItem label={"Отзывы"}>
              <Reviews />
            </TabBarItem>
          </TabBar>
        </div>
      </div>
    </section>
  );
}

export default Info;
