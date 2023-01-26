import React, { useContext } from "react";
import Rating from "react-rating";
import { ProductContext } from "./Product";

function Reviews(props) {
  const { reviews } = useContext(ProductContext);
  return (
    <section className="product__reviews product-reviews">
      <div className="product-reviews__box">
        <div className="product-reviews__rating">
          <Rating
            emptySymbol={"rating-item"}
            initialRating={5}
            readonly={true}
            fullSymbol={"rating-item-fill"}
          />
          <span></span>
          <span>5.0 / 5</span>
        </div>
        {!!reviews?.results.length && (
          <div className="product-reviews__items">
            {reviews?.results.map((review) => (
              <div
                key={review.date_created + review.date_created}
                className="product-reviews__item product-reviews-item"
              >
                <div className="product-reviews-item__header">
                  <div className="product-reviews-item__name">
                    <span>{review.reviewer_name}</span>
                    <Rating
                      emptySymbol={"rating-item"}
                      initialRating={review.score}
                      readonly={true}
                      fullSymbol={"rating-item-fill"}
                    />
                  </div>
                  <div className="product-reviews-item__date">
                    <span>{review.date_created}</span>
                  </div>
                </div>
                <div className="product-reviews-item__body">
                  <p>{review.body}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default Reviews;
