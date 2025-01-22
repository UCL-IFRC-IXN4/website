import React from "react";
import "./Blog.css";
import ImageCarousel from "../ImageCarousel/ImageCarousel";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const weeks = [
  { num: 2, date: new Date("October 11, 2022") },
  { num: 4, date: new Date("October 25, 2022") },
  { num: 8, date: new Date("November 22, 2022") },
  { num: 17, date: new Date("February 7, 2023") },
  { num: 19, date: new Date("February 21, 2023") },
  { num: 21, date: new Date("March 7, 2023") },
  { num: 23, date: new Date("March 21, 2023") },
];

const blogContent = [
  <div className="week-body">
    <p>
      The first 2 weeks were spent focusing on gathering requirements from our
      clients, clearing up any ambiguities and doing research with regards to
      HCI. We spent time discussing the type of people who would benefit from
      our work to help us better understand exactly what our project
      deliverables should be (seen below).
    </p>
    <ImageCarousel milliseconds={2000} buttonColor={"#ed4337"} />
  </div>,
  <div className="week-body">
    <p>
      We noticed that a lot of the data sets were not in English, so we noted
      that we had to deal with translating these words during the scraping
      process.
    </p>
    <figure>
      <img src="images/blog/foreign-classification.png" />
      <figcaption>Example of non-english classifications in data.</figcaption>
    </figure>
    <p>
      We began writing code which would clean the raw data and move it into
      separate csv files locally and merge all the data into a singular data
      file.
    </p>
    <p>
      We had discussions and did some research and ultimately decided on a
      unique tree structure to store our merged data from all 4 data sources.
    </p>
    <figure>
      <img src="images/graphs/data_lake.png" />
      <figcaption>Unique tree structure to store data.</figcaption>
    </figure>
    <p>
      We are going to complete both the data cleaning code and the code which
      situates all the data from the sources into a singular data frame. We will
      continue to consistently update Justin on our progress.
    </p>
  </div>,
  <div className="week-body">
    <div className="two-column">
      <div className="left-column">
        <p>
          We completed the data scraping code and the code which merges all the
          data into a singular data frame (our unique tree structure).
        </p>
        <figure>
          <img src="images/blog/code-snippet.png" />
          <figcaption>Code snippet</figcaption>
        </figure>
      </div>
      <div className="right-column">
        <p>
          We realised we had to ensure our data sets and categories were
          compatible with our sister group (group 5). To achieve this, we had
          meetings together to ensure we had matching categories and compatible
          code.
        </p>
        <figure>
          <img src="images/blog/hazard.png" />
          <figcaption>Hazard classification used.</figcaption>
        </figure>
      </div>
    </div>
    <p>
      Once we got that out of the way. We focused on starting the design of the
      data processor module. We started by researching what type of distribution
      to represent the data in. We decided to use a normal distribution to
      represent the disaster data so we could calculate the standard deviation
      so we could calculate outliers.
    </p>
    <p>
      Take part in a meeting, with our client (Justin Ginetti) and two other UN
      data scientists, to ask for advise on our take of processing the data and
      how to analyse it to get useful statistical data.
    </p>
  </div>,
  <div className="week-body">
    <p>
      After some consideration, we decided that it would be too time consuming
      for us to learn how to implement a zero inflated negative binomial
      distribution in our analysis. Therefore, we decided to use bootstrapping
      to shape the data we have to a normal distribution.
    </p>
    <p>
      Our next step is to start researching how to make calculations based off a
      zero inflated negative binomial distribution and continue pushing onward
      with the design of the analysis module.
    </p>
  </div>,
  <div className="week-body">
    <p>
      After some consideration, we decided that it would be too time consuming
      for us to learn how to implement a zero inflated negative binomial
      distribution in our analysis. Therefore, we decided to use bootstrapping
      to shape the data we have to a normal distribution (as seen in the test
      data below).
    </p>
    <img src="images/graphs/bootstraping.png" />
    <p>
      We are making good progress in our data processing module. Our next step
      is to finish writing the data processing and visualisation code. We also
      plan to have a code run-through with Justin Ginetti in the coming two
      weeks.
    </p>
  </div>,
  <div className="week-body">
    <p>
      We had our code run-through with Justin (mostly discussing our data
      analysis code). In these two weeks, we have neared completion of our data
      analysis code and have begun drafting our data visualisation code.
    </p>
    <p>
      We will complete the data analysis and data visualisation code in the
      final weeks.
    </p>
  </div>,
  <div className="week-body">
    <p>
      In the final two weeks it was crunch time, we completed our analysis code
      and held a code runthrough session with our client on Teams.
    </p>
    <p>
      We will complete the data analysis and data visualisation code in the
      final weeks.
    </p>
    <p>
      We then began and completed data visualisation which moved the data we had
      into a singular data frame (2D array). This is the final deliverable in
      our project!
    </p>
    <figure>
      <img src="images/blog/final.png" />
      <figcaption>
        UCL-IXN-IFRC-23-4: Omung Bhasin, Dylan Penney, Hogan Ma, Ryan Lock (as
        pictured).
      </figcaption>
    </figure>
  </div>,
];

