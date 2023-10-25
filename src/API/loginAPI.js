import axios from "axios";
import emailValidAPI from "./emailValidAPI";

// gbtestcomeon@buddy.com
// qwer1234

async function loginAPI(email, password) {
  const isEmailSigned = await emailValidAPI(email) === 3 ? true : false
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