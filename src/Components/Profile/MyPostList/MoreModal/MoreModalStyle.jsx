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
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: translateY(100%);
  animation: slideUp 0.3s forwards;

  @keyframes slideUp {
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

// 정말 삭제하시겠습니까?
export const ConfirmDeleteContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
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
    background-color: #dbdbdb;
    transform: translateX(-50%);
  }
`;

export const ConfirmMessage = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 14px;
  color: #333;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 15px;
`;

export const ConfirmButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:last-child {
    color: var(--color-purple);
    font-weight: 700;
  }
`;
