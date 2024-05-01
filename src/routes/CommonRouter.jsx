import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage";

function CommonRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}></Route>

    </Routes>
  );
}

export default CommonRouter;
