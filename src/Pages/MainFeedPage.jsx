import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import tokenValidAPI from "../API/tokenValidAPI";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer";
// import SwitchMode from "../Components/Main/SwitchMode";
import PostList from "../Components/Main/PostList";
import PostDetailModal from "../Components/Main/PostDeatilModal/PostDetailModal";
import { useRecoilValue } from "recoil";
import { isTouchFeed } from "../Store/Store";

function MainFeedPage() {
  const [tokenValid, setTokenValid] = useState(true);
  const isVisible = useRecoilValue(isTouchFeed);

  tokenValidAPI(setTokenValid);

  return tokenValid ? (
    <>
      <Header type="main" />
      <PostList />
      <Footer />
      {isVisible && <PostDetailModal />}
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default MainFeedPage;
