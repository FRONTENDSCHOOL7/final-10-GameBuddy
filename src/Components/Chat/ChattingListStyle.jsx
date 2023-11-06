import styled from "styled-components";

export const ChatListContainer = styled.div`
  height: 100vh;
  padding-top: 60px;
  background-color: #2c2f33;
  @media screen and (min-width: 768px) {
    margin-top: 10px;
    margin-left: 72px;
    overflow: hidden;
  }
`;

export const ChatListForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 90%; */
  padding: 24px 16px 0;
  /* @media screen and (min-width: 768px) and (max-width: 998px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    color: #a4a4a4;
  } */
`;

export const ChattingBox = styled.div`
  display: flex;
  align-items: center;
  &:active {
    background-color: rgba(
      0,
      0,
      0,
      0.1
    ); // 클릭한 것처럼 보이기 위해 클릭 효과를 넣어줌
  }
`;

export const Image = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50px;
`;

export const Article = styled.article`
  margin-left: 12px;
  line-height: 25px;
`;

export const UserName = styled.p`
  color: #ffffff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

export const Intro = styled.p`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 180px; /* 원하는 최대 너비로 조정 가능 */
`;

export const TimeP = styled.p`
  font-size: 12px;
  color: #767676;
  @media screen and (min-width: 768px) {
    flex-direction: column;
    align-items: flex-end;
    gap: 2px;
    color: #a4a4a4;
  }
`;
