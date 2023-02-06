import React from "react";
import Profile from "../../components/profile/Profile";

function ProfilePage(props) {
  return <Profile />;
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
