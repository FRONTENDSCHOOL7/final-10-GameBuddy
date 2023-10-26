import React from "react";
import { useNavigate } from "react-router";
import * as S from "./ChattingListStyle"
import DummyData from "./ChattingDummy"
import Image from "../../assets/image/main_char.png"

function ChattingList() {
  const navigate = useNavigate();
  return (
    <S.ChatListContainer>

      {DummyData.map((data, id) => {
        return (
          <S.ChatListForm key={id} onClick={() => navigate('/chat/room')}>
            <S.ChattingBox>
              <S.Image src={Image}/>
              <S.Article>
                <S.UserName>{data.username}</S.UserName>
                <S.Intro>{data.intro}</S.Intro>
              </S.Article>
            </S.ChattingBox>
            <S.TimeP>{data.time}</S.TimeP>
            
          </S.ChatListForm>
        )
      })}

    </S.ChatListContainer>
  )
}

export default ChattingList;
