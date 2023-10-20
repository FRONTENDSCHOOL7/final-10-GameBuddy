import React, { useState } from "react";
import SignUp from "../Components/SignUp/SignUp";
import SetProfile from "../Components/SignUp/SetProfile";

function SignUpPage() {
  const [check, setCheck] = useState(false)

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return check ? <SetProfile email={email} password={password} /> : <SignUp setCheck={setCheck} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
}

export default SignUpPage;
