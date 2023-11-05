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
    width: 72px;
    height: calc(100vh - 55px);
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 20px;
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
    font-size: 0px;
    flex-direction: row;
    align-items: center;
    gap: 10px;
    height: auto;
    padding: 50px 0 0 23px;
    position: relative;

    span {
      position: absolute;
      top: 85%;
      left: 100%; // 오른쪽으로 위치
      transform: translateY(-50%); // 세로 가운데 정렬
      opacity: 0;
      background: var(--color-purple);
      color: white;
      border-radius: 4px;
      padding: 4px 8px;
      font-size: 12px;
      white-space: nowrap; // 텍스트를 한 줄로 표시
      transition: opacity 0.3s ease-in-out;
      box-shadow: 0px 0px 8px #ffffff90;
    }

    &:hover span {
      opacity: 1;
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
