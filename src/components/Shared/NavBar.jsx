import React from "react";
import { NavLink } from "react-router";

const NavBar = () => {
  const links = (
    <>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/">
        Home
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/events">
        Events
      </NavLink>

      {/* <NavLink className="ml-5 p-2 rounded-xl text-xl" to="my_bookings">
        My Bookings
      </NavLink> */}
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/about_us">
        About Us
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-[rgb(23,124,130)] text-white border-b shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-xl">Athletia </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/auth/sign_up">
          {/* {logedInuser ? "" : "Sign Up"} */} Sign Up
        </NavLink>
        <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/auth/login">
          {/* {logedInuser ? "" : "LogIn"} */} LogIn
        </NavLink>
      </div>
    </div>
  );
};

export default NavBar;
