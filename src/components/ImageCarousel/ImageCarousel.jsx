import React from "react";
import "./ImageCarousel.css";

import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";

const images = [
  "/website/images/targets/persona_1.png",
  "/website/images/targets/persona_2.png",
  "/website/images/targets/persona_3.png",
];

const ImageCarousel = ({ milliseconds, buttonColor }) => {
  const [currentIndex, setCurrentIndex] = React.useState(1);

  function incrementIndex() {
    setCurrentIndex((currentIndex + 1) % images.length);
  }

  function decrementIndex() {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  }

  function updateIndex(newIndex) {
    setCurrentIndex(newIndex);
  }

  // updateIndex every 2 seconds
  React.useEffect(() => {
    const interval = setInterval(incrementIndex, milliseconds);
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="ImageCarousel">
      <div className="carousel-buttons">
        <button className="left-button" onClick={decrementIndex}>
          <KeyboardArrowLeftIcon />
        </button>
      </div>
      <div className="carousel-image">
        <img src={images[currentIndex]} alt="carousel" />
        <div className="index-indicator-container">
          <div
            className={
              currentIndex == 0 ? "index-indicator-active" : "index-indicator"
            }
            onClick={() => updateIndex(0)}
            style={{ backgroundColor: buttonColor }}
          />
          <div
            className={
              currentIndex == 1 ? "index-indicator-active" : "index-indicator"
            }
            onClick={() => {
              updateIndex(1);
            }}
            style={{ backgroundColor: buttonColor }}
          />
          <div
            className={
              currentIndex == 2 ? "index-indicator-active" : "index-indicator"
            }
            onClick={() => updateIndex(2)}
            style={{ backgroundColor: buttonColor }}
          />
        </div>
      </div>

      <div className="carousel-buttons">
        <button className="right-button" onClick={incrementIndex}>
          <KeyboardArrowRightIcon />
        </button>
      </div>
    </div>
  );
};

export default ImageCarousel;
