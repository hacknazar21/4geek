import React from "react";
import MobileNavigation from "../common/MobileNavigation";
import Search from "../common/Search";
import CatalogList from "./CatalogList";
import Cat1 from "../../src/img/placeholders/categories/1.png";
import Cat2 from "../../src/img/placeholders/categories/2.png";
import Cat3 from "../../src/img/placeholders/categories/3.png";
import Cat4 from "../../src/img/placeholders/categories/4.png";
import Cat5 from "../../src/img/placeholders/categories/5.png";
import Cat6 from "../../src/img/placeholders/categories/6.png";
import Cat7 from "../../src/img/placeholders/categories/7.png";
import Cat8 from "../../src/img/placeholders/categories/8.png";
import Cat9 from "../../src/img/placeholders/categories/9.png";
import Cat10 from "../../src/img/placeholders/categories/10.png";
import Cat11 from "../../src/img/placeholders/categories/11.png";
import Cat12 from "../../src/img/placeholders/categories/12.png";
function Catalog(props) {
  return (
    <>
      <div className="catalog-mobile">
        <header className="catalog-mobile__header">
          <div className="catalog-mobile__container">
            <h1 className="catalog-mobile__title">Каталог</h1>
            <Search className="catalog-mobile__search" />
          </div>
        </header>
        <main className="catalog-mobile__main">
          <div className="catalog-mobile__container">
            <menu className="catalog-mobile__menu">
              <CatalogList
                image={Cat1.src}
                name={"Смартфоны"}
                list={[
                  {
                    name: "Все смартфоны",
                    link: "",
                  },
                  {
                    name: "Смартфоны Apple",
                    link: "",
                  },
                  {
                    name: "Смартфоны Samsung",
                    link: "",
                  },
                  {
                    name: "Смартфоны Xiaomi",
                    link: "",
                  },
                  {
                    name: "Смартфоны Oppo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Vivo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Huawei",
                    link: "",
                  },
                ]}
              />
              <CatalogList
                image={Cat2.src}
                name={"Смартфоны"}
                list={[
                  {
                    name: "Все смартфоны",
                    link: "",
                  },
                  {
                    name: "Смартфоны Apple",
                    link: "",
                  },
                  {
                    name: "Смартфоны Samsung",
                    link: "",
                  },
                  {
                    name: "Смартфоны Xiaomi",
                    link: "",
                  },
                  {
                    name: "Смартфоны Oppo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Vivo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Huawei",
                    link: "",
                  },
                ]}
              />
              <CatalogList
                image={Cat3.src}
                name={"Смартфоны"}
                list={[
                  {
                    name: "Все смартфоны",
                    link: "",
                  },
                  {
                    name: "Смартфоны Apple",
                    link: "",
                  },
                  {
                    name: "Смартфоны Samsung",
                    link: "",
                  },
                  {
                    name: "Смартфоны Xiaomi",
                    link: "",
                  },
                  {
                    name: "Смартфоны Oppo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Vivo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Huawei",
                    link: "",
                  },
                ]}
              />
              <CatalogList
                image={Cat4.src}
                name={"Смартфоны"}
                list={[
                  {
                    name: "Все смартфоны",
                    link: "",
                  },
                  {
                    name: "Смартфоны Apple",
                    link: "",
                  },
                  {
                    name: "Смартфоны Samsung",
                    link: "",
                  },
                  {
                    name: "Смартфоны Xiaomi",
                    link: "",
                  },
                  {
                    name: "Смартфоны Oppo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Vivo",
                    link: "",
                  },
                  {
                    name: "Смартфоны Huawei",
                    link: "",
                  },
                ]}
              />
            </menu>
          </div>
        </main>
        <footer className="catalog-mobile__footer">
          <MobileNavigation />
        </footer>
      </div>
    </>
  );
}

export default Catalog;
