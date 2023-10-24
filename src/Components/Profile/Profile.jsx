import React, {useRef, useState} from 'react'
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import DefaultImage from '../../assets/image/char_inactive.png';
import Header from '../Commons/Header/Header';

const ProfileContainer = styled.div`
  background-color: #ffffff;
  width: 100%;
  height: 100vh;
  text-align: center;
  position:relative;
  font-size:12px;
`;

const ProfileInput = styled.div`
  padding: 0 34px;
`;

const ProfileImage = styled.img`
  cursor: pointer;

  width: 110px;
  height: 110px;
  border-radius: 100%;
  margin-top: 77.5px;
`;

const PTag = styled.p`
  margin:14px 0 6px 0;
  text-align:left;
`;

const InputTag = styled.input`
    width:100%;
    height:23px; 
    border-width :0px 0px 1px ; 
    padding: 0 0 1px 0;
    font-size: 20px;

    &:focus {
        outline:none; 
        border-color:#5865F2; 
      }
    
    &::placeholder {
      color:#DBDBDB; 
      font-size:14px;  
    }
`;

const SubmitBtn = styled.button`
width: calc(100% - 68px);
height: 44px;
margin-top: 228px;
border-radius: 44px;
border: none;
background-color: #5865f2;
color: #ffffff;
`

const Warning = styled.p`
  color: #ff0000;
  text-align:left;
  font-size: 12px;
  margin-top: 4px;
`

function Profile() {

  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const [selectedImage, setSelectedImage] = useState(null);
  const [isSignUp, setIsSignUp] = useState(0);
  const navigate = useNavigate();

  const fileInputRef = useRef();

  const onChangeUserName =(e) => {
    setUserName(e.target.value);
    if(isSignUp === 2) setIsSignUp(0);
  };

  const onChangeAccountName =(e) => {
    setAccountName(e.target.value);
    if(isSignUp === 1) setIsSignUp(0);
  };

  const onChangeIntro =(e) => {
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
    navigate('/main');
  };
  
  // API 코드 작성 (useEffect)

  return (
    <ProfileContainer>
      <Header type={"profileMod"} />
      <ProfileImage
        src={selectedImage || DefaultImage}
        alt="프로필 이미지"
        onClick={handleImageClick} // 이미지 클릭 시 파일 선택 창이 열림
      />

      <ProfileInput>
        <input 
          type='file' 
          onChange={handleImageChange} 
          ref={fileInputRef} 
          accept="image/jpeg,image/png" 
          style={{display:'none'}} 
        />
  
        <PTag>사용자이름</PTag>
        <InputTag type="text" placeholder='2~10자 이내여야 합니다.' value={userName} onChange={onChangeUserName} />
        <Warning style={isSignUp === 2 ? {display:"block"} : {display:"none"}}>*유저이름은 2~10자 이내여야 합니다.</Warning>
  
        <PTag>계정 ID</PTag>
        <InputTag type="text" placeholder='영문 숫자 마침표 밑줄만 사용 가능합니다. ' value={accountName} onChange={onChangeAccountName} />
        <Warning style={isSignUp === 1 ? {display:"block"} : {display:"none"}}>*영문, 숫자, 밑줄 및 마침표만 사용할 수 있습니다.</Warning>
        
        <PTag>소개</PTag>
        <InputTag type="text" placeholder='자신을 소개해주세요.' value={intro} onChange={onChangeIntro}/>
  
        <SubmitBtn type='submit' onClick={handleClick}>Game Buddy 시작하기!</SubmitBtn>
      </ProfileInput>
      
    </ProfileContainer>
  );
}

export default Profile;