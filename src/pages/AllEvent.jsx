import React from "react";
import { useLoaderData } from "react-router";
import AcademyCard from "../components/AcademyCard ";

const AllEvent = () => {
  const allEvent = useLoaderData();
  console.log(allEvent);
  return (
    <div>
      <h3 className="text-center text-3xl ">
        Total Events Available Now {allEvent.length}
      </h3>
      <div className="grid grid-cols-1  my-8 mx-4 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {allEvent.map((academy) => (
          <AcademyCard key={academy._id} academy={academy}></AcademyCard>
        ))}
      </div>
    </div>
  );
};

export default AllEvent;
