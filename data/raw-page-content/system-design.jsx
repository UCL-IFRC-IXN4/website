import "../raw-page-style/system-design.css";

export const system_design_content = (
  <div className="system-design-page">
    <div className="section-container">
      <div className="section-title">
        <span>System Architecture</span>
      </div>
      <div className="section-content">
        <ul>
          <li>Step 1: Data Extraction</li>
          <li>Step 2: Data Cleaning</li>
          <li>Step 3: Data Shaping</li>
          <li>Step 4: Data Analysis</li>
          <li>Step 5: Data Visualisation</li>
        </ul>
        <img src="/website/images/graphs/sys_arch.png"></img>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Data Warehouse</span>
      </div>
      <div className="section-content">
        <table>
          <caption>*Column contains fake data for reporting purposes</caption>
          <tr>
            <th>ISO</th>
            <th>Month</th>
            <th>Hazard Type</th>
            <th>Affected*</th>
            <th>Deaths*</th>
            <th>Displaced*</th>
          </tr>

          <tr>
            <td>ATA</td>
            <td>01/1945</td>
            <td>Accident</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
          </tr>

          <tr>
            <td>CHN</td>
            <td>07/2004</td>
            <td>Storm</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
          </tr>

          <tr>
            <td>NZL</td>
            <td>09/1993</td>
            <td>Flood</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
          </tr>

          <tr>
            <td>ZMB</td>
            <td>12/1985</td>
            <td>Tsunami</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
          </tr>

          <tr>
            <td>CAN</td>
            <td>01/2023</td>
            <td>Hail</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
            <td>{Math.floor(Math.random() * 100000).toLocaleString()}</td>
          </tr>
        </table>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Data Lake</span>
      </div>
      <div className="section-content">
        <img src="/website/images/graphs/data_lake.png" />
      </div>
    </div>
  </div>
);
