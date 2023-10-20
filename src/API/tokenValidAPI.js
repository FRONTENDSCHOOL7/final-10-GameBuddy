import axios from "axios";

async function tokenValidAPI(setTokenValid) {
  try {
    const token = localStorage.getItem("token");
    let result = await axios({
      method: 'get',
      url: `https://api.mandarin.weniv.co.kr/user/myinfo`,
      headers:{
        "Authorization" : `Bearer ${token}`
      },
      data: {
      }
    })

    return `<div>메인페이지</div>`

  } catch (error) {
    localStorage.removeItem("token");
    setTokenValid(false)
  }
};

export default tokenValidAPI;