import React, { useContext } from "react";
import { Line } from "../../../interfaces/Basket";
import { BasketContext } from "../../../pages/_app";

interface Props {
  line: Line;
}
function BasketProductCard(props: Props) {
  const { line } = props;
  const {
    addOneProductToLine,
    removeOneProductFromLine,
    removeLineFromBasket,
  } = useContext(BasketContext);
  return (
    <article className="basket-product">
      <div className="basket-product__image">
        <img src={line.product.images[0].original} alt="" />
      </div>
      <div className="basket-product__info">
        <div className="basket-product__price-box">
          <div className="basket-product__price">
            {parseFloat(line.price_incl_tax || "0").toLocaleString()} ₸
          </div>
          {line.price_incl_tax !== line.price_incl_tax_excl_discounts && (
            <div className="basket-product__old-price">
              {parseFloat(
                line.price_incl_tax_excl_discounts || "0"
              ).toLocaleString()}{" "}
              ₸
            </div>
          )}
        </div>
        <h3 className="basket-product__name">{line.product.title}</h3>
        <div className="basket-product__sku">
          Код товара: {line.product.upc}
        </div>
        <div className="basket-product__counter">
          <span
            onClick={async () => {
              await removeOneProductFromLine(line);
            }}
          ></span>
          <span>{line.quantity}</span>
          <span
            onClick={async () => {
              await addOneProductToLine(line);
            }}
          ></span>
        </div>
      </div>
      <div className="basket-product__actions">
        <button
          onClick={async () => {
            await removeLineFromBasket(line);
          }}
          className="basket-product__delete"
        >
          <span>Удалить</span>
          <span></span>
          <span></span>
        </button>
      </div>
    </article>
  );
}

export default BasketProductCard;
