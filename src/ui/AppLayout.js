import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/footer/Footer";
import Nav from "../components/nav/Nav";

function AppLayout() {
  return (
    <>
      <Nav />
      <Outlet />

      <Footer />
    </>
  );
}

export default AppLayout;
