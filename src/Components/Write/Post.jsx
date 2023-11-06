import React, { useState } from "react";
import * as S from "./WriteStyle";
import DefaultImage from "../../assets/image/WriteDefault.svg";
import {
  alertStateAtom,
  currentLocation,
  uploadImageAtom
} from "../../Store/Store";
import { useRecoilState, useRecoilValue } from "recoil";
import postAPI from "../../API/postAPI";
import Alert from "../Commons/Alert/Alert";

function Post() {
  const currentImage = useRecoilValue(uploadImageAtom);

  const [postContent, setPostContent] = useState("");

  const [isContentValid, setIsContentValid] = useState(true);
  const location = useRecoilValue(currentLocation);

  const [alertModal, setAlertModal] = useRecoilState(alertStateAtom);

  const onChangePostContent = (e) => {
    if (e.target.value === "") {
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    setPostContent(e.target.value);
  };

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    let result = "";
    if (currentImage === DefaultImage) {
      result = await postAPI(postContent);
    } else {
      result = await postAPI(postContent, currentImage);
    }

    if (result.includes("완료")) {
      setAlertModal({ message: result, isOpen: true, navigation: location });
    } else {
      setAlertModal({ message: result, isOpen: true });
    }
  };

  return (
    <>
      <S.PTagpost>게시글</S.PTagpost>
      <S.TextAreaTag
        type="text"
        placeholder=" 게시글 내용을 입력해주세요."
        value={postContent}
        onChange={onChangePostContent}
      />
      <S.Warning
        style={isContentValid ? { display: "none" } : { display: "block" }}>
        *게시글 내용을 입력해주세요.
      </S.Warning>
      <S.SubmitBtn
        type="submit"
        onClick={(e) => {
          handlePostSubmit(e);
        }}>
        저장하기
      </S.SubmitBtn>
      {alertModal.isOpen && <Alert />}
    </>
  );
}

export default Post;
