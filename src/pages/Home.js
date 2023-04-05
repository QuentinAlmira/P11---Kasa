import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Banner from "../components/banner";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner />
      <Gallery />
      <Footer />
    </div>
  );
};

export default Home;
