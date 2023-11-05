import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 12px 12px;
  background-color: #25282d;
  border-bottom: 1px solid #5c5c5c;

  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 55px;
  z-index: 1000;

  box-sizing: border-box;
`;

export const Logo = styled.h1`
  font-family: var(--Black-ops);
  font-size: 22px;
  color: var(--color-purple);
  margin-left: 13px;

  @media screen and (min-width: 768px) {
    margin-left: 20px;
  }
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
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    margin-left: 17px;
  }
`;

//모달
export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2000; //다른 요소보다 항상 앞에 있어야함
`;

export const ModalContent = styled.div`
  background-color: #282c32;
  color: white;
  padding: 20px;
  border-radius: 15px;
  width: 30%;
  max-width: 280px;
  max-height: 90%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
`;

export const ModalItem = styled.p`
  width: 100%;
  text-align: center;
  padding: 10px;
  border-bottom: 1px solid #5c5c5c;

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    background-color: #3a3d42;
  }
`;
