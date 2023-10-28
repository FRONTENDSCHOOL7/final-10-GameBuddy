import axios from "axios";

async function productListAPI(accountname) {
    const token = localStorage.getItem("token");
    try {
        const res = await axios.get(`https://api.mandarin.weniv.co.kr/product/${accountname}`, {
            headers: {
                "Authorization": `Bearer ${token}`
            }
        })
        const response = await res.data.product
        console.log("성공", response);

        return response;
    } catch (e) {
        console.log(e);
        return [];
    }
}

export default productListAPI;