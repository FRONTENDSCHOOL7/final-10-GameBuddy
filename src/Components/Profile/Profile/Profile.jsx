import React from "react";
import * as S from "./ProfileStyle";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        {/* AccountName 넣을 자리 */}
        <S.AccountName>@game_buddy12</S.AccountName>
        <S.ProfileSection>
          {/* 프로필 사진 */}
          <S.ProfileImage alt="프로필 이미지" />
          <S.ProfileStat>
            <S.StatContent>
              <S.StatButton onClick={() => navigate("/followers")}>
                {/* 팔로워 수 */}
                <strong>2950</strong>
                <div>followers</div>
              </S.StatButton>
            </S.StatContent>
            <S.StatContent>
              <S.Stat>
                {/* 게시글 수 */}
                <strong>128</strong>
                <div>Post</div>
              </S.Stat>
            </S.StatContent>
            <S.StatContent>
              <S.StatButton onClick={() => navigate("/followers")}>
                {/* 팔로잉 수 */}
                <strong>290</strong>
                <div>followings</div>
              </S.StatButton>
            </S.StatContent>
          </S.ProfileStat>
        </S.ProfileSection>
      </S.ProfileHeader>
      <S.ProfileDescription>
        {/* userName */}
        <S.UserName>벌크업뱅</S.UserName>
        {/* 소개글 */}
        <S.DescriptionText>안녕하세요 반갑섭니다리</S.DescriptionText>
      </S.ProfileDescription>
      <S.ButtonContainer>
        <S.Button onClick={() => navigate("/chat")}>채팅하기</S.Button>
        <S.Button>언팔로우하기</S.Button>
      </S.ButtonContainer>
    </S.ProfileContainer>
  );
}

export default Profile;
