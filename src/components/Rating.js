import React from "react";
import GreyStar from "../assets/img/grey_star.png";
import RedStar from "../assets/img/red_star.png";

const Rating = ({ props }) => {
  console.log(props);
  const starsArray = [1, 2, 3, 4, 5];

  return (
    <div className="accomodation_infos_host_rating_stars">
      {starsArray.map((star) =>
        props >= star ? (
          <img key={star} src={RedStar} alt="Accomodation rating" />
        ) : (
          <img key={star} src={GreyStar} alt="Accomodation rating" />
        )
      )}
    </div>
  );
};

export default Rating;
