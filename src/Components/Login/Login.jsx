import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import loginAPI from "../../API/loginAPI";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onSubmitHandler = async (e) => {
    e.preventDefault();
    await loginAPI(email, password);
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
      <div>
        <form action="" onSubmit={onSubmitHandler}>
          아이디
          <input type="text" onChange={onChangeEmail} />
          <br />
          비번
          <input type="password" onChange={onChangePassword} />
          <br />
          <br />
          <button type="submit">로그인!</button>
        </form>

        <button onClick={nextPage}>회원가입</button>
      </div>
    </>
  );
}

export default Login;
