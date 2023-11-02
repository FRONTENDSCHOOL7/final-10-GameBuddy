import styled from "styled-components";

export const PostDetailBackground = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  gap: 0.5rem;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 2000;
`;

export const PostDetailBox = styled.section`
  position: relative;
  display: grid;
  grid-template-rows: auto auto auto 0.2fr;

  width: 90vw;
  height: 85vh;
  max-width: 350px;
  min-width: 330px;
  margin: auto;
  border-radius: 15px;
  background-color: #2c2f33;
  position: relative;

  @media (min-width: 768px) {
    height: 70vh;
    width: 100vw;
    max-width: 750px;
    min-width: 380px;
    display: grid;
    grid-template-columns: 2fr 2fr;
    grid-template-rows: auto;
  }
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

  @media (min-width: 768px) {
    grid-column: 1 / 3;
  }
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
  color: #fff;
  font-weight: bold;
  font-size: 1rem;
  margin-top: 0.3rem;
`;

export const PostDetailHeaderAccountName = styled.p`
  color: var(--color-purple);
  font-size: 0.8rem;
`;

export const PostDetailHeaderImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const PostDetailHr = styled.div`
  display: none;
`;

export const PostDetailContentWrapper = styled(PostDetailHeaderWrapper)`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  max-height: 100%;
  padding: 0.6rem 2rem 0.2rem 2rem;
  overflow-y: auto;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }

  @media (min-width: 768px) {
    grid-column: 1;
    grid-row: 2 / 4;
    align-self: start;
  }
`;

export const PostDetailContentImg = styled.img`
  width: 17rem;
  height: 12rem;
  max-width: 100%;
  max-height: 40vw;
  height: auto;
  margin: 0 auto;
  display: block;
  border-radius: 5%;
  @media (min-width: 768px) {
    margin-top: 1rem;
    width: 25rem;
    height: 16rem;
  }
`;

export const PostDetailContent = styled.p`
  color: #fff;
  font-size: 1rem;
  margin-left: 1rem;
  margin-right: 1rem;
  font-weight: 400;
  white-space: normal;
  word-wrap: break-word;
`;
export const PostDetailFooter = styled.div`
  display: flex;
  gap: 0.5rem;
  /* margin-top: 0.1rem; */
  margin-left: 1rem;
`;

export const PostDetailFooterImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
`;

export const PostDetailFooterCount = styled.span`
  color: #a4a4a4;
  font-size: 1rem;
  width: 1.1rem;
  height: 1.1rem;
  line-height: 1.7rem;
`;

export const PostDetailFooterDate = styled.span`
  margin-left: 1rem;
  font-size: 0.8rem;
  color: #a4a4a4;
`;

// 댓글 리스트 구현
export const PostDetailCommentWrapper = styled.ul`
  padding: 1.5rem 1rem 1rem 1rem;
  height: 75%;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
  transform: translateY(20px);
  /* border-top: 1px solid #555454; */

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 2 / 4;
    align-self: start;
    padding-top: 0;
    height: 85%;
    border-top: none;
    /* border-left: 1px solid #555454; */
  }
`;

export const PostDetailCommentTitle = styled.li`
  color: #a4a4a4;
  font-size: 1rem;
  padding-bottom: 0.8rem;
`;

export const PostDetailCommentItem = styled.li`
  display: flex;
`;

export const PostDetailCommentItemTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: calc(100% - (0.8rem + 5rem));
  padding: 0.3rem 1rem 0.5rem 1rem;
`;

export const PostDetailCommentHeaderProfile = styled.img`
  width: 1.8rem;
  height: 1.8rem;
  border-radius: 50%;
`;

export const PostDetailCommentHeaderUserName = styled.h3`
  color: #fff;
  font-size: 0.9rem;
  font-weight: 700;
  margin-right: 0.2rem;
`;

export const PostDetailCommentHeaderMinutesAgo = styled.span`
  font-size: 0.7rem;
  color: gray;
  vertical-align: top;
  margin-left: 0.5rem;
`;

export const PostDetailCommentHeaderImg = styled.img`
  width: 0.8rem;
  height: 0.8rem;
  margin-top: 0.3rem;
  /* margin-left: auto; */
`;

export const PostDetailCommentContent = styled.p`
  color: #fff;
  margin-top: 0.1rem;
  font-size: 0.8rem;
  font-weight: 300;
  overflow-wrap: break-word;
`;

export const PostDetailWriteForm = styled.form`
  padding: 1rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 0.7rem;
  box-sizing: border-box;
  border-top: 1px solid #635d5d;

  @media (min-width: 768px) {
    grid-column: 2;
    grid-row: 4;
  }
`;

export const PostDetailWriteProfile = styled(PostDetailHeaderProfile)``;

export const PostDetailWriteInput = styled.input.attrs(() => ({
  placeholder: "댓글 입력하기",
  type: "text"
}))`
  background-color: #2c2f33;
  font-size: 0.8rem;
  flex-grow: 1;
  border: none;
  border-radius: 4px;
  color: #fff;
`;

export const PostDetailWriteSendButton = styled.button`
  border: none;
  border-radius: 4px;
  font-size: 0.8rem;
  font-weight: 600;
  background-color: #2c2f33;
  color: var(--color-purple);
`;

export const PostDetailBackButton = styled.button`
  width: 2rem;
  height: 2rem;
  font-size: 1.5rem;
  border-radius: 50%;
  border-color: white;
  color: white;
  background-color: transparent;

  position: absolute;
  bottom: 15px;
  left: 50%;
  transform: translateX(-50%);

  @media (min-width: 768px) {
    bottom: 50px;
  }
`;
