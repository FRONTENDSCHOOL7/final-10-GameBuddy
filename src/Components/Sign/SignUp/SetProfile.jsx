import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import ImageCompressor from 'image-compressor.js';
import signUpAPI from '../../../API/signUpAPI';
import Header from '../../Commons/Header/Header';
import * as S from "./SignUpStyle";
import DefaultImage from '../../../assets/image/char_inactive.png'
import { useRecoilState, useResetRecoilState  } from "recoil";
import { signUpAtom } from "../../../Store/Store";

function SetProfile() {
  const [signUpData] = useRecoilState(signUpAtom);
  const resetSignUpData = useResetRecoilState(signUpAtom);
  const [email] = useState(signUpData.email);
  const [password] = useState(signUpData.password);
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [isSignUp, setIsSignUp] = useState(0);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate();

  const fileInputRef = React.createRef(); // 파일 입력 참조 생성

  useEffect(() => {
    if (!userName) setUserName(email.split('@')[0])
    if (!accountName) setAccountName('_' + email.split('@')[0])
  }, [userName, accountName])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const image = selectedImage || DefaultImage;
    if(userName.length < 2 || userName.length > 10) {
      setIsSignUp(2)
    } else {
      const signupResult = await signUpAPI(userName, email, password, accountName, intro, image);

      if(signupResult === "회원가입 성공") {
        alert('회원가입 성공했습니다! 가입한 이메일과 비밀번호로 로그인해주세요!')
        resetSignUpData();
        navigate("/login")
      } else {
        setIsSignUp(signupResult)
      }
    }
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
    if(isSignUp === 2) setIsSignUp(0);
  };

  const onChangeAccountName = (e) => {
    setAccountName(e.target.value);
    if(isSignUp === 1) setIsSignUp(0);
  };

  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      new ImageCompressor(file, {
        maxWidth: 100,
        maxHeight: 100,
        quality: 1, // 압축 품질 조정. 필요에 따라 이 값을 조절하세요.
        success(result) {
          const imageUrl = URL.createObjectURL(result);
          setSelectedImage(imageUrl)
        },
        error(err) {
          console.log(err.message);
        },
      });
    }
  };
  const handleImageClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력을 트리거
  };

  return (
    <S.Container>
      <Header type={"profileMod"} />
      <S.SetProfileForm onSubmit={onSubmitHandler}>
        <S.ProfileSettingLogo>프로필 설정</S.ProfileSettingLogo>

        <S.ProfileImage
         src={selectedImage || DefaultImage} 
         alt="프로필 이미지" 
         onClick={handleImageClick}
         />
        <S.ProfileImageChange
          type='file'
          onChange={handleImageChange}
          ref={fileInputRef}
          accept="image/jpeg, image/png"
        />

        <S.PTag>사용자이름</S.PTag>
        <S.InputTag type="text" onChange={onChangeUserName} placeholder='2~10자 이내여야 합니다.' />
        <S.Warning style={isSignUp === 2 ? {display:"block"} : {display:"none"}}>*유저이름은 2~10자 이내여야 합니다.</S.Warning>
        
        <S.PTag>계정ID</S.PTag>
        <S.InputTag type="text" onChange={onChangeAccountName} placeholder='영문, 숫자, 마침표, 밑줄만 사용 가능합니다. ' />
        <S.Warning style={isSignUp === 1 ? {display:"block"} : {display:"none"}}>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</S.Warning>
        <S.Warning style={isSignUp === 3 ? {display:"block"} : {display:"none"}}>*이미 사용중인 계정ID입니다.</S.Warning>
        
        <S.PTag>소개</S.PTag>
        <S.InputTag type="text" onChange={onChangeIntro} placeholder='자신을 소개해주세요!' />
        <S.SubmitBtn type='submit'>Game Buddy 시작하기!</S.SubmitBtn>
      </S.SetProfileForm>
    </S.Container>
  )
}

export default SetProfile
