import axios from "axios";

async function removeCommentAPI(post_id, comment_id) {
    try {
        const token = localStorage.getItem("token");
        await axios.delete(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments/${comment_id}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        return "댓글이 삭제되었습니다."
    } catch (error) {
        return "댓글이 존재하지 않습니다."
    }
};

export default removeCommentAPI;