import React from "react";
import Logo from "../components/Logo";
import Navigation from "../components/Navigation";

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <Navigation />
    </div>
  );
};

export default Header;
