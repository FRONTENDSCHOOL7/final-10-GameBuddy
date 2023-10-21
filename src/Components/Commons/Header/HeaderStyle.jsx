import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 12px 12px;
  background-color: #ffff;
  border-bottom: 1px solid #dbdbdb;
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
