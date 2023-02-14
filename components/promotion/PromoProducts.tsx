import SVG from "../common/SVG";
import ReactPaginate from "react-paginate";
import ProductCard from "../common/UiKit/ProductCard";
import { IPagination } from "../../interfaces/Pagination";
import { IProduct } from "../../interfaces/Product";
import { ICategory } from "../../interfaces/Category";
import { useEffect, useState } from "react";
import { getClientDataFromAPI } from "../../helpers/client";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";

function PromoProducts() {
  /* Хуки */
  const router = useRouter();

  /* Кастомные хуки */
  const { request } = useHttp();

  /* Состояния компонента */
  const [products, setProducts] = useState<IPagination<IProduct>>({
    count: 0,
    previous: null,
    next: null,
    results: [],
  });
  const [categories, setCategories] = useState<IPagination<ICategory>>({
    count: 0,
    previous: null,
    next: null,
    results: [],
  });

  useEffect(() => {
    getClientDataFromAPI<IPagination<IProduct>>(
      `/api/content/benefits/${router.query.link}/products/`,
      setProducts,
      request
    );
    getClientDataFromAPI<IPagination<ICategory>>(
      `/api/content/benefits/${router.query.link}/categories/`,
      setCategories,
      request
    );
  }, []);
  if (products.count > 0)
    return (
      <section className="promotion__products promotion-products">
        <div className="promotion-products__container">
          <h2 className="promotion-products__title section-title">
            Товары, участвующие в акции
          </h2>
          <div className="promotion-products__box">
            <div className="promotion-products__filter">
              {categories.results.map((category) => (
                <div
                  key={category.id + category.name}
                  className="promotion-products__filter-item"
                >
                  <input
                    type="radio"
                    name="sort_by"
                    id={"category_" + category.id}
                  />
                  <label htmlFor={"category_" + category.id}>
                    {category.name}
                    <span>
                      <svg
                        width="29"
                        height="29"
                        viewBox="0 0 29 29"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M20.1523 14.1445C20.1523 14.4521 20.0381 14.7158 19.792 14.9443L12.9541 21.6416C12.7607 21.835 12.5146 21.9404 12.2246 21.9404C11.6445 21.9404 11.1787 21.4834 11.1787 20.8945C11.1787 20.6045 11.3018 20.3496 11.4951 20.1475L17.6562 14.1445L11.4951 8.1416C11.3018 7.93945 11.1787 7.67578 11.1787 7.39453C11.1787 6.80566 11.6445 6.34863 12.2246 6.34863C12.5146 6.34863 12.7607 6.4541 12.9541 6.64746L19.792 13.3359C20.0381 13.5732 20.1523 13.8369 20.1523 14.1445Z"
                          fill="#4D505A"
                        />
                      </svg>
                    </span>
                  </label>
                </div>
              ))}
            </div>
            <div className="promotion-products__items-box">
              <div className="promotion-products__items">
                {products.results.map((product) => (
                  <ProductCard
                    key={product.id + product.title}
                    product={product}
                  />
                ))}
              </div>
              {Math.ceil(products.count / 21) > 1 && (
                <div className="category__pagination">
                  <ReactPaginate
                    pageCount={Math.ceil(products.count / 21)}
                    nextLabel={
                      <SVG
                        svg={
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z"
                              fill="#4D505A"
                              fillOpacity="0.2"
                            />
                          </svg>
                        }
                      />
                    }
                    previousLabel={
                      <SVG
                        svg={
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 28 28"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M8.34863 13.6543C8.34863 13.9619 8.46289 14.2256 8.70898 14.4541L15.5469 21.1514C15.7402 21.3447 15.9863 21.4502 16.2764 21.4502C16.8564 21.4502 17.3223 20.9932 17.3223 20.4043C17.3223 20.1143 17.1992 19.8594 17.0059 19.6572L10.8447 13.6543L17.0059 7.65137C17.1992 7.44922 17.3223 7.18555 17.3223 6.9043C17.3223 6.31543 16.8564 5.8584 16.2764 5.8584C15.9863 5.8584 15.7402 5.96387 15.5469 6.15723L8.70898 12.8457C8.46289 13.083 8.34863 13.3467 8.34863 13.6543Z"
                              fill="#4D505A"
                              fillOpacity="0.2"
                            />
                          </svg>
                        }
                      />
                    }
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  return <></>;
}

export default PromoProducts;
