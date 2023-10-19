import { atom, selector } from "recoil"

//로그인 성공 시, 로그인 API호출 값을 저장할 atom
export const userData = atom({
    key: "LoginUserInfo",
    default: {
        "_id": "",
        "username": "",
        "email": "",
        "accountname": "",
        "image": "",
        "token": ""
    }
})

//userData의 token값을 받아올 selector
export const tokenData = selector({
    key: "tokenData",
    get: ({ get }) => {
        const userToken = get(userData);
        return userToken.token
    }
})