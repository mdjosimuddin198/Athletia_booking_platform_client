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
import AllEvent from "../pages/AllEvent";
import CreaatEvent from "../pages/CreaatEvent";
import ManageEvents from "../pages/ManageEvents";
import UpdateEvent from "../pages/UpdateEvent";
import AboutUs from "../pages/AboutUs";
import ContactUs from "../pages/ContactUs";

const Routes = createBrowserRouter([
  {
    path: "/",
    Component: MainLayouts,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const res = await fetch(
            "https://athletia-server.vercel.app/all_events?limit=6"
          );
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
            `https://athletia-server.vercel.app/all_events/${params.id}`,
            {
              credentials: "include",
            }
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
          const res = await fetch(
            "https://athletia-server.vercel.app/book_events",
            {
              credentials: "include",
            }
          );
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
        path: "/all_event",
        loader: async () => {
          const res = await fetch(
            "https://athletia-server.vercel.app/all_events"
          );
          const data = await res.json();
          return data;
        },
        Component: AllEvent,
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/create_event",
        element: (
          <PrivetRoute>
            <CreaatEvent></CreaatEvent>
          </PrivetRoute>
        ),
      },
      {
        path: "/updateEvent/:id",
        loader: async ({ params }) => {
          const res = await fetch(
            `https://athletia-server.vercel.app/all_events/${params.id}`,
            { credentials: "include" }
          );
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <UpdateEvent></UpdateEvent>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "/manage_events",
        loader: async () => {
          const res = await fetch(
            "https://athletia-server.vercel.app/all_events",
            {
              credentials: "include",
            }
          );
          const data = await res.json();
          return data;
        },
        element: (
          <PrivetRoute>
            <ManageEvents></ManageEvents>
          </PrivetRoute>
        ),
        hydrateFallbackElement: <Loading></Loading>,
      },
      {
        path: "about_us",
        Component: AboutUs,
      },
      {
        path: "contact_us",
        Component: ContactUs,
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
