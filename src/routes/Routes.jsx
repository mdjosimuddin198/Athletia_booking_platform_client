import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import AcademyDetails from "../components/AcademyDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all_events?limit=6");
          const data = await res.json();
          return data;
        },
        Component: Home,
      },
      {
        path: "/event/details/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `http://localhost:5000/all_events/${params.id}`
          );
          const data = await res.json();
          return data;
        },
        Component: AcademyDetails,
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
