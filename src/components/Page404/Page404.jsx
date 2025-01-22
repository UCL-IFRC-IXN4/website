import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import DoNotTouchIcon from "@mui/icons-material/DoNotTouch";

import "./Page404.css";

const Page404 = () => {
  return (
    <div className="Page404">
      <div className="mui-icon">
        <DoNotTouchIcon />
      </div>
      <h2>Oops! The page you are looking for does not exist...</h2>
      <p>Error 404 - Page Not Found</p>
      <Link to="/">
        <HomeIcon />
        <span>Go Back Home</span>
      </Link>
    </div>
  );
};

export default Page404;
