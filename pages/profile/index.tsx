import React from "react";

function ProfilePage(props) {
  return <div></div>;
}
export async function getServerSideProps(ctx) {
  let isMobileView = (
    ctx.req ? ctx.req.headers["user-agent"] : navigator.userAgent
  ).match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i);
  if (!isMobileView)
    return {
      notFound: true,
    };
  else {
    return { props: {} };
  }
}
export default ProfilePage;
