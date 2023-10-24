import React, { useState } from "react";
import Header from "../Components/Commons/Header/Header";
import ProfileDetail from "../Components/Profile/ProfileDetail/ProfileDetail";
import Recruit from "../Components/Profile/Recruit/Recruit";
import MyPostList from "../Components/Profile/MyPostList/MyPostList";
import Footer from "../Components/Commons/Footer";
import { useParams } from "react-router-dom";

function ProfilePage() {
  // UserProfile의 경로 profile/:id 에서 :id를 가져온 뒤 id 변수에 할당
  const { accountname } = useParams();
  // id값이 존재하지 않으면 myProfile이 됨
  const isMyProfile = !accountname;

  // 팔로우 상태
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <div style={{ backgroundColor: "#f2f2f2" }}>
      <Header type={isMyProfile ? "myProfile" : "userProfile"} />
      <ProfileDetail
        isMyProfile={isMyProfile}
        isFollowing={isFollowing}
        setIsFollowing={setIsFollowing}
      />
      {/* 팔로우가 되어있을 때만 Recruit, MyPostList 컴포넌트가 렌더링 됨 */}
      {/* 현재 팔로우 기능이 구현되지 않았기 때문에, 초기값은 true(팔로잉)이므로 두 컴포넌트 다 렌더링됩니다. */}
      {isFollowing && (
        <>
          <Recruit />
          <MyPostList isMyProfile={isMyProfile} />
        </>
      )}
      <Footer />
    </div>
  );
}

export default ProfilePage;
