import React from "react";
import "./style.css";

const CardCollection = ({ img }) => {
  return (
    <>
      <div className="card-collection">
        <img src={img} alt="img of card" className="cardImage" />
      </div>
    </>
  );
};

export default CardCollection;
