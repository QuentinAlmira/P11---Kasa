import React from "react";
import { Link } from "react-router-dom";

const Cards = ({ cover, title, id }) => {
  return (
    <div className="thumb">
      <Link to={`/accomodation/${id}`}>
        <img src={cover} alt={title} className="thumb__img" />
        <div className="thumb__overlay"></div>
        <h2 className="thumb__title">{title}</h2>
      </Link>
    </div>
  );
};

export default Cards;
