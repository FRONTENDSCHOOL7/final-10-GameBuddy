import { atom, selector } from "recoil"

//로그인 성공 시, 로그인 API호출 값을 저장할 atom
export const userDataAtom = atom({
    key: "userDataAtom",
    default: {
        "_id": "",
        "username": "",
        "email": "",
        "accountname": "",
        "image": "",
        "token": ""
    }
})

// MainFeed에서 SwitchMode를 누를 시, 상태 변경시키는 atom
export const switchModeAtom = atom({
    key: "switchModeAtom",
    default: false
})

// postListData 저장하는 atom
export const postListDataAtom = atom({
    key: "postListDataAtom",
    default: []
})

//userData의 token값을 받아올 selector
export const tokenDataSelector = selector({
    key: "tokenDataSelector",
    get: ({ get }) => {
        const userToken = get(userDataAtom);
        return userToken.token
    }
})