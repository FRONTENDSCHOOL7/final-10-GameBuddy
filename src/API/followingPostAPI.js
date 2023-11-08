import axios from "axios";

async function followingPostAPI() {
    try {
        const token = localStorage.getItem("token");
        let result = await axios.get(`https://api.mandarin.weniv.co.kr/post/feed`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const post = await result.data.posts
        return post
    } catch (error) {
        return [];
    }
};

export default followingPostAPI;
