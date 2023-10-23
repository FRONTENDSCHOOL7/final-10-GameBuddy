import React from 'react'
import * as S from "./FollowListStyle";
import Test from "../../../assets/image/char_inactive.png"

function FollowList() {
  return (
    <S.FollowListContainer>

      <S.FollowListForm>
        <S.ProfileBox>
          <S.Image src={Test}/>
          <S.Article>
            <S.UserName>애월읍 어쩌구</S.UserName>
            <S.Intro>어쩌구저쩌구ㅡ 소개글 동해물과 백두산이 마르고 닳도록</S.Intro>
          </S.Article>
        </S.ProfileBox>
        <S.FollowBtn>팔로우</S.FollowBtn>
      </S.FollowListForm>  
      
    </S.FollowListContainer>
  )
}

export default FollowList