import React, { useEffect, useState } from "react";
import * as S from "./RecruitStyle";
import { useParams } from "react-router-dom";
import productListAPI from "../../../API/productListAPI";

function Recruit() {
  const { accountname } = useParams();
  const [recruit, setRecruit] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const list = await productListAPI(accountname);
      setRecruit(list);
    };
    fetchData();
  }, []);

  return (
    <S.RecruitContainer>
      <h2>모집 중인 게임</h2>
      <S.GameList>
        {recruit.map((recruit, id) => {
          return (
            <S.GameCard key={id}>
              {/* 모집글 상세 */}
              <S.GameImage src={recruit.itemImage} alt="게임 스크린샷" />
              <p className="gameName">{recruit.itemName}</p>
              <p className="playerCount">{`1명 / ${recruit.price}명`}</p>
            </S.GameCard>
          );
        })}
      </S.GameList>
    </S.RecruitContainer>
  );
}

export default Recruit;
