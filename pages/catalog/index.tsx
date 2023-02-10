import Catalog from "../../components/mobile/Catalog";
import { getDataFromAPI, isMobileView } from "../../helpers/server";
import { IPagination } from "../../interfaces/Pagination";
import { ICategory } from "../../interfaces/Category";
import { GetServerSideProps } from "next";

interface Props {
  categories: IPagination<ICategory>;
}
export default function CatalogPage({ categories }: Props) {
  return <Catalog categories={categories} />;
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.headers.cookie;
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
    ]).then((data) => {
      props["categories"] = data[0];
    });
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        categories: {},
      }, // will be passed to the page component as props
    };
  }
};
