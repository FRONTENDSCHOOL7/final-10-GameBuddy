import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  padding-top: 80px; //첫번째 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
  padding-bottom: 80px; //마지막 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
  width: 100%;

  flex: 1 auto;
  overflow-y: auto;
  box-sizing: border-box;
`;
export const Section = styled.section`
  display: flex;
  gap: 7px;
  padding-top: 20px;
  padding-right: 20px;
  padding-left: 7px;
  border: 2px solid var(--color-lightpurple);
  border-radius: 10px;
  box-shadow: ${(props) =>
    props.isHovered
      ? "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
      : "0 3px 6px rgba(0, 0, 0, 0.1), 0 3px 6px rgba(0, 0, 0, 0.1)"};
`;

export const PostHeaderImg = styled.img`
  border-radius: 50%;
  width: 24px;
  height: 24px;
`;

export const PostHeader = styled.header`
  display: flex;
  flex-direction: column;
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  .flexBox {
    display: flex;
  }
`;

export const HeaderH3 = styled.h3`
  font-weight: bold;
  font-size: 16px;
`;

export const HeaderP = styled.p`
  color: gray;
  font-size: 14px;
`;

export const HeaderImg = styled.img`
  width: 18px;
  height: 18px;
  margin-left: auto;
`;

export const PostContent = styled.p`
  font-family: var(--Roboto-B);
  font-size: 13px;
  margin-top: 16px;
  max-width: 297px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 3줄까지 표시 */
  overflow: hidden; /* 추가된 내용을 숨김 */
`;

export const PostContentImg = styled.img`
  margin-top: 16px;
  width: 300px;
  height: 165px;
`;

export const Footer = styled.footer`
  display: flex;
  gap: 10px;
  margin-top: 9px;
`;

export const FooterImg = styled.img`
  width: 20px;
  height: 20px;
`;

export const FooterCount = styled.span`
  color: gray;
  font-size: 14px;
  width: 15px;
  height: 15px;
  line-height: 18px;
`;

export const Date = styled.span`
  margin-top: 11px;
  font-size: 10px;
  color: gray;
  margin-bottom: 10px;
`;

// export const Input = styled.input.attrs(() => ({
//   placeholder: "안뇽",
//   type: "text"
// }))``;
// 이거 input 입력할 때, 좋은거 같습니다 일단 코드 주석으로 킵해둘게요
