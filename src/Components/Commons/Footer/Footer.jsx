import React, { useState, useEffect } from "react";
import * as S from "./FooterStyle";
import { useNavigate, useLocation } from "react-router-dom";
import myInfoAPI from "../../../API/myInfoAPI";
import { useRecoilState } from "recoil";
import { myDataAtom } from "../../../Store/Store";
import {
  StyledHomeIcon,
  StyledSearchIcon,
  StyledChatIcon,
  StyledWriteIcon,
  StyledProfileIcon
} from "./FooterStyle";

// isSpecialPage : Footer width-72px을 적용해야하는 경우
function Footer({ isSpecialPage }) {
  const [myData, setMyData] = useRecoilState(myDataAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const fetchData = async () => {
      const myInfo = await myInfoAPI();
      setMyData({
        _id: myInfo.user._id,
        accountname: myInfo.user.accountname,
        following: myInfo.user.following,
        follower: myInfo.user.follower
      });
    };
    fetchData();
  }, []);

  const menus = [
    { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
    { name: "검색", icon: StyledSearchIcon, path: "/search", id: "search" },
    { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
    { name: "게시물 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
    {
      name: "프로필",
      icon: StyledProfileIcon,
      path: `/profile/${myData.accountname}`,
      id: "profile"
    }
  ];

  const getInitialActive = () => {
    const matchedMenu = menus.find((menu) =>
      location.pathname.startsWith(menu.path)
    );
    return matchedMenu ? matchedMenu.id : "home";
  };

  const [$active, setActive] = useState(getInitialActive);

  return (
    <S.FooterContainer isSpecialPage={isSpecialPage}>
      {menus.map((menu) => {
        const Icon = menu.icon;
        const isChatItem = menu.id === "chat";
        return (
          <S.Item
            isSpecialPage={isSpecialPage}
            id={menu.id}
            key={menu.id}
            onClick={() => {
              setActive(menu.id);
              navigate(menu.path);
            }}
            $active={$active === menu.id}
            $specificItem={isChatItem}>
            <Icon $active={$active === menu.id} $specificItem={isChatItem} />
            <span>{menu.name}</span>
          </S.Item>
        );
      })}
    </S.FooterContainer>
  );
}

export default Footer;
