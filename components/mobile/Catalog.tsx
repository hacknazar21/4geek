import React, { useEffect, useState } from "react";
import MobileNavigation from "../common/MobileNavigation";
import Search from "../common/Search";
import CatalogList from "./CatalogList";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { IReview } from "../../interfaces/Review";
import { getClientDataFromAPI } from "../../helpers/client";
import { IProduct } from "../../interfaces/Product";
import useHttp from "../../hooks/hooks.http";
import Loading from "../common/Loading";
import Input from "../common/UiKit/Input";
import Link from "next/link";
let timer: any = null;

function Catalog() {
  const [categories, setCategories] = useState<IPagination<ICategory>>({
    next: null,
    previous: null,
    count: 0,
    results: [],
  });
  const [categoriesS, setCategoriesS] = useState<IPagination<ICategory>>({
    next: null,
    previous: null,
    count: 0,
    results: [],
  });
  const [productsS, setProductsS] = useState<IPagination<IProduct>>({
    next: null,
    previous: null,
    count: 0,
    results: [],
  });
  const { request } = useHttp();
  const [loadingCategories, setLoadingCategories] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState("");
  const [isSearch, setIsSearch] = useState(false);
  function searchHandler() {
    if (!!timer) clearTimeout(timer);
    timer = setTimeout(async () => {
      try {
        setLoadingCategories(true);
        if (searchValue === "") {
          setCategoriesS({
            next: null,
            previous: null,
            count: 0,
            results: [],
          });
          setProductsS({
            next: null,
            previous: null,
            count: 0,
            results: [],
          });
          setIsSearch(false);
        } else {
          const categories: IPagination<ICategory> = await request(
            `/api/categories/search/?search=${searchValue}&limit=2`
          );
          const products: IPagination<IProduct> = await request(
            `/api/products/search/?search=${searchValue}&limit=4`
          );
          setCategoriesS(categories);
          setProductsS(products);
        }
        setLoadingCategories(false);
      } catch (e) {}
    }, 800);
  }
  function LoadCategories() {
    setLoadingCategories(true);
    getClientDataFromAPI<IProduct>(
      `/api/categories/`,
      setCategories,
      request
    ).then(() => {
      setLoadingCategories(false);
    });
  }

  useEffect(() => {
    LoadCategories();
  }, []);
  useEffect(() => {
    searchHandler();
  }, [searchValue]);

  return (
    <>
      <div className="catalog-mobile wrapper">
        <header className="catalog-mobile__header">
          <div className="catalog-mobile__container">
            <h1 className="catalog-mobile__title">??????????????</h1>
            <div className="main-search__input-box">
              <input
                onInput={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setSearchValue(e.target.value);
                  setIsSearch(true);
                }}
                type="text"
                className="main-search"
                placeholder="?????? ???? ???????????? ?"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
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
          </div>
        </header>
        <main className="catalog-mobile__main">
          <div className="catalog-mobile__container">
            <menu className="catalog-mobile__menu">
              {!isSearch &&
                !loadingCategories &&
                categories.results.map((category) => (
                  <CatalogList
                    key={category.id}
                    image={category.image}
                    name={category.name}
                    slugParent={category.lookup_slug}
                    list={category.children?.map((childCategory) => ({
                      name: childCategory.name,
                      link: childCategory.lookup_slug,
                    }))}
                    isChild={!!category.parent}
                    parentCategory={category.parent}
                  />
                ))}
              {loadingCategories && (
                <Loading
                  style={{
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%) scale(0.5)",
                  }}
                />
              )}
              {isSearch && !loadingCategories && !!productsS.count && (
                <div className="catalog-mobile__search-result-section">
                  <h2 className="catalog-mobile__search-result-section-title">
                    ???????????????????? ????????????
                  </h2>
                  <ul className="catalog-mobile-list">
                    {productsS.results.map((listItem, id) => (
                      <li key={id} className="catalog-mobile-list__item">
                        <Link
                          href="/product/[link]"
                          as={"/product/" + listItem.lookup_slug}
                          className="catalog-mobile-list__link"
                        >
                          {listItem.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {isSearch && !loadingCategories && !!categoriesS.count && (
                <div className="catalog-mobile__search-result-section">
                  <h2 className="catalog-mobile__search-result-section-title">
                    ??????????????????
                  </h2>
                  <ul className="catalog-mobile-list">
                    {categoriesS.results.map((listItem, id) => (
                      <li key={id} className="catalog-mobile-list__item">
                        <Link
                          href="/catalog/[link]"
                          as={"/catalog/" + listItem.lookup_slug}
                          className="catalog-mobile-list__link"
                        >
                          {listItem.name}{" "}
                          {!!listItem.parent
                            ? "?? ?????????????????? " + listItem.parent.name
                            : ""}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {isSearch &&
                !loadingCategories &&
                !categoriesS.count &&
                !productsS.count && (
                  <p>?? ?????????????????? ???? ???????????? ?????????????? ???????????? ???? ?????????????? :(</p>
                )}
            </menu>
          </div>
        </main>
        <footer>
          <MobileNavigation />
        </footer>
      </div>
    </>
  );
}

export default Catalog;
