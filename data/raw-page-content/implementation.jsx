import AutoGraphOutlinedIcon from "@mui/icons-material/AutoGraphOutlined";
import AltRouteOutlinedIcon from "@mui/icons-material/AltRouteOutlined";
import CloudDownloadOutlinedIcon from "@mui/icons-material/CloudDownloadOutlined";
import LayersOutlinedIcon from "@mui/icons-material/LayersOutlined";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import "../raw-page-style/implementation.css";

export const implementation_content = (
  <div className="implementation-page">
    <div className="section-container">
      <div className="section-title">
        <LayersOutlinedIcon />
        <span>Teck Stack</span>
      </div>
      <div className="section-content">
        <div className="tech-stack-icons-container">
          <img src="/website/images/logos/python.png" />
          <img src="/website/images/logos/selenium.png" />
          <img src="/website/images/logos/pandas.png" />
        </div>
      </div>
    </div>

    <div className="section-container">
      <div className="section-title">
        <CloudDownloadOutlinedIcon />
        <span>Extract</span>
      </div>
      <div className="section-content">
        <p>
          To scrape DesInventar data, we found a way to download specific
          columns via the manipulation of URL links for data download. This was
          done by reading the files in xml format. By looking at the contents in
          the xml tags, the data columns to be downloaded (e.g., deaths,
          affected, relocated etc.) can be specified in the URL. This is more
          economical in terms of space and time as we did not need the entire
          DesInventar database to perform our analysis; only a few columns were
          needed per country.
        </p>
        <p>
          After identifying the URL, the requests library will automatically
          download and save the file as a .csv file in a specified directory.
          Basic cleaning and translation is then done for the downloaded
          DesInventar data: unnecessary columns are removed , 3 columns (Date,
          Month, Year) are merged into a single date column (DD/MM/YYYY), and
          countries with data that are not in English are translated using a
          translation dictionary.
        </p>
        <p>
          To scrape all the data from the IDMC, EMDAT and IFRC sources, the
          selenium module was used as it allowed us to do things such as find
          buttons/fields, press keys and click buttons on webpages, log into
          websites (which was needed for EMDAT), scroll up and down the page and
          type text where needed.
        </p>
        <p>
          IFRC was the easiest as all we had to do was press the download
          button, whilst EMDAT required us to log in and navigate through 3 web
          pages in total. IDMC, posed the most difficult challenge; over 100
          boxes had to be ticked to ensure when the data was downloaded, it
          contained all the data possible.
        </p>
        <p>
          We also made it so that when the code is run, it deletes the old file
          (if present) before downloading it again to prevent duplicates and to
          make sure all the data sets were up to date.
        </p>
      </div>
    </div>

    <div className="section-container">
      <div className="section-title">
        <AltRouteOutlinedIcon />
        <span>Transform</span>
      </div>
      <div className="section-content">
        <p>
          We used ISO-3 country codes as it allows for a consistent way for
          countries to be named, as different databases may have different names
          for the same country - Burma vs Myanmar for example.
        </p>
        <p>
          We also needed to display the exact month the events happened, the
          type of natural disaster and the number of people killed and affected
          by the disaster. We stored all this initial raw data in a tree in the
          form of nodes. Each node contains info about itself in “name” and
          initialised with an empty set of its child nodes i.e., the country
          node is initialised with its name and a set of month nodes.
        </p>
      </div>
    </div>

    <div className="section-container">
      <div className="section-title">
        <AutoGraphOutlinedIcon />
        <span>Analyse</span>
      </div>
      <div className="section-content">
        <p>
          We first bootstrap the data to manipulate the data to be as close to a
          normal distribution as possible.
        </p>
        <p>
          To analyse the data, we first deal with null values and outliers. To
          deal with null values, we check the other databases for the same
          month, and if data exists for that month, then we can use those to
          compute an average, otherwise we simply leave it as null. We then
          define outliers as being &plusmn;3 standard deviations away from the
          mean.
        </p>
        <p>
          Once we have that, we will then begin making new data from the data we
          have in the form of moving averages to help predict the likelihood or
          future storms and percentages to make the displayed data more readable
          to the average viewer.
        </p>
      </div>
    </div>

    <div className="section-container">
      <div className="section-title">
        <PersonalVideoIcon />
        <span>Code Overview</span>
      </div>
      <div className="section-content">
        <iframe
          width="1189"
          height="669"
          src="https://www.youtube.com/embed/f5twrNhbzgg"
          title="Technical Video"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen=""
        ></iframe>
      </div>
    </div>

    <div className="section-container" />
  </div>
);
