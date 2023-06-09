import React from "react";
import clock from "../../../assets/icons/clock.svg";
import marker from "../../../assets/icons/marker.svg";
import phone from "../../../assets/icons/phone.svg";
import InfoCard from "./InfoCard";
const InfoCards = () => {
  const cardData = [
    {
      id: 1,
      name: "Opening Hours",
      description: "Open 9.00 am to 5.00pm everday",
      icon: clock,
      bgColor: "bg-primary",
    },
    {
      id: 2,
      name: "Our Locations",
      description: "Open 9.00 am to 5.00pm everday",
      icon: marker,
      bgColor: "bg-accent",
    },
    {
      id: 3,
      name: "Contact Us",
      description: "Open 9.00 am to 5.00pm everday",
      icon: phone,
      bgColor: "bg-secondary",
    },
  ];
  return (
    <div className="gap-6 lg:flex">
      {cardData.map((card) => (
        <InfoCard key={card.id} card={card}></InfoCard>
      ))}
    </div>
  );
};

export default InfoCards;
