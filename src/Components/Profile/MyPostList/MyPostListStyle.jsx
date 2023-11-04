import styled from "styled-components";

export const NoPostsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 50vh;
  font-size: 15px;
  color: gray;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
    height: 70vh;
  }
`;

export const ListContainer = styled.div`
  background-color: #2c2f33;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-bottom: 50px;
  @media screen and (min-width: 768px) {
    padding-left: 50px;
  }
`;

export const PostItem = styled.div`
  border: 1px solid #dbdbdb;
  padding: 10px;
`;

export const AlbumContainer = styled.div`
  background-color: #2c2f33;
  display: grid;
  grid-template-columns: repeat(
    3,
    minmax(0, 250px)
  ); // 각 칼럼의 최대 너비 220px
  justify-content: center; // 중앙 정렬
  gap: 8px;
  padding: 24px 20px;
  margin-bottom: 50px;
  @media screen and (min-width: 768px) {
    padding-left: 200px;
  }
`;

export const ImageItem = styled.img`
  max-width: 250px;
  width: 100%;
  aspect-ratio: 1/1;
`;
