import React from "react";
import emailValidAPI from "../../API/emailValidAPI";

function SignUp({setCheck, email, setEmail, password, setPassword}) {

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const result = await emailValidAPI(email)
    
    if(password.length < 6) {
      alert('비밀번호는 6자리 이상이어야 합니다.')
    } else if(result === 0){
      setCheck(true)
    } else if(result === 1){ 
      alert("이미 가입된 이메일 입니다.")
    }
  };

  const onChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const onChangePassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <div>
        <form action="" onSubmit={onSubmitHandler}>
          이메일
          <input type="text" onChange={onChangeEmail} />
          <br />
          비번
          <input type="password" onChange={onChangePassword} />
          <br />
          <br />
          <button type="submit">회원가입!</button>
        </form>
      </div>
    </>
  );
}

export default SignUp;
