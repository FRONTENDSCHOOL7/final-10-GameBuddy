import React from "react";
import Header from "../Components/Commons/Header/Header"
import FollowList from "../Components/Profile/FollowList/FollowList"

function FollowDetailPage() {
  return (
    <>
      <Header type={"followers"}/>
      <FollowList />
    </>
  )
}

export default FollowDetailPage;
