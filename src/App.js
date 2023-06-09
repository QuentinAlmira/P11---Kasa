import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Accomodation from "./pages/Accomodation/Accomodation";
import Error from "./pages/Error/Error";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:id" element={<Accomodation />} />
        {/* PATH * FONCTIONNE SI L URL NE CORRESPONG A RIEN DE CONNU */}
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
