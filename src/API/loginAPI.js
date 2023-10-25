import axios from "axios";

// gbtestcomeon@buddy.com
// qwer1234

async function loginAPI(email, password) {
  localStorage.clear();
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

  } catch (error) {
    console.log("에러 : " + error);
    alert("이메일 또는 비밀번호가 일치하지 않습니다.");
    // return false;
  }
};

export default loginAPI;