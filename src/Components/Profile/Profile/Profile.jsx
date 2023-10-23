import React from "react";
import * as S from "./ProfileStyle";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();

  return (
    <S.ProfileContainer>
      <S.ProfileHeader>
        <S.AccountName>@game_buddy12</S.AccountName>
        <S.ProfileSection>
          <S.ProfileImage alt="프로필 이미지" />
          <S.ProfileStat>
            <S.StatContent>
              <S.StatButton onClick={() => navigate("/followers")}>
                <strong>2950</strong>
                <div>followers</div>
              </S.StatButton>
            </S.StatContent>
            <S.StatContent>
              <S.Stat>
                <strong>128</strong>
                <div>Post</div>
              </S.Stat>
            </S.StatContent>
            <S.StatContent>
              <S.StatButton onClick={() => navigate("/followers")}>
                <strong>290</strong>
                <div>followings</div>
              </S.StatButton>
            </S.StatContent>
          </S.ProfileStat>
        </S.ProfileSection>
      </S.ProfileHeader>
      <S.ProfileDescription>
        <S.UserName>벌크업뱅</S.UserName>
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
