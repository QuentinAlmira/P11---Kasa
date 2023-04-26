import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import datas from "../../data/data.json";
import Header from "../../components/Header/Header";
import Collapse from "../../components/Collapse/Collapse";
import Footer from "../../components/Footer/Footer";
import ImageSlider from "../../components/ImageSilder/ImageSlider";
import Rating from "../../components/Rating/Rating";
import Error from "../Error/Error";

export default function Accomodation() {
  const idAccomodation = useParams("id").id;
  const dataCurrentAccomodation = datas.filter(
    (data) => data.id === idAccomodation
  );
if(dataCurrentAccomodation.length == 0)
{
  return (
    <Error />
  );
}

  const title = dataCurrentAccomodation[0].title;
  const location = dataCurrentAccomodation[0].location;
  const name = dataCurrentAccomodation[0].host.name.split(" ");
  const pictureHost = dataCurrentAccomodation[0].host.picture;
  const rating = dataCurrentAccomodation[0].rating;
  const equipments = dataCurrentAccomodation[0].equipments;
  const description = dataCurrentAccomodation[0].description;
  const slides = dataCurrentAccomodation[0].pictures;

  return (
    <>
      <Header />

      <ImageSlider slides={slides} />
      <div className="accomodation_main">
        <div className="accomodation_infos">
          <div className="accomodation_infos_location">
            <h1>{title}</h1>
            <h3>{location}</h3>
            <div className="accomodation_infos_location_tags">
              {dataCurrentAccomodation[0].tags.map((tag, index) => {
                return <button key={index}>{tag}</button>;
              })}
            </div>
          </div>

          <div className="accomodation_infos_host">
            <div className="accomodation_infos_host_picture">
              <div className="hostName">
                <h3>{name[0]}</h3>
                <h3>{name[1]}</h3>
              </div>
              <img
                className="hostPicture"
                src={pictureHost}
                alt="host picture"
              />
            </div>
            <div className="accomodation_infos_host_rating">
              <Rating props={rating} />
            </div>
          </div>
        </div>
      </div>

      <div className="collapse_main">
        <div className="accomodation_collapse">
          <div className="accomodation_collapse_description">
            <Collapse title={"Description"} content={description} />
          </div>
          <div className="accomodation_collapse_equipement">
            <Collapse title={"Equipements"} content={equipments} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
