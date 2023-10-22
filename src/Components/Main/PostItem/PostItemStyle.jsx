import styled from "styled-components";

export const Article = styled.article`
  display: flex;
  /* flex: 1 auto; */
  /* header footer가 영역 외 빈공간을 이 컴포넌트가 다 먹는거다 */
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-right: 16px;
  padding-top: 11px;
  width: 100%;
`;
export const Section = styled.section`
  display: flex;
  gap: 7px;
  padding-top: 5px;
  padding-right: 20px;
  padding-left: 7px;
  border: 1px solid black;
`;

export const PostHeaderImg = styled.img`
  width: 24px;
  height: 24px;
  padding-right: 5px;
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
  width: 15px;
  height: 15px;
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
