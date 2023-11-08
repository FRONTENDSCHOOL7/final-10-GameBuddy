import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  background: #282c32;
  padding: 20px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  gap: 10px;

  width: 40%;
  height: auto;
  max-width: 280px;
  max-height: 90%;

  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.3s ease-out;
`;

export const ModalButton = styled.button`
  background-color: #282c32;
  color: white;
  padding: 10px;
  cursor: pointer;
  flex: 1;
  text-align: center;
  transition: background-color 0.3s;
  border: none;

  // 첫 번째 버튼(수정하기)에만 하단 테두리 적용
  &:nth-of-type(1) {
    border-bottom: 1px solid #5c5c5c;
  }

  // 마지막 버튼(삭제하기)에는 하단 테두리 없음
  &:nth-of-type(2) {
    border-bottom: none;
  }

  // 호버 상태에서의 배경색 변경
  &:hover {
    background-color: #3a3d42;
  }
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
  z-index: 100;
  min-width: 250px;
  width: auto; // 너비를 auto로 설정
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 55px;
    bottom: 0;
    width: 1px;
    background-color: #5c5c5c;
    transform: translateX(-50%);
  }
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

  &:last-child {
    color: #f35858;
    font-weight: 700;
  }
`;
