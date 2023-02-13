import Head from "next/head";
import CommonLayout from "../../layouts/common.layout";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../helpers/server";
import { IBlock } from "../../interfaces/Block";
import { ICategory } from "../../interfaces/Category";
import { IPagination } from "../../interfaces/Pagination";
import Blog from "../../components/blog/Blog";
import { IPost } from "../../interfaces/Post";
interface Props {
  categories: IPagination<ICategory>;
  posts: IPagination<IPost>;
}
function BlogPage({ categories, posts }: Props) {
  return (
    <>
      <Head>
        <title>Наши новости</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"blog"} categories={categories}>
        <Blog posts={posts} />
      </CommonLayout>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  try {
    const props = {};
    const cookies = context.req.headers.cookie;

    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
      getDataFromAPI<IPagination<IPost>>(`/api/content/posts/`, cookies),
    ]).then((data) => {
      props["categories"] = data[0];
      props["posts"] = data[1];
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
export default BlogPage;
