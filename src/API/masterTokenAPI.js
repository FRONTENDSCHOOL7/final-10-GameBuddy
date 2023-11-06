import axios from "axios";

async function masterTokenAPI() {
  try {
    let result = await axios.post("https://api.mandarin.weniv.co.kr/user/login",
      {
        user: {
          email: "gamerecruitmaster@buddy.com",
          password: "rpdla@qjel@aktmxj@"
        }
      }
    );
    // console.log(result.data)

    const token = await result.data.user.token
    return token;
  } catch (error) {
    return false;
  }
};

export default masterTokenAPI;