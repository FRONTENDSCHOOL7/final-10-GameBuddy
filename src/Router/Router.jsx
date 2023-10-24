import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import Login from "../Components/Login/Login";
import MainFeedPage from "../Pages/MainFeedPage";
import SignUpPage from "../Pages/SignUpPage";
import SearchPage from "../Pages/SearchPage";
import ChattingListPage from "../Pages/ChattingListPage";
import WritePage from "../Pages/WritePage";
import ProfilePage from "../Pages/ProfilePage";
import Error404 from "../Components/Commons/Error404";
import Profile from "../Components/Profile/Profile";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/main" element={<MainFeedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/chat" element={<ChattingListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:account" element={<ProfilePage />} />
        <Route path="/fix" element={<Profile />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
