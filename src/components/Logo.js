import React from "react";
import LogoKaza from "../assets/img/LogoKaza.png";

const Logo = () => {
  return (
    <div className="logo">
      {/* les ims img imortées depuis la balise img sont accesibles dans public */}
      <h1>
        <img src={LogoKaza} alt="kasa, location d'appartements" />
      </h1>
    </div>
  );
};

export default Logo;
