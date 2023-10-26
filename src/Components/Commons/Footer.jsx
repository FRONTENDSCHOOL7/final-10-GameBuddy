import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as HomeIcon } from "../../assets/image/HomeIcon.svg";
import { ReactComponent as ChatIcon } from "../../assets/image/ChatIcon.svg";
import { ReactComponent as WriteIcon } from "../../assets/image/WriteIcon.svg";
import { ReactComponent as ProfileIcon } from "../../assets/image/ProfileIcon.svg";
import myInfoAPI from "../../API/myInfoAPI";
import { useRecoilState } from "recoil";
import { userAccountNameAtom } from "../../Store/Store";

function Footer() {
  const [userData, setUserData] = useRecoilState(userAccountNameAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const myInfo = await myInfoAPI();
      setUserData({
        accountname: myInfo.user.accountname
      });
    };
    fetchData();
  }, []);

  const menus = [
    { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
    { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
    { name: "게시물 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
    {
      name: "프로필",
      icon: StyledProfileIcon,
      path: `/profile/${userData.accountname}`,
      id: "profile"
    }
  ];

  const getInitialActive = () => {
    const matchedMenu = menus.find((menu) => menu.path === location.pathname);
    return matchedMenu ? matchedMenu.id : "home";
  };

  const [$active, setActive] = useState(getInitialActive);

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

const FooterContainer = styled.footer`
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;

  position: fixed;
  bottom: 0;
  left: 0;
  width: 100vw;
  z-index: 1000;
  border-top: 1px solid #dbdbdb;
`;

const Item = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 6px;
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
