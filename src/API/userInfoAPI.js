// myInfo와 다르게 url의 accountName에 해당하는 유저의 정보를 가져옵니다.(가져오는 정보는 myInfo와 동일하기 때문에 현재 로그인한 유저, 즉 내 accountName을 넣으면 myInfo와 완전히 동일하게 작동합니다.)
import axios from "axios";

async function userInfoAPI(accountName) {
  const token = localStorage.getItem("token");
  try {
    let result = await axios.get(`https://api.mandarin.weniv.co.kr/profile/${accountName}`,
    {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    })
    const userInfo = result.data;
    return userInfo
  } catch(error) {
    console.log("유저 데이터를 가져오지 못했습니다: ", error)
  }
}

export default userInfoAPI