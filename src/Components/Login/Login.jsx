import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import loginAPI from "../../API/loginAPI";
import * as S from "./LoginStyle";
import CharImg from "../../assets/image/main_char.png"
import KakaoLogin from "../../assets/image/kakao-login.png"
import GoogleLogin from "../../assets/image/google-login.png"
import FbLogin from "../../assets/image/fb-login.png"

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.clear();
  }, [])

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
      <S.Container>
        <S.LoginForm onSubmit={onSubmitHandler}>
          <S.LogoImg src={CharImg} />
            <S.PTag>아이디</S.PTag>
            <S.InputTag type="text" onChange={onChangeEmail} />
            <S.PTag>비밀번호</S.PTag>
            <S.InputTag type="password" onChange={onChangePassword} />
            <S.LoginBtn type="submit" disabled={!email || password.length < 6} >로그인</S.LoginBtn>
            <S.SnsLoginGroup>
              <S.SnsLoginBtn src={KakaoLogin}/>
              <S.SnsLoginBtn src={GoogleLogin}/>
              <S.SnsLoginBtn src={FbLogin}/>
            </S.SnsLoginGroup>

          <S.SignupLink onClick={nextPage}>이메일로 회원가입</S.SignupLink>
        </S.LoginForm>
      </S.Container>
    </>
  );
}

export default Login;
