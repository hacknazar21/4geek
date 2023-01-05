import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import Bonuses from "../../components/profile/Bonuses";

function BonusesPage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <Bonuses />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default BonusesPage;
