import React from "react";
import Header from "../Components/Commons/Header/Header";
import Profile from "../Components/Profile/Profile/Profile";
import Recruit from "../Components/Profile/Recruit/Recruit";
import Footer from "../Components/Commons/Footer";

function ProfilePage() {
  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Header type="userProfile" />
      <Profile />
      <Recruit />
      <Footer />
    </div>
  );
}

export default ProfilePage;
