import axios from "axios";

async function heartPostAPI(post_id) {
    const token = localStorage.getItem("token");
    try {
        await axios.post(`https://api.mandarin.weniv.co.kr/post/${post_id}/heart`, {}, {
            headers: { // 여기서 headers로 수정
                "Authorization": `Bearer ${token}`
            }
        });
        return "heart success";
    } catch (e) {
        return "heart fail";
    }
}

export default heartPostAPI;