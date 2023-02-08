import { IPagination } from "../../interfaces/Pagination";
import HeaderMobile from "../common/HeaderMobile";
import { useMobile } from "../../hooks/hooks.mobile";
import VideoCard from "../common/UiKit/VideoCard";
import { IVideo } from "../../interfaces/Video";

interface Props {
  videos: IPagination<IVideo>;
}
function Video({ videos }: Props) {
  const { isMobile } = useMobile();

  return (
    <section className="video-page">
      {isMobile && <HeaderMobile title={"Наши видео"} />}
      <div className="video-page__container">
        <div className="video-page__items">
          {videos?.results.map((video) => (
            <VideoCard
              slug={video.slug}
              image={video.preview_url}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Video;
