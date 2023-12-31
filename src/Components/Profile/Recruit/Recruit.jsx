import React, { useEffect, useState, useRef } from "react";
import * as S from "./RecruitStyle";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import gameRecruitListAPI from "../../../API/gameRecruitAPI/gameRecruitListAPI";
import gameRecruitDeleteAPI from "../../../API/gameRecruitAPI/gameRecruitDeleteAPI";
import myAccountNameAPI from "../../../API/myAccountNameAPI";
import joinRecruitAPI from "../../../API/gameRecruitAPI/joinRecruitAPI";
import leaveRecruitAPI from "../../../API/gameRecruitAPI/leaveRecruitAPI";
import userInfoAPI from "../../../API/userInfoAPI";

function Recruit({ isMyProfile }) {
  const { accountname } = useParams();
  const [recruit, setRecruit] = useState([]);
  const [modalOn, setModalOn] = useState(false);
  const [theJoined, setTheJoined] = useState(false);
  const [recruitId, setRecruitId] = useState(0);

  const [editRecruitModal, setEditRecruitModal] = useState(false);
  const [closeRecruitModal, setCloseRecruitModal] = useState(false);
  const [myAccountName, setMyAccountName] = useState("");

  // 모집글 내부, 현재 참여중인 인원의 정보(모집 참여자들)
  const [theJoinedData, setTheJoinedData] = useState([]);
  const [theJoinedAccountName, setTheJoinedAccountName] = useState([]);

  // 모집글 상세페이지의 유저 정보(모집게시자)
  const [targetUserName, setTargetUserName] = useState("");
  const [targetAccountName, setTargetAccountName] = useState("");
  const [targetImage, setTargetImage] = useState("");

  const navigate = useNavigate();
  const location = useLocation();

  // 스크롤 컨테이너의 ref 생성
  const scrollContainerRef = useRef(null);

  // 왼쪽 화살표 클릭 핸들러
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  // 오른쪽 화살표 클릭 핸들러
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };

  function checkScroll() {
    const element = document.getElementById("scrollBar");
    const hasHorizontalScrollbar = element.scrollWidth > element.clientWidth;

    // 버튼의 표시 여부를 결정하는 클래스를 토글합니다.
    const leftBtn = document.getElementById("leftBtn");
    if (hasHorizontalScrollbar && window.innerWidth > 768 && !modalOn) {
      leftBtn.style.display = "block";
    } else {
      leftBtn.style.display = "none";
    }
    const rightBtn = document.getElementById("rightBtn");
    if (hasHorizontalScrollbar && window.innerWidth > 768 && !modalOn) {
      rightBtn.style.display = "block";
    } else {
      rightBtn.style.display = "none";
    }
  }

  // 왼쪽 화살표 클릭 핸들러
  const joinedLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -200, behavior: "smooth" });
    }
  };
  // 오른쪽 화살표 클릭 핸들러
  const joinedRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 200, behavior: "smooth" });
    }
  };
  function checkJoinedScroll() {
    const element = document.getElementById("joinedBar");
    if (element) {
      const hasHorizontalScrollbar = element.scrollWidth > element.clientWidth;

      // 버튼의 표시 여부를 결정하는 클래스를 토글합니다.
      const leftBtn = document.getElementById("leftJoinedBtn");
      if (hasHorizontalScrollbar && window.innerWidth > 768) {
        leftBtn.style.display = "block";
      } else {
        leftBtn.style.display = "none";
      }
      const rightBtn = document.getElementById("rightJoinedBtn");
      if (hasHorizontalScrollbar && window.innerWidth > 768) {
        rightBtn.style.display = "block";
      } else {
        rightBtn.style.display = "none";
      }
    }
  }

  async function getTheJoinedData(theJoinedData) {
    for (let i = 0; i < theJoinedAccountName.length; i++) {
      const copy = theJoinedData;
      copy.push(await userInfoAPI(theJoinedAccountName[i]));
      // console.log("카피:");
      setTheJoinedData(copy);
    }
  }

  async function fetchData() {
    const myAccountName = await myAccountNameAPI();
    setMyAccountName(myAccountName);
    const list = await gameRecruitListAPI(accountname);
    // console.log("필터링 후 불러온 리스트", list);
    setRecruit(list);
  }

  useEffect(() => {}, [location]);

  useEffect(() => {
    // 이벤트 리스너를 등록하는 함수
    function handleResize() {
      checkScroll();
      checkJoinedScroll();
    }

    function handleLoad() {
      checkScroll();
      checkJoinedScroll();
    }

    // 이벤트 리스너 등록
    window.addEventListener("resize", handleResize);
    window.onload = handleLoad;

    // 클린업 함수에서 이벤트 리스너 제거
    return () => {
      window.removeEventListener("resize", handleResize);
      window.onload = null;
    };
  }, []);

  useEffect(() => {
    fetchData();
  }, [accountname]);

  useEffect(() => {
    checkScroll();
  }, [recruit]);

  useEffect(() => {
    getTheJoinedData(theJoinedData);
  }, [theJoinedAccountName]);

  useEffect(() => {
    checkJoinedScroll();
  }, [theJoined]);

  useEffect(() => {
    if (modalOn) {
      // 모달이 열릴 때 스크롤 막고, 해당 모집글에 참여중인 유저 정보 가져오기
      document.body.style.overflow = "hidden";
      checkScroll();
    } else {
      // 모달이 닫힐 때 스크롤 해제
      document.body.style.overflow = "auto";
      checkScroll();
    }

    // 컴포넌트가 언마운트될 때 스크롤 해제를 확실히 하기 위한 클린업 함수
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [modalOn]);

  // 신고버튼 삭제로 주석처리
  // function reportRecruit() {
  //   alert("신고되었습니다!")
  //   console.log("신고됨")
  // }

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
    setTheJoinedData([]);
    setTheJoined(false);
    setModalOn(false);
  }

  // 모달창의 "모집 종료하기"를 눌러 모집글을 삭제하고 모달창을 나가는 함수
  async function closeRecruit(id) {
    const result = await gameRecruitDeleteAPI(id);
    if (result) {
      setModalOn(false);
      fetchData();
    } else alert("제대로 삭제가 안되었습니다.");
  }

  return (
    <S.RecruitContainer>
      <h2 style={{ color: "#efefef" }}>모집 중인 게임</h2>
      <S.LeftBtn id="leftBtn" onClick={scrollLeft}></S.LeftBtn>
      <S.RightBtn id="rightBtn" onClick={scrollRight}></S.RightBtn>
      <S.GameList ref={scrollContainerRef} id="scrollBar">
        {recruit.map((recruit, id) => {
          return (
            <S.GameCard
              key={id}
              onClick={() => {
                setTheJoinedData([]);
                setRecruitId(id);
                getUserInfo(JSON.parse(recruit.itemName)[1]);
                setModalOn(true);
                setTheJoinedAccountName(JSON.parse(recruit.link)[2]);
              }}>
              {/* 모집글 상세 */}
              <S.GameImage src={recruit.itemImage} alt="게임 스크린샷" />
              <p className="gameName" style={{ color: "#cfcfcf" }}>
                {JSON.parse(recruit.itemName)[0]}
              </p>
              <p className="playerCount">{`${recruit.price}명 / ${
                JSON.parse(recruit.link)[0]
              }명`}</p>
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
                  <S.ModalUsername>{targetUserName}</S.ModalUsername>
                  <S.ModalAccountname>{targetAccountName}</S.ModalAccountname>
                </S.ModalArticle>
              </S.ProfileDetail>
              {isMyProfile ? (
                <S.ModalControlBtn onClick={() => setEditRecruitModal(true)}>
                  <S.UpdateIcon />
                </S.ModalControlBtn>
              ) : (
                <div></div>
              )}
            </S.ModalProfile>
            <S.ModalImage src={recruit[recruitId].itemImage} />
            <S.ModalIntro>
              {JSON.parse(recruit[recruitId].link)[1]}
            </S.ModalIntro>

            <S.ModalBtnCover>
              <div style={{ width: "20%", height: "10px" }}></div>
              {isMyProfile ? (
                <S.ModalBtn onClick={() => setCloseRecruitModal(true)}>
                  모집 종료하기
                </S.ModalBtn>
              ) : JSON.parse(recruit[recruitId].link)[2].includes(
                  myAccountName
                ) ? (
                <S.ModalBtn
                  onClick={() => {
                    leaveRecruit(
                      recruit[recruitId].id,
                      myAccountName,
                      recruit[recruitId]
                    );
                  }}
                  style={{ backgroundColor: "red" }}>
                  모집 떠나기!
                </S.ModalBtn>
              ) : recruit[recruitId].price <
                JSON.parse(recruit[recruitId].link)[0] ? (
                <S.ModalBtn
                  onClick={() => {
                    joinRecruit(
                      recruit[recruitId].id,
                      myAccountName,
                      recruit[recruitId]
                    );
                  }}
                  style={{ backgroundColor: "green" }}>
                  모집 참여하기!
                </S.ModalBtn>
              ) : (
                <S.ModalBtn style={{ backgroundColor: "orange" }}>
                  Full방입니다~!
                </S.ModalBtn>
              )}
              <div
                style={{ display: "flex", cursor: "pointer", width: "20%" }}
                onClick={() => {
                  setTheJoined(!theJoined);
                }}>
                <S.UserIcon />
                <S.ModalRecruitNumber>{`${recruit[recruitId].price}/${
                  JSON.parse(recruit[recruitId].link)[0]
                }`}</S.ModalRecruitNumber>
              </div>
              {theJoined && (
                <>
                  <S.ModalTheJoinedContainer>
                    <S.LeftJoinedBtn
                      id="leftJoinedBtn"
                      onClick={joinedLeft}></S.LeftJoinedBtn>
                    <S.RightJoinedBtn
                      id="rightJoinedBtn"
                      onClick={joinedRight}></S.RightJoinedBtn>
                    <S.ModalTheJoined ref={scrollContainerRef} id="joinedBar">
                      {theJoinedData.map((theJoinedData, id) => {
                        return (
                          <S.ProfileRecruitDetail
                            key={id}
                            onClick={() => {
                              navigate(
                                `/profile/${theJoinedData.profile.accountname}`
                              );
                            }}>
                            {id == 0 ? (
                              <S.ModalUsername style={{ color: "orange" }}>
                                ★
                              </S.ModalUsername>
                            ) : (
                              <S.ModalUsername>{id + 1}</S.ModalUsername>
                            )}
                            <S.ModalRecruitProfileImage
                              src={theJoinedData.profile.image}
                            />
                            <S.ModalArticle>
                              <S.ModalRecruitUsername>
                                {theJoinedData.profile.username}
                              </S.ModalRecruitUsername>
                              <S.ModalAccountname>
                                {theJoinedData.profile.accountname}
                              </S.ModalAccountname>
                            </S.ModalArticle>
                          </S.ProfileRecruitDetail>
                        );
                      })}
                    </S.ModalTheJoined>
                  </S.ModalTheJoinedContainer>
                </>
              )}
            </S.ModalBtnCover>
          </S.ModalContent>
          <S.ModalCloseBtn onClick={closeModal}>X</S.ModalCloseBtn>
        </S.ModalContainer>
      )}
      {closeRecruitModal && (
        <S.ModalContainer onClick={() => setCloseRecruitModal(false)}>
          <S.CloseModalContent>
            모집을 종료하면, 모집글도 삭제됩니다.
            <br />
            정말 모집을 끝낼까요?
            <S.ModalBtn onClick={() => closeRecruit(recruit[recruitId].id)}>
              종료합시다!
            </S.ModalBtn>
          </S.CloseModalContent>
        </S.ModalContainer>
      )}

      {editRecruitModal && (
        <S.ModalContainer onClick={() => setEditRecruitModal(false)}>
          <S.CloseModalContent>
            모집글을 수정하시겠습니까?
            <S.ModalBtn
              onClick={() => {
                navigate("/recruit/edit", {
                  state: { recruitData: recruit[recruitId] }
                });
              }}>
              네 수정합시다!
            </S.ModalBtn>
          </S.CloseModalContent>
        </S.ModalContainer>
      )}
    </S.RecruitContainer>
  );
}

export default Recruit;
