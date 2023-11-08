export function isValidImage(image) {
    //이미지가 null일 경우 추가
    return image && !image.includes("undefined") && !image.includes("null") && image.includes("api.mandarin.weniv.co.kr") ? true : false;
}