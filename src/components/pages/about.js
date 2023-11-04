import React from "react";
import { Route, Router } from "routes";
import Navbar from "../navbar";
import Footer from "../footer";

export const AboutUs = () => {
  return (
    <div>
      <Navbar />
      <p>This is About me Page</p>
      <Footer />
    </div>
  );
};
