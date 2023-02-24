import React, { useContext, useEffect, useState } from "react";
import HeaderMobile from "../common/HeaderMobile";
import { IProduct } from "../../interfaces/Product";
import { AuthContext } from "../../context/AuthContext";
import useHttp from "../../hooks/hooks.http";
import { IPagination } from "../../interfaces/Pagination";
import WishlistProductCard from "../common/UiKit/WishlistProductCard";
import Loading from "../common/Loading";

function Favourite(props) {
  /* Состояния компонента */
  const [products, setProducts] = useState<IProduct[]>([]);
  const [loading, setLoading] = useState(true);
  /* Контексты */
  const { token } = useContext(AuthContext);

  /* Кастомные хуки */
  const { request } = useHttp();

  /* Функции */
  async function getWishlistProducts() {
    try {
      setLoading(true);
      const data: IPagination<IProduct> = await request(
        "/api/profile/wishlist_products/",
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setProducts(data.results);
      setLoading(false);
    } catch (e) {}
  }

  /* Эффекты */
  useEffect(() => {
    if (!!token) getWishlistProducts();
  }, [token]);
  return (
    <>
      <HeaderMobile title={"Избранное"} />
      <div className="basket__container">
        {!loading && !!products.length && (
          <div className="basket__box">
            <section className="basket__products">
              {products.map((product) => (
                <WishlistProductCard
                  key={product.id}
                  updateProductsList={getWishlistProducts}
                  product={product}
                  className={"wishlist-mobile"}
                />
              ))}
            </section>
          </div>
        )}
        {!loading && !products.length && (
          <div className="basket__empty">
            <div className="basket__empty-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="128"
                height="112"
                viewBox="0 0 128 112"
                fill="none"
              >
                <path
                  d="M37.3012 88.2614H90.4452C92.591 88.2614 94.5542 86.5738 94.5542 84.1565C94.5542 81.7847 92.591 80.0971 90.4452 80.0971H38.3513C36.1598 80.0971 34.7901 78.592 34.4705 76.2658L33.7857 71.5223H90.8104C97.7958 71.5223 101.494 67.2806 102.498 60.3478L105.923 37.4969C106.014 36.904 106.105 36.1286 106.105 35.6269C106.105 32.9358 104.233 31.1114 101.083 31.1114H27.896L27.2112 26.1855C26.6176 22.2174 25.0197 20.2105 19.9518 20.2105H4.29169C2.00888 20.2105 0 22.2174 0 24.5435C0 26.9153 2.00888 28.9221 4.29169 28.9221H18.5821L25.6588 77.178C26.6633 84.0652 30.3158 88.2614 37.3012 88.2614ZM96.6088 39.2757L93.7324 59.5268C93.3672 61.8529 92.1344 63.3124 89.8973 63.3124L32.5986 63.3581L29.0831 39.2757H96.6088ZM41.045 111.158C45.4737 111.158 49.0349 107.6 49.0349 103.176C49.0349 98.7518 45.4737 95.1942 41.045 95.1942C36.6164 95.1942 33.0552 98.7518 33.0552 103.176C33.0552 107.6 36.6164 111.158 41.045 111.158ZM83.2315 111.158C87.6601 111.158 91.1757 107.6 91.1757 103.176C91.1757 98.7518 87.6601 95.1942 83.2315 95.1942C78.8028 95.1942 75.1959 98.7518 75.1959 103.176C75.1959 107.6 78.8028 111.158 83.2315 111.158Z"
                  fill="#8676C5"
                />
                <circle cx="104.421" cy="23.5789" r="23.5789" fill="#564696" />
                <path
                  d="M112.342 23.579C112.342 26.7423 111.425 29.5854 109.969 31.6248C108.511 33.6651 106.543 34.8684 104.421 34.8684C102.299 34.8684 100.331 33.6651 98.8733 31.6248C97.4166 29.5854 96.5 26.7423 96.5 23.579C96.5 20.4156 97.4166 17.5726 98.8733 15.5332C100.331 13.4928 102.299 12.2895 104.421 12.2895C106.543 12.2895 108.511 13.4928 109.969 15.5332C111.425 17.5726 112.342 20.4156 112.342 23.579Z"
                  stroke="white"
                />
              </svg>
            </div>
            <div className="basket__title">
              <h1>Пока не добавлено ни одного товара :0</h1>
            </div>
          </div>
        )}
        {loading && (
          <div className="basket__loading">
            <Loading
              style={{
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -100%) scale(0.5)",
              }}
            />
          </div>
        )}
      </div>
    </>
  );
}

export default Favourite;
