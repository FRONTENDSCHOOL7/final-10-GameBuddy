import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Components/Commons/Header/Header";
import Footer from "../Components/Commons/Footer/Footer";
import ChattingList from "../Components/Chat/ChattingList";
import ChattingRoom from "../Components/Chat/ChattingRoom";
import { useLocation } from "react-router-dom";

function ChattingListPage() {
  // 화면 크기에 따라 컴포넌트 렌더링을 다르게 하기 위함
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);

  // 화면을 새로고침하지 않아도 resize가 적용되도록 하기 위함
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너를 제거
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // chat페이지에 footer 디자인을 다르게 하기 위함(props 전달)
  const location = useLocation();
  const isSpecialPage = location.pathname === "/chat";

  // 화면 크기 조건에 따라 렌더링 되는 컴포넌트가 다름
  return (
    <>
      <Header type={"chat"} />
      {isDesktop ? (
        <MaxChatContainer>
          <ChattingList />
          <ChattingRoom />
        </MaxChatContainer>
      ) : (
        <>
          <ChattingList />
        </>
      )}
      <Footer isSpecialPage={isSpecialPage} />
    </>
  );
}

export default ChattingListPage;

// 웹 화면 레이아웃 배치를 위함
const MaxChatContainer = styled.div`
  display: flex;
`;
