import axios from "axios";

async function signUpAPI(userName, email, password, accountName, intro, image) {
  console.log('유저네임: ' + userName)
  console.log(userName, email, password, accountName, intro, image)
  try {
    const result = await axios({
      method: 'post',
      url: `https://api.mandarin.weniv.co.kr/user`,
      data: {
        "user": {
            "username": userName,
            "email": email,
            "password": password,
            "accountname": accountName,
            "intro": intro,
            "image": image
        }
      } 
    })
    console.log(result.data)
    return 0
  } catch (error) {
    console.log(error.response.data)
    return 1
  }
}

export default signUpAPI
