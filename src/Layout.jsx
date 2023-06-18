import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <Sidebar />
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
