import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./FooterNav.css";

const videos = [
  { name: "Introductory Video", video_id: "sZYlqhO2P2Y", provider: "YouTube" },
  { name: "Technical Video", video_id: "c91C0i22Vek", provider: "YouTube" },
  { name: "Non-Technical Video", video_id: "_6pzQcnneQg", provider: "YouTube" },
  { name: "Code Runthrough", video_id: "f5twrNhbzgg", provider: "YouTube" },
];

const FooterNav = () => (
  <div className="FooterNav">
    <div className="footer-nav-links">
      {videos.map((video) => (
        <a
          href={"https://www.youtube.com/watch?v=" + video.video_id}
          key={video.name}
        >
          {video.name}
        </a>
      ))}
      <a href="https://github.com/UCL-IFRC-IXN4">
        <GitHubIcon />
      </a>
    </div>
  </div>
);

export default FooterNav;
