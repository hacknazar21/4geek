import React, { useContext, useEffect, useRef, useState } from "react";
import Rating from "react-rating";
import { ProductContext } from "./Product";
import { useRouter } from "next/router";
import { IImage } from "../../interfaces/Image";
import Slider from "../common/Slider";
import Loading from "../common/Loading";
import { BasketContext } from "../../context/BasketContext";

interface Props {
  addToWishListHandler: (event) => {};
}
function Actions({ addToWishListHandler }: Props) {
  const { product, constructors, recommended } = useContext(ProductContext);
  const [isLoading, setIsLoading] = useState(false);
  const { addProductToBasket } = useContext(BasketContext);
  const router = useRouter();
  function linkClickHandler(e, block) {
    e.preventDefault();
    const blockEl = document.querySelector(
      `#${block.replace("#", "").replace(/w/, "-")}`
    );
    if (blockEl) {
      blockEl.scrollIntoView();
    }
  }
  async function onChangeProductType(e, choice) {
    if (e.target.checked) {
      setIsLoading(true);
      await router.prefetch(
        "/product/[link]",
        "/product/" + choice.product_slug
      );
      await router.push("/product/[link]", "/product/" + choice.product_slug);
    }
  }
  useEffect(() => {
    if (!!product) {
      setIsLoading(false);
    }
  }, [product]);
  return (
    <section
      aria-disabled={isLoading}
      className={
        "product__actions product-actions " +
        (isLoading && "product-actions_loading")
      }
    >
      {isLoading && (
        <Loading
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 100,
          }}
        />
      )}

      <div className="product-actions__container">
        <div className="product-actions__box">
          <div className="product-actions__header">
            <h1 className="product-actions__title">{product?.title}</h1>
            <div className="product-actions__sku">
              <p>Артикул: {product?.upc}</p>
            </div>
          </div>
          <div className="product-actions__body">
            <div className="product-actions__images">
              {!isLoading && (
                <Slider
                  options={{
                    slidesPerView: 1,
                    lazy: true,
                    spaceBetween: 12,
                    zoom: true,
                  }}
                  isPag={true}
                  paginationClass={"product-actions__preview-images"}
                  renderBullet={(index, className) => {
                    if (!!product.images.length && index > 0)
                      return `
                        <div class="${className} product-actions__preview-image">
                          <img
                            src="${product.images[index - 1].original || ""}"
                            alt="${product.images[index - 1].caption}"
                          />
                        </div>
                        `;
                    return `<span class="${className}"></span>`;
                  }}
                >
                  {!!product.images &&
                    product.images.map((image: IImage) => (
                      <div
                        key={image.id}
                        className="swiper-zoom-container product-actions__main-image"
                        data-swiper-zoom="1.8"
                      >
                        <img src={image.original || ""} alt={image.caption} />
                      </div>
                    ))}
                  {!!product.images && !product.images.length && (
                    <div
                      className="swiper-zoom-container product-actions__main-image"
                      data-swiper-zoom="1.8"
                    >
                      <img
                        src={
                          "https://kaplunoff.com/wp-content/uploads/2018/12/287.jpg"
                        }
                        alt={""}
                      />
                    </div>
                  )}
                </Slider>
              )}
            </div>
            <div className="product-actions__info">
              <div className="product-actions__price-box">
                <div className="product-actions__price">
                  {!!product?.price &&
                    parseFloat(product.price.toString()).toLocaleString()}{" "}
                  ₸
                </div>
                {/*<div className="product-actions__discount">*/}
                {/*  <span>920 000 ₸</span>*/}
                {/*  <span>-15%</span>*/}
                {/*</div>*/}
              </div>
              <div className="product-actions__rating">
                <Rating
                  emptySymbol={"rating-item"}
                  initialRating={5}
                  readonly={true}
                  fullSymbol={"rating-item-fill"}
                />
                <span></span>
                <span>5.0 / 5</span>
              </div>

              {constructors.map((constructor, id) => {
                if (constructor.group_type === "SELECT") {
                  return (
                    <div key={id} className="product-actions__options">
                      {constructor.choices.map(
                        (choice) =>
                          !!choice.product_slug && (
                            <div
                              key={choice.product_slug}
                              className="product-actions__option"
                            >
                              <input
                                type="radio"
                                defaultChecked={choice.is_selected}
                                name="memory"
                                id={"memory_" + choice.value}
                                onChange={(e) => {
                                  onChangeProductType(e, choice);
                                }}
                              />
                              <label htmlFor={"memory_" + choice.value}>
                                {choice.value}
                              </label>
                            </div>
                          )
                      )}
                    </div>
                  );
                }
              })}
              {constructors.map((constructor, id) => {
                if (constructor.group_type === "COLOR") {
                  return (
                    <div key={id} className="product-actions__colors">
                      {constructor.choices.map(
                        (choice, id) =>
                          !!choice.product_slug && (
                            <div
                              key={choice.product_slug}
                              className="product-actions__color"
                            >
                              <input
                                defaultChecked={choice.is_selected}
                                type="radio"
                                name="color"
                                id={"color_" + choice.value}
                                onChange={(e) => {
                                  onChangeProductType(e, choice);
                                }}
                              />
                              <label
                                htmlFor={"color_" + choice.value}
                                style={{ backgroundColor: choice.value }}
                              ></label>
                            </div>
                          )
                      )}
                    </div>
                  );
                }
              })}
              {constructors.map((constructor, id) => {
                if (constructor.group_type === "RADIO") {
                  return (
                    <div key={id} className="product-actions__sims">
                      {constructor.choices.map(
                        (choice, id) =>
                          !!choice.product_slug && (
                            <div
                              key={choice.product_slug}
                              className="product-actions__sim"
                            >
                              <div className="product-actions__sim-checkbox">
                                <input
                                  onChange={(e) => {
                                    onChangeProductType(e, choice);
                                  }}
                                  type="radio"
                                  defaultChecked={choice.is_selected}
                                  name="SIM"
                                  id={choice.value}
                                />
                                <label htmlFor={choice.value}></label>
                              </div>
                              <div className="product-actions__sim-name">
                                <p>{choice.value}</p>
                              </div>
                            </div>
                          )
                      )}
                    </div>
                  );
                }
              })}
              <div className="product-actions__basket">
                <div className="product-actions__basket-actions">
                  <button
                    onClick={async (e) => {
                      await addProductToBasket(product);
                    }}
                    className="product-actions__basket-add-btn"
                  >
                    <span>
                      <svg
                        width="28"
                        height="28"
                        viewBox="0 0 28 28"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M10.7393 18.6553H20.9697C21.3828 18.6553 21.7607 18.3301 21.7607 17.8643C21.7607 17.4072 21.3828 17.082 20.9697 17.082H10.9414C10.5195 17.082 10.2559 16.792 10.1943 16.3438L10.0625 15.4297H21.04C22.3848 15.4297 23.0967 14.6123 23.29 13.2764L23.9492 8.87305C23.9668 8.75879 23.9844 8.60938 23.9844 8.5127C23.9844 7.99414 23.624 7.64258 23.0176 7.64258H8.92871L8.79688 6.69336C8.68262 5.92871 8.375 5.54199 7.39941 5.54199H4.38477C3.94531 5.54199 3.55859 5.92871 3.55859 6.37695C3.55859 6.83398 3.94531 7.2207 4.38477 7.2207H7.13574L8.49805 16.5195C8.69141 17.8467 9.39453 18.6553 10.7393 18.6553ZM22.1562 9.21582L21.6025 13.1182C21.5322 13.5664 21.2949 13.8477 20.8643 13.8477L9.83398 13.8564L9.15723 9.21582H22.1562ZM11.46 23.0674C12.3125 23.0674 12.998 22.3818 12.998 21.5293C12.998 20.6768 12.3125 19.9912 11.46 19.9912C10.6074 19.9912 9.92188 20.6768 9.92188 21.5293C9.92188 22.3818 10.6074 23.0674 11.46 23.0674ZM19.5811 23.0674C20.4336 23.0674 21.1104 22.3818 21.1104 21.5293C21.1104 20.6768 20.4336 19.9912 19.5811 19.9912C18.7285 19.9912 18.0342 20.6768 18.0342 21.5293C18.0342 22.3818 18.7285 23.0674 19.5811 23.0674Z"
                          fill="white"
                        />
                      </svg>
                    </span>
                    <span>В корзину</span>
                    <span></span>
                    <span>{product?.price.toLocaleString()} ₸</span>
                  </button>
                  <button
                    onClick={addToWishListHandler}
                    className="product-actions__basket-favourite"
                  >
                    <span>
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M18.6603 2C17.6002 0.937205 16.1951 0.288538 14.6986 0.171168C13.2021 0.0537975 11.713 0.475464 10.5003 1.36C9.22793 0.413635 7.64427 -0.0154912 6.0682 0.159035C4.49212 0.333561 3.04072 1.09878 2.00625 2.30058C0.971782 3.50239 0.431098 5.05152 0.493077 6.63601C0.555055 8.2205 1.21509 9.72267 2.34028 10.84L8.55028 17.06C9.07029 17.5718 9.77066 17.8586 10.5003 17.8586C11.2299 17.8586 11.9303 17.5718 12.4503 17.06L18.6603 10.84C19.8279 9.66526 20.4832 8.07627 20.4832 6.42C20.4832 4.76372 19.8279 3.17473 18.6603 2ZM17.2503 9.46L11.0403 15.67C10.9696 15.7414 10.8855 15.798 10.7928 15.8366C10.7001 15.8753 10.6007 15.8952 10.5003 15.8952C10.3999 15.8952 10.3004 15.8753 10.2077 15.8366C10.115 15.798 10.0309 15.7414 9.96028 15.67L3.75028 9.43C2.96603 8.62834 2.52689 7.55146 2.52689 6.43C2.52689 5.30853 2.96603 4.23165 3.75028 3.43C4.54943 2.64099 5.62725 2.19857 6.75028 2.19857C7.8733 2.19857 8.95112 2.64099 9.75028 3.43C9.84324 3.52373 9.95384 3.59812 10.0757 3.64889C10.1976 3.69966 10.3283 3.7258 10.4603 3.7258C10.5923 3.7258 10.723 3.69966 10.8449 3.64889C10.9667 3.59812 11.0773 3.52373 11.1703 3.43C11.9694 2.64099 13.0472 2.19857 14.1703 2.19857C15.2933 2.19857 16.3711 2.64099 17.1703 3.43C17.9653 4.22115 18.4189 5.29219 18.4338 6.41368C18.4488 7.53518 18.0239 8.61793 17.2503 9.43V9.46Z"
                          fill="#564696"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
                <div className="product-actions__basket-info">
                  <div className="product-actions__basket-info-item">
                    <div className="product-actions__basket-info-name">
                      В кредит
                    </div>
                    <div className="product-actions__basket-info-value">
                      <p>
                        {Math.round(product?.price / 60).toLocaleString()} ₸ х
                        60 мес
                      </p>
                    </div>
                  </div>
                  <div className="product-actions__basket-info-item">
                    <div className="product-actions__basket-info-name">
                      В рассрочку
                    </div>
                    <div className="product-actions__basket-info-value">
                      <p>
                        {Math.round(product?.price / 24).toLocaleString()} ₸ х
                        24 мес
                      </p>
                      <p>
                        {Math.round(product?.price / 12).toLocaleString()} ₸ х
                        12 мес
                      </p>
                      <p>
                        {Math.round(product?.price / 6).toLocaleString()} ₸ х 6
                        мес
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="product-actions__footer">
            <div className="product-actions__links">
              {recommended.map((recommendedItem) => (
                <button
                  key={recommendedItem.id}
                  onClick={(e) => {
                    linkClickHandler(e, "recommended-" + recommendedItem.id);
                  }}
                  className="product-actions__link"
                >
                  <p>{recommendedItem.name}</p>
                </button>
              ))}
              <button
                onClick={(e) => {
                  linkClickHandler(e, "review");
                }}
                className="product-actions__link"
              >
                <p>Обзор</p>
              </button>
              <button
                onClick={(e) => {
                  linkClickHandler(e, "same_products");
                }}
                className="product-actions__link"
              >
                <p>Похожие товары</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Actions;
