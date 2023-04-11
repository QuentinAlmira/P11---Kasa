import React from "react";
import LogoKaza from "../../assets/img/LogoKaza.png";

const Logo = () => {
  return (
    <div className="logo">
      {/* les ims img imortées depuis la balise img sont accesibles dans public */}
      <div className="logo_img">
        <img src={LogoKaza} alt="kasa, location d'appartements" />
      </div>
    </div>
  );
};

export default Logo;