const Blog = () => {
  const [currentIndex, setIndex] = React.useState(0);

  function incrementWeek() {
    setIndex(currentIndex + 1);
  }

  function decrementWeek() {
    setIndex(currentIndex - 1);
  }

  return (
    <div className="Blog">
      <div className="monthly-videos">
        <span>Montly Updates</span>
        <div className="video-container">
          <a href="https://www.youtube.com/watch?v=w2mWmLpLb0A">October</a>
          <a href="https://www.youtube.com/watch?v=pB1gE5FMQSE">November</a>
          <a href="https://www.youtube.com/watch?v=Ba7w7h23YlE">February</a>
          <a href="https://www.youtube.com/watch?v=xK6pWBNqqmE">March</a>
        </div>
      </div>
      <div className="blog-dropdown-container">
        <select
          onChange={(e) => {
            setIndex(Number(e.target.value));
            console.log(e.target.value);
          }}
          value={currentIndex}
        >
          {weeks.map((week, index) => {
            return (
              <option value={index}>
                Week {week.num} | {week.date.toDateString()}
              </option>
            );
          })}
        </select>
      </div>
      <div className="week-content">
        <div className="week-header">
          <span className="week-number">Week {weeks[currentIndex].num}</span>
          <span className="week-date">
            {weeks[currentIndex].date.toDateString()}
          </span>{" "}
        </div>
        {blogContent[currentIndex]}
        <table>
          <caption>
            MoSCoW List as of {weeks[currentIndex].date.toDateString()}
          </caption>
          <tr>
            <th>Requirement</th>
            <th>MoSCoW Ranking</th>
            <th>Status</th>
          </tr>
          <tr>
            <td>
              Code which extracts and scrapes data from 4 sources: EM-DAT,
              Desinventar, IDMC's GIDD and IFRC.
            </td>
            <td>Must Have</td>
            <td>{currentIndex >= 3 ? "Completed" : "Not Completed"}</td>
          </tr>
          <tr>
            <td>
              Code which transforms raw data into an organised dataset
              consisting of custom binary search trees.
            </td>
            <td>Must Have</td>

            <td>{currentIndex >= 3 ? "Completed" : "Not Completed"}</td>
          </tr>
          <tr>
            <td>
              Code which analyses transformed data and computed metadata (moving
              averages, percentiles etc).
            </td>
            <td>Must Have</td>
            <td>{currentIndex >= 4 ? "Completed" : "Not Completed"}</td>
          </tr>
          <tr>
            <td>
              Code which consolidates data and metadata into a singular data
              structure.
            </td>
            <td>Must Have</td>
            <td>
              {currentIndex == weeks.length ? "Completed" : "Not Completed"}
            </td>
          </tr>
          <tr>
            <td>
              Rerun feature which allows the data to be updated every 6 months.
            </td>
            <td>Should Have</td>
            <td>
              {currentIndex == weeks.length ? "Completed" : "Not Completed"}
            </td>
          </tr>
        </table>
      </div>
      <div className="week-nav-buttons">
        {currentIndex > 0 && (
          <button onClick={() => decrementWeek()}>
            <KeyboardArrowLeftIcon />
            Previous Week
          </button>
        )}
        {currentIndex < weeks.length - 1 && (
          <button onClick={() => incrementWeek()}>
            Next Week <KeyboardArrowRightIcon />
          </button>
        )}
      </div>
    </div>
  );
};

export default Blog;
