import React, { useState } from "react";
import SignUp from "../../../Components/Sign/SignUp/SignUp";
import SetProfile from "../../../Components/Sign/SignUp/SetProfile";
import Header from "../../../Components/Commons/Header/Header";

function SetProfilePage() {
  // const [check, setCheck] = useState(false)

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");

  // return check ? <><Header type={"profileMod"} /><SetProfile email={email} password={password} /></> : <><Header type={"profileMod"} /><SignUp setCheck={setCheck} email={email} setEmail={setEmail} password={password} setPassword={setPassword} /></>
  
  return <SetProfile />
}

export default SetProfilePage;
