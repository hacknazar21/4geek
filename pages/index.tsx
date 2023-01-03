import CommonLayout from "../layouts/common.layout";
import Categories from "../components/home/Categories";
import Discounts from "../components/home/Discounts";
import HotProducts from "../components/home/HotProducts";
import OurVideo from "../components/home/OurVideo";
import Interesting from "../components/home/Interesting";
import Promotions from "../components/home/Promotions";
import FirstScreen from "../components/home/FirstScreen";

export default function Home() {
  return (
    <CommonLayout className={"home"}>
      <FirstScreen />
      <Categories />
      <Discounts />
      <HotProducts />
      <Promotions />
      <OurVideo />
      <Interesting />
    </CommonLayout>
  );
}
