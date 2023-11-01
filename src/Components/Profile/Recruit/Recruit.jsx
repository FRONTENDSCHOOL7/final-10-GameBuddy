import React, { useEffect, useState } from "react";
import * as S from "./RecruitStyle";
import { useParams } from "react-router-dom";
import productListAPI from "../../../API/productListAPI";
import gameRecruitDeleteAPI from "../../../API/gameRecruitDeleteAPI";
import siren from "../../../assets/image/icon-siren.svg";
import update from "../../../assets/image/update.png";

function Recruit({ isMyProfile }) {
  const { accountname } = useParams();
  const [recruit, setRecruit] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [recruitId, setRecruitId] = useState(0);

  const [joinList, setJoinList] = useState([]);
  const [closeRecruitModal, setCloseRecruitModal] = useState(false);

  async function fetchData() {
    const list = await productListAPI(accountname);
    console.log("리스트", list);
    setRecruit(list);
  };

  useEffect(() => { 
    fetchData();
  }, [accountname]);

  useEffect(() => {
    if (modalOn) {
      // 모달이 열릴 때 스크롤 막기
      document.body.style.overflow = 'hidden';
    } else {
      // 모달이 닫힐 때 스크롤 해제
      document.body.style.overflow = 'auto';
    }
  
    // 컴포넌트가 언마운트될 때 스크롤 해제를 확실히 하기 위한 클린업 함수
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [modalOn]);
  
  function reportRecruit() {
    alert("신고되었습니다!")
    console.log("신고됨")
  }

  function addJoinList(id) {
    setJoinList([...joinList, id])
    console.log(id)
  }

  // 모달창 아래 X버튼을 눌러 모달창을 나가는 함수
  function closeModal() {
    setModalOn(false);
  }

  // 모달창의 "모집 종료하기"를 눌러 모집글을 삭제하고 모달창을 나가는 함수
  async function closeRecruit(id) {
    const result = await gameRecruitDeleteAPI(id);
    if(result) {
      setModalOn(false)
      fetchData()
    }
    else alert("제대로 삭제가 안되었습니다.")
  }

  return (
    <S.RecruitContainer>
      <h2>모집 중인 게임</h2>
      <S.GameList>
        {recruit.map((recruit, id) => {
          return (
            <S.GameCard
              key={id}
              onClick={() => {
                setRecruitId(id);
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

      {modalOn && (
        <S.ModalContainer>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            <S.ModalProfile>
              <S.ProfileDetail>
                <S.ModalProfileImage src={recruit[recruitId].author.image} />
                <S.ModalArticle>
                  <S.ModalUsername>
                    {recruit[recruitId].author.username}
                  </S.ModalUsername>
                  <S.ModalAccountname>
                    {recruit[recruitId].author.accountname}
                  </S.ModalAccountname>
                </S.ModalArticle>
              </S.ProfileDetail>
              {isMyProfile ? (
                <S.ModalControlBtn onClick={() => {}}>
                  <S.ModalControlBtnImg src={update} />
                </S.ModalControlBtn>
              ) : (
                <S.ModalControlBtn onClick={reportRecruit}>
                  <S.ModalControlBtnImg src={siren} />
                </S.ModalControlBtn>
              )}
            </S.ModalProfile>
            <S.ModalImage src={recruit[recruitId].itemImage} />
            <S.ModalIntro>{recruit[recruitId].link}</S.ModalIntro>
            {isMyProfile ? (
              <S.ModalBtn onClick={() => setCloseRecruitModal(true)}>모집 종료하기</S.ModalBtn>
            ) : (
              joinList.includes(recruit[recruitId].id) ? (
                <S.ModalBtn style={{backgroundColor: "green"}}>참여완료!</S.ModalBtn>
              ) : (
                <S.ModalBtn onClick={() => {
                  addJoinList(recruit[recruitId].id) 
                }}>모집 참여하기!</S.ModalBtn>
              )
            )}
          </S.ModalContent>
          <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>
        </S.ModalContainer>
      )}
      {
        closeRecruitModal && <S.ModalContainer onClick={() => setCloseRecruitModal(false)}>
          <S.CloseModalContent>
            모집을 종료하면, 모집글도 삭제됩니다.<br />
            정말 모집을 끝낼까요?
            <S.ModalBtn onClick={() => closeRecruit(recruit[recruitId].id)}>
              이제 됐어요 종료합시다!
            </S.ModalBtn>
          </S.CloseModalContent>
        </S.ModalContainer>
      }
    </S.RecruitContainer>
  );
}

export default Recruit;
