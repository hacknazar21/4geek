import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Login from "../../../components/Login";

function LoginPage(props) {
  return (
    <CommonLayout className={"login"}>
      <Login />
    </CommonLayout>
  );
}
export default LoginPage;
