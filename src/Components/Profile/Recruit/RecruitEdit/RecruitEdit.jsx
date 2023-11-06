import React, { useState, useRef, useEffect } from 'react'
import * as S from "./RecruitEditStyle"
import Header from '../../../Commons/Header/Header';
import { useLocation, useNavigate } from 'react-router-dom';
import uploadImageAPI from '../../../../API/uploadImageAPI';
import gameRecruitEditAPI from '../../../../API/gameRecruitAPI/gameRecruitEditAPI';
import myAccountNameAPI from '../../../../API/myAccountNameAPI';

export default function RecruitEdit() {
  const fileInputRef = useRef();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState("");

  const [isGameNameValid, setIsGameNameValid] = useState(true);
  const [isPeopleValid, setIsPeopleValid] = useState(true);
  const [isContentValid, setIsContentValid] = useState(true);

  const [gameName, setGameName] = useState(JSON.parse(state.recruitData.itemName)[0]);
  const [gameRecruitNum, setGameRecruitNum] = useState(JSON.parse(state.recruitData.link)[0]);
  const [gameDetail, setGameDetail] = useState(JSON.parse(state.recruitData.link)[1]);

  console.log(state)

  useEffect(() => {
    setUploadImage(state.recruitData.itemImage);
  }, [state.recruitData.itemImage]);
  

  const onChangeGameName = (e) => {
    const title = e.target.value;
    if (title.length < 2 || title.length > 15) {
      setIsGameNameValid(false);
    } else {
      setIsGameNameValid(true);
    }
    setGameName(title);
  };

  const onChangeGameRecruitNum = (e) => {
    const people = e.target.value;
    if (!/^\d+$/.test(people)) {
      setIsPeopleValid(false);
    } else {
      setIsPeopleValid(true);
    }
    setGameRecruitNum(people);
  };

  const onChangeGameDetail = (e) => {
    const detail = e.target.value;
    if (gameDetail === "") {
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    setGameDetail(detail);
  };

  const handleWriteImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagefile = await uploadImageAPI(file);
      setUploadImage("https://api.mandarin.weniv.co.kr/" + imagefile);
    } else {
      // 파일 선택을 취소한 경우
      setUploadImage(state.recruitData.itemImage);
    }
  };

  const handleWriteImageClick = () => {
    fileInputRef.current.click();
  };

  const editRecruit = async () => {

    if(gameName.length < 2) {
      alert('게임 이름은 2글자 이상이어야 합니다.');
      return;
    }

    if(gameRecruitNum === "" || gameDetail === "") {
      alert('모집 인원과 상세 내용을 모두 입력해주세요.');
      return;
    }

    const result = await gameRecruitEditAPI(state.recruitData.id, state.recruitData, gameName, gameRecruitNum, gameDetail, uploadImage)
    if(result) {
      const myAccountName = await myAccountNameAPI();
      alert("수정 성공!");
      navigate(`/profile/${myAccountName}`)
    }
    else {
      alert("수정실패");
    }
  }

  return (
    <S.WriteContainer>
      <Header type="profileMod" />
      <S.ImageContainer>
        <h5>이미지 등록</h5>
        <S.WriteImage
          src={uploadImage}
          alt="게시글 이미지"
          onClick={handleWriteImageClick}
          onError={(e) => { e.target.onerror = null; e.target.src=state.recruitData.itemImage }}
        />
      </S.ImageContainer>
  
      <S.WriteFormWrapper>
        <input
          type="file"
          onChange={handleWriteImageChange}
          ref={fileInputRef}
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
        />
  
        <S.PTag>모집게임</S.PTag>
        <S.InputTag
          type="text"
          placeholder=" 2~15자 이내여야 합니다."
          value={gameName}
          onChange={onChangeGameName}
        />
        <S.Warning
          style={isGameNameValid ? { display: "none" } : { display: "block" }}
        >
          *2~15자 이내여야 합니다.
        </S.Warning>

        <S.PTag>모집 인원</S.PTag>
        <S.InputTag
          type="text"
          placeholder=" 숫자만 입력 가능합니다. "
          value={gameRecruitNum}
          onChange={onChangeGameRecruitNum}
        />
        <S.Warning
          style={isPeopleValid ? { display: "none" } : { display: "block" }}
        >
          *숫자만 입력 가능합니다.
        </S.Warning>

        <S.PTag>모집 상세</S.PTag>
        <S.InputTag
          type="text"
          placeholder=" 포지션, 티어 등 상세 내용을 입력해주세요."
          value={gameDetail}
          onChange={onChangeGameDetail}
        />
        <S.Warning
          style={isContentValid ? { display: "none" } : { display: "block" }}
        >
          *포지션, 티어 등 상세 내용을 입력해주세요.
        </S.Warning>

        <S.SubmitBtn type="submit" onClick={editRecruit}>
          수정하기
        </S.SubmitBtn>
      </S.WriteFormWrapper>
    </S.WriteContainer>
  );  
}