import axios from "axios";

async function signUpAPI(userName, email, password, accountName, intro, image) {
  console.log('유저네임: ' + userName)
  console.log(userName, email, password, accountName, intro, image)
  try {
    const result = await axios.post(`https://api.mandarin.weniv.co.kr/user`, {
      "user": {
        "username": userName,
        "email": email,
        "password": password,
        "accountname": accountName,
        "intro": intro,
        "image": image
      }
    })
    return result.data.message
  } catch (error) {
    if(error.response.data.message === "이미 사용중인 계정 ID입니다.") return 3
    else return 1
  }
}

export default signUpAPI

// async function signUpAPI(userName, email, password, accountName, intro, image) {
//   console.log('유저네임: ' + userName)
//   console.log(userName, email, password, accountName, intro, image)
//   try {
//     const result = await axios({
//       method: 'post',
//       url: `https://api.mandarin.weniv.co.kr/user`,
//       data: {
//         "user": {
//             "username": userName,
//             "email": email,
//             "password": password,
//             "accountname": accountName,
//             "intro": intro,
//             "image": image
//         }
//       } 
//     })

//     return result.data.message
//   } catch (error) {
//     if(error.response.data.message === "이미 사용중인 계정 ID입니다.") return 3
//     else return 1
//   }
// }