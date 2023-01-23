import CommonLayout from "../../../layouts/common.layout";
import Category from "../../../components/category/Category";
import process from "process";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import { IProduct } from "../../../interfaces/Product";
import { GetStaticPaths, GetStaticProps } from "next";

interface Props {
  category: ICategory;
  products: IPagination<IProduct>;
}
const CategoryPage = (props: Props) => {
  const { category, products } = props;
  return (
    <CommonLayout className={"category"}>
      <Category category={category} products={products} />
    </CommonLayout>
  );
};
export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const { link } = params;

  try {
    const res = await fetch(`${process.env.API_HOST}/api/categories/${link}`);
    const category: ICategory = await res.json();
    const resProducts = await fetch(
      `${process.env.API_HOST}/api/products/?categories=${category.id}`
    );
    const products: IPagination<IProduct> = await resProducts.json();
    return {
      props: { category, products }, // will be passed to the page component as props
    };
  } catch (e) {
    return {
      props: { category: {}, products: { results: [] } }, // will be passed to the page component as props
    };
  }
};
export const getStaticPaths = async () => {
  try {
    const res = await fetch(process.env.API_HOST + "/api/categories/");
    const categories: IPagination<ICategory> = await res.json();
    const childPaths = [];
    const paths = categories.results.map((category) => {
      childPaths.push(
        ...category.children.map((child_category) => ({
          params: { link: child_category.lookup_slug },
        }))
      );
      return {
        params: { link: category.lookup_slug },
      };
    });

    return {
      paths: [...paths, ...childPaths],
      fallback: false,
    };
  } catch (e) {
    return {
      props: { categories: {} }, // will be passed to the page component as props
    };
  }
};
export default CategoryPage;
