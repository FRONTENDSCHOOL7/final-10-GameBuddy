import React, { useEffect, useState } from "react";
import * as S from "./RecruitStyle";
import { useParams } from "react-router-dom";
import productListAPI from "../../../API/productListAPI";
import siren from "../../../assets/image/icon-siren.svg"
import update from "../../../assets/image/update.png"

function Recruit({isMyProfile}) {
  const { accountname } = useParams();
  const [recruit, setRecruit] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [recruitId, setRecruitId] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      const list = await productListAPI(accountname);
      console.log(list)
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
            <S.GameCard key={id} onClick={() => {
                setRecruitId(id)
                setModalOn(true);
              }}>
              {/* 모집글 상세 */}
              <S.GameImage src={recruit.itemImage} alt="게임 스크린샷" />
              <p className="gameName">{recruit.itemName}</p>
              <p className="playerCount">{`1명 / ${recruit.price}명`}</p>
            </S.GameCard>
          );
        })}
      </S.GameList>

      {modalOn && 
        <S.ModalContainer onClick={() => setModalOn(false)}>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            <S.ModalProfile>
              <S.ProfileDetail>
                <S.ModalProfileImage src={recruit[recruitId].author.image}/>
                <S.ModalArticle>
                  <S.ModalUsername>{recruit[recruitId].author.username}</S.ModalUsername>
                  <S.ModalAccountname>{recruit[recruitId].author.accountname}</S.ModalAccountname>
                </S.ModalArticle>
              </S.ProfileDetail>
              {isMyProfile ?
                <S.ModalControlBtn onClick={() => {}}>
                  <S.ModalControlBtnImg src={update} />
                </S.ModalControlBtn>
              : <S.ModalControlBtn onClick={() => {}}>
                  <S.ModalControlBtnImg src={siren} />
                </S.ModalControlBtn>
              }
            </S.ModalProfile>
            <S.ModalImage src={recruit[recruitId].itemImage}/>
            <S.ModalIntro>{recruit[recruitId].link}</S.ModalIntro>
            {isMyProfile ? 
              <S.ModalBtn>모집글 수정하기</S.ModalBtn>
              : <S.ModalBtn>모집 참여하기</S.ModalBtn>
            }
          </S.ModalContent>
        </S.ModalContainer>
      }
    </S.RecruitContainer>
  );
}

export default Recruit;
