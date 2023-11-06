import axios from "axios";

async function reportCommentAPI(post_id, comment_id, username) {
    // console.log(post_id)
    try {
        const token = localStorage.getItem("token");
        const res = await axios.post(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments/${comment_id}/report`, {}, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        const result = await res.data.report;

        return `${username}님이 신고되었습니다.`
    } catch (error) {
        return `${username}님의 댓글이 존재하지 않습니다.`
    }
};

export default reportCommentAPI;