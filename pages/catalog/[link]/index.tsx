import CommonLayout from "../../../layouts/common.layout";
import Category from "../../../components/category/Category";
import process from "process";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import { IProduct } from "../../../interfaces/Product";
import { GetServerSideProps } from "next";
import { getDataFromAPI } from "../../../helpers/server";

interface Props {
  category: ICategory;
  products: IPagination<IProduct>;
  categories: IPagination<ICategory>;
}
const CategoryPage = ({ categories, category, products }: Props) => {
  return (
    <CommonLayout className={"category"} categories={categories}>
      <Category category={category} products={products} />
    </CommonLayout>
  );
};
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  const { link } = params;
  const cookies = context.req.headers.cookie;

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
    console.log(props);
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
