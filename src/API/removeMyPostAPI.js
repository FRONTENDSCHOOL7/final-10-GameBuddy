import axios from "axios";

async function removeMyPostAPI(post_id) {
    const token = localStorage.getItem("token");
    try {
        const result = await axios.delete(`https://api.mandarin.weniv.co.kr/post/${post_id}`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        console.log("성공");

        //return 문자열
    } catch (e) {
        console.log("실패");
        //return 문자열
    }

}

export default removeMyPostAPI;