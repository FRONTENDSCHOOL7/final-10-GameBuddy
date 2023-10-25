import axios from "axios";

async function emailValidAPI(email) {
  try {
    let result = await axios({
      method: 'post',
      url: `https://api.mandarin.weniv.co.kr/user/emailvalid`,
      data: {
        "user": {
          "email": email
        }
      }
    })

    if (result.data.message === '사용 가능한 이메일 입니다.') {
      return 0
    } else if (result.data.message === "이미 가입된 이메일 주소 입니다.") {
      return 1
    } else {
      return 3
    }

  } catch (error) {
    // alert("잘못된 이메일 형식입니다. 올바른 이메일 형식을 입력해주세요!")
    return 2
  }
};

export default emailValidAPI;
