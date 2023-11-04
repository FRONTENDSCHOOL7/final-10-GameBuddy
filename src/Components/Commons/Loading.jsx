import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import MainChar from "../../assets/image/main_char.svg";

// 로딩 바에 대한 애니메이션
const fillAnimation = keyframes`
  0% {
    width: 0;
  }
  100% {
    width: 100%;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: #282c32;
`;

const CharacterImage = styled.div`
  /* 이미지 파일을 불러옴 */
  background-image: url(${MainChar});
  background-repeat: no-repeat;
  width: 180px;
  height: 100px;
  background-color: #282c32; /* 캐릭터 색상 예시 */
`;

const LoadingBar = styled.div`
  width: 100px;
  height: 20px;
  background-color: #ccc;
  margin-top: 20px;
  overflow: hidden;

  &::before {
    content: "";
    display: block;
    height: 100%;
    width: 0;
    background-color: var(--color-purple); /* 로딩 바 색상 예시 */
    animation: ${fillAnimation} 2s linear infinite; /* 로딩 바 애니메이션 */
  }
`;

const LoadingText = styled.div`
  color: white;
  font-size: 24px;
  margin-top: 20px;
  font-family: var(--Black-ops);
`;

function LoadingPage() {
  //   const text = "Loading...";
  //   const [visibleText, setVisibleText] = useState("");

  //   useEffect(() => {
  //     let index = 0;
  //     const interval = setInterval(() => {
  //       setVisibleText(text.slice(0, index));
  //       index++;

  //       if (index > text.length) {
  //         clearInterval(interval);
  //       }
  //     }, 200); // 글자가 나타나는 속도 (200ms마다)
  //   }, []);

  return (
    <Container>
      <CharacterImage />
      <LoadingBar />
      <LoadingText>Loading . . .</LoadingText>
    </Container>
  );
}

export default LoadingPage;
