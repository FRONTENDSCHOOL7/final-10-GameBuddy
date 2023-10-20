import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/image/icon-home.svg";
import { ReactComponent as ChatIcon } from "../../assets/image/icon-message-circle.svg";
import { ReactComponent as WriteIcon } from "../../assets/image/icon-write.svg";
import { ReactComponent as ProfileIcon } from "../../assets/image/icon-user.svg";

function Footer() {
  // const navigate = useNavigate();

  const menus = [
    { name: "홈", icon: HomeIcon, path: "/main", id: "home" },
    { name: "채팅", icon: ChatIcon, path: "/chat", id: "chat" },
    { name: "게시물 작성", icon: WriteIcon, path: "/write", id: "write" },
    { name: "프로필", icon: ProfileIcon, path: "/profile", id: "profile" }
  ];

  return (
    <FooterContainer>
      {menus.map((menu) => (
        <Item
          key={menu.id}
          onClick={() => {
            // navigate(menu.path);
          }}>
          <menu.icon />
          <span>{menu.name}</span>
        </Item>
      ))}
    </FooterContainer>
  );
}

export default Footer;
