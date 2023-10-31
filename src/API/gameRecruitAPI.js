import axios, { AxiosError } from "axios";


async function gameRecruitAPI(gameTitle, people, detail, itemImage = "") {
    console.log("아이템 값", itemImage);
    try {
        // link값 임시로 gamebuddy로 넣겠습니다. 필요하면 의논 후 수정
        const token = localStorage.getItem("token");
        const response = await axios.post("https://api.mandarin.weniv.co.kr/product", {
            "product": {
                "itemName": gameTitle,
                "price": parseInt(people),
                "link": detail,
                "itemImage": itemImage
            }
        }, {
            headers: { "Authorization": `Bearer ${token}` }
        })

        console.log(response);

        return "게임 모집글 게시되었습니다!"
    } catch (e) {
        console.log("실패", e);
        const ErrorMessage = await e.response.data.message;
        return ErrorMessage;
    }
}

export default gameRecruitAPI;
