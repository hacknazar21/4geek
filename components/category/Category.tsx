import { useEffect, useState } from "react";
import Filter from "./Filter";
import Items from "./Items";
import SVG from "../common/SVG";
import FilterMobile from "../mobile/Filter";
import { useMobile } from "../../hooks/hooks.mobile";
import { ICategory } from "../../interfaces/Category";
import { IPagination } from "../../interfaces/Pagination";
import { IProduct } from "../../interfaces/Product";
import router from "next/router";

interface Props {
  category: ICategory;
  products: IPagination<IProduct>;
}

function Category({ category, products: productsServer }: Props) {
  const { isMobile } = useMobile();
  const [products, setProducts] = useState<IPagination<IProduct>>({
    count: 0,
    results: [],
    previous: null,
    next: null,
  });
  useEffect(() => {
    if (!!productsServer) {
      setProducts(productsServer);
    }
  }, [productsServer]);
  return (
    <div className="category__container">
      <h2
        onClick={async () => {
          await router.back();
        }}
        className="category__title"
      >
        <span>
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
                />
              </svg>
            }
          />
        </span>
        {category.name}
      </h2>
      <div className="category__main">
        {!isMobile && <Filter category={category} setProducts={setProducts} />}
        {isMobile && (
          <FilterMobile
            productsCount={products.count}
            category={category}
            setProducts={setProducts}
          />
        )}
        <Items
          products={products}
          setProducts={setProducts}
          categoryId={category.id}
        />
      </div>
    </div>
  );
}

export default Category;
