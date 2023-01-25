import CommonLayout from "../../../layouts/common.layout";
import Category from "../../../components/category/Category";
import process from "process";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import { IProduct } from "../../../interfaces/Product";
import { GetServerSideProps, GetStaticPaths, GetStaticProps } from "next";

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

  try {
    const res = await fetch(`${process.env.API_HOST}/api/categories/${link}`);
    const category: ICategory = await res.json();
    const resCategories = await fetch(
      process.env.API_HOST + "/api/categories/"
    );
    const categories: IPagination<ICategory> = await resCategories.json();
    const resProducts = await fetch(
      `${process.env.API_HOST}/api/products/?categories__in=${category.id}`
    );
    const products: IPagination<IProduct> = await resProducts.json();
    return {
      props: { category, products, categories }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: { category: {}, products: { results: [] } }, // will be passed to the page component as props
    };
  }
};
export default CategoryPage;
