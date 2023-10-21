import React, { useState } from "react";
import * as S from "./HeaderStyle";
import { ReactComponent as GoBackIcon } from "../../../assets/image/icon-goback.svg";
import { ReactComponent as SearchIcon } from "../../../assets/image/icon-search.svg";
import { ReactComponent as MoreIcon } from "../../../assets/image/icon-more.svg";
import { ReactComponent as SirenIcon } from "../../../assets/image/icon-siren.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/image/icon-logout.svg";
import { useNavigate } from "react-router-dom";

export default function Header({ type }) {
  const navigate = useNavigate();

  // goBack 버튼: 이전 페이지로 이동
  const goBack = () => {
    navigate(-1);
  };

  // 페이지별 헤더 레이아웃 (각 버튼 경로 재설정 필요)
  const HeaderLayout = {
    main: (
      <S.HeaderContainer>
        <S.Logo>Game Buddy</S.Logo>
        <S.StyledIconButton type="button">
          <SearchIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    search: (
      <S.HeaderContainer>
        <S.StyledIconButton onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.Input id="search" placeholder="계정 검색" />
      </S.HeaderContainer>
    ),
    userProfile: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.StyledIconButton type="button">
          <SirenIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    myProfile: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.StyledIconButton>
          <LogoutIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    followers: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.FollowersTitle>followers</S.FollowersTitle>
      </S.HeaderContainer>
    ),
    profileMod: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    chat: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.StyledIconButton>
          <MoreIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    )
  };
  return <div>{HeaderLayout[type]}</div>;
}
