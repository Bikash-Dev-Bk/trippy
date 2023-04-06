import React from "react";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { Navigate } from "react-router-dom";

const Booking = () => {

  const bookingToast = () => toast.success("Thank you for your booking! We look forward to helping you plan your trip.");
  

  return (
    <div>
      <h1 className="text-center font-bold text-4xl my-10">Book Your Dream Vacation Today!</h1>
      <p className="text-justify text-xl my-10">Welcome to our travel agency! We specialize in creating personalized travel itineraries that cater to your unique preferences and interests. Please fill out the booking form below with your destination, travel dates, and any additional requests you may have, and one of our experienced agents will be in touch with you shortly to discuss your options and provide you with a quote. We look forward to helping you plan the trip of a lifetime!</p>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="destination"
          >
            Destination
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="destination"
            type="text"
            placeholder="Enter your destination"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="travel_dates"
          >
            How Many Days
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="travel_dates"
            type="number"
            placeholder="Enter your travel days"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="accommodation"
          >
            Accommodation
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="accommodation"
          >
            <option value="">Select your accommodation type</option>
            <option value="hotel">Hotel</option>
            <option value="resort">Resort</option>
            <option value="vacation_rental">Vacation Rental</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="transportation"
          >
            Transportation
          </label>
          <select
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="transportation"
          >
            <option value="">Select your transportation type</option>
            <option value="flight">Flight</option>
            <option value="train">Train</option>
            <option value="car_rental">Car Rental</option>
          </select>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="activities"
          >
            Activities
          </label>
          <div>
            <input
              type="checkbox"
              id="hiking"
              name="activities"
              value="hiking"
            />
            <label htmlFor="hiking" className="ml-2">
              Hiking
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="sightseeing"
              name="activities"
              value="sightseeing"
            />
            <label htmlFor="sightseeing" className="ml-2">
              Sightseeing
            </label>
          </div>
          <div>
            <input
              type="checkbox"
              id="water_sports"
              name="activities"
              value="water_sports"
            />
            <label htmlFor="water_sports" className="ml-2">
              Water Sports
            </label>
          </div>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="number_of_guests"
          >
            Number of Guests
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="number_of_guests"
            type="number"
            placeholder="Enter the number of guests"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="phone_number"
          >
            Phone Number
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="phone_number"
            type="tel"
            placeholder="Enter your phone number"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            rows="3"
            placeholder="Enter your message"
          ></textarea>
        </div>
        <div className="flex items-center justify-center">
          <Link onClick={bookingToast } ><Button>Book Now</Button></Link>
        </div>
        <Toaster />
      </form>
    </div>
  );
};

export default Booking;
