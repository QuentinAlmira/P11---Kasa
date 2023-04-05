import data from "../data/data.json";
import React from "react";
import Cards from "./Cards";

const Realestate = () => {
  return (
    <section className="home__products">
      {data.map((datas) => {
        return (
          <Cards
            key={datas.id}
            id={datas.id}
            title={datas.title}
            cover={datas.cover}
          />
        );
      })}
    </section>
  );
};

export default Realestate;
