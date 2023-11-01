import axios from "axios";


async function gameRecruitDeleteAPI(_id) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.delete(`https://api.mandarin.weniv.co.kr/product/${_id}`,
        {
            headers: { "Authorization": `Bearer ${token}` }
        })

        console.log("겜모집글삭제:", response);
        return true
    } catch (e) {
        console.log("실패", e);
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}

export default gameRecruitDeleteAPI;
