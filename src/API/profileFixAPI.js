import axios from "axios";

async function profileFixAPI(username, accountname, intro, image) {
    const token = localStorage.getItem("token");
    try {
        const response = await axios.put('https://api.mandarin.weniv.co.kr/user', {
            "user": {
                "username": username,
                "accountname": accountname,
                "intro": intro,
                "image": image,
            }
        }, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        });
        return `${response.data.user.username}님의 정보가 변경되었습니다.`
    } catch (e) {
        return e.response.data.message;
    }

}

export default profileFixAPI;