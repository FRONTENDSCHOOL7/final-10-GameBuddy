import React, { useState } from "react";
import * as S from "./MyPostListStyle";
import PostView from "../PostView";
import ExImg from "../../../assets/image/참쉽죠.jpg";
import more from "../../../assets/image/icon-more.svg";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";

function MyPostList({ isMyProfile }) {
  // PostView를 설정하기 위한 상태
  const [viewType, setViewType] = useState("list");

  return (
    <div>
      {/* viewTyper값에 따라 뷰 형식이 달라짐 */}
      <PostView viewType={viewType} setViewType={setViewType} />
      {viewType === "list" ? (
        <ListView isMyProfile={isMyProfile} />
      ) : (
        <AlbumView />
      )}
    </div>
  );
}

function ListView({ isMyProfile }) {
  // 게시글의 신고하기,더보기 버튼을 누름에 따라 변하는 상태값 설정
  const [isModalVisible, setModalVisible] = useState(false);

  // 임시 데이터 생성
  const postsData = [
    {
      username: "벌크업뱅",
      userId: "@gamebuddy12",
      content: "어렵군",
      likes: 52,
      comments: 3,
      date: "2023.10.24"
    },
    {
      username: "벌크업뱅",
      userId: "@gamebuddy12",
      content: "첌섑쟤",
      likes: 112,
      comments: 3,
      date: "2023.10.24"
    }
  ];

  return (
    <S.ListContainer>
      {postsData.map((post, index) => (
        <S.Article key={index}>
          <S.Section>
            <S.PostHeaderImg src={ExImg} alt="Profile Image" />
            <S.PostHeader>
              <S.HeaderTextBox>
                <div className="flexBox">
                  <S.HeaderH3>{post.username}</S.HeaderH3>
                  {/* myProfile -> more 일 경우에만 모달 띄움 */}
                  <S.HeaderImg
                    src={isMyProfile ? more : siren}
                    alt="Action Icon"
                    onClick={() => {
                      if (isMyProfile) {
                        setModalVisible(true);
                      }
                    }}
                  />
                </div>
                <S.HeaderP>{post.userId}</S.HeaderP>
              </S.HeaderTextBox>
              <S.PostContent>{post.content}</S.PostContent>
              <S.PostContentImg src={ExImg} alt="Post Content Image" />
              <S.Footer>
                <S.FooterImg src={heart} alt="Heart" />
                <S.FooterCount>{post.likes}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.comments}</S.FooterCount>
              </S.Footer>
              <S.Date>{post.date}</S.Date>
            </S.PostHeader>
          </S.Section>
        </S.Article>
      ))}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
      />
    </S.ListContainer>
  );
}

// AlbumView 레이아웃
function AlbumView() {
  return (
    <S.AlbumContainer>
      <S.ImageItem src={ExImg} alt="Post Image 1" />
      <S.ImageItem src={ExImg} alt="Post Image 2" />
      <S.ImageItem src={ExImg} alt="Post Image 3" />
      <S.ImageItem src={ExImg} alt="Post Image 4" />
      <S.ImageItem src={ExImg} alt="Post Image 5" />
      <S.ImageItem src={ExImg} alt="Post Image 6" />
      <S.ImageItem src={ExImg} alt="Post Image 7" />
      <S.ImageItem src={ExImg} alt="Post Image 8" />
      <S.ImageItem src={ExImg} alt="Post Image 9" />
    </S.AlbumContainer>
  );
}

// 모달 레이아웃
function Modal({ isVisible, onClose }) {
  return (
    isVisible && (
      <S.ModalOverlay onClick={onClose}>
        <S.ModalContainer>
          <S.ModalButton>수정하기</S.ModalButton>
          <S.ModalButton>삭제하기</S.ModalButton>
        </S.ModalContainer>
      </S.ModalOverlay>
    )
  );
}

export default MyPostList;
