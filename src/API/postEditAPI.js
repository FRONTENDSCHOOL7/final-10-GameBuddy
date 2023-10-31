import axios from "axios";

async function postEditAPI(post_id, content, image = "") {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.put(
            `https://api.mandarin.weniv.co.kr/post/${post_id}`,
            {
                "post": {
                    "content": content,
                    "image": image
                }
            },
            {
                headers: {
                    "Authorization": `Bearer ${token}`
                }
            }
        );

        console.log(response);

        return "게시글 수정 완료"
    } catch (e) {
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}


export default postEditAPI;