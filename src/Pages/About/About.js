import React from "react";
import "./About.css";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div>
      <h1 className="text-center font-bold text-4xl mb-5 mt-10">Who We Are?</h1>
      <div className="hero w-full my-20">
        <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
          <div className="text-center lg:text-left">
            <img
              className="w-full"
              src="https://wordpressboss.com/opb/vtravel-demo/assets/images/about.png"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-4xl font-semibold">We Are Travel Experts</h1>
            <p className="py-6 text-justify leading-relaxed">
              Trippy is a travel agency that specializes in creating
              unforgettable travel experiences. We offer a wide range of travel
              packages to destinations all over the world, including exotic
              beaches, bustling cities, and remote wilderness areas. Our team of
              expert travel agents works with you to create a customized
              itinerary that suits your preferences and budget, taking care of
              all the details from flights and accommodations to activities and
              transportation. We're committed to providing exceptional customer
              service and support every step of the way, and are available 24/7
              to answer your questions and ensure that your travel experience is
              as smooth and stress-free as possible. Let us inspire and empower
              you to explore the world and make lifelong memories with Trippy.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
