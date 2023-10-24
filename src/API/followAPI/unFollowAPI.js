import axios from "axios";

async function unFollowAPI(accountName) {
    try {
        const token = localStorage.getItem("token");
        let result = await axios({
            method: 'delete',
            url: `https://api.mandarin.weniv.co.kr/profile/${accountName}/unfollow`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        
        console.log("언팔로우 완료")
        console.log(result)
    } catch (error) {
        console.log("언팔로우 api 에러: ", error)
    }
};

export default unFollowAPI;