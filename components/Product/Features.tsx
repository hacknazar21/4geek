import React, { useContext } from "react";
import { ProductContext } from "./Product";

function Features() {
  const { attributes } = useContext(ProductContext);
  if (!!attributes)
    return (
      <section className="product__features product-features">
        <div className="product-features__box">
          {attributes.map((attribute) => (
            <div className="product-features__section">
              <h3 className="product-features__section-title">
                {attribute.name}
              </h3>
              <div className="product-features__section-items">
                {attribute?.attributes?.map((attributeItem) => (
                  <div className="product-features__section-item">
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
  return <></>;
}

export default Features;
