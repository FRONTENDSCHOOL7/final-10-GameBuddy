import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import LoginPage from "../Pages/Sign/Login/LoginPage"
import SignUpPage from "../Pages/Sign/SignUp/SignUpPage";
import SetProfilePage from "../Pages/Sign/SignUp/SetProfilePage";
import MainFeedPage from "../Pages/MainFeedPage";
import Home_no_feed from "../Components/Main/Home_no_feed";
import SearchPage from "../Pages/SearchPage";
import ChattingListPage from "../Pages/ChattingListPage";
import WritePage from "../Pages/WritePage";
import ProfilePage from "../Pages/ProfilePage";
import Error404 from "../Components/Commons/Error404";
import FollowDetailPage from "../Pages/FollowDetailPage";
import Profile from "../Components/Profile/Profile";
import ChattingRoom from "../Components/Chat/ChattingRoom";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Splash />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/signup/setprofile" element={<SetProfilePage />} />
        <Route path="/main" element={<MainFeedPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/homenofeed" element={<Home_no_feed />} />
        <Route path="/chat" element={<ChattingListPage />} />
        <Route path="/write" element={<WritePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/follow/:accountname/:type" element={<FollowDetailPage />} />
        <Route path="/profile/:accountname" element={<ProfilePage />} />
        <Route path="/fix" element={<Profile />} />
        <Route path="/chat" element={<ChattingListPage />} />
        <Route path="/chat/room" element={<ChattingRoom />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
