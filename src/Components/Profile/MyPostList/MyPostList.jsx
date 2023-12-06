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
  const [viewType, setViewType] = useState("list");
  const [postData, setPostData] = useRecoilState(userPostListAtom);
  const [hoveredId, setHoveredId] = useState(null);
  const [isPostModalVisible, setIsPostModalVisible] =
    useRecoilState(isTouchFeed); // 게시글 상세 모달 표시 값
  const setIndex = useSetRecoilState(userPostListDataIndexAtom);
  const [isOptionModalVisible, setIsOptionModalVisible] = useState(false); // 더보기,신고하기 모달 상태
  const [selectedPostId, setSelectedPostId] = useState(null);

  // 조건부 렌더링 (postData와 viewType에 따른 컴포넌트 반환)
  const renderContent = () => {
    if (postData.length === 0) {
      return <NoPostsMessage accountname={accountname} />;
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
    return (
      <CommonPostList
        isMyProfile={isMyProfile}
        setIsOptionModalVisible={setIsOptionModalVisible}
        setSelectedPostId={setSelectedPostId}
      />
    );
  };

  return (
    <>
      <PostView viewType={viewType} setViewType={setViewType} />
      <S.ListContainer onClick={() => setIsOptionModalVisible(false)}>
        {renderContent()}
        <Modal
          isMyProfile={isMyProfile}
          isOptionModalVisible={isOptionModalVisible}
          setIsOptionModalVisible={setIsOptionModalVisible}
          postId={selectedPostId}
        />
      </S.ListContainer>
    </>
  );
}

// 게시물이 없을 때 렌더링
function NoPostsMessage({ accountname }) {
  return (
    <S.ListContainer>
      <S.NoPostsMessage>{accountname}님의 게시글이 없습니다.</S.NoPostsMessage>
    </S.ListContainer>
  );
}

// 앨범형 보기 버튼 클릭 시 렌더링
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
