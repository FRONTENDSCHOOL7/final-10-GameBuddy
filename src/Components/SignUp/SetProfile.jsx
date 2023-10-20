import React, {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';
import DefaultImage from '../../assets/image/char_inactive.png';
import signUpAPI from '../../API/signUpAPI';

function SetProfile({email, password}) {
  const [userName, setUserName] = useState('');
  const [accountName, setAccountName] = useState('');
  const [intro, setIntro] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (!userName) setUserName(email.split('@')[0])
    if (!accountName) setAccountName('_' + email.split('@')[0])
  }, [userName, accountName])

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const image = '';
    const signupResult = await signUpAPI(userName, email, password, accountName, intro, image);

    if(signupResult) {
      alert('회원가입 성공했습니다! 가입한 이메일과 비밀번호로 로그인해주세요!')
      navigate("/login")
    } else alert("회원가입에 실패했습니다!")
  };

  const onChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const onChangeAccountName = (e) => {
    setAccountName(e.target.value);
  };

  const onChangeIntro = (e) => {
    setIntro(e.target.value);
  };

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h1>프로필 설정</h1>
        <img src={DefaultImage} alt="디폴트이미지" />
        사용자이름<input type="text" onChange={onChangeUserName} />
        <br />
        계정ID<input type="text" onChange={onChangeAccountName} />
        <br />
        소개<input type="text" onChange={onChangeIntro} />
        <br />
        <br />
        <button type='submit'>Game Buddy 시작하기!</button>
      </form>
    </>
  )
}

export default SetProfile
