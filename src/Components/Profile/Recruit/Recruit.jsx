import React, { useEffect, useState } from "react";
import * as S from "./RecruitStyle";
import { useNavigate, useParams } from "react-router-dom";
import gameRecruitListAPI from "../../../API/gameRecruitAPI/gameRecruitListAPI";
import gameRecruitDeleteAPI from "../../../API/gameRecruitAPI/gameRecruitDeleteAPI";
import myAccountNameAPI from "../../../API/myAccountNameAPI";
import joinRecruitAPI from "../../../API/gameRecruitAPI/joinRecruitAPI";
import leaveRecruitAPI from "../../../API/gameRecruitAPI/leaveRecruitAPI";
import userInfoAPI from "../../../API/userInfoAPI"

function Recruit({ isMyProfile }) {
  const { accountname } = useParams();
  const [recruit, setRecruit] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [recruitId, setRecruitId] = useState(0);

  const [editRecruitModal, setEditRecruitModal] = useState(false);
  const [closeRecruitModal, setCloseRecruitModal] = useState(false);
  const [myAccountName, setMyAccountName] = useState("");
  
  const [targetUserName, setTargetUserName] = useState("");
  const [targetAccountName, setTargetAccountName] = useState("");
  const [targetImage, setTargetImage] = useState("");

  const navigate = useNavigate();

  async function fetchData() {
    const myAccountName = await myAccountNameAPI();
    setMyAccountName(myAccountName);
    const list = await gameRecruitListAPI(accountname);
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

  async function getUserInfo(targetAccountName) {
    const result = await userInfoAPI(targetAccountName);
    setTargetUserName(result.profile.username);
    setTargetAccountName(result.profile.accountname);
    setTargetImage(result.profile.image);
  }

  async function joinRecruit(recruitID, myAccountName, recruitData) {
    await joinRecruitAPI(recruitID, myAccountName, recruitData);
    fetchData();
  }
  async function leaveRecruit(recruitID, myAccountName, recruitData) {
    await leaveRecruitAPI(recruitID, myAccountName, recruitData);
    fetchData();
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
      <h2 style={{color: "#efefef"}}>모집 중인 게임</h2>
      <S.GameList>
        {recruit.map((recruit, id) => {
          return (
            <S.GameCard
              key={id}
              onClick={() => {
                setRecruitId(id);
                getUserInfo(JSON.parse(recruit.itemName)[1]);
                setModalOn(true);
              }}>
              {/* 모집글 상세 */}
              {console.log("아이템이미지: ", recruit.itemImage)}
              <S.GameImage src={recruit.itemImage} alt="게임 스크린샷" />
              <p className="gameName" style={{color: "#cfcfcf"}}>{JSON.parse(recruit.itemName)[0]}</p>
              <p className="playerCount">{`${recruit.price}명 / ${JSON.parse(recruit.link)[0]}명`}</p>
            </S.GameCard>
          );
        })}
      </S.GameList>

      {modalOn && (
        <S.ModalContainer>
          <S.ModalContent onClick={(event) => event.stopPropagation()}>
            <S.ModalProfile>
              <S.ProfileDetail>
                <S.ModalProfileImage src={targetImage} />
                <S.ModalArticle>
                  <S.ModalUsername>
                    {targetUserName}
                  </S.ModalUsername>
                  <S.ModalAccountname>
                    {targetAccountName}
                  </S.ModalAccountname>
                </S.ModalArticle>
              </S.ProfileDetail>
              {isMyProfile ? (
                <S.ModalControlBtn onClick={() => setEditRecruitModal(true)
                }>
                  <S.UpdateIcon />
                </S.ModalControlBtn>
              ) : (
                <S.ModalControlBtn onClick={reportRecruit}>
                  <S.SirenIcon />
                </S.ModalControlBtn>
              )}
            </S.ModalProfile>
            <S.ModalImage src={recruit[recruitId].itemImage} />
            <S.ModalIntro>{JSON.parse(recruit[recruitId].link)[1]}</S.ModalIntro>
            <S.ModalRecruitNumber>{`${recruit[recruitId].price}명 / ${JSON.parse(recruit[recruitId].link)[0]}명`}</S.ModalRecruitNumber>
            {
              // console.log(JSON.parse(recruit[recruitId].link)[2], myAccountName)
              isMyProfile ? (
                <S.ModalBtn onClick={() => setCloseRecruitModal(true)} btnColor={"#5865f2"}>모집 종료하기</S.ModalBtn>
              ) : (
                (JSON.parse(recruit[recruitId].link)[2]).includes(myAccountName) ? (
                  <S.ModalBtn onClick={() => {
                    leaveRecruit(recruit[recruitId].id, myAccountName, recruit[recruitId]);
                  }} btnColor={"red"}>모집 떠나기!</S.ModalBtn>
                ) : ( 
                  recruit[recruitId].price < JSON.parse(recruit[recruitId].link)[0] ? (
                    <S.ModalBtn onClick={() => {
                      joinRecruit(recruit[recruitId].id, myAccountName, recruit[recruitId]);
                    }} btnColor={"green"}>모집 참여하기!</S.ModalBtn>
                  ) : <S.ModalBtn btnColor={"orange"}>Full방입니다~!</S.ModalBtn>
                )
              )
            }
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

      {
        editRecruitModal && <S.ModalContainer onClick={() => setEditRecruitModal(false)}>
          <S.CloseModalContent>
            모집글을 수정하시겠습니까?
            <S.ModalBtn onClick={() => {
                  navigate("/recruit/edit", 
                    { state: { recruitData: recruit[recruitId]}}
                  )}
            } btnColor={"#5865f2"}>
              네 수정합시다!
            </S.ModalBtn>
          </S.CloseModalContent>
        </S.ModalContainer>
      }
    </S.RecruitContainer>
  );
}

export default Recruit;
