import "../raw-page-style/requirements.css";

import "react-slideshow-image/dist/styles.css";
import ImageCarousel from "../../src/components/ImageCarousel/ImageCarousel";

export const req_content = (
  <div className="requirement-page">
    <div className="section-container">
      <div className="section-title">
        <span>Project Background</span>
      </div>

      <div className="section-content">
        <p>
          The IFRC is currently the largest humanitarian network in the world.
          Their influence and helping hand stretch across 192 countries where
          they support local Red Cross and Red Crescent activities. They are
          also made up of more than 10 million volunteers from around the globe.
        </p>
        <p>
          Our project is oriented around providing centralised source of data
          for users to obtain useful information regarding disasters occurring
          worldwide.
        </p>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Project Aims</span>
      </div>
      <div className="section-content">
        <p>
          Our project goal is to impact policy making decisions at IFRC with the
          representation of real time data by merging data regarding disasters
          from multiple data sources, processing this raw data into useful data,
          calculating key metics and consolidate everything into a singular
          searchable database.
        </p>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Client Needs</span>
      </div>

      <div className="section-content">
        <p>
          We held weekly meetings with the IFRC with the first few meetings’
          having the sole purpose of discussing the project requirements, what
          the clients expected us to accomplish and the general timeline of the
          project. They provided us with the projects key requirements and a few
          possible ways to go about completing them. Following meetings were
          used to update the IFRC on our progress and clarify further
          ambiguities.
        </p>
        <p>We asked questions such as:</p>
        <ul>
          <li>
            <div className="list-item-container">
              <span>
                "What is the end goal for this project and what is it being
                developed for?"
              </span>
              <p>
                Provide a centralised source of information regarding disaster
                data and to ultimately impact policy making decisions at the
                IFRC.
              </p>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span>
                "Are there any requirements for the algorithmic processing of
                the data?"
              </span>
              <p>
                Time complexity is of minimal concern as code will only be run
                every 6 months. Space complexity shouldn't be too high.
              </p>
            </div>
          </li>
          <li>
            <div className="list-item-container">
              <span>
                "Will the people we present to have a technical background?"
              </span>
              <p>
                Only some of them will, assume that a majority of them have no
                technical background.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Target Users</span>
      </div>
      <div className="section-content">
        <ImageCarousel milliseconds={5000} buttonColor={"white"} />
      </div>
    </div>
  </div>
);
