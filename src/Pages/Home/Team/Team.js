import React, { useEffect, useState } from 'react';
import TeamCard from './TeamCard/TeamCard';

const Team = () => {
    const [team, setTeam] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/team")
      .then((res) => res.json())
      .then((data) => setTeam(data));
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center mt-12">Our Professional Team</h2>
      <div className="flex justify-center my-5">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          {team.map((teem) => (
            <TeamCard key={teem.id} teem={teem}></TeamCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;