import React, { useState, useEffect } from "react";
import signUpAPI from "../../API/signUpAPI";

function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    signUpAPI(email, password);
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
