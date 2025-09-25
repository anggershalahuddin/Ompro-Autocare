import React from "react";
import Navbar from "../components/Navbar";
import Main from "../components/Main/Main";
import Hero from "../components/Main/Hero";
import Footer from "../components/Main/Footer";

const dashboard = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Main />
      <Footer />
    </div>
  );
};

export default dashboard;
