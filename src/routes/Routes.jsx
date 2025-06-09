import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home";
import LogIn from "../pages/LogIn";
import SignUp from "../pages/SignUp";
import AcademyDetails from "../components/AcademyDetails";
import PrivetRoute from "./PrivetRoute";
import Loading from "../components/Loading";
import ErrorPage from "../pages/ErrorPage";
import MyBooking from "../pages/MyBooking";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch("http://localhost:5000/all_events?limit=6");
          const data = await res.json();
          return data;
        },
        Component: Home,
        hydrateFallbackElement: <Loading></Loading>,
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
        element: (
          <PrivetRoute>
            <AcademyDetails></AcademyDetails>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/my_bookings",
        loader: async () => {
          const res = await fetch("http://localhost:5000/book_events");
          const data = await res.json();
          return data;
        },
        // Component: MyBooking,
        element: (
          <PrivetRoute>
            <MyBooking></MyBooking>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
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
