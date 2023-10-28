import axios from "axios";
import emailValidAPI from "./emailValidAPI";

async function loginAPI(email, password) {
  const isEmailSigned = await emailValidAPI(email) === "이미 가입된 이메일 주소 입니다." ? true : false
  if(isEmailSigned) {

    try {
      let result = await axios.post("https://api.mandarin.weniv.co.kr/user/login",
        {
          user: {
            email: email,
            password: password
          }
        }
      );
  
      console.log(result.data)
  
      const token = await result.data.user.token
      localStorage.setItem("token", token)
      return true;
    } catch (error) {
      alert("비밀번호가 일치하지 않습니다.");
      return false;
    }

  } else {
    alert("회원정보가 없습니다.")
  }
};

export default loginAPI;