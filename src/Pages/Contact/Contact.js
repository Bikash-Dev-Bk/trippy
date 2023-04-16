import React from "react";
import Button from "../../components/Button/Button";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="antialiased bg-yellow-700 py-20">
      <div className="flex w-full  justify-center items-center ">
        <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0  w-5/6 max-w-screen-2xl p-10 sm:p-8  text-white overflow-hidden">
          <div className="flex flex-col md:flex-1 space-y-8 justify-between">
            <div>
              <h1 className="font-bold text-4xl tracking-wide">Contact Us</h1>
              <p className="pt-2 text-yellow-100 text-sm text-justify">
              We're here to help! If you have any questions or concerns about our products or services, please don't hesitate to contact us. You can reach us by phone, email, or by filling out the contact form below. Our friendly customer support team is available 24/7 to assist you.
              </p>
            </div>
            <div className="flex flex-col space-y-4 sm:space-y-6">
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="call"
                  className="text-yellow-300 text-xl"
                ></ion-icon>
                <span>Phone: +88 01710000001</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="mail"
                  className="text-yellow-300 text-xl"
                ></ion-icon>
                <span>Email: support@trippy.com</span>
              </div>
              <div className="inline-flex space-x-2 items-center">
                <ion-icon
                  name="location"
                  className="text-yellow-300 text-xl"
                ></ion-icon>
                <span>Address: Mohammadpur, Dhaka, Bangladesh</span>
              </div>
            </div>

            <div className="flex space-x-4 text-lg">
              <a href="https://www.facebook.com/">
                <FaFacebook />
              </a>
              <a href="https://www.twitter.com/">
                <FaTwitter />
              </a>
              <a href="https://www.instagram.com/">
                <FaInstagram />
              </a>
              <a href="https://www.linkedin.com">
                <FaLinkedinIn />
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-yellow-400 rounded-full -right-28 -top-28"></div>
            <div className="absolute invisible md:visible z-0 w-40 h-40 bg-yellow-400 rounded-full -left-28 -bottom-16"></div>
            <div className="relative z-10 bg-white rounded-xl shadow-lg p-8 text-gray-600 md:w-full">
              <form className="flex flex-col space-y-4">
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Name
                  </label>
                  <input
                    type="name"
                    placeholder="Name"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Email
                  </label>
                  <input
                    type="email"
                    placeholder="Email"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-yellow-300"
                  />
                </div>
                <div>
                  <label htmlFor="" className="text-sm">
                    Your Message
                  </label>
                  <textarea
                    type="email"
                    placeholder="Message"
                    rows="4"
                    className="ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-yellow-300"
                  ></textarea>
                </div>

                <div className="inline-block self-end py-2 text-sm">
                  <Button>Send Message</Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
