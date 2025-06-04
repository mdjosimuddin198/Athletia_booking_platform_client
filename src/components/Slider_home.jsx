import React from "react";

const Slider_home = ({ work }) => {
  const { name, imageUrl, description } = work;
  return (
    <div className="hero bg-[rgb(23,124,130)] text-white  min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="md:w-[45%]">
          <img src={imageUrl} className="md:w-[450px]  rounded-lg shadow-2xl" />
        </div>
        <div className="space-y-3 md:w-[45%] pl-5">
          <p className="text-xl text-[#aaf40c]">Upcoming Events</p>
          <h1 className="text-5xl font-bold text-[#aaf40c]">{name}</h1>
          <p className="text-3xl">{description}</p>

          <p className="mt-4 text-2xl">
            Unleash Your Athletic Potential with Expert Coaching,
            State-of-the-Art Facilities and Personalized Training Programs.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Slider_home;
