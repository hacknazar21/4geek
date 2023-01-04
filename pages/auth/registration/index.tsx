import React from "react";
import CommonLayout from "../../../layouts/common.layout";
import Registration from "../../../components/Registration";

function RegistrationPage(props) {
  return (
    <CommonLayout className={"registration"}>
      <Registration />
    </CommonLayout>
  );
}
export default RegistrationPage;
