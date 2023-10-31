// 지정한 유저의 팔로워(또는 팔로잉) 목록을 가져오기 위해 만든 함수.
import axios from "axios";

// accountName에는 계정명(본인 팔로워, 팔로잉을 확인할 땐 본인 계정명), checkFollowAPI는 isFollowerList 파라미터 값에 따라 팔로잉 목록 또는 팔로워 목록을 반환할 수 있다.
async function followListAPI(accountName, isFollowerList) {
  const token = localStorage.getItem("token");
  try {
    let result = await axios.get(`https://api.mandarin.weniv.co.kr/profile/${accountName}/${isFollowerList}`, {
      headers: {
        "Authorization" : `Bearer ${token}`
      }
    })
    console.log(result.data)
    return result.data
  } catch (error) {
    console.log(`팔로우 리스트를 불러오는데 실패했습니다...${error.response.data}`)
  }
};

export default followListAPI

// async function followerAPI(accountName, isFollowerList) {
//   const token = localStorage.getItem("token");
//   try {
//     let result = await axios({
//       method: 'get',
//       url: `https://api.mandarin.weniv.co.kr/profile/${accountName}/${isFollowerList}`,
//       headers:{
//         "Authorization" : `Bearer ${token}`
//       },
//       data: {
//       }
//     })

//     console.log("성공")
//     console.log(result.data)
//     return result.data
//   } catch (error) {
//     console.log("실패")
//     console.log(error.response.data)
//   }
// };