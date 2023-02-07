import React from "react";
import Link from "next/link";
import More from "../More";

function PromotionCard({ image }) {
  return (
    <article className="promotion-card">
      <a href="">
        <div className="promotion-card__image">
          <img src={image} alt="" />
        </div>
      </a>
    </article>
  );
}

export default PromotionCard;
