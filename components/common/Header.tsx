import React from "react";
import HeaderFirst from "./Header/HeaderFirst";
import HeaderSecond from "./Header/HeaderSecond";
import HeaderThird from "./Header/HeaderThird";

function Header(props) {
  return (
    <header className="header">
      <HeaderFirst />
      <HeaderSecond />
      <HeaderThird />
    </header>
  );
}

export default Header;
