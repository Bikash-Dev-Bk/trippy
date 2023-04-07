import React from "react";

const PlaceCard = ({ place }) => {
  const { name, price, img, description } = place;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
      <img src={img} alt="Shoes" />
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p className="font-semibold text-xl text-yellow-500">{price}</p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default PlaceCard;
