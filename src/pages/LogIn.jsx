import React, { use, useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";
import { toast } from "react-toastify";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../context/AuthProvider";
import Lottie from "lottie-react";
import loginINLottei from "../assets/LottieFiles/LoginLottie.json";
import { Helmet } from "react-helmet";
// import { Helmet } from "react-helmet";

const LogIn = () => {
  const { loginUser, handlegoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, password);

    loginUser(email, password)
      .then((result) => {
        // console.log(result);
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };

  const handleGoogoleLogin = () => {
    // console.log("hello login ");
    handlegoogle()
      .then((result) => {
        navigate(`${location.state ? location.state : "/"}`);
        toast.success(`Loged In SuccessFully `);
        // console.log(result);
      })
      .catch((error) => {
        console.log(error);
        toast.error("error found");
      });
  };
  return (
    <div className="flex items-center justify-center mx-4 flex-col md:flex-row">
      <Helmet>
        <title>Login page | Athletia </title>
      </Helmet>

      <div className="card bg-base-100 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <form onSubmit={handleLogin} className="fieldset">
            <label className="label text-xl">Email</label>
            <input
              type="email"
              name="email"
              className="input"
              placeholder="Email"
            />
            <label className="label text-xl">Password</label>
            <input
              type="password"
              name="password"
              className="input"
              placeholder="Password"
            />
            <div>
              <Link
                to="/auth/login/forget-password"
                className="link link-hover text-blue-600"
              >
                Forgot password?
              </Link>
            </div>
            <button className="btn btn-neutral mt-4">LogIn Now</button>
            <p className="text-sm ">
              Don't have account yet{" "}
              <Link className="text-blue-400 underline" to="/auth/sign_up">
                {"   "}
                Register Now{" "}
              </Link>
            </p>
          </form>
          {/* Google */}
          <button
            onClick={handleGoogoleLogin}
            className="btn bg-white text-black border-[#e5e5e5]"
          >
            <FcGoogle></FcGoogle>
            Login with Google
          </button>
        </div>
      </div>
      <div>
        <Lottie animationData={loginINLottei} loop={true}></Lottie>
      </div>
    </div>
  );
};

export default LogIn;
