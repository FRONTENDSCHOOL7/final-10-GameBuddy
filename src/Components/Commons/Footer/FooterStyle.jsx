import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../../assets/image/HomeIcon.svg";
import { ReactComponent as SearchIcon } from "../../../assets/image/icon-search.svg";
import { ReactComponent as ChatIcon } from "../../../assets/image/ChatIcon.svg";
import { ReactComponent as WriteIcon } from "../../../assets/image/WriteIcon.svg";
import { ReactComponent as ProfileIcon } from "../../../assets/image/ProfileIcon.svg";

export const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: #25282d;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 900;
  border-top: 1px solid #5c5c5c;

  @media screen and (min-width: 768px) {
    left: 0;
    width: 260px;
    height: calc(100vh - 55px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
    /* border-right: 1px solid #dbdbdb; */

    // 웹 화면에서 작은 footer 사용시 (ex. chat)
    width: ${({ isSpecialPage }) => (isSpecialPage ? "72px" : "200px")};
  }
`;

export const Item = styled.button`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 10px 6px 10px;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4ff")};

  &:hover {
    transform: scale(1.2);
  }
  @media screen and (max-width: 767px) {
    // 검색 아이콘에 해당하는 항목만 숨깁니다.
    ${({ id }) =>
      id === "search" &&
      `
        display: none;
      `}
  }

  @media screen and (min-width: 768px) {
    font-size: 20px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: auto;
    padding: 50px 0 0 42px;
    ${({ isSpecialPage }) =>
      isSpecialPage &&
      `
        padding-left: 23px;
      `}
  }

  span {
    padding-top: 2px;
    ${({ $specificItem }) =>
      $specificItem &&
      `
        margin-right: 5px;  
        margin-top: 1px;
      `}
    @media screen and (min-width: 768px) {
      ${({ isSpecialPage }) =>
        isSpecialPage &&
        `
        font-size: 0; // 글자 사이즈를 0으로 설정하여 텍스트를 숨김
      `}
    }
  }
`;

export const StyledHomeIcon = styled(HomeIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
    fill: none;
  }
`;

export const StyledSearchIcon = styled(SearchIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
    fill: none;
  }

  @media screen and (max-width: 768px) {
    path {
      stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
      fill: none;
    }
  }
`;

export const StyledChatIcon = styled(ChatIcon)`
  margin-right: 3px;
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
  }
  ${({ $specificItem }) =>
    $specificItem &&
    `
      margin-right: 5px; 
    `}

  @media screen and (min-width: 768px) {
    ${({ $specificItem }) =>
      $specificItem &&
      `
        margin-right: 0px;  // 원래의 스타일로 복원합니다.
      `}
  }
`;

export const StyledWriteIcon = styled(WriteIcon)`
  margin-bottom: 1px;
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
  }
  rect {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
  }
`;

export const StyledProfileIcon = styled(ProfileIcon)`
  width: 20px;
  height: 20px;
  margin-bottom: 1px;
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#a4a4a4")};
  }

  @media screen and (min-width: 768px) {
    padding-left: 1px;
    margin-top: 0px;
  }
`;
