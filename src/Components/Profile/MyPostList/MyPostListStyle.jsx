import styled from "styled-components";

export const NoPostsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 15px;
  color: gray;
  padding-bottom: 40px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    height: 70vh;
  }
`;
/* min-height: 60vh;
  padding-bottom: 70px; */

// padding-bottom: 20px;
export const ListContainer = styled.div`
  background-color: #2c2f33;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  min-height: 55vh;
  padding-bottom: 70px;
  /* padding-bottom: 100px; */
  @media screen and (min-width: 768px) {
    margin-left: 72px;
    min-height: 60vh;
  }
`;

export const PostItem = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
`;

export const AlbumContainer = styled.div`
  background-color: #2c2f33;
  display: grid;
  min-height: 60vh;
  grid-template-columns: repeat(
    3,
    minmax(0, 250px)
  ); // 각 칼럼의 최대 너비 220px
  justify-content: center; // 중앙 정렬
  gap: 8px;
  padding: 24px 20px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    margin-left: 72px;
  }
`;

export const ImageItem = styled.img`
  max-width: 250px;
  width: 100%;
  aspect-ratio: 1/1;
`;
