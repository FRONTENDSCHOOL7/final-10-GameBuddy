import React, { useState } from "react";
import * as S from "./MyPostListStyle";
import PostView from "../PostView";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  isTouchFeed,
  userPostListAtom,
  userPostListDataIndexAtom
} from "../../../Store/Store";
import { Modal } from "./MoreModal/MoreModal";
import CommonPostList from "../../Commons/List/CommonPostList";

function MyPostList({ isMyProfile, accountname }) {
  // PostView를 설정하기 위한 상태
  const [viewType, setViewType] = useState("list");

  const [postData, setPostData] = useRecoilState(userPostListAtom);
  const [hoveredId, setHoveredId] = useState(null);
  const [isPostModalVisible, setIsPostModalVisible] =
    useRecoilState(isTouchFeed); // 게시글 상세 모달 표시 값
  const setIndex = useSetRecoilState(userPostListDataIndexAtom);

  const [isOptionModalVisible, setIsOptionModalVisible] = useState(false); // 더보기,신고하기 모달 상태
  const [selectedPostId, setSelectedPostId] = useState(null);

  // 게시글이 없는 경우와 album view일 경우
  if (postData.length === 0 || viewType === "album") {
    return (
      <>
        <PostView viewType={viewType} setViewType={setViewType} />
        <RenderView
          isMyProfile={isMyProfile}
          postData={postData}
          viewType={viewType}
          accountname={accountname}
          setHoveredId={setHoveredId}
          hoveredId={hoveredId}
          setIsPostModalVisible={setIsPostModalVisible}
          setIndex={setIndex}
        />
      </>
    );
  }

  // 레이아웃
  return (
    <>
      <PostView viewType={viewType} setViewType={setViewType} />
      <S.ListContainer onClick={() => setIsOptionModalVisible(false)}>
        <CommonPostList
          isMyProfile={isMyProfile}
          setIsOptionModalVisible={setIsOptionModalVisible}
          setSelectedPostId={setSelectedPostId}
        />
        <Modal
          isMyProfile={isMyProfile} // 현재 유저의 프로필인지 상태값을 그대로 넘겨줍니다.
          isOptionModalVisible={isOptionModalVisible}
          setIsOptionModalVisible={setIsOptionModalVisible}
          postId={selectedPostId}
        />
      </S.ListContainer>
    </>
  );
}

// 게시물이 없거나 앨범뷰를 렌더링해야 하는 경우
function RenderView({
  postData,
  viewType,
  accountname,
  setHoveredId,
  hoveredId,
  setIsPostModalVisible,
  setIndex
}) {
  if (postData.length === 0) {
    return (
      <S.ListContainer>
        <S.NoPostsMessage>
          {accountname}님의 게시글이 없습니다.
        </S.NoPostsMessage>
      </S.ListContainer>
    );
  }
  if (viewType === "album") {
    return (
      <AlbumView
        postData={postData}
        setHoveredId={setHoveredId}
        hoveredId={hoveredId}
        setIsPostModalVisible={setIsPostModalVisible}
        setIndex={setIndex}
      />
    );
  }
  return null;
}

// AlbumView 레이아웃
function AlbumView({
  postData,
  setHoveredId,
  hoveredId,
  setIsPostModalVisible,
  setIndex
}) {
  return (
    <S.AlbumContainer>
      {postData.map(
        (post, index) =>
          post.image && (
            <S.ImageItem
              key={index}
              src={post.image}
              alt="Post Image"
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              isHovered={hoveredId === index}
              onClick={() => {
                setIsPostModalVisible(true);
                setIndex(index);
              }}
            />
          )
      )}
    </S.AlbumContainer>
  );
}

export default MyPostList;
