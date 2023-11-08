import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Splash from "../Components/Splash/Splash";
import LoginPage from "../Pages/Sign/Login/LoginPage";
import SignUpPage from "../Pages/Sign/SignUp/SignUpPage";
import SetProfilePage from "../Pages/Sign/SignUp/SetProfilePage";
import MainFeedPage from "../Pages/MainFeedPage";
import HomeNofeed from "../Components/Main/HomeNoFeed";
import SearchPage from "../Pages/SearchPage";
import ChattingListPage from "../Pages/ChattingListPage";
import ProfilePage from "../Pages/ProfilePage";
import Error404 from "../Components/Commons/Error404";
import FollowDetailPage from "../Pages/FollowDetailPage";
import ProfileFix from "../Components/Profile/ProfileFix/ProfileFix";
import ChattingRoom from "../Components/Chat/ChattingRoom";
import Write from "../Components/Write/Write";
import PostEdit from "../Components/Write/PostEdit";
import RecruitEdit from "../Components/Profile/Recruit/RecruitEdit/RecruitEdit";

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
        <Route path="/homenofeed" element={<HomeNofeed />} />
        <Route path="/chat" element={<ChattingListPage />} />
        <Route path="/write" element={<Write />} />
        <Route path="/post" element={<PostEdit />} />
        <Route path="/recruit/edit" element={<RecruitEdit />} />
        {/* <Route path="/profile" element={<ProfilePage />} /> */}
        <Route
          path="/profile/:accountname/:type"
          element={<FollowDetailPage />}
        />
        <Route path="/profile/:accountname" element={<ProfilePage />} />
        <Route path="/fix" element={<ProfileFix />} />
        <Route path="/chat" element={<ChattingListPage />} />
        <Route path="/chat/room" element={<ChattingRoom />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
