import React from "react";
import logo from "../../../assets/images/logo.png";
import './Footer.css';

const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 text-base-content footerContainer">
        <div>
          <div className="footer-image">
          <img src={logo} alt="" />
          </div>
          <p>
            Trippy Travel Agency.
            <br />
            Providing Travel package since 2012
          </p>
        </div>
        <div>
          <span className="footer-title">Services</span>
          <a href="/" className="link link-hover">Tour</a>
          <a href="/" className="link link-hover">Ticket</a>
          <a href="/" className="link link-hover">Hotel</a>
          <a href="/" className="link link-hover">Tour Guide</a>
        </div>
        <div>
          <span className="footer-title">Company</span>
          <a href="/about" className="link link-hover">About us</a>
          <a href="/contact" className="link link-hover">Contact</a>
          <a href="/" className="link link-hover">Jobs</a>
          <a href="/" className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="footer-title">Legal</span>
          <a href="/" className="link link-hover">Terms of use</a>
          <a href="/" className="link link-hover">Privacy policy</a>
          <a href="/" className="link link-hover">Cookie policy</a>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
