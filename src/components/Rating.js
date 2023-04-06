import React from "react";
import GreyStar from "../assets/img/grey_star.png";
import RedStar from "../assets/img/red_star.png";

const Rating = ({ props }) => {
  const starsArray = [1, 2, 3, 4, 5];

  console.log({ props });
  starsArray.map((star) => console.log(star));

  return (
    <div className="accomodation_infos_host_rating_stars">
      {starsArray.map((star) =>
        star <= props ? (
          <img key={star} src={RedStar} alt="Accomodation rating" />
        ) : (
          <img key={star} src={GreyStar} alt="Accomodation rating" />
        )
      )}
    </div>
  );
};

export default Rating;
