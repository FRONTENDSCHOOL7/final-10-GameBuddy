import React, { useState, useEffect } from "react"
import signUpAPI from "../../API/signUpAPI";

function SignUp() {

  const [email, setEmail] = useState('');
  const [passwd, setPasswd] = useState('');

  return (
    <>
      <div>
        <form action='' onSubmit={(e) => {
          e.preventDefault();
          signUpAPI(email, passwd)
          }}>
          이메일<input type='text' onChange={(e) => setEmail(e.target.value)} />
          <br />
          비번<input type='password' onChange={(e) => setPasswd(e.target.value)} />
          <br />
          <br />
          <button type="submit">회원가입!</button>
        </form>
      </div>
    </>
  )
}

export default SignUp
