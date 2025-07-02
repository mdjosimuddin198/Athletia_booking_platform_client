import React, { useContext } from "react";
import { Link } from "react-router";
import { AuthContext } from "../context/AuthProvider";

const AboutUs = () => {
  const { logedInuser } = useContext(AuthContext);
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center p-6">
      <div className="max-w-4xl bg-white shadow-lg rounded-2xl p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-[#00343F] mb-4">
          About Us
        </h1>
        <p className="text-lg text-gray-700 text-center">
          Welcome to{" "}
          <span className="font-semibold text-[#00343F]">Athletia</span>!
          Athletia is more than just a platform — it’s a community where
          athletes and sports lovers come together to find, join, and enjoy
          athletic events around them.
        </p>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00343F]">Our Mission</h2>
          <p className="text-gray-700">
            We aim to empower athletes by providing easy access to local sports
            competitions and events. Our goal is to make booking and
            participating in athletic activities simple, enjoyable, and
            accessible for everyone.
          </p>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00343F]">
            What We Offer
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>✅ Seamless event browsing and booking experience</li>
            <li>✅ User-friendly interface for managing bookings</li>
            <li>✅ Secure user authentication system</li>
            <li>✅ Real-time event updates and detailed information</li>
          </ul>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-[#00343F]">
            Why Athletia?
          </h2>
          <p className="text-gray-700">
            Athletia connects you to the local sports community like never
            before. Whether you are a professional athlete or just someone who
            loves sports, Athletia is your trusted companion in finding the
            right events for you.
          </p>
        </div>

        <div className="text-center">
          {logedInuser ? (
            <>
              <Link className="bg-[#177C82] btn text-white font-semibold px-6 py-3 transition">
                Wellcome
              </Link>
            </>
          ) : (
            <>
              {" "}
              <Link
                to="/auth/sign_up"
                className="bg-[#177C82] btn text-white font-semibold px-6 py-3 transition"
              >
                Join Us Now
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
