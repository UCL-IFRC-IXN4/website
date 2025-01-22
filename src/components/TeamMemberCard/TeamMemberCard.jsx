import React from "react";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import "./TeamMemberCard.css";

let show = false;

const TeamMemberCard = ({ imgURL, name, role, email, linkedin, github }) => (
  <div
    className="TeamMemberCard"
    onMouseEnter={(e) => {
      show = true;
    }}
    onMouseLeave={(e) => {
      show = false;
    }}
  >
    <div className="img-container">
      <img src={"/website/images/people/" + imgURL + ".jpg"} alt={name} />
    </div>
    <div className="role-container">
      <span>
        <b>{name}</b>
      </span>
    </div>
    <div>
      <span>{role}</span>
    </div>

    <div className="socials">
      {email && (
        <a href={`mailto:${email}`} className="social-link">
          <EmailOutlinedIcon />
        </a>
      )}
      {linkedin && (
        <a
          href={"https://www.linkedin.com/in/" + linkedin + "/"}
          className="social-link"
        >
          <LinkedInIcon />
        </a>
      )}
      {github && (
        <a href={"https://github.com/" + github} className="social-link">
          <GitHubIcon />
        </a>
      )}
    </div>
  </div>
);

export default TeamMemberCard;
