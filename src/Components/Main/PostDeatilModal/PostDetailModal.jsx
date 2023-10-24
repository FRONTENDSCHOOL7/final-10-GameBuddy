import React from "react";
import * as S from "./PostDetailStyle";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import main from "../../../assets/image/참쉽죠.jpg";
import profile from "../../../assets/image/char_inactive.png";

function PostDetailModal() {
  return (
    <S.PostDetailBackground>
      {/* 뒷배경 */}
      <S.PostDetailBox>
        {/* 내용 표시할 화면 */}
        <S.PostDetailHeaderWrapper>
          <S.PostDetailHeaderProfile src={profile} />
          <S.PostDetailHeaderTextBox>
            <div className="flexBox">
              <S.PostDetailHeaderUserName>꾸꾸룽</S.PostDetailHeaderUserName>
              {/* user_name 들어갈 자리 */}
              <S.PostDetailHeaderImg src={siren} alt="Siren" />
            </div>
            <S.PostDetailHeaderAccountName>
              @Weniv
            </S.PostDetailHeaderAccountName>
            {/* account_name 들어갈 자리 */}
          </S.PostDetailHeaderTextBox>
        </S.PostDetailHeaderWrapper>

        <S.PostDetailContentWrapper>
          <S.PostDetailContent>안녕안녕</S.PostDetailContent>
          <S.PostDetailContentImg src={main} alt="PostDetail Image" />
          <S.PostDetailFooter>
            <S.PostDetailFooterImg src={heart} />
            <S.PostDetailFooterCount>1</S.PostDetailFooterCount>
            <S.PostDetailFooterImg src={comment} />
            <S.PostDetailFooterCount>1</S.PostDetailFooterCount>
          </S.PostDetailFooter>
          <S.PostDetailFooterDate>2023년 12월 23일</S.PostDetailFooterDate>
        </S.PostDetailContentWrapper>

        <S.PostDetailHr />

        <S.PostDetailCommentWrapper>
          <S.PostDetailCommentTitle>댓글</S.PostDetailCommentTitle>

          <S.PostDetailCommentItem>
            <S.PostDetailCommentHeaderProfile src={profile} />
            <S.PostDetailCommentItemTextBox>
              <div className="flexBox">
                <S.PostDetailCommentHeaderUserName>
                  머슬뱅
                  <S.PostDetailCommentHeaderMinutesAgo>
                    5분전
                  </S.PostDetailCommentHeaderMinutesAgo>
                </S.PostDetailCommentHeaderUserName>
                <S.PostDetailCommentHeaderImg src={siren} />
              </div>
              <S.PostDetailCommentContent>
                안녕 반가워
              </S.PostDetailCommentContent>
            </S.PostDetailCommentItemTextBox>
          </S.PostDetailCommentItem>
          <S.PostDetailCommentItem>
            <S.PostDetailCommentHeaderProfile src={profile} />
            <S.PostDetailCommentItemTextBox>
              <div className="flexBox">
                <S.PostDetailCommentHeaderUserName>
                  벤치뱅
                  <S.PostDetailCommentHeaderMinutesAgo>
                    5분전
                  </S.PostDetailCommentHeaderMinutesAgo>
                </S.PostDetailCommentHeaderUserName>
                <S.PostDetailCommentHeaderImg src={siren} />
              </div>
              <S.PostDetailCommentContent>
                안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕
                반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕
                반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕
                반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕
                반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워안녕
                반가워안녕 반가워안녕 반가워안녕 반가워안녕 반가워
              </S.PostDetailCommentContent>
            </S.PostDetailCommentItemTextBox>
          </S.PostDetailCommentItem>
        </S.PostDetailCommentWrapper>

        <S.PostDetailHr />

        <S.PostDetailWriteWrapper>
          <S.PostDetailWriteProfile src={profile} />
          <S.PostDetailWriteInput />
          <S.PostDetailWriteSendButton>게시</S.PostDetailWriteSendButton>
        </S.PostDetailWriteWrapper>
      </S.PostDetailBox>
      <S.PostDetailBackButton>X</S.PostDetailBackButton>
    </S.PostDetailBackground>
  );
}

export default PostDetailModal;
