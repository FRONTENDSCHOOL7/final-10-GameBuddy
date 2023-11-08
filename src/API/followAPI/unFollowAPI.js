import axios from "axios";

async function unFollowAPI(accountName) {
    try {
        const token = localStorage.getItem("token");
        const result = await axios.delete(`https://api.mandarin.weniv.co.kr/profile/${accountName}/unfollow`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(`${accountName}님을 성공적으로 언팔로우 했습니다!`);
        return true;
    } catch (error) {
        console.log(`${accountName}님을 언팔로우하지 못했습니다`, error);
        return false;
    }
}

export default unFollowAPI;
