import styled from "styled-components";

export const NoPostsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  font-size: 15px;
  color: gray;
`;

export const ListContainer = styled.div`
  background-color: #fff;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 16px;
  margin-bottom: 70px;
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;

  padding-bottom: 16px; //마지막 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
  width: 100%;

  flex: 1 auto;
  overflow-y: auto;

  box-sizing: border-box;
`;
export const Section = styled.section`
  display: flex;
  gap: 7px;
  padding-top: 5px;
  padding-right: 20px;
  padding-left: 7px;
`;

export const PostHeaderImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 100%;
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
  font-size: 0.9rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 3줄까지 표시 */
  overflow: hidden; /* 추가된 내용을 숨김 */
`;

export const PostContentImg = styled.img`
  width: 16rem;
  height: 12rem;
  border-radius: 10%;
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
  line-height: 22px;
`;

export const Date = styled.span`
  margin-top: 11px;
  font-size: 10px;
  color: gray;
  margin-bottom: 10px;
`;

export const PostItem = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
`;

export const AlbumContainer = styled.div`
  background-color: #fff;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  padding: 24px 20px;
  margin-bottom: 50px;
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 114px;
`;
