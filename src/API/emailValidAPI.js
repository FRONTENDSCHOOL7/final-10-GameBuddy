import axios from "axios";

async function emailValidAPI(email) {
  try {
    let result = await axios({
      method: 'post',
      url: `https://api.mandarin.weniv.co.kr/user/emailvalid`,
      data: {
        "user":{
            "email": email
        }
    }
    })
    
    if(result.data.message === '사용 가능한 이메일 입니다.') {
      return 0
    } else {
      return 1
    }

  } catch (error) {
    alert("잘못된 이메일 형식입니다. 올바른 이메일 형식을 입력해주세요!")
  }
};

export default emailValidAPI;
