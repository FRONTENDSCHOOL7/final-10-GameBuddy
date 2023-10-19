import axios from "axios"

async function loginAPI(email, passwd) {
  try {
    let result = await axios(
      {
        method: 'POST',
        url: "https://api.mandarin.weniv.co.kr/user/login",
        data: {
          "user":{
              "email": email,
              "password": passwd
          }
        }
      }
    )

    const token = result.data.user.token
    localStorage.setItem("token", token)

  } catch (error) {
    console.log("에러")
    alert("로그인에 실패했습니다")
    return false
  }
}

export default loginAPI
