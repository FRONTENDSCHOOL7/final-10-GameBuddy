import React, { useEffect, useState } from "react";
import * as S from "./CommonDetailModalStyle";
import siren from "../../../assets/image/icon-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import unheart from "../../../assets/image/icon-unheart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import close from "../../../assets/image/icon-close.svg";
import DefaultImage from "../../../assets/image/char_inactive.png";
import more from "../../../assets/image/icon-more.svg";

import {
  checkMyInfo,
  commentListDataAtom,
  currentLocation,
  getPostDataSelector,
  getUserPostDataSelector,
  isTouchFeed,
  postListDataAtom,
  userPostListAtom
} from "../../../Store/Store";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import { fewMinutesAgo, showDate } from "../../../Functional/DateFunction";
import { isValidImage } from "../../../Functional/isValidImageFunction";

import commentAPI from "../../../API/commentAPI";
import commentWriteAPI from "../../../API/commentWriteAPI";
import removeCommentAPI from "../../../API/removeCommentAPI";
import reportCommentAPI from "../../../API/reportCommentAPI";
import unheartPostAPI from "../../../API/unheartPostAPI";
import heartPostAPI from "../../../API/heartPostAPI";
import { useNavigate } from "react-router-dom";
import { Modal } from "../../Profile/MyPostList/MoreModal/MoreModal";

