import React from "react";
import Header from "../Components/Commons/Header/Header";
import Profile from "../Components/Profile/Profile/Profile";
import Footer from "../Components/Commons/Footer";

function ProfilePage() {
  return (
    <>
      <Header type="userProfile" />
      <Profile />
      <Footer />
    </>
  );
}

export default ProfilePage;
