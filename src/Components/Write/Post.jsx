import React, { useState } from "react";
import * as S from "./WriteStyle";
import DefaultImage from "../../assets/image/WriteDefault.svg";
import { uploadImageAtom } from "../../Store/Store";
import { useRecoilValue, useResetRecoilState } from "recoil";
// import postAPI from "../../API/postAPI";
import postListFixAPI from "../../API/postListFixAPI";
import { useNavigate } from "react-router-dom";
import { useLocation } from 'react-router-dom';

function Post() {
  const location = useLocation();
  const currentImage = useRecoilValue(uploadImageAtom);
  const resetRecoilState = useResetRecoilState(uploadImageAtom);
  const [postContent, setPostContent] = useState("");
  const [isContentValid, setIsContentValid] = useState(true);
  const navigate = useNavigate();

  const onChangePostContent = (e) => {
    if (e.target.value === "") {
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    setPostContent(e.target.value);
  };

  const handlePostSubmit = async () => {
    let result = "";
    if (currentImage === DefaultImage) {
      console.log("이거  실행");
      result = await postListFixAPI(postContent);
    } else {
      result = await postListFixAPI(postContent, currentImage);
    }

    if (result.includes("완료")) {
      alert(result);
      resetRecoilState();
      navigate("/main");
    } else {
      alert(result);
    }
  };

  return (
    <>
      <S.PTag>게시글</S.PTag>
      <S.InputTag
        type="text"
        placeholder={postContent || location.state?.content || "게시글 내용을 입력해주세요."}
        value={postContent}
        onChange={onChangePostContent}
      />
      <S.Warning
        style={isContentValid ? { display: "none" } : { display: "block" }}>
        *게시글 내용을 입력해주세요.
      </S.Warning>
      <S.SubmitBtn type="submit" onClick={handlePostSubmit}>
        저장하기
      </S.SubmitBtn>
    </>
  );
}

export default Post;