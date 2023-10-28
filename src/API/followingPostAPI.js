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
        console.log("PostList Error", error)
        return [];
    }
};

export default followingPostAPI;

// async function followingPostAPI() {
//     try {
//         const token = localStorage.getItem("token");
//         let result = await axios({
//             method: 'get',
//             url: `https://api.mandarin.weniv.co.kr/post/feed`,
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             },
//         })
//         const post = await result.data.posts
//         return post
//     } catch (error) {
//         console.log("PostList Error", error)
//         return [];
//     }
// };