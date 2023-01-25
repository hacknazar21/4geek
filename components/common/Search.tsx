import React, { useEffect, useRef, useState } from "react";
import ProductCard from "./UiKit/ProductCard";
import Link from "next/link";
import { IProduct } from "../../interfaces/Product";
import { ICategory } from "../../interfaces/Category";
import useHttp from "../../hooks/hooks.http";
import { IPagination } from "../../interfaces/Pagination";
let timer: any = null;
function Search({ className }) {
  const classes = ["main-search", className];
  const [showResults, setShowResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchResults, setSearchResults] = useState({
    categories: [] as ICategory[],
    products: [] as IProduct[],
  });
  const { request } = useHttp();
  useEffect(() => {
    if (showResults)
      document.documentElement.classList.add("search-show-results");
    else document.documentElement.classList.remove("search-show-results");
  }, [showResults]);
  useEffect(() => {
    searchHandler();
  }, [searchValue]);

  function searchHandler() {
    if (!!timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        if (searchValue === "") {
          setShowResults(false);
          return;
        }
        const products: IPagination<IProduct> = await request(
          `/api/products/search/?search=${searchValue}&limit=3`
        );
        const categories: IPagination<ICategory> = await request(
          `/api/categories/search/?search=${searchValue}&limit=3`
        );
        setSearchResults({
          categories: categories.results,
          products: products.results,
        });
        setShowResults(true);
      } catch (e) {}
    }, 800);
  }
  return (
    <form className={classes.join(" ")}>
      <div className="main-search__input-box">
        <input
          onInput={(e) => {
            setSearchValue(e.target.value);
          }}
          type="text"
          className="main-search"
          placeholder="Что вы искали ?"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            searchHandler();
          }}
          className="main-search__submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M21.7099 20.29L17.9999 16.61C19.44 14.8144 20.1374 12.5353 19.9487 10.2413C19.76 7.94733 18.6996 5.81281 16.9854 4.27667C15.2713 2.74053 13.0337 1.91954 10.7328 1.9825C8.43194 2.04546 6.24263 2.98759 4.61505 4.61517C2.98747 6.24275 2.04534 8.43207 1.98237 10.7329C1.91941 13.0338 2.74041 15.2714 4.27655 16.9855C5.81269 18.6997 7.94721 19.7601 10.2412 19.9488C12.5352 20.1375 14.8143 19.4401 16.6099 18L20.2899 21.68C20.3829 21.7738 20.4935 21.8482 20.6153 21.8989C20.7372 21.9497 20.8679 21.9758 20.9999 21.9758C21.1319 21.9758 21.2626 21.9497 21.3845 21.8989C21.5063 21.8482 21.6169 21.7738 21.7099 21.68C21.8901 21.4936 21.9909 21.2444 21.9909 20.985C21.9909 20.7257 21.8901 20.4765 21.7099 20.29ZM10.9999 18C9.61544 18 8.26206 17.5895 7.11091 16.8203C5.95977 16.0511 5.06256 14.9579 4.53275 13.6788C4.00293 12.3997 3.86431 10.9923 4.13441 9.63439C4.4045 8.27653 5.07119 7.02925 6.05016 6.05028C7.02912 5.07131 8.27641 4.40463 9.63427 4.13453C10.9921 3.86443 12.3996 4.00306 13.6787 4.53287C14.9578 5.06268 16.051 5.95989 16.8202 7.11103C17.5894 8.26218 17.9999 9.61556 17.9999 11C17.9999 12.8565 17.2624 14.637 15.9497 15.9498C14.6369 17.2625 12.8564 18 10.9999 18Z"
              fill="white"
            />
          </svg>
        </button>
      </div>
      <menu className="header-menu__list-submenu header-submenu ">
        <ul className="header-submenu__list header__container">
          <li className="header-submenu__list-item">
            <div className="header-submenu__links">
              {searchResults.categories.map((category) => (
                <div key={category.id} className="header-submenu__link">
                  <Link
                    href="/catalog/[link]"
                    as={"/catalog/" + category.lookup_slug}
                    className="header-submenu__link-title"
                  >
                    {category.name}
                  </Link>
                  {category.parent && (
                    <Link
                      href="/catalog/[link]"
                      as={"/catalog/" + category.parent.lookup_slug}
                      className="header-submenu__link-subtitle"
                    >
                      В категории {category.parent.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
            <div className="header-submenu__results-box">
              <div className="header-submenu__results">
                {searchResults.products.map((product) => (
                  <div key={product.id} className="header-submenu__result">
                    <ProductCard product={product} mode={"light"} />
                  </div>
                ))}
              </div>
              <Link className="header-submenu__results-link" href={""}>
                Смотреть все товары
              </Link>
            </div>
          </li>
        </ul>
      </menu>
    </form>
  );
}

export default Search;
