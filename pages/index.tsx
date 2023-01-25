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

interface Props {
  categories: IPagination<ICategory>;
  isMobileView: boolean;
}
const Home = ({ categories, isMobileView }: Props) => {
  return (
    <CommonLayout className={"home"} categories={categories}>
      {!isMobileView && (
        <>
          <FirstScreen />
          <Categories categories={categories} />
          <Discounts />
          <HotProducts />
          <Promotions />
          <OurVideo />
          <Interesting />
        </>
      )}
      {isMobileView && (
        <>
          <MFirstScreen />
          <MCategories categories={categories} />
          <MDiscounts />
          <MHotProducts />
          <MPromotions />
          <MOurVideo />
          <MInteresting />
        </>
      )}
    </CommonLayout>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  try {
    const res = await fetch(process.env.API_HOST + "/api/categories/");
    const categories: IPagination<ICategory> = await res.json();
    return { props: { categories, isMobileView } };
  } catch (e) {
    return {
      props: { categories: {}, isMobileView }, // will be passed to the page component as props
    };
  }
};
export default Home;
