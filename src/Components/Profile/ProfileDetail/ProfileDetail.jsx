import React, { useEffect, useState } from "react";
import * as S from "./ProfileDetailStyle";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState  } from "recoil";
import { userDataAtom } from "../../../Store/Store";
import { userPostListAtom } from "../../../Store/Store";

function Profile({ isMyProfile, accountname }) {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [userPostList] = useRecoilState(userPostListAtom);
  const navigate = useNavigate();
  // const { accountname } = useParams()

  //팔로잉 여부
  const [isFollowing, setIsFollowing] = useState(true);

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        {/* AccountName 넣을 자리 */}
        <S.AccountName>{userData.accountname}</S.AccountName>
        <S.ProfileSection>
          {/* 프로필 사진 */}
          <S.ProfileImage src={userData.image} alt="" />
          <S.ProfileStat>
            <S.StatContent>
              <S.StatButton onClick={() => navigate(`/profile/${accountname}/follower`)}>
                {/* 팔로워 수 */}
                <strong>{userData.followerCount}</strong>
                <div>followers</div>
              </S.StatButton>
            </S.StatContent>
            <S.StatContent>
              <S.Stat>
                {/* 게시글 수 */}
                <strong>{userPostList.postList.length}</strong>
                <div>Post</div>
              </S.Stat>
            </S.StatContent>
            <S.StatContent>
              <S.StatButton onClick={() => navigate(`/profile/${accountname}/following`)}>
                {/* 팔로잉 수 */}
                <strong>{userData.followingCount}</strong>
                <div>followings</div>
              </S.StatButton>
            </S.StatContent>
          </S.ProfileStat>
        </S.ProfileSection>
      </S.ProfileHeader>
      <S.ProfileDescription>
        {/* userName */}
        <S.UserName>{userData.username}</S.UserName>
        {/* 소개글 */}
        <S.DescriptionText>{userData.intro}</S.DescriptionText>
      </S.ProfileDescription>
      <S.ButtonContainer>
        {/* 나의 프로필인지 아닌지에 따라 이동경로와 내용 달라짐 */}
        <S.Button
          onClick={() => (isMyProfile ? navigate("/fix") : navigate("/chat"))}>
          {isMyProfile ? "프로필 수정하기" : "채팅하기"}
        </S.Button>
        {/* 나의 프로필인지 아닌지에 따라 이동경로와 내용 달라짐 */}
        {/* 팔로잉 상태에 따라 버튼 내용 달라짐 */}
        <S.Button
          onClick={() =>
            isMyProfile ? navigate("/write") : setIsFollowing(!isFollowing)
          }>
          {isMyProfile
            ? "게시글 작성하기"
            : isFollowing
            ? "언팔로우하기"
            : "팔로우하기"}
        </S.Button>
      </S.ButtonContainer>
    </S.ProfileContainer>
  );
}

export default Profile;
