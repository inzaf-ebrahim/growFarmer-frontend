import React from "react";
// import FarmerHome from "./pages/FarmerHome";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import CommonRouter from "./routes/CommonRouter";
import FarmerRouter from "./routes/FarmerRouter";
import AdminRouter from "./routes/AdminRouter";
import UserRouter from "./routes/UserRouter";
import LandownerRouter from "./routes/LandownerRouter";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import CommonRouter from "./routes/CommonRouter";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<CommonRouter />}></Route>
        <Route path="/user/*" element={<UserRouter />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/farmer/*" element={<FarmerRouter />}></Route>
        <Route path="/admin/*" element={<AdminRouter />}></Route>
        <Route path="/landowner/*" element={<LandownerRouter />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
