import React from "react";
import * as S from "./CommentStyle";
import siren from "../../../../assets/image/icon-siren.svg";
import close from "../../../../assets/image/icon-close.svg";
import { fewMinutesAgo } from "../../../../Functional/DateFunction";

function Comment({ commentListData, commentEvent, commentMyProfile }) {
  return (
    <>
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
                  src={
                    post.author.accountname ===
                    commentMyProfile.user.accountname
                      ? close
                      : siren
                  }
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
    </>
  );
}

export default Comment;
