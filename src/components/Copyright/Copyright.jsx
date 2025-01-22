import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import "./Copyright.css";

const Copyright = () => (
  <div className="Copyright">
    <div className="copyright-content">
      <span>&#169; {new Date().getFullYear()} UCL-IXN-IFRC-23-4</span>
    </div>
  </div>
);

export default Copyright;
