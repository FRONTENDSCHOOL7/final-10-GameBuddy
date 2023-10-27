import axios from "axios";

async function postAPI(content, image = "") {
    const token = localStorage.getItem("token");

    try {
        const response = await axios.post(
            "https://api.mandarin.weniv.co.kr/post",
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

        return "게시글 작성 완료"
    } catch (e) {
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}


export default postAPI;