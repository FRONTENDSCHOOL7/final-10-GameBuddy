import React, { useState } from "react";
import * as S from "./MyPostListStyle";
import PostView from "../PostView";
import more from "../../../assets/image/icon-more.svg";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import { useRecoilState } from "recoil";
import { userPostListAtom } from "../../../Store/Store";

function MyPostList({ isMyProfile, accountname }) {
  const [userPostList] = useRecoilState(userPostListAtom);
  // PostView를 설정하기 위한 상태
  const [viewType, setViewType] = useState("list");

  return (
    <div>
      {/* viewTyper값에 따라 뷰 형식이 달라짐 */}
      <PostView viewType={viewType} setViewType={setViewType} />
      {viewType === "list" ? (
        <ListView
          isMyProfile={isMyProfile}
          postsData={userPostList.postList}
          accountname={accountname}
        />
      ) : (
        <AlbumView
          isMyProfile={isMyProfile}
          postsData={userPostList.postList}
          accountname={accountname}
        />
      )}
    </div>
  );
}

function ListView({ isMyProfile, postsData, accountname }) {
  // 게시글의 신고하기,더보기 버튼을 누름에 따라 변하는 상태값 설정
  const [isModalVisible, setModalVisible] = useState(false);

  // 사용자의 게시글이 없는 경우
  if (postsData.length === 0) {
    return (
      <S.ListContainer>
        <S.NoPostsMessage>
          {accountname}님의 게시글이 없습니다.
        </S.NoPostsMessage>
      </S.ListContainer>
    );
  }

  // 사용자의 게시글이 있는 경우
  return (
    <S.ListContainer>
      {postsData.map((post, id) => (
        <S.Article key={id}>
          <S.Section>
            <S.PostHeaderImg src={post.author.image} alt="Profile Image" />
            <S.PostHeader>
              <S.HeaderTextBox>
                <div className="flexBox">
                  <S.HeaderH3>{post.author.username}</S.HeaderH3>
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
                <S.HeaderP>{post.author.id}</S.HeaderP>
              </S.HeaderTextBox>
              <S.PostContent>{post.content}</S.PostContent>
              <S.PostContentImg src={post.image} alt="Post Content Image" />
              <S.Footer>
                <S.FooterImg src={heart} alt="Heart" />
                <S.FooterCount>{post.heartCount}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.commentCount}</S.FooterCount>
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
function AlbumView({ postsData, accountname }) {
  // 사용자의 게시글이 없는 경우
  if (postsData.length === 0) {
    return (
      <S.ListContainer>
        <S.NoPostsMessage>
          {accountname}님의 게시글이 없습니다.
        </S.NoPostsMessage>
      </S.ListContainer>
    );
  }

  // 사용자의 게시글이 있는 경우
  return (
    <S.AlbumContainer>
      {postsData.map((post, id) => (
        <S.ImageItem key={id} src={post.image} alt="Post Image" />
      ))}
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
