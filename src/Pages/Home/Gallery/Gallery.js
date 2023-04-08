import React, { useEffect, useState } from "react";
import GalleryCard from "./GalleryCard/GalleryCard";

const Gallery = () => {
  const [gallerys, setGallerys] = useState([]);

  useEffect(() => {
    fetch("https://trippy-server.vercel.app/gallery")
      .then((res) => res.json())
      .then((data) => setGallerys(data));
  }, []);

  return (
    <div className="">
      <h2 className="font-bold text-4xl text-center mt-12">Tour Gallery</h2>
      <div className="flex justify-center my-5">
        <div className="grid gap-0 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-6">
          {gallerys.map((gallery) => (
            <GalleryCard key={gallery.id} gallery={gallery}></GalleryCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
