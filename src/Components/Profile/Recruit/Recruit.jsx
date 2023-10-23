import React from "react";
import * as S from "./RecruitStyle";
import Example from "../../../assets/image/참쉽죠.jpg";

function Recruit() {
  return (
    <S.RecruitContainer>
      <h2>모집 중인 게임</h2>
      <S.GameList>
        <S.GameCard>
          {/* 모집글 상세 */}
          <S.GameImage src={Example} alt="게임 스크린샷" />
          <p className="gameName">모집게임 이름</p>
          <p className="playerCount">4명 / 5명</p>
        </S.GameCard>
        <S.GameCard>
          <S.GameImage src={Example} alt="게임 스크린샷" />
          <p className="gameName">오버워치</p>
          <p className="playerCount">4명 / 5명</p>
        </S.GameCard>
        <S.GameCard>
          <S.GameImage src={Example} alt="게임 스크린샷" />
          <p className="gameName">루미큐브</p>
          <p className="playerCount">4명 / 5명</p>
        </S.GameCard>
        <S.GameCard>
          <S.GameImage src={Example} alt="게임 스크린샷" />
          <p className="gameName">메이플</p>
          <p className="playerCount">4명 / 5명</p>
        </S.GameCard>
      </S.GameList>
    </S.RecruitContainer>
  );
}

export default Recruit;
