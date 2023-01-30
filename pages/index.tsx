import CommonLayout from "../layouts/common.layout";
import Categories from "../components/home/Categories";
import Discounts from "../components/home/Discounts";
import HotProducts from "../components/home/HotProducts";
import OurVideo from "../components/home/OurVideo";
import Interesting from "../components/home/Interesting";
import Promotions from "../components/home/Promotions";
import FirstScreen from "../components/home/FirstScreen";
import * as process from "process";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetServerSideProps } from "next";
import MFirstScreen from "../components/home/mobile/MFirstScreen";
import MCategories from "../components/home/mobile/MCategories";
import MDiscounts from "../components/home/mobile/MDiscounts";
import MHotProducts from "../components/home/mobile/MHotProducts";
import MPromotions from "../components/home/mobile/MPromotions";
import MOurVideo from "../components/home/mobile/MOurVideo";
import MInteresting from "../components/home/mobile/MInteresting";
import Head from "next/head";
import { isMobileView } from "../helpers/server";

interface Props {
  categories: IPagination<ICategory>;
  isMobileView: boolean;
}
const Home = ({ categories, isMobileServer }: Props) => {
  return (
    <>
      <Head>
        <title>Главная</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"home"} categories={categories}>
        <FirstScreen />
        <Categories categories={categories} />
        <Discounts />
        <HotProducts />
        <Promotions />
        <OurVideo />
        <Interesting />
      </CommonLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const isMobileServer = isMobileView(ctx);
  try {
    const res = await fetch(process.env.API_HOST + "/api/categories/");
    const categories: IPagination<ICategory> = await res.json();
    return { props: { categories, isMobileServer } };
  } catch (e) {
    return {
      props: { categories: {}, isMobileServer }, // will be passed to the page component as props
    };
  }
};
export default Home;
