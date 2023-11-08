import axios from "axios";

async function commentWriteAPI(post_id, comment) {
    try {
        const token = localStorage.getItem("token");
        let commentWrite = await axios.post(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments`, {
            "comment": {
                "content": comment.toString()
            }
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        const postCommentList = await commentWrite.data.comment;
        return postCommentList;
    } catch (error) {
        return [];
    }
};

export default commentWriteAPI;