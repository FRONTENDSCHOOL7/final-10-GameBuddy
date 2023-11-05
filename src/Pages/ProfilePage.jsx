import React, { useState, useEffect } from "react";
import Header from "../Components/Commons/Header/Header";
import ProfileDetail from "../Components/Profile/ProfileDetail/ProfileDetail";
import Recruit from "../Components/Profile/Recruit/Recruit";
import MyPostList from "../Components/Profile/MyPostList/MyPostList";
import Footer from "../Components/Commons/Footer/Footer";
import { useParams } from "react-router-dom";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import { checkMyInfo, isTouchFeed, userDataAtom } from "../Store/Store";
import { myDataAtom } from "../Store/Store";
import { userPostListAtom } from "../Store/Store";
import userInfoAPI from "../API/userInfoAPI";
import userPostListAPI from "../API/userPostListAPI";
// import MyPostDetailModal from "../Components/Profile/MyPostList/MyPostDetailModal/MyPostDetailModal";
import myInfoAPI from "../API/myInfoAPI";
import CommonDetailModal from "../Components/Commons/DetailModal/CommonDetailModal";
import Loading from "../Components/Commons/Loading";

function ProfilePage() {
  const setUserData = useSetRecoilState(userDataAtom);
  const resetUserData = useResetRecoilState(userDataAtom);
  const setUserPostList = useSetRecoilState(userPostListAtom);
  const resetPostList = useResetRecoilState(userPostListAtom);
  const [myData] = useRecoilState(myDataAtom);
  const [userData] = useRecoilState(userDataAtom);
  const { accountname } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  const isVisible = useRecoilValue(isTouchFeed);

  const setMyInfo = useSetRecoilState(checkMyInfo);
  // true면 마이 프로필
  let isMyProfile = accountname === myData.accountname;

  // 팔로우 상태
  const [isFollowing, setIsFollowing] = useState(true);

  useEffect(() => {
    // userData가 유효한지 확인하고 isFollowing 상태를 업데이트
    if (userData && userData._id) {
      setIsFollowing(myData.following.includes(userData._id));
    }
  }, [myData, userData]); // myData와 userData가 변경될 때마다 호출
  
  

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const obj = await myInfoAPI();
      setMyInfo(obj);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      resetUserData();
      resetPostList();
      const userInfo = await userInfoAPI(accountname);
      console.log(userInfo);
      setUserData({
        _id: userInfo.profile._id,
        username: userInfo.profile.username,
        accountname: userInfo.profile.accountname,
        image: userInfo.profile.image,
        intro: userInfo.profile.intro,
        followerCount: userInfo.profile.followerCount,
        followingCount: userInfo.profile.followingCount
      });
      const userPostList = await userPostListAPI(accountname);
      setUserPostList(userPostList);
      setIsLoading(false);
    };
    fetchData();
  }, [accountname]);

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 <Loading/> 렌더링
  }

  return (
    <div style={{ backgroundColor: "#3f4246", height: "100vh" }}>
      <Header type={isMyProfile ? "myProfile" : "userProfile"} />
      <ProfileDetail
        isMyProfile={isMyProfile}
        isFollowing={isFollowing}
        setIsFollowing={setIsFollowing}
        accountname={accountname}
      />
      {/* 팔로우가 되어있을 때만 Recruit, MyPostList 컴포넌트가 렌더링 됨 */}
      {isFollowing && (
        <>
          <Recruit isMyProfile={isMyProfile} />
          <MyPostList isMyProfile={isMyProfile} accountname={accountname} />
        </>
      )}
      <Footer />
      {/* {isVisible && <MyPostDetailModal />} */}
      {isVisible && <CommonDetailModal />}
    </div>
  );
}

export default ProfilePage;
