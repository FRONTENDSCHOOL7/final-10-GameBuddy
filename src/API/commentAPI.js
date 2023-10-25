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
        console.log(postCommentList)
        return postCommentList;
    } catch (error) {
        // console.log("PostList Error", error)
        return [];
    }
};

export default commentAPI;