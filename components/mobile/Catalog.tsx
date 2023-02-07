import React from "react";
import MobileNavigation from "../common/MobileNavigation";
import Search from "../common/Search";
import CatalogList from "./CatalogList";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";

interface Props {
  categories: IPagination<ICategory>;
}
function Catalog({ categories }: Props) {
  return (
    <>
      <div className="catalog-mobile wrapper">
        <header className="catalog-mobile__header">
          <div className="catalog-mobile__container">
            <h1 className="catalog-mobile__title">Каталог</h1>
            <Search className="catalog-mobile__search" />
          </div>
        </header>
        <main className="catalog-mobile__main">
          <div className="catalog-mobile__container">
            <menu className="catalog-mobile__menu">
              {categories.results.map((category) => (
                <CatalogList
                  key={category.id}
                  image={category.image}
                  name={category.name}
                  slugParent={category.lookup_slug}
                  list={category.children?.map((childCategory) => ({
                    name: childCategory.name,
                    link: childCategory.lookup_slug,
                  }))}
                />
              ))}
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
