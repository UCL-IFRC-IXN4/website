import React from "react";
import "./ContentBody.css";

import { contentList } from "../../utils/contentTitles";

const ContentBody = ({ page }) => (
  <div className="ContentBody">
    {contentList.map((pg_cntnt) => {
      if (pg_cntnt.name === page) {
        return pg_cntnt.body;
      }
    })}
  </div>
);

export default ContentBody;
