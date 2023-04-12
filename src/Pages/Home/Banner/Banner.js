import React from "react";
import "./Banner.css";
import Button from "../../../components/Button/Button";
import { Link } from "react-router-dom";
import 'animate.css';

const Banner = () => {
  return (
    <div className="hero min-h-screen banner-container">
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-5xl">
          <h1 className="mb-5 text-6xl font-bold animate__animated animate__fadeInLeft">
            Enjoy Vacation With <span className="text-yellow-500">Trippy</span>
          </h1>
          <p className="mb-5 animate__animated animate__fadeInRight">
            Travel to the any corner of the world, without going around in
            circles.
          </p>
          <Link to={"/booking"}>
            <Button>Book A Tour me</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
