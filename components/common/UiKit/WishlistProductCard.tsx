import { IProduct } from "../../../interfaces/Product";
import Link from "next/link";
import useHttp from "../../../hooks/hooks.http";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../context/AuthContext";
import { BasketContext } from "../../../context/BasketContext";
import { useMobile } from "../../../hooks/hooks.mobile";

interface Props {
  product: IProduct;
  className: string;
  updateProductsList: () => void;
}
function WishlistProductCard({
  product,
  className,
  updateProductsList,
}: Props) {
  /* Константы */
  const classes = ["wishlist-product", className];

  /* Состояния компонента */
  const [loadingRemove, setLoadingRemove] = useState(false);
  const [loadingBasket, setLoadingBasket] = useState(false);

  /* Контекст */
  const { token } = useContext(AuthContext);
  const { addProductToBasket } = useContext(BasketContext);

  /* Кастомные хуки */
  const { request, loading } = useHttp();
  const { isMobile } = useMobile();

  /* Функции обработки событий */
  async function addToBasketHandler(product: IProduct) {
    try {
      setLoadingBasket(true);
      await addProductToBasket(product);
    } catch (e) {
    } finally {
      setLoadingBasket(false);
    }
  }
  async function removeFromWishlistHandler(product: IProduct) {
    try {
      await request(
        `/api/products/${product.lookup_slug}/remove_from_wishlist/`,
        "POST",
        {},
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setLoadingRemove(loading);
      updateProductsList();
    } catch (e) {}
  }

  /* Эффекты */
  useEffect(() => {
    setLoadingRemove(loading);
  }, [loading]);
  useEffect(() => {
    console.log(loadingBasket);
  }, [loadingBasket]);
  return (
    <article aria-disabled={loadingRemove} className={classes.join(" ")}>
      <div className="wishlist-product__box">
        <div className="wishlist-product__image">
          <img
            src={!!product.images[0] && product.images[0].original}
            alt={!!product.images[0] && product.images[0].caption}
          />
        </div>
        <div className="wishlist-product__info">
          <div className="wishlist-product__info-price">
            <span>{product.price} ₸</span>
          </div>
          <h2 className="wishlist-product__info-title">
            <Link href="/product/[link]" as={"/product/" + product.lookup_slug}>
              {product.title}
            </Link>
          </h2>
          {!!product.upc && (
            <div className="wishlist-product__info-sku">
              <p>Код товара: {product.upc}</p>
            </div>
          )}
          {isMobile && (
            <div className="wishlist-product__actions-mobile">
              <button
                aria-label="Добавить в корзину"
                className="wishlist-product__button-add"
                disabled={loadingBasket}
                onClick={async () => {
                  await addToBasketHandler(product);
                }}
              >
                {loadingBasket ? "Добавление" : "В корзину"}
              </button>
            </div>
          )}
        </div>
        <div className="wishlist-product__actions">
          {!isMobile && (
            <button
              aria-label="Добавить в корзину"
              className="wishlist-product__button-add"
              disabled={loadingBasket}
              onClick={async () => {
                await addToBasketHandler(product);
              }}
            >
              {loadingBasket ? "Добавление" : "В корзину"}
            </button>
          )}
          <button
            aria-label="Удалить из избранного"
            className="wishlist-product__button-remove"
            onClick={async () => {
              await removeFromWishlistHandler(product);
            }}
          >
            <span></span>
            <span></span>
          </button>
        </div>
      </div>
    </article>
  );
}

export default WishlistProductCard;
