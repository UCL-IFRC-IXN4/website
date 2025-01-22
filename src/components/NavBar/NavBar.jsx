import React from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";

import { contentList } from "../../utils/contentTitles";

const NavBar = () => (
  <div className="NavBar">
    {contentList.map((page) => {
      if (page.name === "") {
        return;
      }
      return (
        <NavLink
          to={`/${page.name}`}
          key={page.name}
          onMouseEnter={(e) => {
            e.target.style.color = "#000000";
            e.target.style.transform = "scale(1.1)";
            e.target.style.transition = "all 0.2s";
          }}
          onMouseLeave={(e) => {
            e.target.style.color = "#ffffff";
            e.target.style.transform = "scale(1)";
            e.target.style.transition = "all 0.2s";
          }}
        >
          {page.name.replace("-", " ")}
        </NavLink>
      );
    })}
  </div>
);

export default NavBar;
