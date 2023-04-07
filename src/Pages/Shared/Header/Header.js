import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../assets/images/logo.png";
import './Header.css';

const Header = () => {
  const menuItems = (
    <>
      <li>
        <Link to="/" className='btn btn-ghost normal-case  text-base Routes'>Home</Link>
      </li>

      <li>
        <Link to="/about" className='btn btn-ghost normal-case  text-base Routes'>About Us</Link>
      </li>
      <li>
        <Link to="/places" className='btn btn-ghost normal-case  text-base Routes'>Places</Link>
      </li>

      <li>
        <Link to="/booking" className='btn btn-ghost normal-case  text-base Routes'>Booking</Link>
      </li>
      <li>
        <Link to="/contact" className='btn btn-ghost normal-case  text-base Routes'>Contact Us</Link>
      </li>
    </>
  );

  return (
    <div className="navbar Header">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box mobileTabNav w-52"
          >
            {menuItems}
          </ul>
        </div>

        <div className="header-image flex justify-items-center py-2 ">
          <Link>
            <img src={logo} alt="" />
          </Link>
        </div>
      </div>
      <div className="navbar-end hidden lg:flex ">
        <ul className="menu menu-horizontal p-0">{menuItems}</ul>
      </div>
    </div>
  );
};

export default Header;