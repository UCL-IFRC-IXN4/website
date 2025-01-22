import Copyright from "../../src/components/Copyright/Copyright";
import "../raw-page-style/appendicies.css";

import GitHubIcon from "@mui/icons-material/GitHub";

const steps = [
  "Download dependicies in any format you like",
  "Run the data-downloader repository to obtain data from 4 different sources.",
  "Run the data-shaping repository to shape the raw data into our unique tree structure",
  "Run the data-visualiser repository to move all the processed and raw data we need into a single data-frame (2D array). This repository should return the 2D array as our final deliverable.",
];

export const appendicies_content = (
  <div className="appendicies-page">
    <div className="section-container">
      <div className="section-title">
        <span>GitHub</span>
        <a href="https://github.com/UCL-IFRC-IXN4">
          <GitHubIcon />
        </a>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Deployment Manual</span>
      </div>
      <div className="section-content">
        {steps.map((step, index) => {
          return (
            <div className="step-container" key={index}>
              <span>Step {index + 1}</span>
              <p>{step}</p>
            </div>
          );
        })}
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Intellectual Property</span>
      </div>
      <div className="section-content">
        <p>
          Below is the MIT license included in the GitHub repository of our
          source code:
        </p>
        <Copyright />
        <p>
          Permission is hereby granted, free of charge, to any person obtaining
          a copy of this software and associated documentation files (the
          "Software"), to deal in the Software without restriction, including
          without limitation the rights to use, copy, modify, merge, publish,
          distribute, sublicense, and/or sell copies of the Software, and to
          permit persons to whom the Software is furnished to do so, subject to
          the following conditions:
        </p>
        <p>
          The above copyright notice and this permission notice shall be
          included in all copies or substantial portions of the Software.
        </p>
        <p>
          THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
          EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
          MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
          IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
          CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
          TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
          SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
        </p>
      </div>
    </div>
  </div>
);
