import React, { useEffect, useState } from 'react';
import ClientCard from './ClientCard/ClientCard';
import './Clients.css';

const Clients = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
      fetch("http://localhost:5000/review")
        .then((res) => res.json())
        .then((data) => setReviews(data));
    }, []);
  
    return (
      <div className="clients py-10">
        <h2 className="font-bold text-4xl text-center py-5">Our Happy Clients</h2>
        <div className="flex justify-center my-5">
          <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
            {reviews.map((review) => (
              <ClientCard
               key={review.id} review={review}></ClientCard>
            ))}
          </div>
        </div>
      </div>
    );
}

export default Clients;