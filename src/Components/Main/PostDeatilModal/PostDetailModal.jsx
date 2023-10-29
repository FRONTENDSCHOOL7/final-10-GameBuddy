import React, { useEffect, useState } from "react";
import * as S from "./PostDetailStyle";
import siren from "../../../assets/image/icon-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import close from "../../../assets/image/icon-close.svg";
import more from "../../../assets/image/icon-more.svg";
import Modal from "../../Profile/MyPostList/Modal/Modal";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import {
  checkMyInfo,
  getPostDataSelector,
  isTouchFeed,
  mainFeedCommentListDataAtom,
  sourceAtom,
  userProfileCommentListDataAtom
} from "../../../Store/Store";
import { fewMinutesAgo, showDate } from "../../../Functional/DateFunction";
import commentAPI from "../../../API/commentAPI";
import commentWriteAPI from "../../../API/commentWriteAPI";
import removeCommentAPI from "../../../API/removeCommentAPI";
import reportCommentAPI from "../../../API/reportCommentAPI";
import Comment from "./Comment/Comment";

function PostDetailModal() {
  const setIsVisible = useSetRecoilState(isTouchFeed);
  const data = useRecoilValue(getPostDataSelector); // 게시글 데이터
  const commentMyProfile = useRecoilValue(checkMyInfo);
  const [writing, setWriting] = useState("");

  const source = useRecoilValue(sourceAtom); // 데이터의 출처 (유저 포스트리스트 vs 메인 피드)

  // 댓글 리스트의 상태 정의 (userPost, MainFeed)
  const [userProfileCommentListData, setUserProfileCommentListData] =
    useRecoilState(userProfileCommentListDataAtom);
  const [mainFeedCommentListData, setMainFeedCommentListData] = useRecoilState(
    mainFeedCommentListDataAtom
  );

  // source에 따라 사용할 댓글 리스트 결정
  let commentListData =
    source === "userPostList"
      ? userProfileCommentListData
      : mainFeedCommentListData;
  let setCommentListData =
    source === "userPostList"
      ? setUserProfileCommentListData
      : setMainFeedCommentListData;

  // 댓글 데이터 가져오기
  useEffect(() => {
    async function fetchData() {
      const obj = await commentAPI(data.id);
      setCommentListData(obj);
    }
    fetchData();
  }, [data.id, setCommentListData]);

  // 댓글 리스트 초기화
  const resetUserProfileCommentListData = useResetRecoilState(
    userProfileCommentListDataAtom
  );
  const resetMainFeedCommentListData = useResetRecoilState(
    mainFeedCommentListDataAtom
  );

  const closeModal = () => {
    setIsVisible(false);
    if (source === "userPostList") {
      resetUserProfileCommentListData();
    } else {
      resetMainFeedCommentListData();
    }
  };

  // 댓글 입력 이벤트 핸들러
  const typingComment = (e) => {
    setWriting(e.target.value);
  };

  // 댓글 작성
  const sendCommentData = async (e) => {
    e.preventDefault();
    const sendComment = await commentWriteAPI(data.id, writing);
    if (sendComment && sendComment.length) {
      setCommentListData([sendComment, ...commentListData]);
    }
  };

  // 댓글 이벤트 (삭제 또는 신고)
  const commentEvent = async (e, commentId, username) => {
    const commentImg = e.target.src;
    if (commentImg.includes("icon-close")) {
      alert(await removeCommentAPI(data.id, commentId));
    } else if (commentImg.includes("icon-siren")) {
      alert(await reportCommentAPI(data.id, commentId, username));
    }
  };

  // 모달
  const [isModalVisible, setModalVisible] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  // isAuthor로 본인인지 아닌지 판단
  let isAuthor = commentMyProfile.user.accountname === data.author.accountname;

  return (
    <S.PostDetailBackground>
      {/* 뒷배경 */}
      <S.PostDetailBox>
        {/* 내용 표시할 화면 */}
        <S.PostDetailHeaderWrapper>
          <S.PostDetailHeaderProfile src={data.author.image} />
          <S.PostDetailHeaderTextBox>
            <div className="flexBox">
              <S.PostDetailHeaderUserName>
                {data.author.username}
              </S.PostDetailHeaderUserName>
              {commentMyProfile.user.accountname === data.author.accountname ? (
                <S.PostDetailHeaderImg
                  src={more}
                  alt="More Icon"
                  onClick={(event) => {
                    event.stopPropagation();
                    setModalVisible(true);
                  }}
                />
              ) : (
                <S.PostDetailHeaderImg
                  src={siren}
                  alt="Report Icon"
                  onClick={(event) => {
                    event.stopPropagation();
                    setModalVisible(true);
                  }}
                />
              )}
            </div>
            <S.PostDetailHeaderAccountName>
              {data.author.accountname}
            </S.PostDetailHeaderAccountName>
          </S.PostDetailHeaderTextBox>
        </S.PostDetailHeaderWrapper>

        <S.PostDetailContentWrapper>
          <S.PostDetailContent>{data.content}</S.PostDetailContent>
          {data.image !== undefined ? (
            <S.PostDetailContentImg src={data.image} alt="PostDetail Image" />
          ) : (
            <></>
          )}
          <S.PostDetailFooter>
            <S.PostDetailFooterImg src={heart} />
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

        <Comment
          commentListData={commentListData}
          commentEvent={commentEvent}
          commentMyProfile={commentMyProfile}
          typingComment={typingComment}
          sendCommentData={sendCommentData}
        />
        <S.PostDetailHr />

        <S.PostDetailWriteForm onSubmit={sendCommentData}>
          <S.PostDetailWriteProfile src={commentMyProfile.user.image} />
          <S.PostDetailWriteInput onChange={typingComment} />
          <S.PostDetailWriteSendButton>게시</S.PostDetailWriteSendButton>
        </S.PostDetailWriteForm>
      </S.PostDetailBox>
      <S.PostDetailBackButton onClick={closeModal}>X</S.PostDetailBackButton>
      <Modal
        isVisible={isModalVisible}
        onClose={() => {
          setModalVisible(false);
          setShowConfirm(false);
        }}
        showConfirm={showConfirm}
        setShowConfirm={setShowConfirm}
        isAuthor={isAuthor}
      />
    </S.PostDetailBackground>
  );
}

export default PostDetailModal;
