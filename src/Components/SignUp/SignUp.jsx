import React, {useState} from "react";
import styled from "styled-components";
import emailValidAPI from "../../API/emailValidAPI";

const Container = styled.div`
    background-color: #ffffff;
    width: 100%;
    height: 100vh;
    text-align: center;
    position:relative;
    font-size:12px;
  `

const SignUpForm = styled.form`
margin: 0 auto;
width: 86%;
position: relative;
top:20%;
color: #767676;
`

const SignUpLogo = styled.p`
  margin-bottom: 36px;
  font-size: 25px;
  font-weight:bold;
  color: #000000;
`
const PTag = styled.p`
    margin:14px 0 8px 0;
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
margin-top: 18px;
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

function SignUp({setCheck, email, setEmail, password, setPassword}) {
  const [emailValidResult, setEmailValidResult] = useState(0)

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await emailValidAPI(email)
    
    if(password.length < 6) {
      setEmailValidResult(3)
    } else if(result === 0){
      setCheck(true)
    } else {
      setEmailValidResult(result)
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
    setEmailValidResult(0)
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <Container>
        <SignUpForm action="" onSubmit={onSubmitHandler}>
          <SignUpLogo>이메일로 회원가입</SignUpLogo>
          <PTag>이메일</PTag>
          <InputTag type="text" onChange={onChangeEmail} placeholder="이메일 주소를 입력해 주세요" />
          <Warning style={emailValidResult === 1 ? {display:"block"} : {display:"none"}}>*이미 가입된 이메일 입니다.</Warning>
          <Warning style={emailValidResult === 2 ? {display:"block"} : {display:"none"}}>*잘못된 이메일 형식입니다.</Warning>
          <br />
          <PTag>비번</PTag>
          <InputTag type="password" onChange={onChangePassword} placeholder="6자리 이상의 비밀번호를 입력해 주세요"/>
          <br />
          <br />
          <SubmitBtn type="submit" disabled={!email || password.length < 6}>다음</SubmitBtn>
        </SignUpForm>
      </Container>
    </>
  );
}

export default SignUp;
