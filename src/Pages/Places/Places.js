import React from "react";
import { useLoaderData } from "react-router-dom";
import PlaceCard from "./PlaceCard/PlaceCard";

const Places = () => {
  const places = useLoaderData();
  return (
    <div className="">
      <h2 className="text-center font-bold text-4xl mb-5 mt-10">Places</h2>

      <p className="text-justify mb-10">
        At Trippy, we offer a wide range of destinations for you to explore.
        From the romantic charm of Paris to the stunning beauty of Bali, the
        excitement of New York City, the fusion of ancient and modern culture in
        Tokyo, and the breathtaking scenery of Santorini, there's something for
        everyone. We also offer travel experiences in Dubai, Rome, Sydney, Machu
        Picchu, London, Phuket, and Barcelona, each with their unique culture,
        cuisine, and attractions to discover. Whether you're seeking adventure,
        relaxation, or cultural immersion, our team of experts will help you
        create the perfect itinerary for your dream vacation.
      </p>
      <div className="flex justify-center my-5">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          {places.map((place) => (
            <PlaceCard key={place.id} place={place}></PlaceCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Places;
