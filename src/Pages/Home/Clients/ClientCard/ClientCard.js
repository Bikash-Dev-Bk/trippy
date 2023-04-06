import React from "react";
import "./ClientCard.css";

const ClientCard = ({ review }) => {
  const { name, logo, img, customer_review } = review;

  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <img src={logo} className="reviewImg ml-5 mt-5" alt="Shoes" />
      <div className="card-body">
        <p className="text-justify">{customer_review}</p>
        <div className="flex items-center">
            <img src={img} className="reviewerImg" alt="" />
          <h2 className="text-xl font-semibold ml-8">{name}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClientCard;
