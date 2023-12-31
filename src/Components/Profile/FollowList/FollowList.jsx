import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import { useNavigate } from "react-router-dom";
import * as S from "./FollowListStyle";
import { useRecoilState } from "recoil";
import { userDataAtom } from "../../../Store/Store";
import followListAPI from "../../../API/followAPI/followListAPI";
import followAPI from "../../../API/followAPI/followingAPI";
import unFollowAPI from "../../../API/followAPI/unFollowAPI";
import myInfoAPI from "../../../API/myInfoAPI";
import { isValidImage } from "../../../Functional/isValidImageFunction";
import DefaultImage from "../../../assets/image/char_inactive.png";

function FollowList() {
  const navigate = useNavigate();
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [followData, setFollowData] = useState([]);
  const [render, ReRender] = useState(true);
  const { accountname, type } = useParams(); // type은 follower인지 following인지 판단하는 변수

  // 페이지가 렌더링 되면, recoil 아톰에 현재 로그인한 내 정보를 저장하고 followerAPI를 사용해 데이터를 불러온다
  useEffect(() => {
    const fetchData = async () => {
      const myInfo = await myInfoAPI();
      setUserData({
        _id: myInfo.user._id,
        username: myInfo.user.username,
        accountname: myInfo.user.accountname,
        following: myInfo.user.following
      });

      const result = await followListAPI(accountname, type);
      setFollowData(result);
    };
    fetchData();
  }, [render]);

  async function follow(accountName) {
    const result = await followAPI(accountName);
    if (result) ReRender(!render);
  }
  async function unFollow(accountName) {
    const result = await unFollowAPI(accountName);
    if (result) ReRender(!render);
  }

  return (
    <S.FollowListContainer>
      {followData.map((data, id) => {
        return data.accountname !== userData.accountname ? (
          <S.FollowListForm key={id}>
            <S.ProfileBox
              onClick={() => {
                navigate(`/profile/${data.accountname}`);
              }}>
              {isValidImage(data.image) ? (
                <S.Image src={data.image} />
              ) : (
                <S.Image src={DefaultImage} />
              )}
              <S.Article>
                <S.UserName>{data.username}</S.UserName>
                <S.Intro>{data.intro}</S.Intro>
              </S.Article>
            </S.ProfileBox>
            {/* followerAPI를 사용해 불러온 데이터와 현재 로그인한 유저의 팔로우 목록을 비교해 일치할 경우(이미 팔로우한 경우) 언팔로우 버튼이 표시된다. */}
            {userData.following.includes(data._id) ? (
              <S.UnFollowBtn onClick={() => unFollow(data.accountname)}>
                언팔로우
              </S.UnFollowBtn>
            ) : (
              <S.FollowBtn onClick={() => follow(data.accountname)}>
                팔로우
              </S.FollowBtn>
            )}
          </S.FollowListForm>
        ) : (
          <S.FollowListForm key={id}>
            <S.ProfileBox
              onClick={() => {
                navigate(`/profile/${data.accountname}`);
              }}>
              <S.Image src={data.image} />
              <S.Article>
                <S.UserName>{data.username}</S.UserName>
                <S.Intro>{data.intro}</S.Intro>
              </S.Article>
            </S.ProfileBox>
            <S.ItsMeBtn>O</S.ItsMeBtn>
          </S.FollowListForm>
        );
      })}
    </S.FollowListContainer>
  );
}

export default FollowList;
