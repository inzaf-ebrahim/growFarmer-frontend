import React from "react";
import LandownerHome from "../pages/LandownerHome";
import { Route, Routes } from "react-router-dom";

function LandownerRouter() {
  return (
    <Routes>
      <Route path="/" element={<LandownerHome />}></Route>
    </Routes>
  );
}

export default LandownerRouter;
