import React from "react";
import Link from "next/link";
import More from "../More";

function PromotionCard({ image, link }) {
  return (
    <article className="promotion-card">
      <Link href="/promotions/[link]" as={"/promotions/" + link}>
        <div className="promotion-card__image">
          <img src={image} alt="" />
        </div>
      </Link>
    </article>
  );
}

export default PromotionCard;
