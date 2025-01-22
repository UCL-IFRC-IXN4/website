import React from "react";
import PropTypes from "prop-types";
import "./Footer.css";
import Copyright from "../Copyright/Copyright";
import FooterNav from "../FooterNav/FooterNav";

const Footer = () => (
  <div className="Footer">
    <FooterNav />
    <Copyright />
  </div>
);

export default Footer;
