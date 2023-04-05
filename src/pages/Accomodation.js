import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../data/data.json";
import Header from "../components/Header";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import ImageSlider from "../components/ImageSlider";

export default function Accomodation() {
  const idAccomodation = useParams("id").id;
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  );

  useEffect(() => {
    const dataCurrentAccomodation = datas.filter(
      (data) => data.id === idAccomodation
    );
  }, [idAccomodation]);

  const title = dataCurrentAccomodation[0].title;
  const location = dataCurrentAccomodation[0].location;
  const name = dataCurrentAccomodation[0].host.name.split(" ");
  const pictureHost = dataCurrentAccomodation[0].host.picture.split(" ");
  const equipments = dataCurrentAccomodation[0].equipments;
  const description = dataCurrentAccomodation[0].description;
  const slides = dataCurrentAccomodation[0].pictures;
  return (
    <>
      <Header />

      <ImageSlider slides={slides} />

      <div className="accomodation_infos">
        <div className="accomodation_infos_location">
          <h1>{title}</h1>
          <h2>{location}</h2>
          <div className="accomodation_infos_location_tags">
            {dataCurrentAccomodation[0].tags.map((tag, index) => {
              return <button key={index}>{tag}</button>;
            })}
          </div>
        </div>

        <div className="accomodation_infos_host">
          <img className="hostPicture" src={pictureHost} alt="host picture" />
          <h2>{name}</h2>
        </div>
      </div>

      <div className="accomodation_collapse">
        <div className="accomodation_collapse_description">
          <Collapse title={"Description"} content={description} />
        </div>
        <div className="accomodation_collapse_equipement">
          <Collapse title={"Equipements"} content={description} />
        </div>
      </div>

      <Footer />
    </>
  );
}