import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import tokenValidAPI from "../API/tokenValidAPI";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer/Footer";
import PostList from "../Components/Main/PostList";
import { useSetRecoilState, useRecoilValue } from "recoil";
import { checkMyInfo, isTouchFeed } from "../Store/Store";
import myInfoAPI from "../API/myInfoAPI";
import CommonDetailModal from "../Components/Commons/DetailModal/CommonDetailModal";

function MainFeedPage() {
  const [tokenValid, setTokenValid] = useState(true);
  const isVisible = useRecoilValue(isTouchFeed);
  const setMyInfo = useSetRecoilState(checkMyInfo);

  useEffect(() => {
    async function fetchData() {
      const obj = await myInfoAPI();
      setMyInfo(obj);
      tokenValidAPI(setTokenValid);
    }
    fetchData();
  }, []);

  return tokenValid ? (
    <>
      <Header type="main" />
      <PostList />
      <Footer />
      {isVisible && <CommonDetailModal />}
    </>
  ) : (
    <Navigate to="/login" />
  );
}

export default MainFeedPage;
