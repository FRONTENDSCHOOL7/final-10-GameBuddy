import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import Login from "../Components/Login/Login";
import SignUp from "../Components/SignUp/SignUp";
import MainFeedPage from "../Pages/MainFeedPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/main" element={<MainFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
