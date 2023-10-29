// 댓글 리스트 구현
import styled from "styled-components";

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
