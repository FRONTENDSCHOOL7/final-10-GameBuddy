import styled from "styled-components";

export const PostDetailBackground = styled.article`
  position: fixed;
  flex-direction: column;
  gap: 0.5rem;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  z-index: 2000;
`;

export const PostDetailBox = styled.section`
  position: relative;
  background-color: white;
  display: flex;
  width: 90vw;
  height: 90vh;
  background-color: #fff;
  border-radius: 20px;
  flex-direction: column;
`;

export const PostDetailHeaderProfile = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
`;

export const PostDetailHeaderWrapper = styled.div`
  display: flex;
  padding: 1rem 1rem 0.5rem 1rem;
  gap: 0.7rem;
`;

export const PostDetailHeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  .flexBox {
    display: flex;
    justify-content: space-between;
  }
`;

export const PostDetailHeaderUserName = styled.h3`
  font-weight: bold;
  font-size: 1rem;
`;

export const PostDetailHeaderAccountName = styled.p`
  color: gray;
  font-size: 0.8rem;
`;

export const PostDetailHeaderImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  margin-left: auto;
`;

export const PostDetailHr = styled.div`
  width: 99%;
  height: 0.3px;
  margin: auto;
  border-top: 0.3px solid #dbdbdb;
`;

export const PostDetailContentWrapper = styled(PostDetailHeaderWrapper)`
  flex-direction: column;
  max-width: 85vw;
  height: 40%;
  padding-top: 0.6rem;
  padding-left: 2rem;
  padding-right: 2rem;
  overflow-y: auto;
`;

export const PostDetailContent = styled.p`
  font-family: var(--Roboto-B);
  font-size: 1.1rem;
  white-space: normal;
  word-wrap: break-word;
`;

export const PostDetailContentImg = styled.img`
  margin-top: 0.1rem;
  width: 17rem;
  height: 12rem;
  border-radius: 10%;
`;

export const PostDetailFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 0.1rem;
`;

export const PostDetailFooterImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const PostDetailFooterCount = styled.span`
  color: gray;
  font-size: 1rem;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.4rem;
`;

export const PostDetailFooterDate = styled.span`
  margin-top: 0.6rem;
  font-size: 0.7rem;
  color: gray;
  margin-bottom: 0.6rem;
`;

// 댓글 리스트 구현

export const PostDetailCommentWrapper = styled.ul`
  padding: 0.3rem 1rem 0.5rem 1rem;
  height: 35%;
  overflow-y: scroll;
`;

export const PostDetailCommentTitle = styled.li`
  font-size: 1rem;
  padding-bottom: 0.5rem;
`;

export const PostDetailCommentItem = styled.li`
  display: flex;
`;

export const PostDetailCommentItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 0.3rem 1rem 0.5rem 1rem;
  .flexBox {
    display: flex;
    justify-content: space-between;
  }
`;

export const PostDetailCommentHeaderProfile = styled.img`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
`;

export const PostDetailCommentHeaderUserName = styled.h3`
  font-weight: bold;
  font-size: 1rem;
  margin-right: 0.2rem;
`;

export const PostDetailCommentHeaderMinutesAgo = styled.span`
  font-size: 0.7rem;
  color: gray;
  vertical-align: top;
  margin-left: 0.5rem;
`;

export const PostDetailCommentHeaderImg = styled.img`
  width: 1.2rem;
  height: 1.2rem;
  margin-left: auto;
  margin-top: -0.4rem;
`;

export const PostDetailCommentContent = styled.p`
  margin-top: 0.1rem;
  font-size: 0.8rem;
`;

export const PostDetailWriteWrapper = styled.div`
  padding: 0.5rem 1rem 1rem 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 0.7rem;
  box-sizing: border-box;
`;

export const PostDetailWriteProfile = styled(PostDetailHeaderProfile)``;

export const PostDetailWriteInput = styled.input.attrs(() => ({
  placeholder: "댓글 입력하기",
  type: "text"
}))`
  font-size: 0.8rem;
  flex-grow: 1;
  border: none;
`;

export const PostDetailWriteSendButton = styled.button`
  border: none;
  font-size: 0.8rem;
  background-color: white;
  color: gray;
`;

export const PostDetailBackButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  border-color: white;
  color: white;
  background-color: transparent;
`;
