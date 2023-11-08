// 현재 로그인한 유저의 어카운트 네임을 반환하는 함수
import axios from "axios";

async function myAccountNameAPI() {
    try {
        const token = localStorage.getItem("token");
        let result = await axios.get(`https://api.mandarin.weniv.co.kr/user/myinfo`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const myAccountName = result.data.user.accountname
        return myAccountName
    } catch (error) {
        console.log("myinfo api 에러: ", error)
    }
};

export default myAccountNameAPI;
