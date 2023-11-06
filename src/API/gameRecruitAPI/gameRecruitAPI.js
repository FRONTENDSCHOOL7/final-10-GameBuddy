import axios from "axios";
import masterTokenAPI from "../masterTokenAPI"

async function gameRecruitAPI(gameTitle, people, detail, itemImage = "", accountName) {
    try {
        const token = await masterTokenAPI();

        const itemName = [gameTitle, accountName]  // 게임이름과 모집자의 어카운트네임을 저장
        const link = [people, detail, [accountName]]  // 최대모집인원과 모집설명을 저장

        const response = await axios.post("https://api.mandarin.weniv.co.kr/product", {
            "product": {
                "itemName": JSON.stringify(itemName),
                "price": 1, // 현재 모집인원, 등록시엔 모집자 한 명 뿐이므로 1로 고정.
                "link": JSON.stringify(link),
                "itemImage": itemImage //게임모집글의 게임이미지
            }
        }, {
            headers: { "Authorization": `Bearer ${token}` }
        })

        // console.log("모집글 게시 성공", response);
        console.log("모집글 게시 성공");

        return "게임 모집글 게시되었습니다!"
    } catch (e) {
        console.log("실패", e);
        return false;
    }
}

export default gameRecruitAPI;
