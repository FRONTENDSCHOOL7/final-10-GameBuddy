import React, { useState } from "react";
import * as S from "./WriteStyle";
import DefaultImage from "../../assets/image/WriteDefault.svg";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  alertStateAtom,
  currentLocation,
  uploadImageAtom
} from "../../Store/Store";
import gameRecruitAPI from "../../API/gameRecruitAPI/gameRecruitAPI";
import myAccountNameAPI from "../../API/myAccountNameAPI";
import Alert from "../Commons/Alert/Alert";

function GameRecruitPost() {
  const currentImage = useRecoilValue(uploadImageAtom);

  const [recruitGameTitle, setRecruitGameTitle] = useState("");
  const [recruitPeople, setRecruitPeople] = useState("");
  const [recruitDetail, setRecruitDetail] = useState("");

  const [isGameTitleValid, setIsGameTitleValid] = useState(true);
  const [isPeopleValid, setIsPeopleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);

  const location = useRecoilValue(currentLocation);

  const [alertModal, setAlertModal] = useRecoilState(alertStateAtom);

  const onChangeRecruitGameTitle = (e) => {
    const title = e.target.value;
    if (title.length < 2 || title.length > 15) {
      setIsGameTitleValid(false);
    } else {
      setIsGameTitleValid(true);
    }
    setRecruitGameTitle(title);
  };

  const onChangeRecruitPeople = (e) => {
    const people = e.target.value;
    if (!/^\d+$/.test(people)) {
      setIsPeopleValid(false);
    } else {
      setIsPeopleValid(true);
    }
    setRecruitPeople(people);
  };

  const onChangeRecruitDetail = (e) => {
    const detail = e.target.value;

    if (recruitDetail === "") {
      setIsDetailValid(true);
    } else {
      setIsDetailValid(false);
    }
    setRecruitDetail(detail);
  };

  const handlePostSubmit = async () => {
    if (currentImage === DefaultImage) {
      setAlertModal({
        message: "게임 모집 시, 이미지를 등록 해야합니다.",
        isOpen: true
      });
    } else if (recruitGameTitle.length < 2 || recruitGameTitle.length > 15) {
      setAlertModal({
        message: "모집 게임 제목을 다시 입력해주세요.",
        isOpen: true
      });
    } else if (
      !isPeopleValid ||
      recruitPeople === "" ||
      parseInt(recruitPeople) <= 0
    ) {
      setAlertModal({
        message: "모집 인원을 다시 입력해주세요.",
        isOpen: true
      });
    } else if (recruitDetail === "") {
      setAlertModal({
        message: "모집 상세 내용을 입력해주세요.",
        isOpen: true
      });
    } else {
      const myAccountName = await myAccountNameAPI();
      const result = await gameRecruitAPI(
        recruitGameTitle,
        recruitPeople,
        recruitDetail,
        currentImage,
        myAccountName
      );
      setAlertModal({
        message: result,
        isOpen: true,
        navigation: location
      });
    }
  };

  return (
    <>
      <S.PTag style={{ marginTop: "0", marginBottom: "14px" }}>
        모집 게임
      </S.PTag>
      <S.InputTag
        type="text"
        placeholder=" 2~15자 이내여야 합니다."
        value={recruitGameTitle}
        onChange={onChangeRecruitGameTitle}
      />
      <S.Warning
        style={isGameTitleValid ? { display: "none" } : { display: "block" }}>
        *2~15자 이내여야 합니다.
      </S.Warning>

      <S.PTag>모집 인원</S.PTag>
      <S.InputTag
        type="number"
        placeholder=" 숫자만 입력 가능합니다. "
        value={recruitPeople}
        onChange={onChangeRecruitPeople}
      />
      <S.Warning
        style={isPeopleValid ? { display: "none" } : { display: "block" }}>
        *숫자만 입력 가능합니다.
      </S.Warning>

      <S.PTag>모집 상세</S.PTag>
      <S.InputTag
        type="text"
        placeholder=" 포지션, 티어 등 상세 내용을 입력해주세요."
        value={recruitDetail}
        onChange={onChangeRecruitDetail}
      />
      <S.Warning
        style={isDetailValid ? { display: "none" } : { display: "block" }}>
        *포지션, 티어 등 상세 내용을 입력해주세요.
      </S.Warning>
      <S.SubmitBtn type="submit" onClick={handlePostSubmit}>
        저장하기
      </S.SubmitBtn>
      {alertModal.isOpen && <Alert />}
    </>
  );
}

export default GameRecruitPost;
