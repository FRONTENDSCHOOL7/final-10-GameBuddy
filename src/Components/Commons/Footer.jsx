import React, { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/image/HomeIcon.svg";
import { ReactComponent as ChatIcon } from "../../assets/image/ChatIcon.svg";
import { ReactComponent as WriteIcon } from "../../assets/image/WriteIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/image/ProfileIcon.svg";

function Footer() {
  const [$active, setActive] = useState("home");
  const navigate = useNavigate();

  const menus = [
    { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
    { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
    { name: "게시물 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
    { name: "프로필", icon: StyledProfileIcon, path: "/profile", id: "profile" }
  ];

  return (
    <FooterContainer>
      {menus.map((menu) => {
        const Icon = menu.icon;
        return (
          <Item
            key={menu.id}
            onClick={() => {
              setActive(menu.id);
              navigate(menu.path);
            }}
            $active={$active === menu.id}>
            <Icon $active={$active === menu.id} />
            <span>{menu.name}</span>
          </Item>
        );
      })}
    </FooterContainer>
  );
}

export default Footer;

/* position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw; */
/* 하단 Footer 고정시키는 코드 */

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
`;

const Item = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: none;
  border: none;
  cursor: pointer;
  color: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
`;

const StyledHomeIcon = styled(HomeIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
    /* fill: ${({ $active }) => ($active ? "#5865F2" : "none")}; */
  }
`;

const StyledChatIcon = styled(ChatIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
    /* fill: ${({ $active }) => ($active ? "#5865F2" : "none")}; */
  }
`;

const StyledWriteIcon = styled(WriteIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
    /* fill: ${({ $active }) => ($active ? "#5865F2" : "none")}; */
  }
  rect {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
    /* fill: ${({ $active }) => ($active ? "#5865F2" : "none")}; */
  }
`;

const StyledProfileIcon = styled(ProfileIcon)`
  path {
    stroke: ${({ $active }) => ($active ? "#5865F2" : "#A4A4A4")};
    /* fill: ${({ $active }) => ($active ? "#5865F2" : "none")}; */
  }
`;
