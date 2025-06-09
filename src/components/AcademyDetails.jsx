import React from "react";
import { useLoaderData } from "react-router";

const AcademyDetails = () => {
  const academy = useLoaderData();
  const formattedDate = new Date(academy.nextAvailability).toLocaleDateString(
    "en-GB",
    { day: "2-digit", month: "long", year: "numeric" }
  );

  return (
    <div className="max-w-4xl  mx-auto my-6 bg-white rounded-xl shadow-lg overflow-hidden border">
      {/* Banner */}
      <div className="h-64 w-full">
        <img src={academy.imageUrl} alt="Banner" className="w-full h-full " />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Title and Rating */}
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-800">{academy.name}</h1>
          <div className="flex items-center space-x-2">
            <span className="bg-yellow-400 text-white text-sm font-semibold px-2 py-1 rounded">
              {academy.rating}
            </span>
            <span className="text-gray-600 text-sm">
              ({academy.reviews} reviews)
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-700 text-base mb-4">{academy.description}</p>

        {/* Location and Date */}
        <div className="flex items-center text-sm text-gray-600 space-x-6 mb-4">
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13 21.314l-4.657-4.657A8 8 0 1117.657 16.657z"
              />
            </svg>
            <span>{academy.location}</span>
          </div>
          <div className="flex items-center">
            <svg
              className="w-5 h-5 mr-1 text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>
              Next Availability:{" "}
              <span className="text-green-600"> {formattedDate} </span>
            </span>

            <span> &nbsp;Type:- {academy.type}</span>
          </div>
        </div>

        {/* Instructor */}
        <div className="flex items-center justify-between border-t pt-4">
          <div className="flex items-center space-x-3">
            <img
              src={academy.imageUrl}
              alt="Instructor"
              className="w-10 h-10 rounded-full"
            />
            <span className="font-medium text-gray-800 text-sm">
              Instructor: {academy.instructorName}
            </span>
          </div>

          {/* Book Now Button */}
          {academy.isBookable && (
            <button className="bg-[#177C82] text-white px-4 py-2 rounded-md text-sm font-semibold ">
              Book Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default AcademyDetails;
