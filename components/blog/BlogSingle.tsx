import { IPost } from "../../interfaces/Post";
import { useMobile } from "../../hooks/hooks.mobile";
import HeaderMobile from "../common/HeaderMobile";

interface Props {
  post: IPost;
}
function BlogSingle({ post }: Props) {
  const { isMobile } = useMobile();
  return (
    <section className="single-blog">
      {isMobile && <HeaderMobile title={"Наши видео"} />}
      <div className="single-blog__container">
        <div className="single-blog__header">
          <div className="single-blog__average">
            <p>Среднее время чтения: 10 минут</p>
          </div>
          <div className="single-blog__views">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M14.5782 7.84563C12.8232 5.56126 10.4832 4.30762 8.0039 4.30762C5.52464 4.30762 3.1846 5.56121 1.42956 7.84563C1.26241 8.04066 1.26241 8.31918 1.42956 8.51421C3.1846 10.7986 5.52464 12.0522 8.0039 12.0522C10.4832 12.0522 12.8232 10.7986 14.5782 8.54215C14.7176 8.31923 14.7176 8.04071 14.5782 7.84567V7.84563ZM8.0039 10.9378C5.99815 10.9378 4.07596 9.96285 2.59958 8.17992C4.1039 6.39699 5.99815 5.42201 8.0039 5.42201C10.0097 5.42201 11.9318 6.39699 13.4082 8.17992C11.9318 9.96285 10.0097 10.9378 8.0039 10.9378Z"
                fill="#777777"
              />
              <path
                d="M8.00396 6.00732C6.80604 6.00732 5.83105 6.98231 5.83105 8.18023C5.83105 9.37814 6.80604 10.3531 8.00396 10.3531C9.20187 10.3531 10.1769 9.37814 10.1769 8.18023C10.1769 6.98231 9.20187 6.00732 8.00396 6.00732ZM7.16823 8.09665C6.86182 8.09665 6.58321 7.84593 6.58321 7.51164C6.58321 7.20524 6.83393 6.92663 7.16823 6.92663C7.47463 6.92663 7.75324 7.17735 7.75324 7.51164C7.72535 7.84593 7.47463 8.09665 7.16823 8.09665Z"
                fill="#777777"
              />
            </svg>
            1885
          </div>
        </div>
        <div className="single-blog__content">
          <h1 className="single-blog__content-title">
            Обзор Mac mini 2023 c M2 Pro. Лучший компьютер Apple?
          </h1>
          <div className="single-blog__content-image">
            <img src={post.image} alt="" />
          </div>
          <div className="single-blog__content-text">
            <p>{post.content}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogSingle;
