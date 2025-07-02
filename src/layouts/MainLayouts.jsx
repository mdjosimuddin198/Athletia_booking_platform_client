import React from "react";
import NavBar from "../components/Shared/NavBar";
import { Outlet } from "react-router";
import Footer from "../components/Shared/Footer";

const MainLayouts = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
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
