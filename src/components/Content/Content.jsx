import { useEffect, useState } from "react";
import React from "react";
import "./Content.css";
import ContentTitle from "../ContentTitle/ContentTitle";
import ContentBody from "../ContentBody/ContentBody";
import Footer from "../Footer/Footer";
import { useLocation } from "react-router-dom";

import { contentList } from "../../utils/contentTitles";

import Page404 from "../Page404/Page404";

const Content = () => {
  const location = useLocation();
  const [page, setPage] = useState(location.pathname.substring(1));

  useEffect(() => {
    setPage(location.pathname.substring(1));
  }, [location]);

  return (
    <div className="Content">
      {!contentList.map((element) => element.name).includes(page) ? (
        <div className="four-oh-four-container">
          <Page404 />
        </div>
      ) : (
        <div className="content-container">
          <ContentTitle page={page} />
          <ContentBody page={page} />
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Content;
