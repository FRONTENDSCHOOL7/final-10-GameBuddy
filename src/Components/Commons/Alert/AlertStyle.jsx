import styled from "styled-components";

export const PostDetailBackground = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 0.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000;
`;

// 정말 삭제하시겠습니까?
export const ConfirmDeleteContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: #282c32;
  padding: 23px 0 14px 0; // 좌우 패딩 제거
  border-radius: 10px;
  z-index: 10000;
  min-width: 250px;
  width: auto; // 너비를 auto로 설정
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const ConfirmMessage = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 14px;
  color: #ffffff;
  border-bottom: 1px solid #5c5c5c;
  padding-bottom: 15px;
`;

export const ConfirmButton = styled.button`
  background-color: #282c32;
  color: white;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;
`;
