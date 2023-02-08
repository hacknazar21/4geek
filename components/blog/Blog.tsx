import BlogCard from "../common/UiKit/BlogCard";
import { IPagination } from "../../interfaces/Pagination";
import { IPost } from "../../interfaces/Post";
import HeaderMobile from "../common/HeaderMobile";
import { useMobile } from "../../hooks/hooks.mobile";

interface Props {
  posts: IPagination<IPost>;
}
function Blog({ posts }: Props) {
  const { isMobile } = useMobile();

  return (
    <section className="blog-page">
      {isMobile && <HeaderMobile title={"Наши видео"} />}
      <div className="blog-page__container">
        <div className="blog-page__items">
          {posts?.results.map((post) => (
            <BlogCard
              key={post.id}
              annotation={"Среднее время чтения: " + post.average_reading_time}
              image={post.image}
              title={post.title}
              link={post.slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Blog;
