import React from "react";
import './Banner.css';
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div
      className="hero min-h-screen banner-container"
    >
      <div className="hero-overlay bg-opacity-40"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-3xl">
          <h1 className="mb-5 text-5xl font-bold">Enjoy Vacation With V-Travel</h1>
          <p className="mb-5">
          Travel to the any corner of the world, without going around in circles.
          </p>
          <Link to={'/booking'}><Button>Book A Tour</Button></Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
