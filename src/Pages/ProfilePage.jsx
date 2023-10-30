import React, { useState, useEffect } from "react";
import Header from "../Components/Commons/Header/Header";
import ProfileDetail from "../Components/Profile/ProfileDetail/ProfileDetail";
import Recruit from "../Components/Profile/Recruit/Recruit";
import MyPostList from "../Components/Profile/MyPostList/MyPostList";
import Footer from "../Components/Commons/Footer";
import { useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../Store/Store";
import { myDataAtom } from "../Store/Store";
import { userPostListAtom } from "../Store/Store";
import userInfoAPI from "../API/userInfoAPI";
import userPostListAPI from "../API/userPostListAPI";

function ProfilePage() {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [userPostList, setUserPostList] = useRecoilState(userPostListAtom);
  const [myData] = useRecoilState(myDataAtom);
  const { accountname } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await userInfoAPI(accountname);
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
      console.log(userPostList);
      setUserPostList({
        postList: userPostList
      });
    };
    fetchData();
  }, [accountname]);

  // true면 마이 프로필
  let isMyProfile = accountname === myData.accountname;

  // 팔로우 상태
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Header type={isMyProfile ? "myProfile" : "userProfile"} />
      <ProfileDetail
        isMyProfile={isMyProfile}
        isFollowing={isFollowing}
        setIsFollowing={setIsFollowing}
        accountname={accountname}
      />
      {/* 팔로우가 되어있을 때만 Recruit, MyPostList 컴포넌트가 렌더링 됨 */}
      {/* 현재 팔로우 기능이 구현되지 않았기 때문에, 초기값은 true(팔로잉)이므로 두 컴포넌트 다 렌더링됩니다. */}
      {isFollowing && (
        <>
          <Recruit isMyProfile={isMyProfile} />
          <MyPostList isMyProfile={isMyProfile} accountname={accountname} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default ProfilePage;
