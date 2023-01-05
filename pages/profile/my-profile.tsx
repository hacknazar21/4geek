import React from "react";
import CommonLayout from "../../layouts/common.layout";
import ProfileLayout from "../../layouts/profile.layout";
import MyProfile from "../../components/profile/MyProfile";

function MyProfilePage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <MyProfile />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default MyProfilePage;
