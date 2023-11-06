import React, { useState, useEffect, useRef } from "react";
import * as S from "./PostEditStyle";
import Header from "../Commons/Header/Header";
import DefaultImage from "../../assets/image/WriteDefault.svg";
import {
  alertStateAtom,
  currentLocation,
  uploadImageAtom
} from "../../Store/Store";
import { useRecoilValue, useResetRecoilState } from "recoil";
import { useRecoilState } from "recoil";
import getPostAPI from "../../API/getPostAPI";
import postEditAPI from "../../API/postEditAPI";
import uploadImageAPI from "../../API/uploadImageAPI";
import { useLocation } from "react-router-dom";
import Alert from "../Commons/Alert/Alert";

function PostEdit() {
  const resetRecoilState = useResetRecoilState(uploadImageAtom);
  const [postContent, setPostContent] = useState("");
  const [postImage, setPostImage] = useState("");
  const [isContentValid, setIsContentValid] = useState(true);
  const [uploadImage, setUploadImage] = useRecoilState(uploadImageAtom);
  const fileInputRef = useRef();
  const [alertModal, setAlertModal] = useRecoilState(alertStateAtom);
  const myLocation = useRecoilValue(currentLocation);

  const { state } = useLocation();
  const post_id = state?.post_id;

  useEffect(() => {
    const fetchPostContent = async () => {
      resetRecoilState();
      const post = await getPostAPI(post_id);
      if (post) {
        setPostContent(post.content);
        setPostImage(post.image);
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

  const handlePostSubmit = async (e) => {
    e.preventDefault();
    const result = await postEditAPI(
      post_id,
      postContent,
      uploadImage === postImage ? postImage : uploadImage
    );
    if (result.includes("완료")) {
      setAlertModal({ message: result, isOpen: true, navigation: myLocation });
    } else {
      setAlertModal({ message: result, isOpen: true });
    }
  };

  return (
    <>
      <S.WriteContainer>
        <Header type="profileMod" />
        <S.Divdiv>
          <S.ContentContainer>
            <S.ImageContainer>
              <h5>이미지 등록</h5>
              <S.WriteImage
                src={uploadImage}
                alt="게시글 이미지"
                onClick={handleWriteImageClick}
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = DefaultImage;
                }}
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

              <S.InputWrapper>
                <S.PTag>게시글 수정</S.PTag>
                <S.TextAreaTag
                  type="text"
                  placeholder={" 게시글 내용을 입력해주세요."}
                  value={postContent}
                  onChange={onChangePostContent}
                />
                <S.Warning
                  style={
                    isContentValid ? { display: "none" } : { display: "block" }
                  }>
                  *게시글 내용을 입력해주세요.
                </S.Warning>
              </S.InputWrapper>
              
              <S.SubmitBtn
                type="submit"
                onClick={(e) => {
                  handlePostSubmit(e);
                }}>
                수정하기
              </S.SubmitBtn>
            </S.WriteFormWrapper>
          </S.ContentContainer>
        </S.Divdiv>
      </S.WriteContainer>
      {alertModal.isOpen && <Alert />}
    </>
  );
}

export default PostEdit;
