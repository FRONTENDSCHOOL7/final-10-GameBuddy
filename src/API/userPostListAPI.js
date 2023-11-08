import axios from "axios";

async function userPostListAPI(accountName) {
  const token = localStorage.getItem("token");
  try {
    let result = await axios.get(
      `https://api.mandarin.weniv.co.kr/post/${accountName}/userpost`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    const userInfo = result.data.post;
    return userInfo;
  } catch (error) {
    return [];
  }
}

export default userPostListAPI;
