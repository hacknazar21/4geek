import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import DeliveryAddress from "../../components/profile/DeliveryAddress";

function DeliveryAddressPage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <DeliveryAddress />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default DeliveryAddressPage;
