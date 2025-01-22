import GroupsIcon from "@mui/icons-material/Groups";
import TocIcon from "@mui/icons-material/Toc";
import TroubleshootIcon from "@mui/icons-material/Troubleshoot";
import ConstructionIcon from "@mui/icons-material/Construction";

import "../raw-page-style/evaluation.css";

export const eval_content = (
  <div className="evaluation-page">
    <div>
      <div className="section-container">
        <div className="section-title">
          <GroupsIcon />
          <span>Contribution Distribution Table</span>
        </div>
        <div className="section-content">
          <table>
            <caption>
              *Website was revampted in 2024 with updated frameworks to ensure
              compatibility with other portofilios (linkedIn thumbnail, etc).
            </caption>
            <tr>
              <th>Work Packages</th>
              <th>Dylan Penney</th>
              <th>Omung Bhasin</th>
              <th>Hogan Ma</th>
              <th>Ryan Lock</th>
            </tr>
            <tr>
              <td>Client Liason</td>
              <td>100%</td>
              <td>0%</td>
              <td>0%</td>
              <td>0%</td>
            </tr>
            <tr>
              <td>Requirement Analysis</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Research and Development</td>
              <td>15%</td>
              <td>15%</td>
              <td>35%</td>
              <td>35%</td>
            </tr>
            <tr>
              <td>Coding</td>
              <td>70%</td>
              <td>10%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Testing</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Report Website (2022/2023)*</td>
              <td>-</td>
              <td>-</td>
              <td>50%</td>
              <td>50%</td>
            </tr>
            <tr>
              <td>Video Editing</td>
              <td>10%</td>
              <td>70%</td>
              <td>10%</td>
              <td>10%</td>
            </tr>
            <tr>
              <td>Overall Contribution</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
              <td>25%</td>
            </tr>
            <tr>
              <td>Main Roles</td>
              <td>Team Lead, Client Liason, Lead Developer</td>
              <td>
                Data Scientist, Back-End Software Engineer, Video Edit Lead
              </td>
              <td>Data Scientist, Full-Stack Software Engineer</td>
              <td>Data Scientist, Documentation Lead, Report Lead</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <TroubleshootIcon />
          <span>Critical Evaluation of the Project</span>
        </div>
        <div className="section-content">
          <h2>Functionality</h2>
          <p>
            The tool scrapes raw data from four data sets: EM-DAT, Desinventar,
            IDMC's GIDD and IFRC. Then produces a merged dataset complete with
            key metrics and metadata, which provide invaluable insights into
            disaster relied for the International Federation of Red Cross and
            Red Crescented Societies.
          </p>
          <h2>Efficiency and Maintainability</h2>
          <p>
            Our data pipeline does not require complex calculations, hence our
            solution upholds a high standard of efficiency. Although we do not
            expect any changes to be made, the code is highly readable and
            customisable.
          </p>
          <h2>Compatibility</h2>
          <p>
            Code is compatible across a range of operating systems and devices
            (provided sufficent resources, an internet connection and a Python
            interpreter).
          </p>
          <h2>Project Management</h2>
          <p>
            There were no issues with project management due to the teams
            synergy and cohesivness. Roles were assigned and delegated by team
            lead Dylan Penney after a thorough analysis of each team members
            skills and experience.
          </p>
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <TocIcon />
          <span>MosCoW List</span>
        </div>
        <div className="section-content">
          <table>
            <caption>
              *Data was extracterd from 4 sources: EM-DAT, Desinventar, IDMC's
              GIDD and IFRC.
            </caption>
            <tr>
              <th>Requirement</th>
              <th>MoSCoW Rating</th>
              <th>Status</th>
            </tr>
            <tr>
              <td>Code which extracts and scrapes data.*</td>
              <td>Must Have</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>
                Code which transforms raw data into an organised dataset
                consisting of custom binary search trees.
              </td>
              <td>Must Have</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>
                Code which analyses transformed data and computed metadata
                (moving averages, percentiles etc).
              </td>
              <td>Must Have</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>
                Code which consolidates data and metadata into a singular data
                structure.
              </td>
              <td>Must Have</td>
              <td>Completed</td>
            </tr>
            <tr>
              <td>
                Rerun feature which allows the data to be updated every 6
                months.
              </td>
              <td>Should Have</td>
              <td>Completed</td>
            </tr>
          </table>
        </div>
      </div>
      <div className="section-container">
        <div className="section-title">
          <ConstructionIcon />
          <span>Future Improvements</span>
        </div>
        <div className="section-content">
          <ol>
            <li>Implement a webapp for greater user experience.</li>
            <li>
              Analysis for varying Admin levels to provide more concise results.
            </li>
            <li>Add more disaster classifications.</li>
            <li>
              Assign 'trust levels' to each data source to allow the user to
              weight calculations.
            </li>
          </ol>
        </div>
      </div>
    </div>
  </div>
);
