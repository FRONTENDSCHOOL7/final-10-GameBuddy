import React from "react";
import styled from "styled-components";
import LoadingGIF from "../../assets/image/Loading.gif";

export const LoadingContainer = styled.div`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #ffffffb7;
  color: #8ea1e1;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.div`
  font: 1rem "Noto Sans KR";
  text-align: center;
  font-size: 20px;
`;

export default function Loading() {
  return (
    <LoadingContainer>
      <img src={LoadingGIF} alt="로딩중" width="18%" />
      <LoadingText>Loading . . .</LoadingText>
    </LoadingContainer>
  );
}
