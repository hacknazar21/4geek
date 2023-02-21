import CommonLayout from "../../../layouts/common.layout";
import Category from "../../../components/category/Category";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import { IProduct } from "../../../interfaces/Product";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../../helpers/server";
import Head from "next/head";

interface Props {
  category: ICategory;
  products: IPagination<IProduct>;
  categories: IPagination<ICategory>;
  isMobileView: boolean;
}
const CategoryPage = ({
  categories,
  category,
  products,
  isMobileView,
}: Props) => {
  return (
    <>
      <Head>
        <title>{category.name}</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"category"} categories={categories}>
        <Category
          category={category}
          products={products}
          isMobileView={isMobileView}
        />
      </CommonLayout>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { link } = params;
  const cookies = context.req.headers.cookie;
  context.res.setHeader("Cache-Control", "s-maxage=60, stale-while-revalidate");
  try {
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(
        `/api/categories/${link}`,
        cookies
      ),
      getDataFromAPI<IPagination<ICategory>>("/api/categories/", cookies),
    ]).then((data) => {
      props["category"] = data[0];
      props["categories"] = data[1];
    });
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(
        `/api/products/?categories__in=${props["category"].id}`,
        cookies
      ),
    ]).then((data) => {
      props["products"] = data[0];
    });
    props["isMobileView"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: { category: {}, products: { results: [] }, categories: {} }, // will be passed to the page component as props
    };
  }
};
export default CategoryPage;
