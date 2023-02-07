import React, { useEffect, useState } from "react";
import SVG from "../common/SVG";
import Popup from "../common/Popup";
import FilterMenuItem from "../category/FilterMenuItem";
import PriceRange from "../common/UiKit/PriceRange";
import { ICategory } from "../../interfaces/Category";
import { IPagination } from "../../interfaces/Pagination";
import { IProduct } from "../../interfaces/Product";
import { useRouter } from "next/router";
import useHttp from "../../hooks/hooks.http";
import FilterMenuButton from "../category/FilterMenuButton";

interface Props {
  category: ICategory;
  setProducts: (products: IPagination<IProduct>) => void;
  productsCount: number;
}
interface FilterData {
  min_price: number;
  max_price: number;
}
function FilterMobile({ category, setProducts, productsCount }: Props) {
  const { request } = useHttp();
  const [activeFilter, setActiveFilter] = useState(false);
  const [filterData, setFilterData] = useState<FilterData>(null);
  const [requestFilter, setRequestFilter] = useState(null);
  const [openSort, setOpenSort] = useState(null);
  const router = useRouter();

  async function getFilterData() {
    const data: FilterData = await request(
      "/api/products/filters/?categories__in=" + category.id
    );
    setFilterData({ ...data });
  }
  async function onPageChangeHandler(min, max) {
    setRequestFilter((prevState) => ({
      ...prevState,
      priceRange: `stockrecords__price__gte=${min}&stockrecords__price__lte=${max}`,
    }));
  }
  useEffect(() => {
    if (!!category) {
      getFilterData();
    }
  }, [category]);
  useEffect(() => {
    (async () => {
      if (!!requestFilter) {
        const data: IPagination<IProduct> = await request(
          "/api/products?categories__in=" +
            category.id +
            "&" +
            requestFilter.priceRange +
            "&" +
            requestFilter.sortBy
        );
        setProducts({ ...data });
      }
    })();
  }, [requestFilter]);
  return (
    <aside className="aside-filter-mobile">
      <div className="aside-filter-mobile__items">
        <button
          onClick={() => {
            setActiveFilter(true);
          }}
          className="aside-filter-mobile__item"
        >
          <span>
            <SVG
              svg={
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M7.75 5.5C7.336 5.5 7 5.836 7 6.25C7 6.664 7.336 7 7.75 7C8.164 7 8.5 6.664 8.5 6.25C8.5 5.836 8.164 5.5 7.75 5.5ZM4.75 5.5H5.62825C5.93725 4.62625 6.7705 4 7.75 4C8.7295 4 9.56275 4.62625 9.87175 5.5H15.25C15.664 5.5 16 5.836 16 6.25C16 6.664 15.664 7 15.25 7H9.87175C9.56275 7.87375 8.7295 8.5 7.75 8.5C6.7705 8.5 5.93725 7.87375 5.62825 7H4.75C4.336 7 4 6.664 4 6.25C4 5.836 4.336 5.5 4.75 5.5ZM15.25 13C15.664 13 16 13.336 16 13.75C16 14.164 15.664 14.5 15.25 14.5H14.3717C14.0628 15.3737 13.2295 16 12.25 16C11.2705 16 10.4372 15.3737 10.1282 14.5H4.75C4.336 14.5 4 14.164 4 13.75C4 13.336 4.336 13 4.75 13H10.1282C10.4372 12.1263 11.2705 11.5 12.25 11.5C13.2295 11.5 14.0628 12.1263 14.3717 13H15.25ZM11.5 13.75C11.5 14.164 11.836 14.5 12.25 14.5C12.664 14.5 13 14.164 13 13.75C13 13.336 12.664 13 12.25 13C11.836 13 11.5 13.336 11.5 13.75Z"
                    fill="#564696"
                  />
                </svg>
              }
            />
          </span>
          Фильтры
        </button>
        <FilterMenuButton
          className={"aside-filter-mobile__item sort"}
          setRequestFilter={setRequestFilter}
          items={[
            {
              slug: "Наибольшая цена",
              point: "ordering=-stockrecords__price",
            },
            {
              slug: "Наименьшая цена",
              point: "ordering=stockrecords__price",
            },
            {
              slug: "от Я до А",
              point: "ordering=-title",
            },
            {
              slug: "от А до Я",
              point: "ordering=title",
            },
          ]}
          initialSlug={"Сортировка"}
        />
      </div>
      <Popup
        className={"modal-full"}
        active={activeFilter}
        setActive={setActiveFilter}
        closeElement={
          <button
            onClick={() => {
              setActiveFilter(false);
            }}
            className="mobile-modal-header"
          >
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
            <h2 className="mobile-modal-header__title">Фильтры</h2>
          </button>
        }
      >
        {!!filterData && (
          <FilterMenuItem title={"Цена"} className="aside-filter__menu-item">
            <PriceRange
              initialMin={filterData?.min_price || 0}
              initialMax={filterData?.max_price || 0}
              onChange={onPageChangeHandler}
            />
          </FilterMenuItem>
        )}
        {!!category.children && (
          <FilterMenuItem
            title={"Категории"}
            className="aside-filter__menu-item"
          >
            {category.children.map((child) => (
              <button
                onClick={async () => {
                  setActiveFilter(false);
                  await router.push("/catalog/" + child.lookup_slug);
                }}
              >
                {child.name}
              </button>
            ))}
          </FilterMenuItem>
        )}
        <div className="aside-filter-mobile__container">
          <div className="aside-filter-mobile__actions">
            <button
              onClick={() => {
                setActiveFilter(false);
              }}
              className="aside-filter-mobile__action"
            >
              Показать результаты ({productsCount})
            </button>
            <button
              onClick={async () => {
                setActiveFilter(false);
                await router.reload();
              }}
              className="aside-filter-mobile__action"
            >
              Сбросить фильтры
            </button>
          </div>
        </div>
      </Popup>
    </aside>
  );
}

export default FilterMobile;
