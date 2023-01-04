import React from "react";
import CommonLayout from "../layouts/common.layout";
import About from "../components/about/About";

function AboutPage(props) {
  return (
    <CommonLayout className={"about"}>
      <About />
    </CommonLayout>
  );
}

export default AboutPage;
