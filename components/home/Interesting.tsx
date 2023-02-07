import React from "react";
import VideoCard from "../common/UiKit/VideoCard";
import SeeAll from "../common/SeeAll";
import BlogCard from "../common/UiKit/BlogCard";

interface Props {
  title: string;
  posts: {
    id: number;
    model: string;
    created_at: Date;
    updated_at: Date;
    title: string;
    description: string;
    content: string;
    image: string;
    average_reading_time: number;
    slug: string;
    pk: string;
  }[];
}
function OurVideo({ title, posts }: Props) {
  return (
    <section className="home__interesting interesting">
      <div className="interesting__container">
        <div className="section-header interesting__header">
          <h2 className="interesting__title section-title">
            {<title></title>}
          </h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <div className="interesting__grid">
          {posts.map((post) => (
            <div key={post.id} className="interesting__grid-item">
              <BlogCard
                annotation={
                  "Среднее время чтения: " + post.average_reading_time
                }
                image={post.image}
                title={post.title}
                link={post.slug}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default OurVideo;
