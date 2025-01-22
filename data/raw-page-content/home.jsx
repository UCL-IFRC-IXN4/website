import DescriptionOutlinedIcon from "@mui/icons-material/DescriptionOutlined";
import TeamMemberCard from "../../src/components/TeamMemberCard/TeamMemberCard";

import "../raw-page-style/home.css";

export const home_content = (
  <div className="home-page">
    <div>
      <div className="section-container">
        <div className="section-title">
          <DescriptionOutlinedIcon />
          <span>Abstract</span>
        </div>
        <p>
          The International Federation of Red Cross and Red Crescent Societies
          (IFRC) is currently the largest humanitarian network in the world.
          Their influence and helping hand stretch across 192 countries where
          they support local Red Cross and Red Crescent activities. They are
          also made up of more than 10 million global volunteers.
        </p>
        <p>
          The IFRC does not have an official centralised source of information
          which presents accurate seasonal data regarding disasters around the
          world. In this project, UCL Group 4 will work alongside the IFRC
          (communicating with Justin Ginetti) to design a system which gathers
          data from multiple sources, have them processed, and moved to a
          singular data frame.
        </p>
        <p>
          The project objective is to provide a centralised source of
          information for the public where they have access to useful data which
          can determine resource allocation at the IFRC.
        </p>
      </div>
      <div className="section-container">
        <div className="section-title">
          <span>Technical Video</span>
        </div>
        <div className="section-content">
          <iframe
            width="1280"
            height="720"
            src="https://www.youtube.com/embed/c91C0i22Vek"
            title="Literature Review"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <span>Meet the Development Team</span>
        </div>
        <div className="section-content">
          <TeamMemberCard
            imgURL="dp"
            name="Dylan Penney"
            role="Team Lead"
            email="penneydylan@icloud.com"
            linkedin="dylanpenney"
            github="DylanPenney"
          />
          <TeamMemberCard
            imgURL="hm"
            name="Hogan Ma"
            role="Team Member"
            email="hoganj.ma@gmail.com"
            linkedin="jun-hao-hogan-ma-0482b7213"
            github="htreem"
          />
          <TeamMemberCard
            imgURL="ob"
            name="Omung Bhasin"
            role="Team Member"
            email="omung789@hotmail.com"
            linkedin="omung-bhasin-770623261"
            github="omung789"
          />
          <TeamMemberCard
            imgURL="rl"
            name="Ryan Lock"
            role="Team Member"
            email="ryanlockqr@gmail.com"
            linkedin="ryan-qian-ryu-lock-92871b225"
            github="ryanlockqr"
          />
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <span>Gantt Chart (September 2022 - March 2023)</span>
        </div>
        <div className="section-content">
          <img
            src="/website/images/graphs/gantt_chart.png"
            alt="Gantt Chart"
            width={"1200px"}
            height={"500px"}
            className="gantt-chart"
          />
        </div>
      </div>
    </div>
  </div>
);
