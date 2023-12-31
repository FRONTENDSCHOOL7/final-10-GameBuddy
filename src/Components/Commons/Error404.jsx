import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import ErrorImage from "../../assets/image/Error404.png";

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-family: "Black Ops One", sans-serif;
  background-color: #2c2f33;

  h3 {
    color: #767676;
    margin: 20px 0;
  }

  button {
    border-radius: 44px;
    border: none;
    background: #5865f2;
    color: #ffffff;

    width: 120px;
    height: 44px;
    flex-shrink: 0;
  }

  @font-face {
    font-family: "Black Ops One";
    src: url("../../assets/font/BlackOpsOne-Regular.ttf") format("truetype");
    font-weight: normal;
    font-style: normal;
  }
`;

export default function Error404() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    // navigate.goBack();
    navigate(-1);
  };

  return (
    <ErrorContainer>
      <img src={ErrorImage} alt="404 로고" />
      <h3>페이지를 찾을 수 없습니다.</h3>
      <button onClick={handleGoBack} type="button">
        이전 페이지
      </button>
    </ErrorContainer>
  );
}
