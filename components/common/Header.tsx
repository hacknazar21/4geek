import React from "react";
import HeaderFirst from "./Header/HeaderFirst";
import HeaderSecond from "./Header/HeaderSecond";
import HeaderThird from "./Header/HeaderThird";
import { GetServerSidePropsContext } from "next";

function Header({ message }) {
  console.log(message);
  return (
    <header className="header">
      <HeaderFirst />
      <HeaderSecond />
      <HeaderThird />
    </header>
  );
}

export default Header;
