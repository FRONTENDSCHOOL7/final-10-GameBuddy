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
  console.log("포스트 정보", isMyProfile);
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

// 백업용 코드 제발 다신 사용하지않았으면...
// import React, { useEffect, useRef, useState } from "react";
// import * as S from "./MyPostListStyle";
// import PostView from "../PostView";
// import more from "../../../assets/image/icon-more.svg";
// import siren from "../../../assets/image/icon-small-siren.svg";
// import heart from "../../../assets/image/icon-heart.svg";
// import unheart from "../../../assets/image/icon-unheart.svg";
// import comment from "../../../assets/image/icon-comment.svg";
// import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
// import {
//   isTouchFeed,
//   userPostListAtom,
//   userPostListDataIndexAtom
// } from "../../../Store/Store";
// import { showDate } from "../../../Functional/DateFunction";
// import { Modal } from "./MoreModal/MoreModal";
// import heartPostAPI from "../../../API/heartPostAPI";
// import unheartPostAPI from "../../../API/unheartPostAPI";
// import { useLocation } from "react-router-dom";

// function MyPostList({ isMyProfile, accountname }) {
//   // PostView를 설정하기 위한 상태
//   const [viewType, setViewType] = useState("list");

//   const [postData, setPostData] = useRecoilState(userPostListAtom);
//   const [hoveredId, setHoveredId] = useState(null);
//   const isPostModalVisible = useRecoilValue(isTouchFeed); // 게시글 상세 모달 표시 값
//   const setIsPostModalVisible = useSetRecoilState(isTouchFeed); // 게시글 상세 모달 표시 상태
//   const [isOptionModalVisible, setIsOptionModalVisible] = useState(false); // 더보기,신고하기 모달 상태
//   const setIndex = useSetRecoilState(userPostListDataIndexAtom);
//   const [selectedPostId, setSelectedPostId] = useState(null);

//   // 스크롤 제어
//   const location = useLocation();
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [location]);
//   useEffect(() => {
//     document.body.style.overflow = isPostModalVisible ? "hidden" : "auto";
//   }, [isPostModalVisible]);

//   // 좋아요 기능
//   const handleHeartClick = async (e, post_id) => {
//     e.stopPropagation();
//     const currentHeart = e.target.getAttribute("src");
//     let result = "";

//     if (currentHeart === unheart) {
//       result = await heartPostAPI(post_id);
//       if (result.includes("heart success")) {
//         e.target.setAttribute("src", heart);
//       } else {
//         return;
//       }
//     } else {
//       result = await unheartPostAPI(post_id);
//       if (result.includes("unheart success")) {
//         e.target.setAttribute("src", unheart);
//       } else {
//         return;
//       }
//     }

//     let updatedPostData = [...postData];
//     let changeDataIndex = postData.findIndex((e) => e.id === post_id);
//     if (changeDataIndex !== -1) {
//       updatedPostData[changeDataIndex] = {
//         ...updatedPostData[changeDataIndex], // 해당 객체의 복사본을 만들고
//         hearted: result.includes("un") ? false : true, // 속성을 수정
//         heartCount:
//           updatedPostData[changeDataIndex].heartCount +
//           (result.includes("un") ? -1 : 1)
//       };
//       setPostData(updatedPostData);
//     }
//   };

//   // 게시글이 없는 경우와 album view일 경우
//   if (postData.length === 0 || viewType === "album") {
//     return (
//       <>
//         <PostView viewType={viewType} setViewType={setViewType} />
//         <RenderView
//           isMyProfile={isMyProfile}
//           postData={postData}
//           viewType={viewType}
//           accountname={accountname}
//           setHoveredId={setHoveredId}
//           hoveredId={hoveredId}
//           setIsPostModalVisible={setIsPostModalVisible}
//           setIndex={setIndex}
//         />
//       </>
//     );
//   }

//   // 게시글에 이미지가 등록되지 않았을 때 대체할 이미지
//   const transparentPlaceholder =
//     "https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/HD_transparent_picture.png/1024px-HD_transparent_picture.png";

