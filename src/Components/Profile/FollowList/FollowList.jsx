import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router';
import * as S from "./FollowListStyle";
import { useRecoilState  } from "recoil";
import { userDataAtom } from "../../../Store/Store";
import followerAPI from "../../../API/followAPI/followerAPI"
import userInfoAPI from '../../../API/userInfoAPI';
import followAPI from "../../../API/followAPI/followAPI"
import unFollowAPI from "../../../API/followAPI/unFollowAPI"

function FollowList() {
  const [userData, setUserData] = useRecoilState(userDataAtom);
  const [followData, setFollowData] = useState([])
  const [render, ReRender] = useState(true)
  const {accountname, type} = useParams();
  const isFollowerList = "follower"; // 팔로잉 목록을 불러올지, 팔로우 목록을 불러올지 정하는 변수. "follower"면 팔로워 목록이, "following"이면 팔로잉 목록을 불러온다.

  // 페이지가 렌더링 되면, recoil 아톰에 현재 로그인한 내 정보를 저장하고 followerAPI를 사용해 데이터를 불러온다
  useEffect(() => {
    const fetchData = async () => {
      const userInfo = await userInfoAPI(accountname);
      setUserData({
        _id: userInfo.profile._id,
        username: userInfo.profile.username,
        accountname: userInfo.profile.accountname,
        following: userInfo.profile.following,
      });
      
      const result = await followerAPI(accountname, type);
      setFollowData(result);
    }
    fetchData();
  }, [render]);

  async function follow(ac) {
    const result = await followAPI(ac)
    if(result) ReRender(!render);
  }
  async function unFollow(ac) {
    const result = await unFollowAPI(ac)
    if(result) ReRender(!render);
  }

  return (
    <S.FollowListContainer>

      {followData.map((data, id) => {
        return (
          <S.FollowListForm key={id}>
            <S.ProfileBox>
              <S.Image src={data.image}/>
              <S.Article>
                <S.UserName>{data.username}</S.UserName>
                <S.Intro>{data.intro}</S.Intro>
              </S.Article>
            </S.ProfileBox>
            {/* followerAPI를 사용해 불러온 데이터와 현재 로그인한 유저의 팔로우 목록을 비교해 일치할 경우(이미 팔로우한 경우) 언팔로우 버튼이 표시된다. */}
            {userData.following.includes(data._id)  ? <S.UnFollowBtn onClick={() => unFollow(data.accountname)}>언팔로우</S.UnFollowBtn> : <S.FollowBtn onClick={() => follow(data.accountname)}>팔로우</S.FollowBtn>}
          </S.FollowListForm>
        )
      })}

    </S.FollowListContainer>
  )
}

export default FollowList
