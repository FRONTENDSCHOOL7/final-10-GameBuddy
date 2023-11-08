import axios from "axios";

async function uploadImageAPI(file) {
    if (file) {
        const formData = new FormData();
        formData.append("image", file);

        try {
            const response = await axios.post(
                "https://api.mandarin.weniv.co.kr/image/uploadfile",
                formData,
                {
                    headers: {
                        "Content-Type": "multipart/form-data"
                    }
                }
            );
            return await response.data.filename;
        } catch (error) {
            console.log(error);
        }
    }
}

export default uploadImageAPI;