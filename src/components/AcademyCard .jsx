import React from "react";
import { CiCalendarDate, CiLocationOn } from "react-icons/ci";
import { Link } from "react-router";

const AcademyCard = ({ academy }) => {
  const formattedDate = new Date(academy.nextAvailability).toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "short", year: "numeric" }
  );

  return (
    <div className="max-w-sm hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out rounded-2xl shadow-lg overflow-hidden border">
      {/* Banner Image */}
      <div className="h-40 w-full">
        <img
          src={academy.imageUrl}
          alt="Academy Banner"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Rating */}
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <span className="bg-[#aaf40c]  text-black text-sm font-semibold px-2 py-1 rounded">
              {academy.rating}
            </span>
            <span className="text-gray-600 text-sm">
              {academy.reviews} Reviews
            </span>
          </div>
          <button className="text-gray-400 hover:text-red-500 text-xl">
            &#9825;
          </button>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-1">{academy.name}</h2>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-3">{academy.description}</p>

        {/* Location */}
        <div className="flex items-center text-gray-700 text-sm mb-1">
          <CiLocationOn />
          {academy.location}
        </div>

        {/* type */}

        <div className="flex items-center text-gray-700 text-sm mb-1">
          {academy.type}
        </div>

        {/* Next Availability */}
        <div className="flex items-center  text-gray-700 text-sm mb-4">
          <CiCalendarDate />
          Next Availability:
          <span className="font-semibold"> {formattedDate} </span>
        </div>

        {/* Instructor & Book Button */}
        <div className="flex items-center justify-between border-t pt-3">
          <div className="flex items-center space-x-2">
            <img
              src={academy.imageUrl}
              alt="Instructor"
              className="w-8 h-8 rounded-full"
            />
            <span className="text-sm text-gray-800 font-medium">
              {academy.instructorName}
            </span>
          </div>

          <Link to={`/event/details/${academy._id}`}>
            <button className="text-sm btn  bg-[#177C82] text-white font-semibold  ">
              View Details
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AcademyCard;
