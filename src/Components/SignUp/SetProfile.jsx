import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import styled from "styled-components";
import DefaultImage from '../../assets/image/char_inactive.png';
import ImageChangeBtn from '../../assets/image/img-change.png'
import signUpAPI from '../../API/signUpAPI';

const Container = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  text-align: center;
  position:relative;
  font-size:12px;
`
const SetProfileForm = styled.form`
  margin: 0 auto;
  width: 86%;
  position: relative;
  top:20%;
  color: #767676;
`
const ProfileSettingLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #000000;
`
const ImageChangeButton = styled.input`
  background-image: ${ImageChangeBtn};
`
const PTag = styled.p`
    margin:14px 0 6px 0;
    text-align:left;
`
const InputTag = styled.input`
  width: 100%;
  height: 23px;
  border-width: 0 0 1px;
  padding: 0 0 1px 0;
  font-size: 20px;
  &:focus {
    outline: none;
    border-color: #DBDBDB;
  }
  &::placeholder {
    color: #DBDBDB;
    font-size: 14px;
  }
`
const SubmitBtn = styled.button`
width: 100%;
height: 44px;
margin-top: 30px;
border-radius: 44px;
border: none;
background-color: ${props => props.disabled ? '#8EA1E1' : '#5865f2'};
/* background-color: #8EA1E1; */
/* background-color: #5865f2; */
color: #ffffff;
`
const Warning = styled.p`
  color: #ff0000;
  text-align:left;
  font-size: 12px;
  margin-top: 4px;
`


function SetProfile({email, password}) {
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

      if(signupResult === 0) {
        alert('회원가입 성공했습니다! 가입한 이메일과 비밀번호로 로그인해주세요!')
        navigate("/login")
      } else if(signupResult === 1) setIsSignUp(1)
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
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  const handleImageClick = () => {
    fileInputRef.current.click(); // 숨겨진 파일 입력을 트리거
  };

  return (
    <Container>
      <SetProfileForm onSubmit={onSubmitHandler}>
        <ProfileSettingLogo>프로필 설정</ProfileSettingLogo>

        <img
         src={selectedImage || DefaultImage} 
         alt="프로필 이미지" 
         onClick={handleImageClick}
         style={{cursor: 'pointer'}}
         />
        <input
          type='file'
          onChange={handleImageChange}
          ref={fileInputRef}
          accept="image/jpeg, image/png"
          style={{display:'none'}}
        />

        <PTag>사용자이름</PTag>
        <InputTag type="text" onChange={onChangeUserName} placeholder='2~10자 이내여야 합니다.' />
        <Warning style={isSignUp === 2 ? {display:"block"} : {display:"none"}}>*유저이름은 2~10자 이내여야 합니다.</Warning>
        
        <PTag>계정ID</PTag>
        <InputTag type="text" onChange={onChangeAccountName} placeholder='영문, 숫자, 마침표, 밑줄만 사용 가능합니다. ' />
        <Warning style={isSignUp === 1 ? {display:"block"} : {display:"none"}}>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</Warning>
        
        <PTag>소개</PTag>
        <InputTag type="text" onChange={onChangeIntro} placeholder='자신을 소개해주세요!' />
        <SubmitBtn type='submit'>Game Buddy 시작하기!</SubmitBtn>
      </SetProfileForm>
    </Container>
  )
}

export default SetProfile
