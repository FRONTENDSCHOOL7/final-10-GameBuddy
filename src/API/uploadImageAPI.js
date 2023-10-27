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
            // console.log(response);
            return await response.data.filename;
        } catch (error) {
            console.log(error);
            // alert('지원되지 않는 파일 형식입니다. 이미지 파일을 선택해주세요.');

        }
    }
}

export default uploadImageAPI;