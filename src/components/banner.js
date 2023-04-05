import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Banner = () => {
  const location = useLocation();

  const [about, setAbout] = useState(false);

  useEffect(() => {
    if (location.pathname === "/about") {
      setAbout(true);
    }
  });

  return (
    <div className={about ? "banner_about" : "banner"}>
      {!about && <h1>Chez vous, partout et ailleurs</h1>}
    </div>
  );
};

export default Banner;
