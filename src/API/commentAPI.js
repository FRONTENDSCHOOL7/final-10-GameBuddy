import axios from "axios";

async function commentAPI(post_id) {
    try {
        const token = localStorage.getItem("token");
        let commentList = await axios.get(`https://api.mandarin.weniv.co.kr/post/${post_id}/comments`, {
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        const postCommentList = await commentList.data.comments;
        return postCommentList;
    } catch (error) {
        return [];
    }
};

export default commentAPI;