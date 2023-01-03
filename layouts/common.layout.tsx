import React from "react";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

function CommonLayout({ children, className }) {
  const classes = ["main", className];
  return (
    <div className={"wrapper wrapper-" + className}>
      <Header />
      <main className={classes.join(" ")}>{children}</main>
      <Footer />
    </div>
  );
}

export default CommonLayout;
