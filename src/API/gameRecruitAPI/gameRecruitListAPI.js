import axios from "axios";

async function gameRecruitListAPI(accountname) {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.get(`https://api.mandarin.weniv.co.kr/product/gamerecruitmaster?limit=50`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await res.data.product
        // console.log("원본 리스트", response)
        const result = response.filter((data) => {
            return JSON.parse(data.itemName)[1] === accountname;
        });

        // console.log("리스트 불러오기 성공", result);
        console.log("리스트 불러오기 성공");
        return result;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export default gameRecruitListAPI;