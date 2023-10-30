import React, { useEffect, useState } from "react";
import * as S from "./MyPostListStyle";
import PostView from "../PostView";
import more from "../../../assets/image/icon-more.svg";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import unheart from "../../../assets/image/icon-unheart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  isTouchFeed,
  postListDataIndexAtom,
  userPostListAtom,
  userPostListDataIndexAtom
} from "../../../Store/Store";
import { showDate } from "../../../Functional/DateFunction";
import { Modal } from "./MoreModal/MoreModal";
import heartPostAPI from "../../../API/heartPostAPI";
import unheartPostAPI from "../../../API/unheartPostAPI";

function MyPostList({ isMyProfile, accountname }) {
  // PostView를 설정하기 위한 상태
  const [viewType, setViewType] = useState("list");

  const [postData, setPostData] = useRecoilState(userPostListAtom);
  const [hoveredId, setHoveredId] = useState(null);
  const setIsVisible = useSetRecoilState(isTouchFeed);
  const setIndex = useSetRecoilState(userPostListDataIndexAtom);
  const isVisible = useRecoilValue(isTouchFeed);

  // Modal의 상태에 따라 스크롤을 제어합니다.
  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const handleHeartClick = async (e, post_id) => {
    e.stopPropagation();
    const currentHeart = e.target.getAttribute("src");
    let result = "";

    if (currentHeart === unheart) {
      result = await heartPostAPI(post_id);
      if (result.includes("heart success")) {
        e.target.setAttribute("src", heart);
      } else {
        return;
      }
    } else {
      result = await unheartPostAPI(post_id);
      if (result.includes("unheart success")) {
        e.target.setAttribute("src", unheart);
      } else {
        return;
      }
    }

    let updatedPostData = [...postData];
    let changeDataIndex = postData.findIndex((e) => e.id === post_id);
    if (changeDataIndex !== -1) {
      updatedPostData[changeDataIndex] = {
        ...updatedPostData[changeDataIndex], // 해당 객체의 복사본을 만들고
        hearted: result.includes("un") ? false : true, // 속성을 수정
        heartCount:
          updatedPostData[changeDataIndex].heartCount +
          (result.includes("un") ? -1 : 1)
      };
      setPostData(updatedPostData);
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);

  if (postData.length === 0 || viewType === "album") {
    return (
      <>
        <PostView viewType={viewType} setViewType={setViewType} />
        <RenderView
          isMyProfile={isMyProfile}
          postData={postData}
          viewType={viewType}
          accountname={accountname}
          setHoveredId={setHoveredId} // 추가
          hoveredId={hoveredId} // 추가
          setIsVisible={setIsVisible} // 추가
          setIndex={setIndex}
        />
      </>
    );
  }

  return (
    <>
      <PostView viewType={viewType} setViewType={setViewType} />
      {/* ListView의 레이아웃 코드 */}
      <S.ListContainer>
        {postData.map((post, index) => (
          <S.Article key={index}>
            <S.Section
              key={index}
              onMouseEnter={() => setHoveredId(index)}
              onMouseLeave={() => setHoveredId(null)}
              isHovered={hoveredId === index}
              onClick={() => {
                setIsVisible(true);
                setIndex(index);
                // console.log("Section clicked");
                // console.log("isTouchFeed after click:", isVisible);
              }}>
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
                {post.image !== "" ? (
                  <S.PostContentImg src={post.image} alt="Post Content Image" />
                ) : (
                  <></>
                )}
                <S.Footer>
                  <S.FooterImg
                    src={post.hearted ? heart : unheart}
                    alt="Heart"
                    onClick={(e) => handleHeartClick(e, post.id)}
                  />
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
          isMoreModalVisible={isModalVisible}
          onClose={() => setModalVisible(false)}
          isMyProfile={isMyProfile}
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
  setIsVisible,
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
        setIsVisible={setIsVisible}
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
  setIsVisible,
  setIndex
}) {
  // 사용자의 게시글이 있는 경우
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
                setIsVisible(true);
                setIndex(index);
              }}
            />
          )
      )}
    </S.AlbumContainer>
  );
}

export default MyPostList;
