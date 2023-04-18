import React from "react";
import './ServiceCard.css';

const ServiceCard = ({ service }) => {
  const { title, img, description } = service;
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl serviceCard">
      <img className="p-5 serviceImg" src={img} alt="NoImage" />
      <div className="card-body">
        <h2 className="card-title font-bold">{title}</h2>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
