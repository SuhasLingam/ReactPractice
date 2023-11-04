import React from "react";
import { Route, Routes } from "react-router-dom";
import { AboutUs } from "./components/pages/about.js";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<AboutUs />} />
      </Routes>
    </div>
  );
}

export default App;
