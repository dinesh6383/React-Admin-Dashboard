import React from "react";
import "./Footer.css";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="footer-box">
      <p>© {year} All rights reserved by Flappy.com</p>
    </div>
  );
};

export default Footer;
