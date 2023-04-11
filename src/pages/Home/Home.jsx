import React, { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/banner";
import Footer from "../../components/Footer/Footer";
import Gallery from "../../components/Gallery/Gallery";

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
