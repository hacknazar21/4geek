// 404.js
import CommonLayout from "../layouts/common.layout";
import Head from "next/head";
import Img404 from "../src/img/404.png";
import { useRouter } from "next/router";
import { getDataFromAPI } from "../helpers/server";
import { ICategory } from "../interfaces/Category";
import { IPagination } from "../interfaces/Pagination";
import { useEffect, useState } from "react";
import useHttp from "../hooks/hooks.http";
import { useMobile } from "../hooks/hooks.mobile";

export default function FourOhFour() {
  const router = useRouter();
  const [categories, setCategories] = useState<IPagination<ICategory>>();
  const { request } = useHttp();
  const { isMobile } = useMobile();
  async function getCategoriesFromAPI() {
    const data: IPagination<ICategory> = await request(`/api/categories/`);
    setCategories(data);
  }
  useEffect(() => {
    if (!isMobile) getCategoriesFromAPI();
  }, [isMobile]);
  return (
    <>
      <Head>
        <title>404 - Не найдено</title>
      </Head>
      <CommonLayout className={"home"} categories={categories}>
        <section className="page__404 four-oh-four">
          <div className="four-oh-four__image">
            <img src={Img404.src} alt="" />
          </div>
          <h1 className="four-oh-four__title">
            Упс. Мы не нашли такую страницу
          </h1>
          <button
            onClick={() => {
              router.back();
            }}
            className={"four-oh-four__button"}
          >
            Вернуться назад
          </button>
        </section>
      </CommonLayout>
    </>
  );
}
