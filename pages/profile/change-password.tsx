import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import ChangePassword from "../../components/profile/ChangePassword";

function ChangePasswordPage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <ChangePassword />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default ChangePasswordPage;
