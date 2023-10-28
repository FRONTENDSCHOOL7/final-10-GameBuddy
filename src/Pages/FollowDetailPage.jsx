import React from "react";
import Header from "../Components/Commons/Header/Header"
import FollowList from "../Components/Profile/FollowList/FollowList"
import { useParams } from "react-router-dom";

function FollowDetailPage() {
  const {accountName , type} = useParams()
  console.log(type)
  return (
    <>
      <Header type={type}/>
      <FollowList />
    </>
  )
}

export default FollowDetailPage;
