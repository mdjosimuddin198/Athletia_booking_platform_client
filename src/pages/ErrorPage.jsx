import Lottie from "lottie-react";
import React from "react";
import notFound from "../assets/LottieFiles/Lottie404.json";
// import { Helmet } from "react-helmet";

import { useNavigate } from "react-router";

const ErrorPage = () => {
  const navigate = useNavigate();
  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div className="min-h-screen">
      {/* <Helmet>
        <title>Error Page</title>
      </Helmet> */}
      <div className="flex flex-col  justify-center items-center mt-16">
        <div className=" rounded-2xl  border">
          <Lottie animationData={notFound} loop={true}>
            {" "}
          </Lottie>
        </div>

        <button
          onClick={handleGoHome}
          className="mt-4 bg-[#177C82] text-white px-6 py-2 rounded-lg "
        >
          Go To HomePage
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
