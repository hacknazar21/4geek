import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import Mailing from "../../components/profile/Mailing";

function MailingPage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <Mailing />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default MailingPage;
