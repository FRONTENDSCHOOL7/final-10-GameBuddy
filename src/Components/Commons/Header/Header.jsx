import React, { useState } from "react";
import * as S from "./HeaderStyle";
import { ReactComponent as GoBackIcon } from "../../../assets/image/icon-goback.svg";
import { ReactComponent as SearchIcon } from "../../../assets/image/icon-search.svg";
import { ReactComponent as MoreIcon } from "../../../assets/image/icon-more.svg";
import { ReactComponent as SirenIcon } from "../../../assets/image/icon-siren.svg";
import { ReactComponent as LogoutIcon } from "../../../assets/image/icon-logout.svg";
import { useNavigate } from "react-router-dom";
import SearchModal from "../../Search/SearchModal";

export default function Header({ type }) {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/");
  }

  // // 헤더 검색 아이콘 : /search 페이지 이동
  // const handleSearchClick = () => {
  //   navigate("/search");
  // };

  // goBack 버튼: 이전 페이지로 이동
  const goBack = () => {
    navigate(-1);
  };

  // 더보기, 신고하기, 로그아웃 버튼 모달 (action 함수 수정 필요)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState([]);
  const [isSearchModalOpen, setIsSearchModalOpen] = useState(false);

  const openChatModal = () => {
    setModalContent([
      { text: "채팅방 나가기", action: closeModal },
      { text: "신고하기", action: closeModal },
      { text: "뒤로가기", action: closeModal }
    ]);
    openModal();
  };

  const openSirenModal = () => {
    setModalContent([{ text: "사용자 신고하기", action: closeModal }]);
    openModal();
  };

  const openLogoutModal = () => {
    setModalContent([
      { text: "로그아웃", action: logout },
      { text: "뒤로가기", action: closeModal }
    ]);
    openModal();
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  // 검색 아이콘 클릭 시 동작을 설정
  const handleSearchIconClick = () => {
    if (window.innerWidth <= 768) {
      navigate("/search"); // /search 페이지로 이동
    } else {
      setIsSearchModalOpen(!isSearchModalOpen); // SearchModal 모달 열기
    }
  };

  const openSearchModal = () => {
    setIsSearchModalOpen(true);
  };

  const closeSearchModal = () => {
    setIsSearchModalOpen(false);
  };

  // 페이지별 헤더 레이아웃 (각 버튼 경로 재설정 필요)
  const HeaderLayout = {
    main: (
      <S.HeaderContainer>
        <S.Logo>Game Buddy</S.Logo>
        {/* <S.StyledIconButton type="button" onClick={handleSearchIconClick}>
          <SearchIcon />
        </S.StyledIconButton> */}
      </S.HeaderContainer>
    ),

    // Search 헤더: Search Component 내부로 이동

    userProfile: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.StyledIconButton type="button" onClick={openSirenModal}>
          <SirenIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    myProfile: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.StyledIconButton onClick={openLogoutModal}>
          <LogoutIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    follower: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.FollowersTitle>followers</S.FollowersTitle>
      </S.HeaderContainer>
    ),
    following: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.FollowersTitle>followings</S.FollowersTitle>
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
        <S.StyledIconButton onClick={openChatModal}>
          <MoreIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    ),
    signUp: (
      <S.HeaderContainer>
        <S.StyledIconButton type="button" onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
      </S.HeaderContainer>
    )
  };
  return (
    <div>
      {HeaderLayout[type]}

      {/* 버튼 클릭 시 나타나는 모달 */}
      {isModalOpen && (
        <S.ModalContainer onClick={closeModal}>
          <S.ModalContent
            onClick={(e) => e.stopPropagation()}
            btnColor={"#2c2f33"}>
            {modalContent.map((item, index) => (
              <S.ModalItem key={index} onClick={() => item.action()}>
                {item.text}
              </S.ModalItem>
            ))}
          </S.ModalContent>
        </S.ModalContainer>
      )}

      {/* 검색 모달 */}
      {isSearchModalOpen && <SearchModal />}
    </div>
  );
}
