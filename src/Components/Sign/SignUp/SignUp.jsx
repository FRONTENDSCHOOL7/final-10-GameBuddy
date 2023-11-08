import React, {useState, useEffect} from "react";
import { useNavigate } from "react-router";
import * as S from "./SignUpStyle";
import emailValidAPI from "../../../API/emailValidAPI";
import Header from "../../Commons/Header/Header";
import { useRecoilState  } from "recoil";
import { signUpAtom } from "../../../Store/Store";
import CharImg from "../../../assets/image/main_char.png"
import gbLogo from "../../../assets/image/GAMEBUDDY.svg"

function SignUp() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signUpData, setSignUpData] = useRecoilState(signUpAtom);
  const [emailValidResult, setEmailValidResult] = useState(0)
  const navigate = useNavigate();

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
      {showHeader && <Header type={"profileMod"} />}
      <S.SignUpForm action="" onSubmit={onSubmitHandler}>
        <S.LogoImg src={CharImg} />
        <S.LogoTitle><img src={gbLogo} style={{width: "300px", margin: "25px 0 10px"}}></img></S.LogoTitle>
        {/* <S.SignUpLogo>이메일로 회원가입</S.SignUpLogo> */}
        <S.PTag>이메일</S.PTag>
        <S.InputTag type="text" onChange={onChangeEmail} placeholder="이메일 주소를 입력해 주세요" />
        <S.Warning style={emailValidResult === 1 ? {display:"block"} : {display:"none"}}>*이미 가입된 이메일 입니다.</S.Warning>
        <S.Warning style={emailValidResult === 2 ? {display:"block"} : {display:"none"}}>*잘못된 이메일 형식입니다.</S.Warning>
        <S.PTag>비번</S.PTag>
        <S.InputTag type="password" onChange={onChangePassword} placeholder="6자리 이상의 비밀번호를 입력해 주세요"/>
        <S.SubmitBtn type="submit" disabled={!email || password.length < 6}>이메일로 회원가입!</S.SubmitBtn>
        <S.LoginLink onClick={() => navigate("/login")}>로그인 화면으로 돌아가기</S.LoginLink>
      </S.SignUpForm>
    </S.Container>
  );
}

export default SignUp;
