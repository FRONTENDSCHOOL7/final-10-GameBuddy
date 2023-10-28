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
import Modal from "./Modal/Modal";

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
  const [showConfirm, setShowConfirm] = useState(false);

  const transparentPlaceholder =
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png";

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
              <S.PostContentImg
                src={post.image || transparentPlaceholder} // 이미지가 없을 때 투명 이미지로 공간을 차지하도록 설정
                alt="Post Content Image"
              />
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
        onClose={() => {
          setModalVisible(false);
          setShowConfirm(false); // 이 부분도 초기화
        }}
        isMyProfile={isMyProfile}
        showConfirm={showConfirm} // prop 추가
        setShowConfirm={setShowConfirm} // prop 추가
      />
    </S.ListContainer>
  );
}

// AlbumView 레이아웃
function AlbumView({ postsData }) {
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

export default MyPostList;
