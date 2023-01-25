import React from "react";
import HeaderFirst from "./Header/HeaderFirst";
import HeaderSecond from "./Header/HeaderSecond";
import HeaderThird from "./Header/HeaderThird";

function Header({ categories }) {
  return (
    <header className="header">
      <HeaderFirst />
      <HeaderSecond />
      <HeaderThird categories={categories} />
    </header>
  );
}

export default Header;
