import React, { useContext, useState } from "react";
import userIcon from "../../assets/user.png";
import { Link, NavLink } from "react-router";

import { toast } from "react-toastify";
import { AuthContext } from "../../context/AuthProvider";

const NavBar = () => {
  const { logedInuser, setLogedInUser, logOutUser } = useContext(AuthContext);
  const [open, setOpen] = useState(false);

  const handleLogOutUser = () => {
    logOutUser()
      .then(() => {
        // console.log("user log out successfully");
        setLogedInUser(null);
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };
  const links = (
    <>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/">
        Home
      </NavLink>
      <NavLink className="ml-5 p-2 rounded-xl  text-xl" to="/all_event">
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
            className="menu menu-sm dropdown-content bg-[rgb(23,124,130)] rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="font-bold text-xl">Athletia </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end gap-4 relative z-50">
        {logedInuser ? (
          <div className="navbar-end gap-4 relative">
            {/* Profile Picture */}
            <img
              src={logedInuser?.photoURL}
              alt="User"
              className="w-10 h-10 rounded-full border cursor-pointer"
              onClick={() => setOpen((prev) => !prev)} // টগল
            />

            {/* Dropdown Menu */}
            <div
              className={`absolute right-0 top-12 bg-white text-black text-sm px-6 py-3 rounded-xl shadow-xl space-y-2 w-48 transition-all  duration-300 z-50 ${
                open
                  ? "opacity-100 visible pointer-events-auto"
                  : "opacity-0 invisible pointer-events-none"
              }`}
            >
              <h2 className="text-lg font-semibold">
                {logedInuser?.displayName}
              </h2>
              <ul className="space-y-1">
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="/create_event"
                    className="hover:underline block"
                  >
                    Create Event
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="/my_bookings"
                    className="hover:underline block"
                  >
                    My Bookings
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    onClick={() => setOpen(false)}
                    to="/manage_events"
                    className="hover:underline block"
                  >
                    Manage Events
                  </NavLink>
                </li>
              </ul>
              <button
                onClick={handleLogOutUser}
                className="text-red-600 font-semibold hover:underline"
              >
                Log Out
              </button>
            </div>
          </div>
        ) : (
          <>
            <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/auth/sign_up">
              Sign Up
            </NavLink>
            <NavLink className="ml-5 p-2 rounded-xl text-xl" to="/auth/login">
              LogIn
            </NavLink>
          </>
        )}

        {/* বাইরে ক্লিক করলে বন্ধ করার লজিক চাইলে যুক্ত করো */}
      </div>
    </div>
  );
};

export default NavBar;
