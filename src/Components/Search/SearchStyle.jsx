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

export const SearchUserContainer = styled.div`
  padding-top: 62px;
`;

export const SearchResultForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 16px 16px 0;
`;

export const SearchUserBox = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

export const Article = styled.article`
  margin-left: 12px;
  line-height: 25px;
`;

export const UserName = styled.p`
  color: #000;
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
  width: 180px;
`;
