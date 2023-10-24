import styled from "styled-components";

export const RecruitContainer = styled.div`
  font-family: var(--Roboto-M);
  background-color: #fff;
  margin-top: 8px;
  padding-left: 20px;

  h2 {
    font-size: 16px;
    font-weight: 700;
    padding-top: 21px;
    padding-bottom: 6px;
  }
`;

export const GameList = styled.div`
  display: flex;
  justify-content: flex-start; /* 게임 목록 왼쪽에서부터 시작 */
  width: 100%;
  overflow-x: auto; /* 가로 스크롤 */
  padding-bottom: 15px;
`;

export const GameCard = styled.div`
  font-family: var(--Roboto);
  font-size: 12px;
  margin-right: 20px;

  .gameName {
    font-weight: 700;
    color: black;
    padding-top: 4px;
  }

  .playerCount {
    color: #f26e22;
    padding-top: 4px;
  }
`;

export const GameImage = styled.img`
  width: 110px;
  height: 90px;
`;
