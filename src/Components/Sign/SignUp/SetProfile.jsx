import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ImageCompressor from "image-compressor.js";
import signUpAPI from "../../../API/signUpAPI";
import Header from "../../Commons/Header/Header";
import * as S from "./SignUpStyle";
import DefaultImage from "../../../assets/image/char_inactive.png";
import { useRecoilState, useResetRecoilState } from "recoil";
import { signUpAtom } from "../../../Store/Store";
import uploadImageAPI from "../../../API/uploadImageAPI";
import imageChangeBtn from "../../../assets/image/img-change-btn.svg"

function SetProfile() {
  const [signUpData] = useRecoilState(signUpAtom);
  const resetSignUpData = useResetRecoilState(signUpAtom);
  const [email] = useState(signUpData.email);
  const [password] = useState(signUpData.password);
  const [userName, setUserName] = useState("");
  const [accountName, setAccountName] = useState("");
  const [intro, setIntro] = useState("");
  const [isSignUp, setIsSignUp] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();
  const [successModal, setSuccessModal] = useState(false);

  const fileInputRef = React.createRef(); // 파일 입력 참조 생성

  const [showHeader, setShowHeader] = useState(window.innerWidth < 768);

  useEffect(() => {
    // 브라우저 창 크기가 변경될 때 호출될 함수
    function handleResize() {
      setShowHeader(window.innerWidth < 768);
    }

    // resize 이벤트 리스너 등록
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => window.removeEventListener('resize', handleResize);
  }, []);


  useEffect(() => {
    if (!userName) setUserName(email.split("@")[0]);
    if (!accountName) setAccountName("_" + email.split("@")[0]);
  }, [userName, accountName]);

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const image = selectedImage || DefaultImage;
    if (userName.length < 2 || userName.length > 10) {
      setIsSignUp(2);
    } else {
      const signupResult = await signUpAPI(
        userName,
        email,
        password,
        accountName,
        intro,
        image
      );

      if (signupResult === "회원가입 성공") {
        resetSignUpData();
        setSuccessModal(true);
      } else {
        setIsSignUp(signupResult);
      }
    }
  };

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

  const handleImageChange = async (e) => {
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
    }
  };
  const handleImageClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력을 트리거
  };

  return (
    <S.Container>
      {showHeader && <Header type={"profileMod"} />}
      <S.SetProfileForm onSubmit={onSubmitHandler}>
        <S.ProfileSettingLogo>프로필 설정</S.ProfileSettingLogo>

        <S.ProfileImageSetting>
          <S.ProfileImage
            src={selectedImage || DefaultImage}
            alt="프로필 이미지"
            onClick={handleImageClick}
          />
          <S.ProfileImageChange
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
            accept="image/jpeg, image/png"
          />
          <S.ImageChangeBtn src={imageChangeBtn} onClick={handleImageClick} />
        </S.ProfileImageSetting>

        <S.PTag>사용자이름</S.PTag>
        <S.InputTag
          type="text"
          onChange={onChangeUserName}
          placeholder="2~10자 이내여야 합니다."
        />
        <S.Warning
          style={isSignUp === 2 ? { display: "block" } : { display: "none" }}>
          *유저이름은 2~10자 이내여야 합니다.
        </S.Warning>

        <S.PTag>계정ID</S.PTag>
        <S.InputTag
          type="text"
          onChange={onChangeAccountName}
          placeholder="영문, 숫자, 마침표, 밑줄만 사용 가능합니다. "
        />
        <S.Warning
          style={isSignUp === 1 ? { display: "block" } : { display: "none" }}>
          *영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.
        </S.Warning>
        <S.Warning
          style={isSignUp === 3 ? { display: "block" } : { display: "none" }}>
          *이미 사용중인 계정ID입니다.
        </S.Warning>

        <S.PTag>소개</S.PTag>
        <S.InputTag
          type="text"
          onChange={onChangeIntro}
          placeholder="자신을 소개해주세요!"
        />
        <S.SubmitBtn type="submit">Game Buddy 시작하기!</S.SubmitBtn>
        <S.LoginLink onClick={() => navigate("/login")}>로그인 화면으로 돌아가기</S.LoginLink>
      </S.SetProfileForm>

      {successModal && <S.ModalContainer>
        <S.ModalContent>
          회원가입 성공했습니다!<br />
          가입한 이메일과 비밀번호로<br />
          로그인해주세요!
          <S.ModalBtn onClick={() => navigate("/login")}>
            알겠어요 시작합시다!
          </S.ModalBtn>
        </S.ModalContent>
      </S.ModalContainer>}
    </S.Container>
  );
}

export default SetProfile;
