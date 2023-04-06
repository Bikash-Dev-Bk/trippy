import React from "react";

const TeamCard = ({ teem }) => {
  const { name, img, role, description } = teem;

  return (
    <div className="card  card-compact w-full bg-base-100">
      <img className="p-5 rounded-full" src={img} alt="NoImage" />
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p className="text-xl font-semibold text-center">{role}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
