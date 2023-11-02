import styled from "styled-components";

export const FollowListContainer = styled.div`
  padding-top: 62px;
  background-color: #25282d;
  height: 100vh;
`

export const FollowListForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 16px 16px 0;
`

export const ProfileBox = styled.div`
  display: flex;
  align-items: center;
`

export const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`

export const Article = styled.article`
  margin-left: 12px;
  line-height: 25px;
`

export const UserName = styled.p`
  color: #fff;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`

export const Intro = styled.p`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 180px; /* 원하는 최대 너비로 조정 가능 */
`


export const FollowBtn = styled.button`
  background-color: #5865f2;
  color: #ffffff;
  width: 70px;
  height: 35px;
  border-radius: 26px;
  border: none;
  text-align: center;
`
export const UnFollowBtn = styled.button`
  background-color: #dbdbdb;
  color: #000000;
  width: 70px;
  height: 35px;
  border-radius: 26px;
  border: none;
  text-align: center;
`
export const ItsMeBtn = styled.button`
  background-color: #ff9900;
  color: #ffffff;
  width: 70px;
  height: 35px;
  border-radius: 26px;
  border: none;
  text-align: center;
`
