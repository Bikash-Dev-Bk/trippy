import React from "react";
import "./About.css";
import Button from "../../components/Button/Button";

const About = () => {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-5">Who We Are?</h1>
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
              It is a long established fact that a reader will be distracted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using 'Content here,
              content here', making it look like readable English. Many desktop
              publishing packages and web page editors now use Lorem Ipsum as
              their default model text, and a search for 'lorem ipsum' will
              uncover many web sites still in their infancy. Various versions
              have evolved over the years, sometimes by accident, sometimes on
              purpose.Various versions have evolved over the years, sometimes by accident, sometimes on purpose.
            </p>
            <Button>Learn More</Button>
          </div>
        </div>
      </div>

      
    </div>
  );
};

export default About;
