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

export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const cookies = context.req.headers.cookie;
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
    ]).then((data) => {
      props["categories"] = data[0];
    });
    props["isMobileServer"] = isMobileView(context);
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
export default ContactsPage;
