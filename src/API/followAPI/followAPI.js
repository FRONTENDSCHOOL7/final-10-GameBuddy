import axios from "axios";

async function followAPI(accountName) {
    try {
        const token = localStorage.getItem("token");
        let result = await axios({
            method: 'post',
            url: `https://api.mandarin.weniv.co.kr/profile/${accountName}/follow`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        
        console.log("팔로우 성공")
        console.log(result)
        return true;
    } catch (error) {
        console.log("팔로우하기 api 에러: ", error)
        return false;
    }
};

export default followAPI;