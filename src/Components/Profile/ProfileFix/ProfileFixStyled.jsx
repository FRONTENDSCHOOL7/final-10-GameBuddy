import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
`;

export const ProfileInput = styled.div`
  padding: 0 34px;
`;

export const ProfileImage = styled.img`
  cursor: pointer;

  width: 110px;
  height: 110px;
  border-radius: 100%;
  margin-top: 77.5px;
`;

export const PTag = styled.p`
  margin: 14px 0 6px 0;
  text-align: left;
`;

export const InputTag = styled.input`
  width: 100%;
  height: 23px;
  border-width: 0px 0px 1px;
  padding: 0 0 1px 0;
  font-size: 20px;

  &:focus {
    outline: none;
    border-color: #5865f2;
  }

  &::placeholder {
    color: #dbdbdb;
    font-size: 14px;
  }
`;

export const SubmitBtn = styled.button`
  width: calc(100% - 68px);
  height: 44px;
  margin-top: 228px;
  border-radius: 44px;
  border: none;
  background-color: #5865f2;
  color: #ffffff;
`;

export const Warning = styled.p`
  color: #ff0000;
  text-align: left;
  font-size: 12px;
  margin-top: 4px;
`;
