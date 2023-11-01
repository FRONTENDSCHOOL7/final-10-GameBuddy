import axios from "axios";

async function gameRecruitEditAPI(_id, gameName, gameRecruitNum, gameDetail, image) {
    try {
        const token = localStorage.getItem("token");
        const response = await axios.put(`https://api.mandarin.weniv.co.kr/product/${_id}`, {
        product: {
            itemName: gameName,
            price: gameRecruitNum,
            link: gameDetail,
            itemImage: image
        }
      },
        {
            headers: { "Authorization": `Bearer ${token}` }
        })

        console.log("겜모집글수정:", response);
        return true
    } catch (e) {
        console.log("실패", e);
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}

export default gameRecruitEditAPI;
