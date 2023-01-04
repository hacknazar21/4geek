import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Login from "../../../components/Login";
import RestorePassword from "../../../components/RestorePassword";

function RestorePasswordPage(props) {
  return (
    <CommonLayout className={"login"}>
      <RestorePassword />
    </CommonLayout>
  );
}
export default RestorePasswordPage;
