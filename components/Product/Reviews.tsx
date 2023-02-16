import { useContext, useEffect, useState } from "react";
import Rating from "react-rating";
import { ProductContext } from "./Product";
import { ProfileContext } from "../../context/ProfileContext";
import Input from "../common/UiKit/Input";
import useForm from "../../hooks/hooks.form";
import { getClientDataFromAPI } from "../../helpers/client";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import { IReview } from "../../interfaces/Review";
import { IPagination } from "../../interfaces/Pagination";
import Loading from "../common/Loading";
import { IProduct } from "../../interfaces/Product";

function Reviews(props) {
  const { profile } = useContext(ProfileContext);
  const [reviews, setReviews] = useState<IPagination<IReview>>({
    next: null,
    previous: null,
    count: 0,
    results: [],
  });
  const [product, setProduct] = useState<IProduct>(null);
  const { formChangeHandler, formSubmitHandler, form, dropForm } =
    useForm(OnSuccess);
  const router = useRouter();
  const { request } = useHttp();
  const [loadingReviews, setLoadingReviews] = useState<boolean>(false);
  const [loadingProduct, setLoadingProduct] = useState<boolean>(false);

  function OnSuccess(e) {
    LoadReviews();
    LoadProduct();
    dropForm();
  }
  function LoadReviews() {
    setLoadingReviews(true);
    getClientDataFromAPI<IPagination<IReview>>(
      `/api/products/reviews/?product__lookup_slug=${router.query.link}`,
      setReviews,
      request
    ).then(() => {
      setLoadingReviews(false);
    });
  }
  function LoadProduct() {
    setLoadingProduct(true);
    getClientDataFromAPI<IProduct>(
      `/api/products/${router.query.link}`,
      setProduct,
      request
    ).then(() => {
      setLoadingProduct(false);
    });
  }
  useEffect(() => {
    LoadReviews();
    LoadProduct();
  }, []);

  return (
    <section className="product__reviews product-reviews">
      <div className="product-reviews__box">
        {!loadingProduct && !!product && (
          <div className="product-reviews__rating">
            <Rating
              emptySymbol={"rating-item"}
              initialRating={product?.rating}
              readonly={true}
              fullSymbol={"rating-item-fill"}
            />
            <span></span>
            <span>
              {parseFloat(String(product.rating || 0)).toFixed(1) || 0.0} / 5
            </span>
          </div>
        )}
        {loadingProduct && <Loading />}
        {!!profile && (
          <form
            onSubmit={(e) => {
              formSubmitHandler(e);
            }}
            action="/api/products/reviews/"
            data-method="POST"
            className="product-reviews__form reviews-form"
          >
            <div className="reviews-form__side">
              <Input
                onInput={formChangeHandler}
                className={"reviews-form__input"}
                name={"body"}
                placeholder={"Ваш отзыв"}
                type={"textarea"}
                id={"body"}
                required={true}
                disabled={false}
                label={null}
              />
              <input type="hidden" name="non_field_errors" />
            </div>
            <div className="reviews-form__side">
              <h3 className="reviews-form__title">Дайте общую оценку товара</h3>
              <Rating
                emptySymbol={"rating-item"}
                initialRating={form?.text?.score}
                onChange={(score) => {
                  formChangeHandler({
                    target: {
                      type: "text",
                      name: "score",
                      value: score,
                    },
                  });
                  formChangeHandler({
                    target: {
                      type: "text",
                      name: "name",
                      value: profile.first_name + " " + profile.last_name,
                    },
                  });
                  formChangeHandler({
                    target: {
                      type: "text",
                      name: "product",
                      value: product.id,
                    },
                  });
                }}
                readonly={false}
                fullSymbol={"rating-item-fill"}
              />
              <button
                aria-label="Оставить отзыв"
                type="submit"
                className="reviews-form__submit"
              >
                Опубликовать
              </button>
            </div>
          </form>
        )}
        {!loadingReviews && (
          <div className="product-reviews__items">
            {reviews.results.map((review, id) => (
              <div
                key={review.date_created.toString() + id}
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
                    <span>
                      {new Date(review.date_created).toLocaleDateString()}
                    </span>
                  </div>
                </div>
                <div className="product-reviews-item__body">
                  <p>{review.body}</p>
                </div>
              </div>
            ))}
            {!reviews.results.length && (
              <p>Пока нет ни одного отзыва, оставьте его первым!</p>
            )}
          </div>
        )}
        {loadingReviews && <Loading />}
      </div>
    </section>
  );
}

export default Reviews;
