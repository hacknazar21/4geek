import React from "react";
import Button from "./common/UiKit/Button";
import Input from "./common/UiKit/Input";
import CategoryCard from "./common/UiKit/CategoryCard";
import Cat1 from "../src/img/placeholders/categories/1.png";
import Cat2 from "../src/img/placeholders/categories/2.png";
import Prod1 from "../src/img/placeholders/products/1.png";
import Prod2 from "../src/img/placeholders/products/2.png";
import ProductCard from "./common/UiKit/ProductCard";
import VideoCard from "./common/UiKit/VideoCard";
import PriceRange from "./common/UiKit/PriceRange";
import BasketProductCard from "./common/UiKit/BasketProductCard";

function UiKit(props) {
  return (
    <div className="ui-kit">
      <div className="ui-kit__container">
        <div className="ui-kit__items">
          <Button
            text={"Зарегистрироваться"}
            className={"button_active"}
            onClick={() => {}}
          />
          <Button
            text={"Войти"}
            className={"button_disabled"}
            onClick={() => {}}
          />
        </div>
        <div className="ui-kit__items">
          <Input label={"E-mail"} type={"email"} name={"email"} />
          <Input
            label={"E-mail"}
            type={"email"}
            name={"email"}
            defaultValue={"sergei97mail.ru"}
            className={"error"}
            error={"email введен неверно, повторите попытку"}
          />
        </div>
        <div className="ui-kit__items row">
          <CategoryCard
            className={""}
            link={""}
            text={"Аудио / Видео"}
            image={Cat1.src}
          />
          <CategoryCard
            className={""}
            link={""}
            text={"Смартфоны"}
            image={Cat2.src}
          />
        </div>
        <div className="ui-kit__items row">
          <ProductCard
            image={Prod1.src}
            name={"Playstation 5"}
            price={850000}
            old_price={1002000}
            button={"В корзину"}
            promo={12}
          />
          <ProductCard
            image={Prod1.src}
            name={"Playstation 5"}
            price={850000}
            old_price={1002000}
            button={"В корзину"}
            promo={12}
            mode={"light"}
          />
        </div>
        <div className="ui-kit__items">
          <VideoCard
            title={"Пять плюсов Iphone 14 Plus ! Стоит ли покупать"}
            video={"https://i3.ytimg.com/vi/pZjSdWw6Qns/maxresdefault.jpg"}
          />
          <VideoCard
            title={
              "Какой iPhone выбрать и купить в 2022/2023? Главное видео года..."
            }
            video={"https://i3.ytimg.com/vi/QXk56WfflMM/maxresdefault.jpg"}
          />
        </div>
        <div className="ui-kit__items">
          <PriceRange
            initialMin={10000}
            initialMax={100000}
            onChange={(min, max) => {
              console.log(min, max);
            }}
          />
        </div>
      </div>
      <div className="ui-kit__container">
        <div className="ui-kit__items">
          <BasketProductCard />
        </div>
      </div>
    </div>
  );
}

export default UiKit;
