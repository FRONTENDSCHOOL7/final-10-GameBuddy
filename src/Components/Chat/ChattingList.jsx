import React from "react";
import { useNavigate } from "react-router";
import * as S from "./ChattingListStyle";
import DummyData from "./ChattingDummy";
import Image from "../../assets/image/main_char.png";

function ChattingList() {
  const navigate = useNavigate();

  // 768px 이하일 때는 list를 클릭하면 /chat/room으로 이동
  const handleChatItemClick = () => {
    if (window.innerWidth < 768) {
      navigate("/chat/room");
    }
    // 768px 이상일 때는 아무런 동작도 수행하지 않음
  };

  return (
    <S.ChatListContainer>
      {DummyData.map((data, id) => {
        return (
          <S.ChatListForm key={id} onClick={handleChatItemClick}>
            <S.ChattingBox>
              <S.Image src={Image} />
              <S.Article>
                <S.UserName>{data.username}</S.UserName>
                <S.Intro>{data.intro}</S.Intro>
              </S.Article>
            </S.ChattingBox>
            <S.TimeP>{data.time}</S.TimeP>
          </S.ChatListForm>
        );
      })}
    </S.ChatListContainer>
  );
}

export default ChattingList;
