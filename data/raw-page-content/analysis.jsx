import "../raw-page-style/analysis.css";

export const analysis_content = (
  <div className="analysis-page">
    <div className="section-container">
      <div className="section-title">
        <span>Data Bootstaping</span>
      </div>
      <div className="section-content">
        <p>
          The Bootstrapper class was designed to take in data, and then return
          that same dataset but without outliers, and it also returns the
          confidence interval. It then calculates means from random subsamples
          of the dataset, and then stores these in a list of random means. Our
          class then calculates the confidence interval of the data; for which a
          frequency table is created for the random means, we then use this to
          create upper and lower bounds. The lower confidence interval is
          calculated as the first random mean where the cumulative total of the
          sorted array is higher than the lower bound, the inverse is then
          applied for the higher confidence interval. Lastly, our program
          removes the outliers by looping through the original dataset and
          returning the data that lies within the confidence intervals.
        </p>
        <img src="images/graphs/bootstraping.png" />
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Source Analysis</span>
      </div>
      <div className="section-content">
        <p>
          The SourceAnalyser class is designed to take a list of sources as
          input, and return a file where the source output is analysed. Firstly,
          the class adds the correctly FileReaders for the inputted sources into
          an array of readers and reads in the data from the necessary sources.
          The class then loops through each year's data for each country and
          calculates the total number of records for each country, and the total
          number of records overall.
        </p>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Data Analysis</span>
      </div>
      <div className="section-content">
        <p>
          The DataAnalyser class is for analysing data after filters have been
          applied during the data analysis. The class starts by splitting the
          2-Dimensional array into 3, 1-Dimensional arrays (deaths, affected and
          displacements). The class then uses the Bootstrapper class to remove
          outliers if calculations are to be done without outliers. Next, the
          mean and standard deviations are calculated for each of the three
          sub-datasets using traditional methods, which are then returned to the
          main program.
        </p>
        <p>The class performs 8 different analyses</p>
        <ul className="analysis-list">
          <li>By Country</li>
          <li>By Country-By Month</li>
          <li>By Country-By Year</li>
          <li>By Country-By Hazard Class</li>
          <li>By Country-By Year-By Month</li>
          <li>By Country-By Month-By Hazard Class</li>
          <li>By Country-By Year-By Hazard Class</li>
        </ul>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Output</span>
      </div>
      <div className="section-content">
        <p>
          The program then writes the output to a unique results file with a
          unique naming convention <code>mathemical_analysis_pcp[filter]*</code>
          , where * represents that the contents of <code>[]</code> can be
          repeated numerous <code>(&gt;= 0)</code> times. Next the program looks
          at the data when sorted by country per month per profile and
          calculates the percentages of each given filter, for example, 25% of
          German Metrological and Hydrological natural disasters occur in
          January. The same is then completed for data sorted by country by
          month by type.
        </p>
      </div>
    </div>
  </div>
);
