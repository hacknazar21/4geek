import React from "react";
import Link from "next/link";

function BlogCard({ image, title, annotation, link, className = "" }) {
  const classes = ["blog-card", className];
  return (
    <article className={classes.join(" ")}>
      <Link href="/blog/[link]" as={"/blog/" + link}>
        <div className="blog-card__image">
          <img src={image} alt="" />
        </div>
        <div className="blog-card__annotation">
          <p>{annotation}</p>
        </div>
        <div className="blog-card__title">
          <h3>{title}</h3>
        </div>
      </Link>
    </article>
  );
}

export default BlogCard;
