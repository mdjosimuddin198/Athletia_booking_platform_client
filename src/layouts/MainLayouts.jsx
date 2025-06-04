import React from "react";
import NavBar from "../components/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const MainLayouts = () => {
  return (
    <>
      <header>
        <NavBar></NavBar>
      </header>
      <main>
        <Outlet></Outlet>
      </main>
      <footer>
        <Footer></Footer>
      </footer>
    </>
  );
};

export default MainLayouts;
