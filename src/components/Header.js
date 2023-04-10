import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

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
