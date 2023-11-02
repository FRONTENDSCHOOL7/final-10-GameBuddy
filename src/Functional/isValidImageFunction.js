export function isValidImage(image) {
    return image.includes("api.mandarin.weniv.co.kr") && !image.includes("undefined") && !image.includes("null") && image !== "" ? true : false;
}