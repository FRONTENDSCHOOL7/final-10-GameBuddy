import styled from "styled-components";

export const ProfileContainer = styled.div`
  font-family: var(--Roboto-M);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: white;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #dbdbdb;
  margin-top: 52px;
`;

export const ProfileHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 20px;
`;

export const AccountName = styled.h3`
  color: #767676;
  font-size: 12px;
  margin-bottom: 14px;
`;

export const ProfileSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const ProfileImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  /* background-color: #ece8e8; */
  margin-right: 30px;
`;

export const ProfileStat = styled.div`
  font-weight: 700;
  display: flex;
`;

export const StatContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 32px;

  &:last-child {
    margin-right: 0;
  }
`;

export const StatButton = styled.button`
  font-family: var(--Roboto-M);
  background: none;
  border: none;
  font-size: 10px;
  color: #767676;
  cursor: pointer;
  text-align: center;

  strong {
    font-size: 18px;
    font-weight: 700;
    color: black;
  }
`;

export const Stat = styled.div`
  font-size: 10px;
  font-weight: 400;
  color: #767676;
  text-align: center;

  div {
    margin-top: 3px; // 이 부분을 추가합니다.
  }

  strong {
    font-size: 18px;
    font-weight: 700;
    color: #767676;
  }
`;

export const ProfileDescription = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 20px;
  width: 100%;
  margin-bottom: 20px;
`;

export const UserName = styled.h2`
  font-weight: 700;
  font-size: 16px;
  margin-bottom: 5px;
`;

export const DescriptionText = styled.p`
  font-size: 14px;
  color: #767676;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 13px;
`;

export const Button = styled.button`
  width: 120px;
  height: 32px;
  border-radius: 30px;
  border: none;
  background-color: var(--color-purple);
  color: white;
  cursor: pointer;

  &:nth-child(2) {
    background-color: transparent;
    border: 1px solid #a4a4a4;
    color: #a4a4a4;
  }
`;
