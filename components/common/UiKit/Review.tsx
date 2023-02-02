import React from "react";
import VideoCard from "./VideoCard";
import Img1 from "../../../src/img/placeholders/products/1.png";
import Img2 from "../../../src/img/placeholders/products/2.png";
import { IBlock } from "../../../interfaces/Block";
interface Props {
  review: IBlock;
}
function Review({ review }: Props) {
  return (
    <section className="product__review product-review">
      {review.blocks.map((block, id) => {
        if (block.block_type === "SINGLE_OBJECT") {
          return (
            <div
              key={id}
              className="product-review__section product-review__section_video"
            >
              <VideoCard
                title={block.related_object.title}
                video={block.related_object.url}
                image={block.related_object.preview_url}
              />
              <h3 className="product-review__section-title">{block.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: block.text }}
                className="product-review__section-text"
              ></div>
            </div>
          );
        } else if (block.block_type === "STATIC") {
          return (
            <div key={id} className="product-review__section">
              <div className="product-review__section-image">
                <img src={block.image} alt="" />
              </div>
              <h3 className="product-review__section-title">{block.title}</h3>
              <div
                dangerouslySetInnerHTML={{ __html: block.text }}
                className="product-review__section-text"
              ></div>
            </div>
          );
        }
      })}
    </section>
  );
}

export default Review;
