import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import loginAPI from "../../API/loginAPI"

function Login() {

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  const navigate = useNavigate()

  return (
    <>
      <div>
        <form action='' onSubmit={async (e) => {
          e.preventDefault();
          await loginAPI(email, passwd)
          if(localStorage.getItem('token')) { navigate('/') }
          }}>
          아이디<input type='text' onChange={(e) => setEmail(e.target.value)} />
          <br />
          비번<input type='password' onChange={(e) => setPasswd(e.target.value)} />
          <br />
          <br />
          <button type="submit">로그인!</button>
        </form>
        
        <button onClick={() => navigate('/signup')}>회원가입</button>
      </div>
    </>
  )
}

export default Login
