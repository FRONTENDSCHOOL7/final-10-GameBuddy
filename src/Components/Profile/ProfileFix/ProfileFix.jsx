import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../../assets/image/char_inactive.png";
import Header from "../../Commons/Header/Header";
import * as S from "./ProfileFixStyled";

function Profile() {
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSignUp, setIsSignUp] = useState(0);
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
    if (isSignUp === 2) setIsSignUp(0);
  };

  const onChangeAccountName = (e) => {
    setAccountName(e.target.value);
    if (isSignUp === 1) setIsSignUp(0);
  };

  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };

  // 이미지 변경 핸들러
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  // 이미지 클릭 핸들러
  const handleImageClick = () => {
    fileInputRef.current.click();
  };

  // '/main'은 메인 페이지의 경로
  const handleClick = () => {
    navigate("/main");
  };

  // API 코드 작성 (useEffect)

  return (
    <S.ProfileContainer>
      <Header type={"profileMod"} />
      <S.ProfileImage
        src={selectedImage || DefaultImage}
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
          placeholder="2~10자 이내여야 합니다."
          value={userName}
          onChange={onChangeUserName}
        />
        <S.Warning
          style={isSignUp === 2 ? { display: "block" } : { display: "none" }}>
          *유저이름은 2~10자 이내여야 합니다.
        </S.Warning>

        <S.PTag>계정 ID</S.PTag>
        <S.InputTag
          type="text"
          placeholder="영문 숫자 마침표 밑줄만 사용 가능합니다. "
          value={accountName}
          onChange={onChangeAccountName}
        />
        <S.Warning
          style={isSignUp === 1 ? { display: "block" } : { display: "none" }}>
          *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </S.Warning>

        <S.PTag>소개</S.PTag>
        <S.InputTag
          type="text"
          placeholder="자신을 소개해주세요."
          value={intro}
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
