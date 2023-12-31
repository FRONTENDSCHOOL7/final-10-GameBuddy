import styled from "styled-components";
import { ReactComponent as UpdateIconForStyle } from "../../../assets/image/icon-edit.svg";
import { ReactComponent as UserIconForStyle } from "../../../assets/image/ProfileIcon.svg";

export const RecruitContainer = styled.div`
  font-family: var(--Roboto-M);
  background-color: #2c2f33;
  margin-top: 8px;
  padding-left: 20px;
  position: relative;
  @media screen and (min-width: 768px) {
    margin-left: 72px;
  }

  h2 {
    font-size: 16px;
    font-weight: 700;
    padding-top: 21px;
    padding-bottom: 6px;
    @media screen and (min-width: 768px) {
      margin-left: 42px;
    }
  }
`;

export const GameList = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start; /* 게임 목록 왼쪽에서부터 시작 */
  width: 85%;
  margin-left: 40px;
  padding-bottom: 15px;
  overflow-x: auto; /* 가로 스크롤 */
  white-space: "nowrap";
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 100%;
    margin-left: 0;
  }
`;

export const LeftBtn = styled.button`
  position: absolute;
  /* z-index: 9000; */
  top: 45%;
  transform: translateY(-50%);
  transform: rotate(45deg);
  font-size: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  border-top: 0;
  border-right: 0;
  color: #ffffff;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
export const RightBtn = styled.button`
  position: absolute;
  /* z-index: 9000; */
  top: 45%;
  right: 3%;
  transform: translateY(-50%, -50%);
  transform: rotate(45deg);
  font-size: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  border-bottom: 0;
  border-left: 0;
  color: #ffffff;
  width: 35px;
  height: 35px;
  cursor: pointer;
`;
export const LeftJoinedBtn = styled.button`
  position: absolute;
  /* z-index: 9000; */
  top: 40%;
  left: 3%;
  transform: translateY(-50%);
  transform: rotate(45deg);
  font-size: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  border-top: 0;
  border-right: 0;
  color: #ffffff;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;
export const RightJoinedBtn = styled.button`
  position: absolute;
  /* z-index: 9000; */
  top: 40%;
  right: 3%;
  transform: translateY(-50%, -50%);
  transform: rotate(45deg);
  font-size: 20px;
  background-color: transparent;
  border: 3px solid #ffffff;
  border-bottom: 0;
  border-left: 0;
  color: #ffffff;
  width: 25px;
  height: 25px;
  cursor: pointer;
`;

export const GameCard = styled.div`
  font-family: var(--Roboto);
  font-size: 12px;
  margin-right: 20px;
  cursor: pointer;

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
  background-color: #2c2f33;
  padding: 20px;
  border-radius: 20px;
  width: 80%;
  height: 120vw;
  max-width: 600px;
  max-height: 800px;
  min-height: 600px;
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
export const ModalTheJoinedContainer = styled.div`
  position: absolute;
  right: 0px;
  bottom: 50px;
  width: 100%;
  max-width: 640px;
  background-color: #202020;
  border: none;
  border-radius: 15px;
  display: flex;
  justify-content: center;
`;
export const ModalTheJoined = styled.div`
  width: 80%;
  height: 150px;
  display: flex;
  overflow-x: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;
export const ProfileDetail = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-left: 5px;
  margin-bottom: 5px;
  width: 100px;
`;
export const ModalProfileImage = styled.img`
  width: 60px;
  height: 60px;
  margin-left: 30px;
  border-radius: 35px;
  align-items: center;
`;
export const ModalArticle = styled.article`
  margin-left: 10px;
  line-height: 20px;
  width: 90px;
  white-space: nowrap;
  vertical-align: middle;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const ModalUsername = styled.p`
  color: #efefef;
  font-size: 16px;
  font-weight: 500;
`;
export const ModalAccountname = styled.p`
  color: #a6a6a6;
  font-size: 12px;
`;
export const ModalControlBtn = styled.button`
  height: 50px;
  background-color: white;
  border: none;
  margin-right: 10px;
  background-color: #2c2f33;
  &:horver {
    cursor: pointer;
  }
`;
export const UserIcon = styled(UserIconForStyle)`
  width: 20px;
  height: 20px;
  fill: #dfdfdf;
  margin-left: auto;
  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
export const UpdateIcon = styled(UpdateIconForStyle)`
  width: 30px;
  height: 30px;
  fill: #ffffff;
  cursor: pointer;
`;
export const ModalImage = styled.img`
  width: 80vw;
  height: 55vw;
  border-radius: 20px;
  max-width: 580px;
  max-height: 340px;
`;
export const ModalIntro = styled.p`
  width: 95%;
  flex-grow: 1;
  overflow-y: auto;
  color: #efefef;
`;
export const ModalRecruitNumber = styled.p`
  color: #f26e22;
  font-size: 18px;
  margin-left: 3px;
  @media screen and (min-width: 768px) {
    font-size: 24px;
  }
`;
export const ProfileRecruitDetail = styled.div`
  margin-left: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100px;
`;
export const ModalRecruitUsername = styled.p`
  color: #efefef;
  font-size: 16px;
  font-weight: 500;
`;
export const ModalRecruitProfileImage = styled.img`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  align-items: center;
`;
export const ModalBtnCover = styled.div`
  position: relative;
  width: 100%;
  height: 35px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.8rem;
  @media screen and (min-width: 768px) {
    width: 90%;
  }
`;

// export const CloseModalTheJoined = styled.div`
//   position: absolute;
//   right: -35px;
//   top: -245px;
//   color:white;
//   font-size:24px;
//   width: 25px;
//   height: 25px;
//   padding: 10px;
//   border: 1px solid white;
//   border-radius: 25px;
//   text-align: center;
//   cursor: pointer;
// `
export const ModalBtn = styled.button`
  width: 60%;
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
  line-height: 1.6rem;
  border-radius: 50%;
  border-color: white;
  color: white;
  background-color: transparent;
`;

export const CloseModalContent = styled.div`
  background-color: #2c2f33;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  font-size: 16px;
  text-align: center;
`;
