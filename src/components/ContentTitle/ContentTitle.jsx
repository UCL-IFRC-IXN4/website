import React from "react";
import "./ContentTitle.css";

import QueryStatsOutlinedIcon from "@mui/icons-material/QueryStatsOutlined";
import OpenInNewOutlinedIcon from "@mui/icons-material/OpenInNewOutlined";

const ContentTitle = ({ page }) => (
  <div className="ContentTitle">
    {page && <span>{page.replace("-", " ")}</span>}
    {!page && (
      <div className="home-page-container">
        <div className="home-page-text-container">
          <span>UCL x IFRC</span>
          <span>Monthly Risk Analysis of Seasonal Hazards</span>
          <button
            className="download-button"
            onClick={() => window.open("https://github.com/UCL-IFRC-IXN4")}
          >
            <span>Source Code</span>
            <OpenInNewOutlinedIcon />
          </button>
        </div>
        <div className="mat-icon-container">
          <QueryStatsOutlinedIcon style={{ width: "600px", height: "480px" }} />
        </div>
      </div>
    )}
  </div>
);

export default ContentTitle;
