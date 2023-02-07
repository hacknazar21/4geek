import React, { useEffect, useRef, useState } from "react";
import ProductCard from "../common/UiKit/ProductCard";
import Prod1 from "../../src/img/placeholders/products/1.png";
import ReactPaginate from "react-paginate";
import SVG from "../common/SVG";
import { IPagination } from "../../interfaces/Pagination";
import { IProduct } from "../../interfaces/Product";
import useHttp from "../../hooks/hooks.http";
import Loading from "../common/Loading";
interface Props {
  products: IPagination<IProduct>;
  categoryId: number;
}
function Items(props: Props) {
  const { products: productsItems, categoryId } = props;
  const refItem = useRef(null);
  const { request, loading } = useHttp();
  const [products, setProducts] = useState<IPagination<IProduct>>({
    count: 0,
    results: [],
    previous: null,
    next: null,
  });

  useEffect(() => {
    if (!!productsItems) {
      setProducts(productsItems);
    }
  }, [productsItems]);
  useEffect(() => {
    if (!!refItem.current)
      refItem.current.scrollIntoView({ block: "start", inline: "nearest" });
  }, [products]);
  async function onPageChangeHandler(selectedItem) {
    const data: IPagination<IProduct> = await request(
      "/api/products?categories__in=" +
        categoryId +
        "&page=" +
        (selectedItem.selected + 1)
    );
    setProducts({ ...data });
  }

  return (
    <div ref={refItem} className="category__items-box">
      <div className="category__items">
        {!loading &&
          products.results.map((product: IProduct) => (
            <div key={product.id} className="category__item">
              <ProductCard product={product} />
            </div>
          ))}
        {loading && <Loading />}
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
            onPageChange={onPageChangeHandler}
          />
        </div>
      )}
    </div>
  );
}

export default Items;
