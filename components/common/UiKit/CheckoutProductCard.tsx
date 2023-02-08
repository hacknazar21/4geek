import React from "react";
import { Line } from "../../../interfaces/Basket";
interface Props {
  line: Line;
}
export default function CheckoutProductCard({ line }: Props) {
  return (
    <article className="checkout-product">
      <div className="checkout-product__image">
        <img src={line.product.images[0]?.original} alt="" />
      </div>
      <div className="checkout-product__info">
        <div className="checkout-product__price-box">
          <div className="checkout-product__price">
            {parseFloat(line.price_incl_tax).toLocaleString()} ₸
          </div>
          {line.price_incl_tax_excl_discounts !== line.price_incl_tax && (
            <div className="checkout-product__old-price">
              {parseFloat(line.price_incl_tax_excl_discounts).toLocaleString()}
            </div>
          )}
        </div>
        <h3 className="checkout-product__name">{line.product.title}</h3>
        <div className="checkout-product__count">
          Количество: {line.quantity}
        </div>
      </div>
    </article>
  );
}
