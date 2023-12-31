import { atom, selector } from "recoil";

//현재 로그인한 유저의 데이터를 저장할 atom
export const userDataAtom = atom({
  key: "userDataAtom",
  default: {
    _id: "",
    username: "",
    email: "",
    accountname: "",
    image: "",
    intro: "",
    token: "",
    following: [],
    follower: [],
    followerCount: 0,
    followingCount: 0
  }
});

//푸터에서 사용하며, 푸터가 있는 모든 페이지에서 사용가능한 userAccount 저장용 atom
export const myDataAtom = atom({
  key: "myDataAtom",
  default: {
    _id: "",
    accountname: "",
    following: [],
    follower: []
  }
});

// 원하는 유저의 게시글 목록을 저장하는 atom
export const userPostListAtom = atom({
  key: "userPostListAtom",
  default: []
});

//회원가입할 때, 이메일과 비밀번호를 저장할 atom
export const signUpAtom = atom({
  key: "",
  default: {
    email: "",
    password: ""
  }
});

// MainFeed에서 SwitchMode를 누를 시, 상태 변경시키는 atom
export const switchModeAtom = atom({
  key: "switchModeAtom",
  default: false
});

// postListData 저장하는 atom
export const postListDataAtom = atom({
  key: "postListDataAtom",
  default: []
});

// postListData에서 원하는 게시글을 클릭 시, 몇번째 인덱스인지 저장
export const postListDataIndexAtom = atom({
  key: "postListDataIndexAtom",
  default: 0
});

//userData의 token값을 받아올 selector
export const tokenDataSelector = selector({
  key: "tokenDataSelector",
  get: ({ get }) => {
    const userToken = get(userDataAtom);
    return userToken.token;
  }
});

//MainFeed에 게시글을 눌렀을 때, 확인하는 Atom
export const isTouchFeed = atom({
  key: "isTouchFeed",
  default: false
});

//PostDetail에 표현할 데이터를 저장해 놓는 Selector
export const getPostDataSelector = selector({
  key: "getPostDataSelector",
  get: ({ get }) => {
    const postDetailDataItem = get(postListDataAtom);
    const postDetailDataItemIndex = get(postListDataIndexAtom);
    return postDetailDataItem[postDetailDataItemIndex];
  }
});

// PostDetail에 들어갔을 때, 댓글 리스트 목록 데이터 저장용 Atom
export const commentListDataAtom = atom({
  key: "commentListDataAtom",
  default: []
});

// 댓글창에 내 유저정보 확인하기 위해 사용되는 Atom
export const checkMyInfo = atom({
  key: "checkMyInfo",
  default: {}
});

// 게시글 작성에 필요한 데이터 이미지
export const uploadImageAtom = atom({
  key: "uploadImageAtom",
  default: ""
});

// 사용자가 검색한 키워드를 저장하는 Atom
export const searchKeywordAtom = atom({
  key: "searchKeywordAtom",
  default: ""
});

// user 검색 결과를 저장하는 Atom
export const userSearchResultAtom = atom({
  key: "userSearchResultAtom",
  default: []
});

// userPostListData에서 원하는 게시글을 클릭 시, 몇번째 인덱스인지 저장
export const userPostListDataIndexAtom = atom({
  key: "userPostListDataIndexAtom",
  default: 0
});

//userPostDetail에 표현할 데이터를 저장해 놓는 Selector
export const getUserPostDataSelector = selector({
  key: "getUserPostDataSelector",
  get: ({ get }) => {
    const userPostDetailDataItem = get(userPostListAtom);
    const userPostDetailDataItemIndex = get(userPostListDataIndexAtom);
    return userPostDetailDataItem[userPostDetailDataItemIndex];
  }
});

// MainFeed와 Profile의 위치를 확인하기 위한 path경로 저장용 atom
export const currentLocation = atom({
  key: "currentLocation",
  default: ""
})

//Alert를 사용하기 위해 만든 Atom
export const alertStateAtom = atom({
  key: 'alertStateAtom',
  default: {
    isOpen: false,
    message: '',
    navigation: ''
  }
});

export const isFollowAtom = atom({
  key: 'isFollowAtom',
  default: false
})