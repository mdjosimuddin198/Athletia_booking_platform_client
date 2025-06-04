import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all_events");
          const data = await res.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "/auth/login",
        Component: LogIn,
      },
      {
        path: "/auth/sign_up",
        Component: SignUp,
      },
    ],
  },
]);

export default Routes;
