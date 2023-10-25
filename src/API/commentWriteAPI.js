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
        // console.log(commentWrite.data.comment)
        const postCommentList = await commentWrite.data.comment;
        console.log(postCommentList)
        return postCommentList;
    } catch (error) {
        // console.log("PostList Error", error)
        return [];
    }
};

export default commentWriteAPI;