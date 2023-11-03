// import styled from "styled-components";

// /* max-width: calc(100vw - 260px); */
// export const Article = styled.article`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 18px;
//   padding-top: 80px; //첫번째 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
//   padding-bottom: 80px; //마지막 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
//   width: 100%;
//   flex: 1 auto;
//   overflow-y: hidden;
//   box-sizing: border-box;
//   @media screen and (min-width: 768px) {
//     margin-left: 270px;
//     padding-right: 300px;
//   }
// `;

// export const Section = styled.section`
//   display: flex;
//   gap: 7px;
//   padding-top: 0.5rem;
//   padding-right: 0.5rem;
//   padding-left: 0.5rem;
//   width: 90%;
//   /* border: 1px solid var(--color-lightpurple); */
//   border-radius: 10px;
//   box-shadow: ${({ isHovered }) =>
//     isHovered
//       ? "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)"
//       : "none"};
//   @media screen and (min-width: 768px) {
//     width: 95%;
//   }
// `;

// export const PostHeaderImg = styled.img`
//   border-radius: 50%;
//   width: 2.5rem;
//   height: 2.5rem;
// `;

// export const PostWrapper = styled.div`
//   display: flex;
//   flex-direction: column;
//   box-sizing: border-box;
//   width: calc(100% - 2.3rem);
// `;

// export const HeaderTextBox = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.1rem;
//   .flexBox {
//     display: flex;
//   }
// `;

// export const HeaderH3 = styled.h3`
//   font-weight: bold;
//   font-size: 1.1rem;
// `;

// export const HeaderP = styled.p`
//   color: gray;
//   font-size: 0.9rem;
// `;

// export const HeaderImg = styled.img`
//   width: 1.3rem;
//   height: 1.3rem;
//   margin-left: auto;
// `;

// export const PostContent = styled.p`
//   font-family: var(--Roboto-B);
//   width: 16rem;
//   font-size: 0.9rem;
//   padding-top: 1rem;
//   padding-bottom: 1rem;
//   word-wrap: break-word;
//   display: -webkit-box;
//   -webkit-box-orient: vertical;
//   -webkit-line-clamp: 3; /* 3줄까지 표시 */
//   overflow: hidden; /* 추가된 내용을 숨김 */
//   @media screen and (min-width: 768px) {
//     width: 20rem;
//   }
// `;

// export const PostContentImg = styled.img`
//   width: 16rem;
//   height: 12rem;
//   margin-top: 1rem;
//   border-radius: 10%;
//   @media screen and (min-width: 768px) {
//     width: 20rem;
//     height: 16rem;
//   }
// `;

// export const Footer = styled.footer`
//   display: flex;
//   gap: 0.4rem;
//   margin-top: 9px;
// `;

// export const FooterImg = styled.img`
//   width: 1.3rem;
//   height: 1.3rem;
// `;

// export const FooterCount = styled.span`
//   color: gray;
//   font-size: 0.9rem;
//   width: 0.9rem;
//   height: 0.9rem;
//   line-height: 1.1rem;
// `;

// export const Date = styled.span`
//   margin-top: 11px;
//   font-size: 0.8rem;
//   color: gray;
//   margin-bottom: 0.7rem;
// `;

// // export const Input = styled.input.attrs(() => ({
// //   placeholder: "안뇽",
// //   type: "text"
// // }))``;
// // 이거 input 입력할 때, 좋은거 같습니다 일단 코드 주석으로 킵해둘게요
