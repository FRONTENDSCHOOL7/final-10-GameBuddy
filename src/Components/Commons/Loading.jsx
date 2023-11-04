import React from "react";
import styled, { keyframes } from "styled-components";
import LoadingGIF from "../../assets/image/Loading.gif";
import MainChar from "../../assets/image/main_char.png";
import MainCharFace from "../../assets/image/main_char_face.svg";
import MainCharHead from "../../assets/image/main_char_head.svg";
import MainCharPoint from "../../assets/image/main_char_point.svg";

// 헤드폰에 대한 애니메이션 (현재 주석처리(사용x))
const rubberBand = keyframes`
  from, to {
    transform: scale(1);
  }
  30% {
    transform: scaleX(1.25);
  }
  40% {
    transform: scaleX(0.75);
  }
  50% {
    transform: scaleX(1.15);
  }
  65% {
    transform: scaleX(0.95);
  }
  75% {
    transform: scaleX(1.05);
  }
`;

// loading text에 대한 애니메이션 (현재 주석처리(사용x))
const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

// pointImage에 대한 애니메이션 (사용중)
const scaleAnimation = keyframes`
  0%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(2);
  }
`;

export const LoadingContainer = styled.div`
  position: fixed; /* 화면 전체에 고정된 요소로 설정 */
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 1); /* 로딩 페이지 배경 색상 및 투명도 설정 */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  z-index: 1500; /* 다른 요소 위로 표시하려면 z-index 설정 */
  background-color: #2c2f33;
`;

export const CharacterContainer = styled.div`
  position: relative;
  width: 20vmin;
  max-width: 300px;
`;

export const FaceImage = styled.img`
  position: absolute;
  top: -18vmin;
  left: 1vmin;
  width: 15vmin;
  max-width: 250px;
`;

export const HeadImage = styled.img`
  position: absolute;
  top: -26vmin;
  left: -10vmin;
  width: 36vmin;
  max-width: 400px;
  opacity: 1;
  /* animation: ${rubberBand} 0.1s 0.05s alternate; */
`;

export const PointImage = styled.img`
  position: absolute;
  top: -21vmin;
  left: 6vmin;
  width: 3vmin;
  max-width: 50px;
  animation: ${scaleAnimation} 0.5s alternate;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  font-size: 5vmin;

  span {
    display: inline-block;
    opacity: 1;
    /* animation: ${fadeIn} 0.125s forwards, ${fadeIn} 0.125s forwards 1.55s; */

    &:nth-child(1) {
      animation-delay: 0.075s, 1.65s;
    } // L
    &:nth-child(2) {
      animation-delay: 0.15s, 1.725s;
    } // o
    &:nth-child(3) {
      animation-delay: 0.225s, 1.8s;
    } // a
    &:nth-child(4) {
      animation-delay: 0.3s, 1.875s;
    } // d
    &:nth-child(5) {
      animation-delay: 0.375s, 1.95s;
    } // i
    &:nth-child(6) {
      animation-delay: 0.45s, 2.025s;
    } // n
    &:nth-child(7) {
      animation-delay: 0.525s, 2.1s;
    } // g
    &:nth-child(9) {
      animation-delay: 0.6s, 2.175s;
    } // space
    &:nth-child(11) {
      animation-delay: 0.675s, 2.25s;
    }
    &:nth-child(13) {
      animation-delay: 0.75s, 2.325s;
    }
  }
`;

export default function Loading() {
  const fullText = "Loading . . .";

  return (
    <LoadingContainer>
      <CharacterContainer>
        <FaceImage src={MainCharFace} alt="메인 캐릭터 얼굴" />
        <HeadImage src={MainCharHead} alt="메인 캐릭터 헤드폰" />
        <PointImage src={MainCharPoint} alt="메인 캐릭터 불빛" />
      </CharacterContainer>
      <LoadingText>
        {fullText.split("").map((char, index) => (
          <span key={index}>{char}</span>
        ))}
      </LoadingText>
    </LoadingContainer>
  );
}
