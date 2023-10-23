import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import backImage from '../../assets/image/back_Button.png';
import Header_backImage from '../../assets/image/Header_Back.png';

const ProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  div {
    display: block
  }

  Input.inputType {
    color: var(--767676, #767676);
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;


const Input = styled.input`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Footer = styled.footer`
  position: fixed;
  bottom: 20px;
  left: calc(50% - (322px / 2));
`;

const SaveButton = styled.button`
  width :322px ;
  height :44px ;
  border-radius :32px ;
  border:none ;
  background:#5865F2 ;
  color:white ;
  font-size :16px ;
`;


export default function Profile({email, password}) {
  const [profile, setProfile] = useState({
    photo:null,
    userName:'',
    accountName:'',
    intro:''
  });


// export default function Profile({

//   photo:null,
//   userName:'',
//   accountName:'',
//   intro:'',
// }) {
//   const [profile, setProfile] = useState()
// }

  // useEffect(() => {
  //   if (!profile.username) setProfile(prevProfile => ({...prevProfile, username : email.split('@')[0]}))
  //   if (!profile.accountId) setProfile(prevProfile => ({...prevProfile, accountId :'_' + email.split('@')[0]}))
  // }, [email])

  

  const handleImageChange=(event)=>{
    setProfile({
      ...profile,
      photo : URL.createObjectURL(event.target.files[0])
    });
  };

  // 사용자 이름
  const handleNameChange=(event)=>{
      setProfile({
      ...profile,
      [event.target.userName]: event.target.value
    });
  };

//   const handleNameChange=(event)=>{
//     const value = event.target.value;
//     setNameValue(value);
//     setNameError('');
// };

  // 계정 ID
  const handleIdChange=(event)=>{
    setProfile({
      ...profile,
      [event.target.accountName]: event.target.value
    });
  };

  // 소개
  const handleIntroChange=(event)=>{
    setProfile({
      ...profile,
      [event.target.intro]: event.target.value
    });
  };

  const handleSubmit=(event)=>{
    event.preventDefault();
    // API 호출
    console.log(profile);

    window.history.back();
  };

  return (
  <div>

  <header>
    {/* <img src={Header_backImage} alt="header" /> */}
    <img src={backImage} alt="뒤로가기" onClick={()=>window.history.back()} />
  </header>


  <ProfileForm onSubmit={handleSubmit}>


    {/* <Input type="file" name="photo" multiple onChange={handleImageChange} /> */}

    
    <div>
      사용자 이름
      <Input
        id='name'
        inputType='text'
        labelText='사용자 이름'
        placeHolder='2~10자 이내여야 합니다.'
        value={profile.userName}
        onChange= {handleNameChange}
      />
    </div>

    <div>
      계정 ID
      <Input 
        id='id'
        inputType='text'
        labelText='계정 ID'
        placeHolder='영문, 숫자, 특수문자(.),(_)만 사용 가능합니다.'
        value={profile.accountName}
        onChange= {handleIdChange}
      />
    </div>

    <div>
      소개
      <Input 
        id='intro'
        inputType='text'
        labelText='소개'
        placeHolder='자신을 소개해주세요.'
        value={profile.intro}
        onChange= {handleIntroChange}
      />
    </div>
</ProfileForm>

<Footer>
  <SaveButton onClick ={handleSubmit}> <strong>Game Buddy</strong> 저장하기</SaveButton> 
</Footer>

 {/* 프로필 미리보기 */}
{/* 
{ profile.username && (<p>Username:{profile.username}</p>) }
{ profile.accountId && (<p>Account ID:{profile.accountId}</p>) }
{ profile.introduction && (<p>Introduction:{profile.introduction}</p>) } */}

  </div>
  );
}