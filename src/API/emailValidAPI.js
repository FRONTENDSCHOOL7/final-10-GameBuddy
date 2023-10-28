import axios from "axios";

async function emailValidAPI(email) {
  try {
    let result = await axios.post(`https://api.mandarin.weniv.co.kr/user/emailvalid`, {
      "user": {
        "email": email
      }
    })
    console.log(result.data)
    return result.data.message
  } catch (error) {
    return 0
  }
};

export default emailValidAPI;

// async function emailValidAPI(email) {
//   try {
//     let result = await axios({
//       method: 'post',
//       url: `https://api.mandarin.weniv.co.kr/user/emailvalid`,
//       data: {
//         "user": {
//           "email": email
//         }
//       }
//     })

//     return result.data.message

//   } catch (error) {
//     return 0
//   }
// };