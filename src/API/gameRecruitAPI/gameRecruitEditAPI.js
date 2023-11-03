import axios from "axios";
import masterTokenAPI from "../masterTokenAPI";

async function gameRecruitEditAPI(_id, recruitData, gameName, gameRecruitNum, gameDetail, image) {
    try {
        const token = await masterTokenAPI();

        const itemName = [gameName, JSON.parse(recruitData.itemName)[1]];
        const link = [gameRecruitNum, gameDetail, JSON.parse(recruitData.link)[2]];

        const response = await axios.put(`https://api.mandarin.weniv.co.kr/product/${_id}`, {
        product: {
            itemName: JSON.stringify(itemName),
            price: recruitData.price,
            link: JSON.stringify(link),
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
