import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../../assets/image/char_inactive.png";
import Header from "../../Commons/Header/Header";
import * as S from "./ProfileFixStyled";
import uploadImageAPI from "../../../API/uploadImageAPI";
import ImageCompressor from "image-compressor.js";
import myInfoAPI from "../../../API/myInfoAPI";
import profileFixAPI from "../../../API/profileFixAPI";

function Profile() {
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");

  const [writeUserName, setWriteUserName] = useState("");
  const [writeAccountName, setWriteAccountName] = useState("");
  const [writeIntro, setWriteIntro] = useState("");

  const [selectedImage, setSelectedImage] = useState("");
  const [isSignUp, setIsSignUp] = useState(0);
  const navigate = useNavigate();
  const fileInputRef = useRef();

  useEffect(() => {
    async function fetchData() {
      const result = await myInfoAPI();
      console.log(result);
      setUserName(result.user.username);
      setAccountName(result.user.accountname);
      setIntro(result.user.intro);
      setSelectedImage(result.user.image);
    }
    fetchData();
  }, []);

  const onChangeUserName = (e) => {
    setWriteUserName(e.target.value);
    if (isSignUp === 2) setIsSignUp(0);
  };

  const onChangeAccountName = (e) => {
    setWriteAccountName(e.target.value);
    if (isSignUp === 1) setIsSignUp(0);
  };

  const onChangeIntro = (e) => {
    setWriteIntro(e.target.value);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new ImageCompressor(file, {
        maxWidth: 130,
        maxHeight: 130,
        quality: 1, // 압축 품질 조정. 필요에 따라 이 값을 조절하세요.
        async success(result) {
          const compressedFile = new File([result], `${file.name}`, {
            type: "image/jpeg"
          });

          try {
            const updateImage = await uploadImageAPI(compressedFile);
            setSelectedImage("https://api.mandarin.weniv.co.kr/" + updateImage);
          } catch (e) {
            console.log("잘못된 이미지", e);
          }
        },
        error(err) {
          console.log(err.message);
        }
      });
    } else {
      setSelectedImage("");
    }
  };

  // 이미지 클릭 핸들러
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // '/main'은 메인 페이지의 경로
  const handleClick = async () => {
    const updatedUserName = writeUserName || userName;
    const updatedAccountName = writeAccountName || accountName;
    const updatedIntro = writeIntro || intro;
    const updatedImage = selectedImage === DefaultImage ? "" : selectedImage;

    const result = await profileFixAPI(
      updatedUserName,
      updatedAccountName,
      updatedIntro,
      updatedImage
    );

    if (result.includes("사용중")) {
      alert(result);
    } else {
      alert(result);
      navigate("/main");
    }
  };

  // API 코드 작성 (useEffect)

  return (
    <S.ProfileContainer>
      <Header type={"profileMod"} />
      <S.ProfileImage
        src={selectedImage === "" ? DefaultImage : selectedImage}
        alt="프로필 이미지"
        onClick={handleImageClick} // 이미지 클릭 시 파일 선택 창이 열림
      />

      <S.ProfileInput>
        <input
          type="file"
          onChange={handleImageChange}
          ref={fileInputRef}
          accept="image/jpeg,image/png"
          style={{ display: "none" }}
        />

        <S.PTag>사용자이름</S.PTag>
        <S.InputTag
          type="text"
          placeholder={userName}
          value={writeUserName}
          onChange={onChangeUserName}
        />
        <S.Warning
          style={isSignUp === 2 ? { display: "block" } : { display: "none" }}>
          *유저이름은 2~10자 이내여야 합니다.
        </S.Warning>

        <S.PTag>계정 ID</S.PTag>
        <S.InputTag
          type="text"
          placeholder={accountName}
          value={writeAccountName}
          onChange={onChangeAccountName}
        />
        <S.Warning
          style={isSignUp === 1 ? { display: "block" } : { display: "none" }}>
          *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </S.Warning>

        <S.PTag>소개</S.PTag>
        <S.InputTag
          type="text"
          placeholder={intro}
          value={writeIntro}
          onChange={onChangeIntro}
        />

        <S.SubmitBtn type="submit" onClick={handleClick}>
          프로필 이미지 변경하기
        </S.SubmitBtn>
      </S.ProfileInput>
    </S.ProfileContainer>
  );
}

export default Profile;
