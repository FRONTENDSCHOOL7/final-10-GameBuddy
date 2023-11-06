import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import BgImg from "../../assets/image/ground.jpg";
import CharImg from "../../assets/image/main_char.svg";
import { useNavigate } from "react-router-dom";

const moveBackground = keyframes`
  0% {
    background-position: 100% 0%;
  }
  100% {
    background-position: 0% 100%;
  }
`;

const SplashContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1500;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-image: url(${BgImg});
  background-size: contain;
  animation: ${moveBackground} 15s linear infinite;
`;

const SplashCharImg = styled.img`
  width: 180px;
  height: 100px;
`;

const SplashLogo = styled.h1`
  color: white;
  font-size: 24px;
  margin-top: 20px;
  font-family: var(--Black-ops);
`;

function Splash() {
  const navigate = useNavigate();

  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/main");
  //   }, 2000);
  // }, []);

  return (
    <SplashContainer>
      <SplashCharImg src={CharImg} alt="메인 캐릭터" />
      <SplashLogo>Gamd Buddy</SplashLogo>
    </SplashContainer>
  );
}
export default Splash;