function CommonDetailModal() {
  console.log("현재 페이지 이거 맞음??");
  const location = useRecoilValue(currentLocation);
  const [postData, setPostData] = useRecoilState(
    location.includes("/profile") ? userPostListAtom : postListDataAtom
  );
  const setIsPostModalVisible = useSetRecoilState(isTouchFeed);
  const data = useRecoilValue(
    location.includes("/profile")
      ? getUserPostDataSelector
      : getPostDataSelector
  );
  const [commentListData, setCommentListData] =
    useRecoilState(commentListDataAtom);
  const resetCommentList = useResetRecoilState(commentListDataAtom);
  const commentMyProfile = useRecoilValue(checkMyInfo);
  const [writing, setWriting] = useState("");

  const [isOptionModalVisible, setIsOptionModalVisible] = useState(false); // 더보기,신고하기 모달 상태
  const [selectedPostId, setSelectedPostId] = useState(null); // postId를 저장해서 moreModal에 넘겨주기 위함
  const isMyProfile =
    data.author.accountname === commentMyProfile.user.accountname;
  // console.log(postData);
  // console.log("데이터", data);

  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const obj = await commentAPI(data.id);
      setCommentListData(obj);
    }
    fetchData();
  }, []);

  const closeModal = () => {
    setIsPostModalVisible(false);
    resetCommentList();
  };

  const typingComment = (e) => {
    setWriting(e.target.value);
  };

  const sendCommentData = async (e) => {
    e.preventDefault();
    const sendComment = await commentWriteAPI(data.id, writing);
    if (sendComment.length !== 0 && sendComment !== undefined) {
      setCommentListData([sendComment, ...commentListData]);
      setWriting("");
      const copyData = [...postData];
      const dataIndex = copyData.findIndex((e) => e.id === data.id);

      console.log(dataIndex, data);
      if (dataIndex !== -1) {
        const updatedItem = {
          ...copyData[dataIndex],
          commentCount: copyData[dataIndex].commentCount + 1
        };
        copyData[dataIndex] = updatedItem;
        setPostData([...copyData]); // 복제된 데이터 배열을 새로운 상태로 업데이트
      }
    }
  };

  const commentEvent = async (e, commentId, username) => {
    const commentImg = e.target.src;

    if (commentImg.includes("icon-close")) {
      const result = await removeCommentAPI(data.id, commentId);
      if (result.includes("댓글이 삭제되었습니다.")) {
        const copyListData = [...commentListData].filter(
          (e) => e.id !== commentId
        );
        setCommentListData(copyListData);

        const copyData = [...postData];
        const dataIndex = copyData.findIndex(
          (element) => element.id === data.id
        );

        if (dataIndex !== -1) {
          const updatedItem = {
            ...copyData[dataIndex],
            commentCount: copyData[dataIndex].commentCount - 1
          };
          copyData[dataIndex] = updatedItem;
          setPostData([...copyData]);
        }
      }
      alert(result);
    } else if (commentImg.includes("icon-siren")) {
      alert(await reportCommentAPI(data.id, commentId, username));
    }
  };

  const handleHeartClick = async (e, post_id) => {
    const currentHeart = e.target.getAttribute("src");
    let result = "";

    if (currentHeart === unheart) {
      result = await heartPostAPI(post_id);
      //예외처리도 해야댐
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

  //   const moveProfilePage = (userAccountName) => {
  //     setIsPostModalVisible(false);
  //     navigate(`/profile/${userAccountName}`);
  //   };

  const [isContentExpanded, setIsContentExpanded] = useState(false);

  const getDisplayedContent = () => {
    const maxLength = 37; // 최대 글자 수
    return isContentExpanded || data.content.length <= maxLength
      ? data.content
      : data.content.substring(0, maxLength) + "...";
  };

  // 더보기/접기 버튼 클릭 이벤트 핸들러
  const toggleContent = () => {
    setIsContentExpanded(!isContentExpanded);
  };

  return (
    <S.PostDetailBackground onClick={() => setIsOptionModalVisible(false)}>
      {/* 뒷배경 */}
      <S.PostDetailBox onClick={(e) => e.stopPropagation()}>
        {/* 내용 표시할 화면 */}
        <S.PostDetailHeaderWrapper>
          <S.PostDetailHeaderProfile
            src={
              isValidImage(data.author.image) ? data.author.image : DefaultImage
            }
          />
          <S.PostDetailHeaderTextBox>
            <S.PostDetailHeaderUserName>
              {data.author.username}
            </S.PostDetailHeaderUserName>
            <S.PostDetailHeaderAccountName>
              @{data.author.accountname}
            </S.PostDetailHeaderAccountName>
          </S.PostDetailHeaderTextBox>
          {isMyProfile ? (
            <S.PostDetailHeaderImg
              src={more}
              alt="More"
              onClick={() => {
                setIsOptionModalVisible(true);
                setSelectedPostId(data.id);
              }}
            />
          ) : (
            <></>
          )}
        </S.PostDetailHeaderWrapper>

        <S.PostDetailContentWrapper>
          {isValidImage(data.image) ? (
            <S.PostDetailContentImg src={data.image} alt="PostDetail Image" />
          ) : (
            <></>
          )}
          <S.PostDetailContent className={isContentExpanded ? "expanded" : ""}>
            {getDisplayedContent()}
          </S.PostDetailContent>
          <S.TextButtonContainer>
            {data.content.length > 37 && ( // 글자 수가 100을 초과하는 경우에만 "더보기" 버튼을 표시합니다.
              <S.ShowMoreButton onClick={toggleContent}>
                {isContentExpanded ? "접기" : "더보기"}
              </S.ShowMoreButton>
            )}
          </S.TextButtonContainer>
          <S.PostDetailFooter>
            <S.PostDetailFooterImg
              src={data.hearted ? heart : unheart}
              onClick={(e) => handleHeartClick(e, data.id)}
            />
            <S.PostDetailFooterCount>{data.heartCount}</S.PostDetailFooterCount>
            <S.PostDetailFooterImg src={comment} />
            <S.PostDetailFooterCount>
              {data.commentCount}
            </S.PostDetailFooterCount>
          </S.PostDetailFooter>
          <S.PostDetailFooterDate>
            {showDate(data.createdAt)}
          </S.PostDetailFooterDate>
        </S.PostDetailContentWrapper>

        <S.PostDetailHr />

        <S.PostDetailCommentWrapper>
          <S.PostDetailCommentTitle>댓글</S.PostDetailCommentTitle>
          {commentListData.map((post, index) => (
            <S.PostDetailCommentItem key={index}>
              <S.PostDetailCommentHeaderProfile
                src={
                  isValidImage(post.author.image)
                    ? post.author.image
                    : DefaultImage
                }
                alt="PostDetailCommentHeaderProfile"
                onClick={() => {
                  setIsPostModalVisible(false);
                  navigate(`/profile/${post.author.accountname}`);
                }}
              />
              <S.PostDetailCommentItemTextBox>
                <S.PostDetailCommentHeaderUserName>
                  {post.author.username}
                  <S.PostDetailCommentHeaderMinutesAgo>
                    {fewMinutesAgo(post.createdAt)}
                  </S.PostDetailCommentHeaderMinutesAgo>
                </S.PostDetailCommentHeaderUserName>
                <S.PostDetailCommentContent>
                  {post.content}
                </S.PostDetailCommentContent>
              </S.PostDetailCommentItemTextBox>
              <S.PostDetailCommentHeaderImg
                src={`${
                  post.author.accountname === commentMyProfile.user.accountname
                    ? close
                    : siren
                }`}
                onClick={(e) => commentEvent(e, post.id, post.author.username)}
              />
            </S.PostDetailCommentItem>
          ))}
        </S.PostDetailCommentWrapper>

        <S.PostDetailHr />

        <S.PostDetailWriteForm onSubmit={sendCommentData}>
          <S.PostDetailWriteProfile src={commentMyProfile.user.image} />
          <S.PostDetailWriteInput onChange={typingComment} value={writing} />
          <S.PostDetailWriteSendButton>게시</S.PostDetailWriteSendButton>
        </S.PostDetailWriteForm>
      </S.PostDetailBox>
      <S.PostDetailBackButton onClick={closeModal}>X</S.PostDetailBackButton>
      {isMyProfile && (
        <Modal
          isMyProfile={isMyProfile}
          isOptionModalVisible={isOptionModalVisible}
          setIsOptionModalVisible={setIsOptionModalVisible}
          postId={selectedPostId}
          setIsPostModalVisible={setIsPostModalVisible}
        />
      )}
    </S.PostDetailBackground>
  );
}

export default CommonDetailModal;
