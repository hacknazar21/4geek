import Head from "next/head";
import CommonLayout from "../../../layouts/common.layout";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../../helpers/server";
import { ICategory } from "../../../interfaces/Category";
import { IPagination } from "../../../interfaces/Pagination";
import BlogSingle from "../../../components/blog/BlogSingle";
import { IPost } from "../../../interfaces/Post";
import { IVideo } from "../../../interfaces/Video";
import VideoSingle from "../../../components/video/VideoSingle";
interface Props {
  categories: IPagination<ICategory>;
  video: IVideo;
}
function BlogSinglePage({ categories, video }: Props) {
  return (
    <>
      <Head>
        <title>{video?.title || "Loading..."}</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"blog"} categories={categories}>
        <VideoSingle video={video} />
      </CommonLayout>
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async (context) => {
  const { link } = context.params;
  const cookies = context.req.headers.cookie;

  try {
    const props = {};
    await Promise.all([
      getDataFromAPI<IPagination<ICategory>>(`/api/categories/`, cookies),
      getDataFromAPI<IPost>(`/api/content/videos/${link}/`, cookies),
    ]).then((data) => {
      props["categories"] = data[0];
      props["video"] = data[1];
    });
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        categories: {},
        video: null,
      }, // will be passed to the page component as props
    };
  }
};
export default BlogSinglePage;
