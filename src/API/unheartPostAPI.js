import axios from "axios";

async function unheartPostAPI(post_id) {
    const token = localStorage.getItem("token");
    try {
        await axios.delete(`https://api.mandarin.weniv.co.kr/post/${post_id}/unheart`, {
            headers: { // 여기서 headers로 수정
                "Authorization": `Bearer ${token}`
            }
        });
        return "unheart success"
    } catch (e) {
        return "unheart fail";
    }
}

export default unheartPostAPI;