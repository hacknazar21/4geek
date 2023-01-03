import React from "react";
import FooterFirst from "./Footer/FooterFirst";
import FooterSecond from "./Footer/FooterSecond";
import MobileNavigation from "./MobileNavigation";

function Footer(props) {
  return (
    <footer className="footer">
      <FooterFirst />
      <FooterSecond />
      <MobileNavigation />
    </footer>
  );
}

export default Footer;
