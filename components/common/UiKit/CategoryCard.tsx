import React from "react";
import Link from "next/link";

function CategoryCard({ image, text, link, className }) {
  const classes = ["category-card", className];
  return (
    <article className={classes.join(" ")}>
      <Link href="/catalog/[link]" as={link} className="category-card__link">
        <div className="category-card__image">
          <img src={image} alt="" />
        </div>
        <h3 className="category-card__title">{text}</h3>
      </Link>
    </article>
  );
}

export default CategoryCard;
