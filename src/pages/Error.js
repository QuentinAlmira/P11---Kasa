import React from "react";
import Header from "../components/Header";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <Header />
      <div className="error">
        <h1>404</h1>
        <h2>Oups ! La page que vous demandez n'existe pas</h2>

        <Link to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <h4>Retouner sur la page d'acceuil</h4>
        </Link>
      </div>
    </>
  );
};

export default Error;
