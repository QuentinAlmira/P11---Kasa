import React, { useState } from "react";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurentIndex] = useState(0);
  return (
    <div>
      <div
        className="slider
    "
      >
        <img src={slides[currentIndex]} alt="" />
      </div>
    </div>
  );
};

export default ImageSlider;
