import { useMobile } from "../../hooks/hooks.mobile";
import HeaderMobile from "../common/HeaderMobile";
import { IVideo } from "../../interfaces/Video";
import OurVideo from "../home/OurVideo";
import useHttp from "../../hooks/hooks.http";
import { useEffect, useState } from "react";
import { IPagination } from "../../interfaces/Pagination";

interface Props {
  video: IVideo;
}
function VideoSingle({ video }: Props) {
  const [videos, setVideos] = useState<IVideo[]>([]);
  const { isMobile } = useMobile();
  const { request } = useHttp();
  function getYouTubeVideoId(url) {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);

    if (match && match[2].length === 11) {
      return match[2];
    }

    return null;
  }

  useEffect(() => {
    (async () => {
      const r1 = request(`/api/content/videos/`);
      const videos: IPagination<IVideo> = await r1;
      setVideos(
        videos.results.filter((videoItem) => videoItem.url !== video.url)
      );
    })();
  }, []);
  return (
    <section className="single-video">
      {isMobile && <HeaderMobile title={"Наши видео"} />}
      <div className="single-video__container">
        <div className="single-video__content">
          <h1 className="single-video__content-title">{video.title}</h1>
          <div className="single-video__content-image">
            <iframe
              title={video.title}
              src={
                "https://www.youtube.com/embed/" +
                getYouTubeVideoId(video.url) +
                "?autoplay=1"
              }
            />
          </div>
          <div className="single-video__content-text">
            <p>{video.description}</p>
          </div>
        </div>
        <OurVideo videos={videos} title={"Наши видео"} />
      </div>
    </section>
  );
}

export default VideoSingle;
