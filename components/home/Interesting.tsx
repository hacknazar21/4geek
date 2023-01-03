import React from "react";
import VideoCard from "../common/UiKit/VideoCard";
import SeeAll from "../common/SeeAll";
import BlogCard from "../common/UiKit/BlogCard";

function OurVideo(props) {
  return (
    <section className="home__interesting interesting">
      <div className="interesting__container">
        <div className="section-header interesting__header">
          <h2 className="interesting__title section-title">Интересное</h2>
          <SeeAll link={""} text={"смотреть все"} />
        </div>
        <div className="interesting__grid">
          <div className="interesting__grid-item">
            <BlogCard
              annotation={"Среднее время чтения: 10 минут"}
              image={
                "https://www.apple.com/v/airpods/q/images/meta/airpods__dh7xkbort402_og.png"
              }
              title={
                "Сравнение AirPods Pro 2, Galaxy Buds 2 Pro, Pixel Buds Pro и FreeBuds Pro 2"
              }
              link={""}
            />
          </div>
          <div className="interesting__grid-item">
            <BlogCard
              annotation={"Среднее время чтения: 10 минут"}
              image={
                "https://cdn0.vox-cdn.com/hermano/verge/product/image/9975/AMD-Ryzen-7000-Desktop-CPU-Lineup-low_res-scale-4_00x-Custom.png"
              }
              title={
                "Технология AMD показала себя стабильнее решений Nvidia и Intel. Появилось сравнение DLSS, FSR и XeSS с масштабированием до 600%."
              }
              link={""}
            />
          </div>
          <div className="interesting__grid-item">
            <BlogCard
              annotation={"Среднее время чтения: 10 минут"}
              image={
                "https://filearchive.cnews.ru/img/news/2022/10/17/ph600.jpg"
              }
              title={
                "«Мой iPhone 14 Pro Max превратился в кирпич», — пользователи сообщают о баге при автоматическом обновлении в iOS 16. В некоторых случаях спасает «жёсткая перезагрузка»"
              }
              link={""}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVideo;
