import React from "react";
import "./Header.css";
import NavBar from "../NavBar/NavBar";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div className="Header">
    <div className="home-link">
      <NavLink to="/">Group 4</NavLink>
    </div>
    <NavBar />
  </div>
);

export default Header;
