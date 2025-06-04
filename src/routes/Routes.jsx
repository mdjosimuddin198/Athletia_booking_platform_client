import React from "react";
import { createBrowserRouter } from "react-router";
import MainLayouts from "../layouts/MainLayouts";
import Home from "../components/Home";

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
    ],
  },
]);

export default Routes;
