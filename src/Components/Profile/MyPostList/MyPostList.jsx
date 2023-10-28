import React, { useState } from "react";
import * as S from "./MyPostListStyle";
import PostView from "../PostView";
import more from "../../../assets/image/icon-more.svg";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import { useRecoilState } from "recoil";
import { userPostListAtom } from "../../../Store/Store";
import { showDate } from "../../../Functional/DateFunction";

function MyPostList({ isMyProfile, accountname }) {
  const [userPostList] = useRecoilState(userPostListAtom);
  // PostView를 설정하기 위한 상태
  const [viewType, setViewType] = useState("list");

  return (
    <div>
      <PostView viewType={viewType} setViewType={setViewType} />
      <RenderView
        isMyProfile={isMyProfile}
        postsData={userPostList.postList}
        viewType={viewType}
        accountname={accountname}
      />
    </div>
  );
}

// 사용자의 게시글이 없을 때, 뷰타입 지정
function RenderView({ isMyProfile, postsData, viewType, accountname }) {
  if (postsData.length === 0) {
    return (
      <S.ListContainer>
        <S.NoPostsMessage>
          {accountname}님의 게시글이 없습니다.
        </S.NoPostsMessage>
      </S.ListContainer>
    );
  }

  return viewType === "list" ? (
    <ListView
      isMyProfile={isMyProfile}
      postsData={postsData}
      accountname={accountname}
    />
  ) : (
    <AlbumView postsData={postsData} />
  );
}

// ListView 레이아웃
function ListView({ isMyProfile, postsData }) {
  // 게시글의 신고하기,더보기 버튼을 누름에 따라 변하는 상태값 설정
  const [isModalVisible, setModalVisible] = useState(false);

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
                      setModalVisible(true);
                    }}
                  />
                </div>
                <S.HeaderP>{post.author.id}</S.HeaderP>
              </S.HeaderTextBox>
              <S.PostContent>{post.content}</S.PostContent>
              {post.image && (
                <S.PostContentImg src={post.image} alt="Post Content Image" />
              )}
              <S.Footer>
                <S.FooterImg src={heart} alt="Heart" />
                <S.FooterCount>{post.heartCount}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.commentCount}</S.FooterCount>
              </S.Footer>
              <S.Date>{showDate(post.createdAt)}</S.Date>
            </S.PostHeader>
          </S.Section>
        </S.Article>
      ))}
      <Modal
        isVisible={isModalVisible}
        onClose={() => setModalVisible(false)}
        isMyProfile={isMyProfile}
      />
    </S.ListContainer>
  );
}

// AlbumView 레이아웃
function AlbumView({ postsData, accountname }) {
  // 사용자의 게시글이 있는 경우
  return (
    <S.AlbumContainer>
      {postsData.map(
        (post, id) =>
          post.image && (
            <S.ImageItem key={id} src={post.image} alt="Post Image" />
          )
      )}
    </S.AlbumContainer>
  );
}

// 모달 컨트롤
function Modal({ isVisible, onClose, isMyProfile }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const preventPropagation = (e) => e.stopPropagation();

  return (
    isVisible && (
      <S.ModalOverlay onClick={onClose}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            onClose={onClose}
            preventPropagation={preventPropagation}
          />
        ) : (
          <ActionModal
            isMyProfile={isMyProfile}
            setShowConfirm={setShowConfirm}
            preventPropagation={preventPropagation}
          />
        )}
      </S.ModalOverlay>
    )
  );
}

function ActionModal({ isMyProfile, setShowConfirm, preventPropagation }) {
  return (
    <S.ModalContainer onClick={preventPropagation}>
      {isMyProfile ? (
        <>
          <S.ModalButton onClick={() => setShowConfirm(true)}>
            수정하기
          </S.ModalButton>
          <S.ModalButton onClick={() => setShowConfirm(true)}>
            삭제하기
          </S.ModalButton>
        </>
      ) : (
        <S.ModalButton onClick={() => setShowConfirm(true)}>
          신고하기
        </S.ModalButton>
      )}
    </S.ModalContainer>
  );
}

// 최종 확인 모달
function ConfirmModal({ isMyProfile, onClose, preventPropagation }) {
  return (
    <S.ConfirmDeleteContainer onClick={preventPropagation}>
      <S.ConfirmMessage>
        {isMyProfile ? "정말 삭제하시겠습니까?" : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={onClose}>아니오</S.ConfirmButton>
        <S.ConfirmButton>예</S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}

export default MyPostList;
