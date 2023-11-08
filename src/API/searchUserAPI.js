import axios from "axios";

async function searchUserAPI(keyword) {
  try {
    const token = localStorage.getItem("token");
    let result = await axios.get(
      `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    return result.data;
  } catch (error) {
    console.log("유저 검색 결과를 가져오지 못했습니다.: ", error);
    return 0;
  }
}

export default searchUserAPI;
