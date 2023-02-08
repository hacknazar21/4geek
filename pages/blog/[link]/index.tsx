import Head from "next/head";
import CommonLayout from "../../../layouts/common.layout";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../../helpers/server";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import BlogSingle from "../../../components/blog/BlogSingle";
import { IPost } from "../../../interfaces/Post";
interface Props {
  categories: IPagination<ICategory>;
  post: IPost;
}
function BlogSinglePage({ categories, post }: Props) {
  return (
    <>
      <Head>
        <title>{post?.title || "Loading..."}</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"blog"} categories={categories}>
        <BlogSingle post={post} />
      </CommonLayout>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  try {
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`),
      getDataFromAPI<IPost>(`/api/content/posts/${link}/`),
    ]).then((data) => {
      props["categories"] = data[0];
      props["post"] = data[1];
    });
    !!props["post"] && (context.res.statusCode = 404);
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        categories: {},
        post: null,
      }, // will be passed to the page component as props
    };
  }
};
export default BlogSinglePage;
