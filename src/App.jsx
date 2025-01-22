import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Header />
      <Routes>
        <Route
          path="*"
          element={
            <Content
              page={window.location.pathname.substring(1).toLowerCase()}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
