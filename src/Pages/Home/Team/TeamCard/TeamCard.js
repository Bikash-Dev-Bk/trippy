import React from "react";

import './TeamCard.css';

const TeamCard = ({ teem }) => {
  const { name, img, role, description } = teem;

  return (
    <div className="card  card-compact w-96 bg-base-100">
      <img className=" teamImg" src={img} alt="team member" />
      <div className="card-body">
        <h2 className="text-xl font-bold text-center">{name}</h2>
        <p className="text-xl font-semibold text-center">{role}</p>
        <p className="text-justify">{description}</p>
      </div>
    </div>
  );
};

export default TeamCard;
