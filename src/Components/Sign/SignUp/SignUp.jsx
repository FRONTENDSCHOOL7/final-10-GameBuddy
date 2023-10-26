import React, {useState} from "react";
import { useNavigate } from "react-router";
import * as S from "./SignUpStyle";
import emailValidAPI from "../../../API/emailValidAPI";
import Header from "../../Commons/Header/Header";
import { useRecoilState  } from "recoil";
import { signUpAtom } from "../../../Store/Store";

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpData, setSignUpData] = useRecoilState(signUpAtom);
  const [emailValidResult, setEmailValidResult] = useState(0)
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await emailValidAPI(email)
    
    // if(password.length < 6) {
    //   setEmailValidResult(3)
    // } else 
    if(result === "사용 가능한 이메일 입니다."){
      // setCheck(true)
      // 프로필세팅화면으로 넘어가야 한다.
      setSignUpData({
        email: email,
        password: password
      })
      navigate('/signup/setprofile')
    } else if (result === "이미 가입된 이메일 주소 입니다.") {
      setEmailValidResult(1)
    } else {
      setEmailValidResult(2)
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
    <S.Container>
      <Header type={"profileMod"}/>
      <S.SignUpForm action="" onSubmit={onSubmitHandler}>
        <S.SignUpLogo>이메일로 회원가입</S.SignUpLogo>
        <S.PTag>이메일</S.PTag>
        <S.InputTag type="text" onChange={onChangeEmail} placeholder="이메일 주소를 입력해 주세요" />
        <S.Warning style={emailValidResult === 1 ? {display:"block"} : {display:"none"}}>*이미 가입된 이메일 입니다.</S.Warning>
        <S.Warning style={emailValidResult === 2 ? {display:"block"} : {display:"none"}}>*잘못된 이메일 형식입니다.</S.Warning>
        <S.PTag>비번</S.PTag>
        <S.InputTag type="password" onChange={onChangePassword} placeholder="6자리 이상의 비밀번호를 입력해 주세요"/>
        <S.SubmitBtn type="submit" disabled={!email || password.length < 6}>다음</S.SubmitBtn>
      </S.SignUpForm>
    </S.Container>
  );
}

export default SignUp;
