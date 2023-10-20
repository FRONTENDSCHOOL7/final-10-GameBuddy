import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import Login from "../Components/Login/Login";
import MainFeedPage from "../Pages/MainFeedPage";
import SignUpPage from "../Pages/SignUpPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainFeedPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
