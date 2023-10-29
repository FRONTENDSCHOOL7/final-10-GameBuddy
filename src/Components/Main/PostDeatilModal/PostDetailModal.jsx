import React, { useEffect, useState } from "react";
import * as S from "./PostDetailStyle";
import siren from "../../../assets/image/icon-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import close from "../../../assets/image/icon-close.svg";
import more from "../../../assets/image/icon-more.svg";
import Modal from "../../Profile/MyPostList/Modal/Modal";

import {
  checkMyInfo,
  getCommentDataSelector,
  getPostDataSelector,
  isTouchFeed,
  mainFeedCommentListDataAtom,
  sourceAtom,
  userAccountNameAtom,
  userProfileCommentListDataAtom
} from "../../../Store/Store";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import { fewMinutesAgo, showDate } from "../../../Functional/DateFunction";
import commentAPI from "../../../API/commentAPI";
import commentWriteAPI from "../../../API/commentWriteAPI";
import removeCommentAPI from "../../../API/removeCommentAPI";
import reportCommentAPI from "../../../API/reportCommentAPI";

function PostDetailModal({ isMyProfile }) {
  const setIsVisible = useSetRecoilState(isTouchFeed);
  const data = useRecoilValue(getPostDataSelector);
  const commentMyProfile = useRecoilValue(checkMyInfo);
  const [writing, setWriting] = useState("");

  const source = useRecoilValue(sourceAtom);

  const [userProfileCommentListData, setUserProfileCommentListData] =
    useRecoilState(userProfileCommentListDataAtom);
  const [mainFeedCommentListData, setMainFeedCommentListData] = useRecoilState(
    mainFeedCommentListDataAtom
  );

  let commentListData =
    source === "userPostList"
      ? userProfileCommentListData
      : mainFeedCommentListData;
  let setCommentListData =
    source === "userPostList"
      ? setUserProfileCommentListData
      : setMainFeedCommentListData;

  console.log(commentListData);

  useEffect(() => {
    async function fetchData() {
      const obj = await commentAPI(data.id);
      setCommentListData(obj);
    }
    fetchData();
  }, [data.id, setCommentListData]);

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

  const typingComment = (e) => {
    setWriting(e.target.value);
  };

  const sendCommentData = async (e) => {
    e.preventDefault();
    const sendComment = await commentWriteAPI(data.id, writing);
    if (sendComment.length !== 0 && sendComment !== undefined) {
      setCommentListData([sendComment, ...commentListData]);
    }
  };

  const commentEvent = async (e, commentId, username) => {
    const commentImg = e.target.src;
    console.log(data.id);
    console.log(commentId);
    if (commentImg.includes("icon-close")) {
      alert(await removeCommentAPI(data.id, commentId));
    } else if (commentImg.includes("icon-siren")) {
      alert(await reportCommentAPI(data.id, commentId, username));
    }
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  let isAuthor = commentMyProfile.user.accountname === data.author.accountname;
  console.log("isAuthor:", isAuthor);
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
                    setModalVisible(true); // 수정/삭제하기 모달을 여는 로직
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

        <S.PostDetailCommentWrapper>
          <S.PostDetailCommentTitle>댓글</S.PostDetailCommentTitle>
          {commentListData.map((post, index) => (
            <S.PostDetailCommentItem key={index}>
              <S.PostDetailCommentHeaderProfile
                src={post.author.image}
                alt="PostDetailCommentHeaderProfile"
              />
              <S.PostDetailCommentItemTextBox>
                <div className="flexBox">
                  <S.PostDetailCommentHeaderUserName>
                    {post.author.username}
                    <S.PostDetailCommentHeaderMinutesAgo>
                      {fewMinutesAgo(post.createdAt)}
                    </S.PostDetailCommentHeaderMinutesAgo>
                  </S.PostDetailCommentHeaderUserName>
                  <S.PostDetailCommentHeaderImg
                    src={`${
                      post.author.accountname ===
                      commentMyProfile.user.accountname
                        ? close
                        : siren
                    }`}
                    onClick={(e) =>
                      commentEvent(e, post.id, post.author.username)
                    }
                  />
                </div>
                <S.PostDetailCommentContent>
                  {post.content}
                </S.PostDetailCommentContent>
              </S.PostDetailCommentItemTextBox>
            </S.PostDetailCommentItem>
          ))}
        </S.PostDetailCommentWrapper>

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
        isMyProfile={isMyProfile}
        showConfirm={showConfirm} // prop 추가
        setShowConfirm={setShowConfirm}
        isAuthor={isAuthor} // prop 추가
      />
    </S.PostDetailBackground>
  );
}

export default PostDetailModal;
