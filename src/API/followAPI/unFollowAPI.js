import axios from "axios";

async function unFollowAPI(accountName) {
    try {
        const token = localStorage.getItem("token");
        const result = await axios.delete(`https://api.mandarin.weniv.co.kr/profile/${accountName}/unfollow`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        console.log(`${accountName}님을 성공적으로 언팔로우 했습니다!`);
        return true;
    } catch (error) {
        console.log(`${accountName}님을 언팔로우하지 못했습니다`, error);
        return false;
    }
}

export default unFollowAPI;

// async function unFollowAPI(accountName) {
//     try {
//         const token = localStorage.getItem("token");
//         let result = await axios({
//             method: 'delete',
//             url: `https://api.mandarin.weniv.co.kr/profile/${accountName}/unfollow`,
//             headers: {
//                 "Authorization": `Bearer ${token}`
//             },
//         })
        
//         console.log("언팔로우 완료")
//         console.log(result)
//         return true
//     } catch (error) {
//         console.log("언팔로우 api 에러: ", error)
//         return false
//     }
// };