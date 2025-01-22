import React from "react";
import "./References.css";

import Reference from "../Reference/Reference";

const sources = [
  {
    title: "IFRC GO",
    url: "https://www.ifrc.org/happening-now/emergencies/ifrc-go",
    date: "Mar. 23, 2023",
  },
  {
    title: "A Gentle Introduction to the Bootstrap Method",
    url: "https://machinelearningmastery.com/a-gentle-introduction-to-the-bootstrap-method/",
    date: "Mar. 22, 2023",
  },
  {
    title: "Introduction to Bootstrapping in Statistics with an Example",
    url: "https://statisticsbyjim.com/hypothesis-testing/bootstrapping/",
    date: "Mar. 22, 2023",
  },
  {
    title: "Binary Trees vs. Linked Lists vs. Hash Tables",
    url: "https://www.baeldung.com/cs/binary-trees-vs-linked-lists-vs-hash-tables",
    date: "Mar. 22, 2023",
  },
  {
    title:
      "algorithm - Binary Trees vs. Linked Lists vs. Hash Tables - Stack Overflow.",

    url: "https://stackoverflow.com/questions/371136/binary-trees-vs-linked-lists-vs-hash-tables",
    date: "Mar. 22, 2023",
  },
  {
    title: "N-ary Tree - Tree Data Structures",
    url: "https://www.interviewbit.com/blog/n-ary-tree/",
    date: "Mar. 22, 2023",
  },
];

const References = () => (
  <div className="References">
    {sources.map((source, index) => {
      return (
        <div key={index + 1}>
          <Reference
            num={index + 1}
            title={source.title}
            url={source.url}
            date_accessed={source.date}
          />
        </div>
      );
    })}
  </div>
);

export default References;
