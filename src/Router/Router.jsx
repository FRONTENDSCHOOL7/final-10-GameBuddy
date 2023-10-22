import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import Login from "../Components/Login/Login";
import MainFeedPage from "../Pages/MainFeedPage";
import SignUpPage from "../Pages/SignUpPage";
import SearchPage from "../Pages/SearchPage";
import Error404 from "../Components/Commons/Error404";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainFeedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
