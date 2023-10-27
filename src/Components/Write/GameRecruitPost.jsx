import React, { useEffect, useRef, useState } from "react";
import * as S from "./WriteStyle";
import DefaultImage from "../../assets/image/WriteDefault.png";
import axios from "axios";
import { useRecoilState, useResetRecoilState } from "recoil";
import { uploadImageAtom } from "../../Store/Store";
import gameRecruitAPI from "../../API/gameRecruitAPI";

function GameRecruitPost() {
  const [currentImage, setCurrentImage] = useRecoilState(uploadImageAtom);

  const resetRecoilState = useResetRecoilState(uploadImageAtom);

  const [recruitGameTitle, setRecruitGameTitle] = useState("");
  const [recruitPeople, setRecruitPeople] = useState("");
  const [recruitDetail, setRecruitDetail] = useState("");

  const [isGameTitleValid, setIsGameTitleValid] = useState(true);
  const [isPeopleValid, setIsPeopleValid] = useState(true);
  const [isDetailValid, setIsDetailValid] = useState(true);

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
      setIsDetailValid(false);
    } else {
      setIsDetailValid(true);
    }
    setRecruitDetail(detail);
  };

  const handlePostSubmit = async () => {
    console.log("현재 이미지", currentImage);
    const result = await gameRecruitAPI(
      recruitGameTitle,
      recruitPeople,
      recruitDetail,
      currentImage
    );
    console.log(result);
  };

  return (
    <>
      <S.PTag>모집 게임</S.PTag>
      <S.InputTag
        type="text"
        placeholder="2~15자 이내여야 합니다."
        value={recruitGameTitle}
        onChange={onChangeRecruitGameTitle}
      />
      <S.Warning
        style={isGameTitleValid ? { display: "none" } : { display: "block" }}>
        *2~15자 이내여야 합니다.
      </S.Warning>

      <S.PTag>모집 인원</S.PTag>
      <S.InputTag
        type="text"
        placeholder="숫자만 입력 가능합니다. "
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
        placeholder="포지션, 티어 등 상세 내용을 입력해주세요."
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
    </>
  );
}

export default GameRecruitPost;
