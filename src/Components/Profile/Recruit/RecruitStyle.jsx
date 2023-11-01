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
  -ms-overflow-style: none;
  padding-bottom: 15px;

  &::-webkit-scrollbar {
    display: none;
  }
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

//모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 20px;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000; //다른 요소보다 항상 앞에 있어야함
  flex-direction: column;
`;
export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 80%;
  height: 80%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 16px;
`;
export const ModalProfile = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`;
export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: row;
`
export const ModalProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
`;
export const ModalArticle = styled.article`
  margin-left: 10px;
  line-height: 20px;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ModalUsername = styled.p`
  color:#000000;
  font-size: 16px;
  font-weight: 500;
`;
export const ModalAccountname = styled.p`
  color:#767676;
  font-size: 14px;
`;
export const ModalControlBtn = styled.button`
  height: 50px;
  background-color: white;
  border: none;
  margin-right: 10px;
`;
export const ModalControlBtnImg = styled.img`
  width: 25px;
  height: 25px;
`
export const ModalImage = styled.img`
  width: 95%;
  height: calc(100vw - 55vw);
  border-radius: 20px;
  max-width: 900px;
  max-height: 600px;
`;
export const ModalIntro = styled.p`
  width: 90%;
  flex-grow: 1;
  overflow-y: auto;
`;
export const ModalBtn = styled.button`
  width: 75%;
  height: 35px;
  font-size: 19px;
  color: #ffffff;
  border-radius: 24px;
  border: none;
  background-color: #5865f2;
`;
export const ModalCloseBtn = styled.button`
  width: 2rem;
  height: 2rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  border-radius: 50%;
  border-color: white;
  color: white;
  background-color: transparent;
`;
