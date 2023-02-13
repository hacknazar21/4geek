import Head from "next/head";
import CommonLayout from "../../layouts/common.layout";
import { GetServerSideProps } from "next";
import { getDataFromAPI, isMobileView } from "../../helpers/server";
import { ICategory } from "../../interfaces/Category";
import { IPagination } from "../../interfaces/Pagination";
import { IVideo } from "../../interfaces/Video";
import Video from "../../components/video/Video";

interface Props {
  categories: IPagination<ICategory>;
  videos: IPagination<IVideo>;
}
function VideoPage({ categories, videos }: Props) {
  return (
    <>
      <Head>
        <title>Наши новости</title>
        <meta name="description" content="4Geek site on Next.js by OneDev" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <CommonLayout className={"video"} categories={categories}>
        <Video videos={videos} />
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
      getDataFromAPI<IPagination<IVideo>>(`/api/content/videos/`, cookies),
    ]).then((data) => {
      props["categories"] = data[0];
      props["videos"] = data[1];
    });
    props["isMobileServer"] = isMobileView(context);
    return {
      props,
    };
  } catch (e) {
    return {
      props: {
        categories: {},
        videos: {},
      }, // will be passed to the page component as props
    };
  }
};
export default VideoPage;
