import References from "../../src/components/References/References";
import "../raw-page-style/research.css";

export const research_content = (
  <div className="research-page">
    <div className="section-container">
      <div className="section-title">
        <span>Comparison to the IFRC GO platform</span>
      </div>
      <div className="section-content">
        <p>
          Our project aims to be the backbone of an online resource very similar
          to IFRC GO. Our project requirements only include the backend
          (obtaining, merging, and analysing the data) and no front end (the
          actual display of the data on some sort of website).
        </p>
        <p>
          The IFRC GO platform's goal is to make disaster data readily
          accessible to IFRC responders worldwide to make more informed
          decisions[1]. The information available on the platform is reliant on
          data provided by their humanitarian partners and on-site volunteers.
          It displays all this data in a in a clear and easy to read manner for
          the general public to utilise[1].
        </p>
        <p>
          The main features of the IFRC GO platform, which we are trying to
          mimic and provide, is their ability to coherently present important
          real time statistical data from around the world in a clear and
          concise manner. However, instead of being dependant on reported data
          from on-site volunteers, the data we are processing are from multiple
          online sources.
        </p>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>Database Structure and Distribution</span>
      </div>
      <div className="section-content">
        <p>
          There were multiple solutions to approaches to analysing and
          processing the raw data to obtain more useful information. But first
          thing we had to decide as a team was what distribution was going to
          represent our data. We were going to go with a normal distribution
          approach at first, but after consulting a team of data scientists from
          the UN, we were advised to implement a different type of distribution
          as disasters are typically not normally distributed. After doing some
          research[2], [3], we opted to use bootstrapping to get the data shaped
          as close as possible to a normal distribution. We were thinking about
          implementing other types of distributions, like a zero-inflated
          negative binomial distribution model, but this was outside the scope
          of our prior statistical background.
        </p>
        <p>
          We have several data structures to implement to store our merged data.
          Possible data structures consist of linked lists, hash tables, trees
          etc. A linked list would provide for convenient addition and removal
          of elements and can be easily implemented[4]. However, accessing
          information in a linked list can be very time consuming as nodes can
          only be accessed sequentially[4]. A hash table is able to very
          efficiently access information with a constant time complexity[4],
          [5]. However, hash tables have a chance of creating duplicate keys,
          especially as we deal with larger amounts of data[4]. Our final data
          structure to take into consideration is a tree. A tree would be able
          to showcase the relationship between the different information we
          have[4]. An n-ary tree would also require less space as no extra links
          between nodes are required[6]. The downside to a tree is that
          iterating through a tree would be more complex to implement compared
          to linked lists and hash tables[4].
        </p>
      </div>
    </div>
    <div className="section-container">
      <div className="section-title">
        <span>References</span>
      </div>
      <div className="section-content">
        <References />
      </div>
    </div>
  </div>
);
