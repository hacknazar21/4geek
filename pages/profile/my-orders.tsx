import React from "react";
import ProfileLayout from "../../layouts/profile.layout";
import CommonLayout from "../../layouts/common.layout";
import MyOrders from "../../components/profile/MyOrders";

function MyOrdersPage(props) {
  return (
    <CommonLayout className={"profile"}>
      <ProfileLayout>
        <MyOrders />
      </ProfileLayout>
    </CommonLayout>
  );
}

export default MyOrdersPage;
