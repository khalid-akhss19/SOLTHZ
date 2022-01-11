import React from "react";
import "./style.css";

const CardCollThree = ({ img, title }) => {
  return (
    <>
      <div className="card-collection">
        <img src={img} alt="img of card" className="cardImageThree" />
        <div className="cardd">
          <h3 className="cardtitle">{title}</h3>
        </div>
      </div>
    </>
  );
};

export default CardCollThree;
