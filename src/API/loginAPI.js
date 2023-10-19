import axios from "axios";

// gbtestcomeon@buddy.com
// qwer1234

async function loginAPI(email, password) {
  try {
    let result = await axios.post("https://api.mandarin.weniv.co.kr/user/login",
      {
        user: {
          email: email,
          password: password
        }
      }
    );

    // let result = await axios(
    //   {
    //     method: 'POST',
    //     url: "https://api.mandarin.weniv.co.kr/user/login",
    //     data: {
    //       "user": {
    //         "email": email,
    //         "password": passwd
    //       }
    //     }
    //   }
    // )

    const token = await result.data.user.token
    localStorage.setItem("token", token)

  } catch (error) {
    console.log("에러");
    alert("로그인에 실패했습니다");
    return false;
  }
};

export default loginAPI;
