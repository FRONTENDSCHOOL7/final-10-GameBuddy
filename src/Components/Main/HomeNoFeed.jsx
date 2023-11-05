import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import Header from "../Commons/Header/Header";
import Footer from "../Commons/Footer/Footer";
import NoFeedImage from "../../assets/image/char-noFeed.png";

const NoFeedContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  font-family: "Black Ops One", sans-serif;
  font-size: 14px;
  line-height: 14px; /* 100% */
  background-color: #2c2f33;

  h3 {
    color: #767676;
    margin: 20px 0;
    font-size: 14px;
  }

  button {
    border-radius: 44px;
    border: none;
    background: #5865f2;
    color: #ffffff;
    font-size: 14px;
    width: 120px;
    height: 44px;
    flex-shrink: 0;
  }
`;

function HomeNoFeed() {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/search");
  };

  return (
    <>
      <Header type="main" />
      <NoFeedContainer>
        <img src={NoFeedImage} alt="gameBuddy 이미지" />
        <h3>유저를 검색해 팔로우 해보세요!</h3>
        <button onClick={handleSearch} type="button">
          검색하기
        </button>
      </NoFeedContainer>
      <Footer />
    </>
  );
}

export default HomeNoFeed;
