import React, { useEffect, useRef, useState } from "react";
import * as S from "./WriteStyle";
import DefaultImage from "../../assets/image/WriteDefault.png";
import Header from "../Commons/Header/Header";
import Post from "./Post";
import GameRecruitPost from "./GameRecruitPost";
import { uploadImageAtom } from "../../Store/Store";
import { useRecoilState } from "recoil";
import uploadImageAPI from "../../API/uploadImageAPI";

export default function WritePage() {
  const [selectedBtn, setSelectedBtn] = useState(false);
  const [uploadImage, setUploadImage] = useRecoilState(uploadImageAtom);

  const fileInputRef = useRef();

  useEffect(() => {
    // 컴포넌트가 처음 마운트될 때 이미지 초기화
    setUploadImage(DefaultImage);
  }, []);

  const handleButtonPostClick = () => {
    // 버튼 클릭 시 이미지 초기화
    setUploadImage(DefaultImage);
    fileInputRef.current.value = "";
    setSelectedBtn(false);
  };

  const handleButtonGamePostClick = () => {
    setUploadImage(DefaultImage);
    fileInputRef.current.value = "";
    setSelectedBtn(true);
  };

  const handleWriteImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagefile = await uploadImageAPI(file);
      setUploadImage("https://api.mandarin.weniv.co.kr/" + imagefile);
    } else {
      // 파일 선택을 취소한 경우
      setUploadImage(DefaultImage);
    }
  };

  const handleWriteImageClick = () => {
    fileInputRef.current.click();
  };

  return (
    <S.WriteContainer>
      <Header type="profileMod" />

      <S.ButtonImgContainer>
        <S.Button onClick={handleButtonPostClick} selected={!selectedBtn}>
          소통글 버튼
        </S.Button>
        <S.Button onClick={handleButtonGamePostClick} selected={selectedBtn}>
          모집글 버튼
        </S.Button>
      </S.ButtonImgContainer>

      <S.ImageContainer>
        <h5>이미지 등록</h5>

        <S.WriteImage
          src={uploadImage}
          alt="모집 게임 이미지"
          onClick={handleWriteImageClick}
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
        {selectedBtn ? <GameRecruitPost /> : <Post />}
      </S.WriteFormWrapper>
    </S.WriteContainer>
  );
}
