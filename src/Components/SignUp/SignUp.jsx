import React, {useState} from "react";
import * as S from "./SignUpStyle";
import emailValidAPI from "../../API/emailValidAPI";


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
    <S.Container>
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
