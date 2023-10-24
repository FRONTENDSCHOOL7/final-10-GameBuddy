// 현재 로그인한 유저(로컬스토리지에 저장된 토큰 기준)의 정보를 불러오는 함수. 처음 페이지 렌더링 시, 리코일 아톰에 값을 저장하기 위해 작성.
import axios from "axios";

async function myInfoAPI() {
    try {
        const token = localStorage.getItem("token");
        let result = await axios({
            method: 'get',
            url: `https://api.mandarin.weniv.co.kr/user/myinfo`,
            headers: {
                "Authorization": `Bearer ${token}`
            },
        })
        const myInfo = result.data
        return await myInfo
    } catch (error) {
        console.log("myinfo api 에러: ", error)
    }
};

export default myInfoAPI;