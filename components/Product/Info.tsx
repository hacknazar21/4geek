import React from "react";
import TabBar from "../common/Tabs/TabBar";
import TabBarItem from "../common/Tabs/TabBarItem";
import Review from "../common/UiKit/Review";
import Features from "./Features";
import Reviews from "./Reviews";
import { IAttribute } from "../../interfaces/Attribute";
import { IProduct } from "../../interfaces/Product";
import { IProductConstructor } from "../../interfaces/ProductConstructors";
import { IPagination } from "../../interfaces/Pagination";
import { IReview } from "../../interfaces/Review";
interface Props {
  attributes: IAttribute[];
  reviews: IPagination<IReview>;
}
function Info({ attributes, reviews }: Props) {
  return (
    <section id={"review"} className="product__info product-tabs">
      <div className="product-tabs__container">
        <div className="product-tabs__box">
          <TabBar>
            <TabBarItem label={"Обзор"}>
              <Review />
            </TabBarItem>
            <TabBarItem label={"Характеристики"}>
              <Features attributes={attributes} />
            </TabBarItem>
            <TabBarItem label={"Отзывы"}>
              <Reviews reviews={reviews} />
            </TabBarItem>
          </TabBar>
        </div>
      </div>
    </section>
  );
}

export default Info;
