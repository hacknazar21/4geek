import Popup from "./Popup";
import WishlistProductCard from "./UiKit/WishlistProductCard";
import { IProduct } from "../../interfaces/Product";
import useHttp from "../../hooks/hooks.http";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { IPagination } from "../../interfaces/Pagination";
import Loading from "./Loading";

interface Props {
  active: boolean;
  setActive: (state: boolean) => void;
}
function WishlistPopup({ active, setActive }: Props) {
  /* Состояния компонента */
  const [products, setProducts] = useState<IProduct[]>([]);

  /* Контексты */
  const { token } = useContext(AuthContext);

  /* Кастомные хуки */
  const { request, loading } = useHttp();

  /* Функции */
  async function getWishlistProducts() {
    try {
      const data: IPagination<IProduct> = await request(
        "/api/profile/wishlist_products/",
        "GET",
        null,
        {
          Authorization: `Bearer ${token}`,
        }
      );
      setProducts(data.results);
    } catch (e) {}
  }

  /* Эффекты */
  useEffect(() => {
    if (!!token && active) getWishlistProducts();
  }, [token, active]);

  return (
    <Popup active={active} setActive={setActive} className="wishlist-popup">
      <div className="wishlist-popup__content">
        <div className="wishlist-popup__header">
          <h2 className="wishlist-popup__header-title">Избранное</h2>
        </div>
        <div className="wishlist-popup__products">
          {!loading &&
            products.map((product) => (
              <WishlistProductCard
                key={product.id}
                product={product}
                className="wishlist-popup__product"
                updateProductsList={getWishlistProducts}
              />
            ))}
          {loading && (
            <Loading
              style={{ left: "50%", transform: "translateX(-25%) scale(0.5)" }}
            />
          )}
          {!loading && !products.length && (
            <div className="wishlist-popup__products-empty">
              Пока не добавлено ни одного товара :0
            </div>
          )}
        </div>
      </div>
    </Popup>
  );
}

export default WishlistPopup;
