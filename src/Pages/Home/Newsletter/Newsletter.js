import React from "react";
import "./Newsletter.css";

const Newsletter = () => {
  return (
    <section className="newsTellerContainer py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto py-12">
          <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Subscribe for our newsletter
          </h2>
          <p className="mt-4 text-lg text-gray-900">
            Stay up to date with our latest news and promotions by subscribing
            to our newsletter.
          </p>
          <form className="mt-8 sm:flex">
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="w-full px-5 py-3 border border-gray-300 shadow-sm placeholder-gray-500  sm:max-w-xs rounded-md"
              placeholder="Enter your email"
            />

            <button className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
