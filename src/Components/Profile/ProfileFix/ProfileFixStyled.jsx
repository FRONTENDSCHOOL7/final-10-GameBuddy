import styled from "styled-components";

export const ProfileContainer = styled.div`
  background-color: #2c2f33;
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  font-size: 12px;
`;

export const ProfileLogo = styled.p`
  padding-top: 100px;
  font-size: 28px;
  font-weight: bold;
  color: #dfdfdf;
`;

export const ProfileInput = styled.div`
  padding: 0 34px;
`;

export const ProfileImage = styled.img`
  cursor: pointer;
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-top: 35px;
`;

export const ProfileWriteContainer = styled.div`
  width: 330px;
  margin: 0 auto;
`;

export const PTag = styled.p`
  margin: 14px 0 8px 0;
  text-align: left;
  color: #dfdfdf;
`;

export const InputTag = styled.input`
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border: none;
  border-radius: 5px;
  padding: 0 2%;
  font-size: 16px;
  background-color: #171717;
  color: #efefef;
  &:focus {
    outline: none;
    border-color: #dbdbdb;
  }
  &::placeholder {
    color: #505050;
    font-size: 14px;
  }
`;

export const SubmitBtn = styled.button`
  width: 300px;
  height: 44px;
  margin-top: 40px;
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
