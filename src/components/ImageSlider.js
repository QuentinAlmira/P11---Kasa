import React, { useState } from "react";
import arrow_back from "../assets/img/arrow_back.png";
import arrow_forward from "../assets/img/arrow_forward.png";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurentIndex(newIndex);
  };

  return (
    <div>
      <div className="slider">
        <img src={slides[currentIndex]} alt="" />
        <div className="slider_arrows">
          <img
            className="slider_arrows_left"
            src={arrow_back}
            alt="previous slide"
            onClick={goToPrevious}
          />
          <img
            className="slider_arrows_right"
            src={arrow_forward}
            alt="next slide"
            onClick={goToNext}
          />
        </div>
        <div className="slider_counter">
          <h2>
            {[currentIndex + 1]}/{slides.length}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
