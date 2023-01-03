import React from "react";
import Link from "next/link";
import More from "../More";

function PromotionCard({ image, title, bigTitle, text, link }) {
  return (
    <article className="promotion-card">
      <div className="promotion-card__image">
        <img src={image} alt="" />
      </div>
      <div className="promotion-card__text-box">
        <h3 className="promotion-card__title">
          {title}
          {bigTitle && <span>{bigTitle}</span>}
        </h3>
        <div className="promotion-card__text">
          <p>{text}</p>
        </div>
        <More link={link} />
      </div>
    </article>
  );
}

export default PromotionCard;
