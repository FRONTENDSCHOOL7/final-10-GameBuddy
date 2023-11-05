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
function Footer() {
  const [myData, setMyData] = useRecoilState(myDataAtom);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      const fetchData = async () => {
        try {
          const myInfo = await myInfoAPI();
          setMyData({
            _id: myInfo.user._id,
            accountname: myInfo.user.accountname,
            following: myInfo.user.following,
            follower: myInfo.user.follower
          });
        } catch (error) {
          console.log("myInfo api 에러", error);
        }
      };
      fetchData();
    }
  }, []);

  const menus = [
    { name: "홈", icon: StyledHomeIcon, path: "/main", id: "home" },
    { name: "검색", icon: StyledSearchIcon, path: "/search", id: "search" },
    { name: "채팅", icon: StyledChatIcon, path: "/chat", id: "chat" },
    { name: "게시글 작성", icon: StyledWriteIcon, path: "/write", id: "write" },
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
    return matchedMenu ? matchedMenu.id : "profile"; // 매칭 안됐을 때 profile로 이동하게 함 (profile 색상 이동 오류를 막기 위해)
  };

  const [$active, setActive] = useState(getInitialActive);

  return (
    <S.FooterContainer>
      {menus.map((menu) => {
        const Icon = menu.icon;
        return (
          <S.Item
            id={menu.id}
            key={menu.id}
            onClick={() => {
              setActive(menu.id);
              navigate(menu.path);
            }}
            $active={$active === menu.id}>
            <Icon $active={$active === menu.id} />
            <span>{menu.name}</span>
          </S.Item>
        );
      })}
    </S.FooterContainer>
  );
}

export default Footer;
