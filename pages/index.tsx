import CommonLayout from "../layouts/common.layout";
import Categories from "../components/home/Categories";
import Discounts from "../components/home/Discounts";
import OurVideo from "../components/home/OurVideo";
import Interesting from "../components/home/Interesting";
import Promotions from "../components/home/Promotions";
import FirstScreen from "../components/home/FirstScreen";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetServerSideProps } from "next";
import Head from "next/head";
import { getDataFromAPI, isMobileView } from "../helpers/server";
import { IBlock } from "../interfaces/Block";

interface Props {
  categories: IPagination<ICategory>;
  main_page: IBlock<any>;
}
const Home = ({ categories, main_page }: Props) => {
  return (
    <>
      <Head>
        <title>{main_page.title}</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"home"} categories={categories}>
        {main_page.blocks.map((block, id) => {
          if (block.block_type === "COMPOSITE") {
            return <FirstScreen key={id} slides={block.children} />;
          } else if (block.block_type === "DATA") {
            if (block.data_content_type === "CATEGORY")
              return <Categories key={id} categories={block.data} />;
            else if (block.data_content_type === "BENEFITBANNER")
              return (
                <Promotions
                  key={id}
                  title={block.title}
                  promotions={block.data}
                />
              );
            else if (block.data_content_type === "VIDEO")
              return (
                <OurVideo key={id} title={block.title} videos={block.data} />
              );
            else if (block.data_content_type === "BLOGPOST")
              return (
                <Interesting key={id} title={block.title} posts={block.data} />
              );
          } else if (
            block.block_type === "PRODUCT_LIST" &&
            !!block.products?.length
          ) {
            return (
              <Discounts
                key={id}
                title={block.title}
                products={block.products}
              />
            );
          }
        })}
      </CommonLayout>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.headers.cookie;
    const props = {};
    await Promise.all([
      getDataFromAPI<IBlock<ICategory>>(`/api/content/pages/main_page/`),
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`),
    ]).then((data) => {
      props["main_page"] = data[0];
      props["categories"] = data[1];
    });
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        main_page: {},
      }, // will be passed to the page component as props
    };
  }
};
export default Home;
