import React from "react";
import "./Reference.css";

const Reference = ({ num, title, url, date_accessed }) => (
  <span className="Reference">
    [{num}] "{title}" <a href={url}>{url}</a> (accessed {date_accessed})
  </span>
);

export default Reference;
