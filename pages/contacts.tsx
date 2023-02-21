import CommonLayout from "../layouts/common.layout";
import { IPagination } from "../interfaces/Pagination";
import { ICategory } from "../interfaces/Category";
import { GetStaticProps } from "next";
import Head from "next/head";
import { getDataFromAPI } from "../helpers/server";
import Contacts from "../components/contacts/Contacts";

interface Props {
  categories: IPagination<ICategory>;
}
const ContactsPage = ({ categories }: Props) => {
  return (
    <>
      <Head>
        <title>Наши контакты</title>
      </Head>
      <CommonLayout className={"contacts"} categories={categories}>
        <Contacts />
      </CommonLayout>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context) => {
  try {
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, null),
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
      revalidate: 900,
    };
  }
};
export default ContactsPage;
