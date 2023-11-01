import React, { useState, useEffect, useRef } from "react";
import * as S from "./WriteStyle";
import Header from "../Commons/Header/Header";
import DefaultImage from "../../assets/image/WriteDefault.svg";
import { uploadImageAtom } from "../../Store/Store";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import getPostAPI from "../../API/getPostAPI";
import postEditAPI from "../../API/postEditAPI";
import uploadImageAPI from "../../API/uploadImageAPI";
import { useParams } from 'react-router-dom';
import { useNavigate, useLocation } from "react-router-dom";

function PostEdit() {
  const resetRecoilState = useResetRecoilState(uploadImageAtom);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  // const { post_id } = useParams();
  const [isContentValid, setIsContentValid] = useState(true);
  const [uploadImage, setUploadImage] = useRecoilState(uploadImageAtom);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const { state } = useLocation(); // useLocation을 사용하여 state를 가져옴
  const post_id = state.post_id; // state에서 post_id를 가져옴 


  useEffect(() => {
    const fetchPostContent = async () => {
      const post = await getPostAPI(post_id);
      if (post) {
        setPostContent(post.content);
        setPostImage(post.image);
        console.log(post_id);
      }
    };
  
    fetchPostContent();
    setUploadImage(postImage);
  }, [postImage]);

  const onChangePostContent = (e) => {
    if (e.target.value === "") {
      setIsContentValid(false);
    } else {
      setIsContentValid(true);
    }
    setPostContent(e.target.value);
  };

  const handlePostSubmit = async () => {
    const result = await postEditAPI(post_id, postContent, uploadImage === postImage ? postImage : uploadImage);
    if (result.includes("완료")) {
      alert(result);
      resetRecoilState();
      navigate("/main");
    } else {
      alert(result);
    }
  };


  const handleWriteImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const imagefile = await uploadImageAPI(file);
      setUploadImage("https://api.mandarin.weniv.co.kr/" + imagefile);
    } else {
      // 파일 선택을 취소한 경우
      setUploadImage(DefaultImage);
    }
  };
  
  const handleWriteImageClick = () => {
    fileInputRef.current.click();
  };
  
  return (
    <S.WriteContainer>
      <Header type="profileMod" />
      <S.ImageContainer>
      <h5 style={{paddingTop: '114px'}}>이미지 등록</h5>
        <S.WriteImage
          src={uploadImage}
          alt="게시글 이미지"
          onClick={handleWriteImageClick}
          onError={(e) => { e.target.onerror = null; e.target.src=DefaultImage }}
        />
      </S.ImageContainer>
  
      <S.WriteFormWrapper>
        <input
          type="file"
          onChange={handleWriteImageChange}
          ref={fileInputRef}
          accept="image/jpeg, image/png"
          style={{ display: "none" }}
        />
  
        <S.PTag>게시글 수정</S.PTag>
        <S.InputTag
          type="text"
          placeholder={postContent}
          value={postContent}
          onChange={onChangePostContent}
        />
        <S.Warning
          style={isContentValid ? { display: "none" } : { display: "block" }}
        >
          *게시글 내용을 입력해주세요.
        </S.Warning>
        <S.SubmitBtn type="submit" onClick={handlePostSubmit}>
          수정하기
        </S.SubmitBtn>
      </S.WriteFormWrapper>
    </S.WriteContainer>
  );  
}

export default PostEdit;
