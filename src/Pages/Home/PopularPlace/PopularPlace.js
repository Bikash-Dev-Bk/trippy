import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PopularPlace = () => {
  const [popularPlaces, setPopularPlaces] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/popularplaces")
      .then((res) => res.json())
      .then((data) => setPopularPlaces(data));
  }, []);

  console.log(" inside popular place",popularPlaces)

  return (
    <div className="my-20 py-10 bg-base-200">
      <h1 className="text-4xl font-bold pb-10">Popular Tour Places</h1>
      <Carousel
        swipeable={false}
        draggable={false}
        responsive={responsive}
        ssr={true} // means to render carousel on server-side.
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3000}
        keyBoardControl={true}
        customTransition="all .2"
        transitionDuration={2000}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
        dotListClass="custom-dot-list-style"
        itemClass="carousel-item-padding-40-px"
      >
        <div className="card card-compact w-96 bg-base-100 shadow-2xl rounded-none">
          <img src={popularPlaces[0].img} alt="Shoes" />
          <div className="card-body">
            <h2 className="font-bold text-2xl">{popularPlaces[0].name}</h2>
            <h2 >{popularPlaces[0].country}</h2>
            <p className="font-semibold text-xl text-yellow-500">{popularPlaces[0].price}</p>
          </div>
        </div>
        <div className="card card-compact gap-2 w-96 bg-base-100 shadow-2xl rounded-none">
          <img src={popularPlaces[1].img} alt="Shoes" />
          <div className="card-body">
            <h2 className="font-bold text-2xl">{popularPlaces[1].name}</h2>
            <h2 >{popularPlaces[1].country}</h2>
            <p className="font-semibold text-xl text-yellow-500">{popularPlaces[1].price}</p>
          </div>
        </div>
        <div className="card card-compact gap-2 w-96 bg-base-100 shadow-2xl rounded-none">
          <img src={popularPlaces[2].img} alt="Shoes" />
          <div className="card-body">
            <h2 className="font-bold text-2xl">{popularPlaces[2].name}</h2>
            <h2 >{popularPlaces[2].country}</h2>
            <p className="font-semibold text-xl text-yellow-500">{popularPlaces[2].price}</p>
          </div>
        </div>
        <div className="card card-compact gap-2 w-96 bg-base-100 shadow-2xl rounded-none">
          <img src={popularPlaces[3].img} alt="Shoes" />
          <div className="card-body">
            <h2 className="font-bold text-2xl">{popularPlaces[3].name}</h2>
            <h2 >{popularPlaces[3].country}</h2>
            <p className="font-semibold text-xl text-yellow-500">{popularPlaces[3].price}</p>
          </div>
        </div>
        <div className="card card-compact gap-2 w-96 bg-base-100 shadow-2xl rounded-none">
          <img src={popularPlaces[4].img} alt="Shoes" />
          <div className="card-body">
            <h2 className="font-bold text-2xl">{popularPlaces[4].name}</h2>
            <h2 >{popularPlaces[4].country}</h2>
            <p className="font-semibold text-xl text-yellow-500">{popularPlaces[4].price}</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default PopularPlace;
