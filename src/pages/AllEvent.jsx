import React, { useState } from "react";
import { useLoaderData } from "react-router";
import AcademyCard from "../components/AcademyCard ";
import { Helmet } from "react-helmet";
import { CiSearch } from "react-icons/ci";

const AllEvent = () => {
  const allEvent = useLoaderData();
  // console.log(allEvent);
  const [searchTerm, setSearchTerm] = useState("");
  const SearchEventByName = allEvent.filter((event) =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
      <Helmet>
        <title>All Event | Athletia </title>
      </Helmet>
      <div className="flex items-center flex-col-reverse md:flex-row justify-around">
        <div>{}</div>
        <h3 className="text-center mt-4 text-3xl ">
          Total Events Available Now{" "}
          <span className="text-[#177C82] font-bold">
            {SearchEventByName.length}
          </span>
        </h3>
        <div className="mt-6 w-[80%] mx-auto md:mx-0 md:w-[30%] ">
          <label className="input w-full">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              required
              placeholder="Search here by event name"
            />
          </label>
        </div>
      </div>
      {SearchEventByName.length > 0 ? (
        <>
          <div className="grid grid-cols-1  my-8 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {SearchEventByName.map((academy) => (
              <AcademyCard key={academy._id} academy={academy}></AcademyCard>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="flex flex-col items-center justify-center py-20">
            {/* তোমার দেওয়া ছবির src দিতে পারো চাইলে */}
            <CiSearch size={100} />
            <h2 className="text-2xl font-semibold">No Results Found</h2>
            <p className="text-gray-500">
              Please make sure you wrote it correctly or you can suggest us a
              new product.
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default AllEvent;
