import React from "react";
import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";

const Header = () => {
  return (
    <div className="header">
      <div className="header_component">
        <Logo />
        <Navigation />
      </div>
    </div>
  );
};

export default Header;
