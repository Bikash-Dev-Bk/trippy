import React from "react";
import "./GalleryCard.css";

const GalleryCard = ({ gallery }) => {
  const { title, img } = gallery;
  return (
    <div className="galleryCardContainer">
      <img src={img} alt="Avatar" class="galleryCardImage"  />
      
        <p class="galleryCardTitle">{title}</p>
      
    </div>
  );
};

export default GalleryCard;
