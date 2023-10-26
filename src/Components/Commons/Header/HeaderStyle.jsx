import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 12px 12px;
  background-color: #ffff;
  border-bottom: 1px solid #dbdbdb;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;

  box-sizing: border-box;
`;

export const Logo = styled.h1`
  font-family: var(--Black-ops);
  font-size: 22px;
  color: var(--color-purple);
`;

export const FollowersTitle = styled.div`
  font-family: var(--Roboto-B);
  font-size: 22px;
  color: var(--color-purple);
`;

export const StyledIconButton = styled.button`
  border: none;
  background: none;
  cursor: pointer;
  padding: 5px;
`;

export const Input = styled.input`
  flex: 1;
  padding: 8px;
  background-color: #f2f2f2;
  border: 1px solid #f2f2f2;
  border-radius: 32px;
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
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 2000; //다른 요소보다 항상 앞에 있어야함
`;

export const ModalContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 5px;
  width: 300px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ModalItem = styled.p`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #dbdbdb;

  &:last-child {
    border-bottom: none;
  }
`;
