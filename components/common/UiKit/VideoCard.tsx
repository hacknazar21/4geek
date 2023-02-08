import React from "react";
import Link from "next/link";

function VideoCard({ slug, image, title }) {
  return (
    <article className="video-card">
      <Link rel="noreferrer" href="/video/[link]" as={"/video/" + slug}>
        <div className="video-card__image">
          <img src={image} alt="" />
        </div>
        <h3 className="video-card__title">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="18"
            viewBox="0 0 24 18"
            fill="none"
          >
            <path
              d="M23.4999 3.50708C23.364 3.02231 23.0993 2.58342 22.7339 2.23708C22.3582 1.88008 21.8977 1.62471 21.3959 1.49508C19.5179 1.00008 11.9939 1.00008 11.9939 1.00008C8.85721 0.964389 5.72131 1.12135 2.60388 1.47008C2.10208 1.60929 1.64245 1.87036 1.26588 2.23008C0.895885 2.58608 0.627885 3.02508 0.487885 3.50608C0.151578 5.31782 -0.0118232 7.15742 -0.000115239 9.00008C-0.0121152 10.8411 0.150885 12.6801 0.487885 14.4941C0.624885 14.9731 0.891885 15.4101 1.26288 15.7631C1.63388 16.1161 2.09588 16.3711 2.60388 16.5061C4.50689 17.0001 11.9939 17.0001 11.9939 17.0001C15.1345 17.0358 18.2744 16.8789 21.3959 16.5301C21.8977 16.4004 22.3582 16.1451 22.7339 15.7881C23.0991 15.4418 23.3636 15.0029 23.4989 14.5181C23.844 12.707 24.0118 10.8667 23.9999 9.02308C24.0258 7.17168 23.8583 5.32264 23.4999 3.50608V3.50708ZM9.60188 12.4241V5.57708L15.8619 9.00108L9.60188 12.4241Z"
              fill="#564696"
            />
          </svg>
          <span>{title}</span>
        </h3>
      </Link>
    </article>
  );
}

export default VideoCard;
