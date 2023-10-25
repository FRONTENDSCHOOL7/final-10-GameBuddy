import React, { useEffect, useState } from "react";
import * as S from "./PostDetailStyle";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import profile from "../../../assets/image/char_inactive.png";
import {
  commentListDataAtom,
  getPostDataSelector,
  isTouchFeed
} from "../../../Store/Store";
import {
  useRecoilState,
  useRecoilValue,
  useResetRecoilState,
  useSetRecoilState
} from "recoil";
import { showDate } from "../../../Functional/DateFunction";
import commentAPI from "../../../API/commentAPI";
import commentWriteAPI from "../../../API/commentWriteAPI";

function PostDetailModal() {
  const setIsVisible = useSetRecoilState(isTouchFeed);
  const data = useRecoilValue(getPostDataSelector);
  const [commentListData, setCommentListData] =
    useRecoilState(commentListDataAtom);
  const resetCommentList = useResetRecoilState(commentListDataAtom);
  const [writing, setWriting] = useState("");

  useEffect(() => {
    async function fetchData() {
      const obj = await commentAPI(data.id);
      setCommentListData(obj);
    }
    fetchData();
  }, []);

  const closeModal = () => {
    setIsVisible(false);
    resetCommentList();
  };

  const typingComment = (e) => {
    setWriting(e.target.value);
  };

  const sendCommentData = async (e) => {
    e.preventDefault();
    const sendComment = await commentWriteAPI(data.id, writing);
    console.log("댓글 데이터", sendComment);
    if (sendComment.length !== 0 && sendComment !== undefined) {
      setCommentListData([sendComment, ...commentListData]);
    }
  };

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
              <S.PostDetailHeaderImg src={siren} alt="Siren" />
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
          {commentListData.map((post, id) => (
            <S.PostDetailCommentItem key={id}>
              <S.PostDetailCommentHeaderProfile
                src={post.author.image}
                alt="PostDetailCommentHeaderProfile"
              />
              <S.PostDetailCommentItemTextBox>
                <div className="flexBox">
                  <S.PostDetailCommentHeaderUserName>
                    {post.author.username}
                    <S.PostDetailCommentHeaderMinutesAgo>
                      5분전
                    </S.PostDetailCommentHeaderMinutesAgo>
                  </S.PostDetailCommentHeaderUserName>
                  <S.PostDetailCommentHeaderImg src={siren} />
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
          <S.PostDetailWriteProfile src={profile} />
          <S.PostDetailWriteInput onChange={typingComment} />
          <S.PostDetailWriteSendButton>게시</S.PostDetailWriteSendButton>
        </S.PostDetailWriteForm>
      </S.PostDetailBox>
      <S.PostDetailBackButton onClick={closeModal}>X</S.PostDetailBackButton>
    </S.PostDetailBackground>
  );
}

export default PostDetailModal;
