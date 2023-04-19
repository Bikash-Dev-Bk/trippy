import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import paris from "../../../assets/images/popularPlace/paris.jpg";
import santorini from "../../../assets/images/popularPlace/Santorini.jpg";
import tokyo from "../../../assets/images/popularPlace/Tokyo.jpg";
import bali from "../../../assets/images/popularPlace/bali.jpg";
import dubai from "../../../assets/images/popularPlace/dubai.jpg";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

const PopularPlace = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center mt-20 mb-12">
        Popular Tour Places
      </h1>
      <div className="max-w-screen-xl mx-auto px-10">
        <Carousel
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={true}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={1500}
          keyBoardControl={false}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
          
        >
          <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
            <img src={paris} alt="Shoes" />
            <div className="card-body">
              <h2 className="font-bold text-2xl">Paris</h2>
              <h2 className="font-semibold text-xl">France</h2>
              <p className="font-semibold text-xl text-yellow-500">$2800</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none ">
            <img src={santorini} alt="Shoes" />
            <div className="card-body">
              <h2 className="font-bold text-2xl">Santorini</h2>
              <h2 className="font-semibold text-xl">Greece</h2>
              <p className="font-semibold text-xl text-yellow-500">$1800</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
            <img src={tokyo} alt="Shoes" />
            <div className="card-body">
              <h2 className="font-bold text-2xl">Tokyo</h2>
              <h2 className="font-semibold text-xl">Japan</h2>
              <p className="font-semibold text-xl text-yellow-500">$2200</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
            <img src={bali} alt="Shoes" />
            <div className="card-body">
              <h2 className="font-bold text-2xl">Bali</h2>
              <h2 className="font-semibold text-xl">Indonesia</h2>
              <p className="font-semibold text-xl text-yellow-500">$1400</p>
            </div>
          </div>
          <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
            <img src={dubai} alt="Shoes" />
            <div className="card-body">
              <h2 className="font-bold text-2xl">Dubai</h2>
              <h2 className="font-semibold text-xl">UAE</h2>
              <p className="font-semibold text-xl text-yellow-500">$2500</p>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default PopularPlace;
