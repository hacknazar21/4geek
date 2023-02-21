import React, { useEffect, useState } from "react";
import FilterMenuItem from "./FilterMenuItem";
import PriceRange from "../common/UiKit/PriceRange";
import SVG from "../common/SVG";
import { ICategory } from "../../interfaces/Category";
import Link from "next/link";
import useHttp from "../../hooks/hooks.http";
import { useRouter } from "next/router";
import { IPagination } from "../../interfaces/Pagination";
import { IProduct } from "../../interfaces/Product";
import FilterMenuButton from "./FilterMenuButton";
import Loading from "../common/Loading";
interface Props {
  category: ICategory;
  setProducts: (products: IPagination<IProduct>) => void;
}
interface FilterData {
  min_price: number;
  max_price: number;
}
function Filter({ category, setProducts }: Props) {
  const { request } = useHttp();
  const [filterData, setFilterData] = useState<FilterData>(null);
  const [requestFilter, setRequestFilter] = useState(null);
  async function getFilterData() {
    const data: FilterData = await request(
      "/api/products/filters/?categories__in=" + category.id
    );
    setFilterData({ ...data });
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
  async function onPageChangeHandler(min, max) {
    setRequestFilter((prevState) => ({
      ...prevState,
      priceRange: `stockrecords__price__gte=${min}&stockrecords__price__lte=${max}`,
    }));
  }

  if (!!filterData)
    return (
      <aside className="aside-filter">
        <FilterMenuItem
          title={"Сортировка"}
          className="aside-filter__menu-item"
        >
          <FilterMenuButton
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
            ]}
            initialSlug={"Цена"}
          />
          <FilterMenuButton
            setRequestFilter={setRequestFilter}
            items={[
              {
                slug: "от А до Я",
                point: "ordering=title",
              },
              {
                slug: "от Я до А",
                point: "ordering=-title",
              },
            ]}
            initialSlug={"Название"}
          />
          <FilterMenuButton
            setRequestFilter={setRequestFilter}
            items={[
              {
                slug: "Популярные",
                point: "ordering=rating",
              },
              {
                slug: "Менее популярные",
                point: "ordering=-rating",
              },
            ]}
            initialSlug={"Рейтинг"}
          />
        </FilterMenuItem>
        <FilterMenuItem title={"Цена"} className="aside-filter__menu-item">
          <PriceRange
            initialMin={filterData?.min_price}
            initialMax={filterData?.max_price}
            onChange={onPageChangeHandler}
          />
        </FilterMenuItem>
        {category.children && (
          <FilterMenuItem
            title={"Категории"}
            className="aside-filter__menu-item"
          >
            {category.children.map((childCategory) => (
              <Link
                key={childCategory.id}
                href="/catalog/[link]"
                as={"/catalog/" + childCategory.lookup_slug}
              >
                {childCategory.name}
              </Link>
            ))}
          </FilterMenuItem>
        )}
      </aside>
    );
  else
    return (
      <aside className="aside-filter">
        <Loading
          style={{ left: "50%", transform: "translateX(-50%) scale(0.5)" }}
        />
      </aside>
    );
}

export default Filter;
