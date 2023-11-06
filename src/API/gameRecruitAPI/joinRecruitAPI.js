import axios from "axios";
import masterTokenAPI from "../masterTokenAPI";

async function joinRecruitAPI(_id, myAccountName, recruitData) {
    try {
        const token = await masterTokenAPI();

        const itemName = [JSON.parse(recruitData.itemName)[0], JSON.parse(recruitData.itemName)[1]];
        const price = recruitData.price + 1;
        const link = [
          JSON.parse(recruitData.link)[0], 
          JSON.parse(recruitData.link)[1], 
          [...JSON.parse(recruitData.link)[2], myAccountName]
        ];

        const response = await axios.put(`https://api.mandarin.weniv.co.kr/product/${_id}`, {
        product: {
            itemName: JSON.stringify(itemName),
            price: price,
            link: JSON.stringify(link),
            itemImage: recruitData.itemImage
        }
      },
        {
            headers: { "Authorization": `Bearer ${token}` }
        })

        // console.log("겜참여 성공:", response);
        console.log("겜참여 성공:");
        return true
    } catch (e) {
        console.log("실패", e);
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}

export default joinRecruitAPI;
