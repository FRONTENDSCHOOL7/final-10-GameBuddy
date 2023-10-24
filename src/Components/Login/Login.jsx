import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginAPI from "../../API/loginAPI";
import styled from "styled-components";
import CharImg from "../../assets/image/main_char.png"
import KakaoLogin from "../../assets/image/kakao-login.png"
import GoogleLogin from "../../assets/image/google-login.png"
import FbLogin from "../../assets/image/fb-login.png"
import { useSetRecoilState } from 'recoil';
import { userDataAtom } from '../../Store/Store';

const Container = styled.div`
    background-color: #000000;
    width: 100%;
    height: 100vh;
    text-align: center;
    position:relative;
    font-size:12px;
  `

  const LoginForm = styled.form`
    margin: 0 auto;
    width: 86%;
    position: relative;
    top:20%;
    color: #767676;
  `

  const LogoImg = styled.img`
    width: 174px;
    height: 103px;
  `
  const PTag = styled.p`
    margin:16px 0 2px 0;
    text-align:left;
  `

  const InputTag = styled.input`
    width: 94%;
    height: 48px;
    border: 0px;
    padding: 0 3%;
    font-size: 20px;
  `

  const LoginBtn = styled.button`
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

  const SnsLoginGroup = styled.div`
    width: 230px;
    margin: 35px auto 0;
    display: flex;
    justify-content: space-between;
  `

  const SnsLoginBtn = styled.img`
    width: 55px;
    height: 55px;
    border: none;
  `

  const SignupLink = styled.p`
    margin-top: 24px;
    font-size: 15px;
  `

function Login() {
  const setUserData = useSetRecoilState(userDataAtom);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const response = await loginAPI(email, password);

    if (localStorage.getItem("token")) {
      navigate("/main");
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const nextPage = () => {
    navigate("/signup");
  };

  return (
    <>
      <Container>
        <LoginForm onSubmit={onSubmitHandler}>
          <LogoImg src={CharImg} />
            <PTag>아이디</PTag>
            <InputTag type="text" onChange={onChangeEmail} />
            <br />
            <PTag>비밀번호</PTag>
            <InputTag type="password" onChange={onChangePassword} />
            <br />
            <br />
            <LoginBtn type="submit" disabled={!email || password.length < 6} >로그인</LoginBtn>
            <SnsLoginGroup>
              <SnsLoginBtn src={KakaoLogin}/>
              <SnsLoginBtn src={GoogleLogin}/>
              <SnsLoginBtn src={FbLogin}/>
            </SnsLoginGroup>

          <SignupLink onClick={nextPage}>이메일로 회원가입</SignupLink>
        </LoginForm>
      </Container>
    </>
  );
}

export default Login;