//   // 레이아웃
//   return (
//     <>
//       <PostView viewType={viewType} setViewType={setViewType} />
//       <S.ListContainer onClick={() => setIsOptionModalVisible(false)}>
//         {postData.map((post, index) => (
//           <S.Article key={index}>
//             <S.Section
//               key={index}
//               onMouseEnter={() => setHoveredId(index)}
//               onMouseLeave={() => setHoveredId(null)}
//               isHovered={hoveredId === index}
//               onClick={(e) => {
//                 e.stopPropagation();
//                 setIsPostModalVisible(true);
//                 setIndex(index);
//               }}>
//               <S.PostHeaderImg src={post.author.image} alt="Profile Image" />
//               <S.PostHeader>
//                 <S.HeaderTextBox>
//                   <div className="flexBox">
//                     <S.HeaderH3>{post.author.username}</S.HeaderH3>
//                     <S.HeaderImg
//                       src={isMyProfile ? more : siren}
//                       alt="Action Icon"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         setIsOptionModalVisible(true);
//                         setSelectedPostId(post.id);
//                       }}
//                     />
//                   </div>
//                   <S.HeaderP>@{post.author.accountname}</S.HeaderP>
//                 </S.HeaderTextBox>
//                 <S.PostContent>{post.content}</S.PostContent>
//                 <S.PostContentImg
//                   src={post.image || transparentPlaceholder} // 이미지가 없을 때 투명 이미지로 공간을 차지하도록 설정
//                   alt="Post Content Image"
//                   style={post.image ? {} : { height: "10px" }}
//                 />
//                 <S.Footer>
//                   <S.FooterImg
//                     src={post.hearted ? heart : unheart}
//                     alt="Heart"
//                     onClick={(e) => handleHeartClick(e, post.id)}
//                   />
//                   <S.FooterCount>{post.heartCount}</S.FooterCount>
//                   <S.FooterImg src={comment} alt="Comment" />
//                   <S.FooterCount>{post.commentCount}</S.FooterCount>
//                 </S.Footer>
//                 <S.Date>{showDate(post.createdAt)}</S.Date>
//               </S.PostHeader>
//             </S.Section>
//           </S.Article>
//         ))}
//         <Modal
//           isMyProfile={isMyProfile} // 현재 유저의 프로필인지 상태값을 그대로 넘겨줍니다.
//           isOptionModalVisible={isOptionModalVisible}
//           setIsOptionModalVisible={setIsOptionModalVisible}
//           postId={selectedPostId}
//         />
//       </S.ListContainer>
//     </>
//   );
// }

// // 게시물이 없거나 앨범뷰를 렌더링해야 하는 경우
// function RenderView({
//   postData,
//   viewType,
//   accountname,
//   setHoveredId,
//   hoveredId,
//   setIsPostModalVisible,
//   setIndex
// }) {
//   if (postData.length === 0) {
//     return (
//       <S.ListContainer>
//         <S.NoPostsMessage>
//           {accountname}님의 게시글이 없습니다.
//         </S.NoPostsMessage>
//       </S.ListContainer>
//     );
//   }
//   if (viewType === "album") {
//     return (
//       <AlbumView
//         postData={postData}
//         setHoveredId={setHoveredId}
//         hoveredId={hoveredId}
//         setIsPostModalVisible={setIsPostModalVisible}
//         setIndex={setIndex}
//       />
//     );
//   }
//   return null;
// }

// // AlbumView 레이아웃
// function AlbumView({
//   postData,
//   setHoveredId,
//   hoveredId,
//   setIsPostModalVisible,
//   setIndex
// }) {
//   return (
//     <S.AlbumContainer>
//       {postData.map(
//         (post, index) =>
//           post.image && (
//             <S.ImageItem
//               key={index}
//               src={post.image}
//               alt="Post Image"
//               onMouseEnter={() => setHoveredId(index)}
//               onMouseLeave={() => setHoveredId(null)}
//               isHovered={hoveredId === index}
//               onClick={() => {
//                 setIsPostModalVisible(true);
//                 setIndex(index);
//               }}
//             />
//           )
//       )}
//     </S.AlbumContainer>
//   );
// }

// export default MyPostList;
