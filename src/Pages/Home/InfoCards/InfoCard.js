import React from "react";

const InfoCard = ({ card }) => {
  const { name, description, icon, bgColor } = card;
  return (
  
      <div className={`shadow-xl card ${bgColor} card-side  px-8 py-12 text-white`}>
        <figure>
          <img src={icon} alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>{description}</p>
        </div>
      </div>
  
  );
};

export default InfoCard;
