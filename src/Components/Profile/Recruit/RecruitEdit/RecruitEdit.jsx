import React, { useState, useRef, useEffect } from "react";
import * as S from "./RecruitEditStyle";
import Header from "../../../Commons/Header/Header";
import { useLocation, useNavigate } from "react-router-dom";
import uploadImageAPI from "../../../../API/uploadImageAPI";
import gameRecruitEditAPI from "../../../../API/gameRecruitAPI/gameRecruitEditAPI";
import myAccountNameAPI from "../../../../API/myAccountNameAPI";
import { useRecoilState } from "recoil";
import { alertStateAtom } from "../../../../Store/Store";
import Alert from "../../../Commons/Alert/Alert";

export default function RecruitEdit() {
  const fileInputRef = useRef();
  const { state } = useLocation();
  const navigate = useNavigate();
  const [uploadImage, setUploadImage] = useState("");

  const [isGameNameValid, setIsGameNameValid] = useState(true);
  const [isGameRecruitNumValid, setIsGameRecruitValid] = useState(true);
  const [isGameDetailValid, setIsGameDetailValid] = useState(true);

  const [gameName, setGameName] = useState(
    JSON.parse(state.recruitData.itemName)[0]
  );
  const [gameRecruitNum, setGameRecruitNum] = useState(
    JSON.parse(state.recruitData.link)[0]
  );
  const [gameDetail, setGameDetail] = useState(
    JSON.parse(state.recruitData.link)[1]
  );

  const [alertModal, setAlertModal] = useRecoilState(alertStateAtom);

  // console.log(state);

  useEffect(() => {
    setUploadImage(state.recruitData.itemImage);
  }, [state.recruitData.itemImage]);

  const onChangeGameName = (e) => {
    if (e.target.value === "") {
      setIsGameNameValid(false);
    } else {
      setIsGameNameValid(true);
    }
    setGameName(e.target.value);
  };
  const onChangeGameRecruitNum = (e) => {
    const value = e.target.value;
    const number = parseInt(value, 10);

    if (!isNaN(number) && number > 0) {
      setIsGameRecruitValid(true);
    } else {
      setIsGameRecruitValid(false);
    }
    setGameRecruitNum(value);
  };
  const onChangeGameDetail = (e) => {
    if (e.target.value === "") {
      setIsGameDetailValid(false);
    } else {
      setIsGameDetailValid(true);
    }
    setGameDetail(e.target.value);
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
    const result = await gameRecruitEditAPI(
      state.recruitData.id,
      state.recruitData,
      gameName,
      gameRecruitNum,
      gameDetail,
      uploadImage
    );
    if (result) {
      const myAccountName = await myAccountNameAPI();
      setAlertModal({
        message: "모집글 수정 완료",
        isOpen: true,
        navigation: `/profile/${myAccountName}`
      });
    } else {
      setAlertModal({
        message: "모집글 수정 실패",
        isOpen: true
      });
    }
  };

  return (
    <>
      <S.WriteContainer>
        <Header type="profileMod" />
        <S.ImageContainer>
          <h5 style={{ paddingTop: "114px" }}>모집글 수정</h5>
          <S.WriteImage
            src={uploadImage}
            alt="게시글 이미지"
            onClick={handleWriteImageClick}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = state.recruitData.itemImage;
            }}
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
            placeholder={"2~15자 이내여야 합니다."}
            value={gameName}
            onChange={onChangeGameName}
          />
          <S.Warning
            style={
              isGameNameValid ? { display: "none" } : { display: "block" }
            }>
            * 2~15자 이내여야 합니다.
          </S.Warning>

          <S.PTag>모집 인원</S.PTag>
          <S.InputTag
            type="number"
            placeholder={" 숫자만 입력 가능합니다. "}
            value={gameRecruitNum}
            onChange={onChangeGameRecruitNum}
          />
          <S.Warning
            style={
              isGameRecruitNumValid ? { display: "none" } : { display: "block" }
            }>
            * 숫자만 입력 가능합니다.
          </S.Warning>

          <S.PTag>모집 상세</S.PTag>
          <S.InputTag
            type="text"
            placeholder={" 포지션, 티어 등 상세 내용을 입력해주세요."}
            value={gameDetail}
            onChange={onChangeGameDetail}
          />
          <S.Warning
            style={
              isGameDetailValid ? { display: "none" } : { display: "block" }
            }>
            * 포지션, 티어 등 상세 내용을 입력해주세요.
          </S.Warning>

          <S.SubmitBtn
            type="submit"
            onClick={editRecruit}
            disabled={
              !(isGameNameValid && isGameRecruitNumValid && isGameDetailValid)
            }>
            수정하기
          </S.SubmitBtn>
        </S.WriteFormWrapper>
      </S.WriteContainer>
      {alertModal.isOpen && <Alert />}
    </>
  );
}
