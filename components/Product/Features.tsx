import React, { useContext, useEffect } from "react";
import { ProductContext } from "./Product";
import { IAttribute } from "../../interfaces/Attribute";
interface Props {
  attributes: IAttribute[];
}
function Features({ attributes }: Props) {
  return (
    <section className="product__features product-features">
      <div className="product-features__box">
        {attributes.map((attribute) => (
          <div key={attribute.name} className="product-features__section">
            <h3 className="product-features__section-title">
              {attribute.name}
            </h3>
            <div className="product-features__section-items">
              {attribute?.attributes?.map((attributeItem, id) => (
                <div
                  key={attributeItem.value + attributeItem.name + id}
                  className="product-features__section-item"
                >
                  <div className="product-features__section-item-name">
                    {attributeItem.name}
                  </div>
                  <div className="product-features__section-item-value">
                    {attributeItem.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
