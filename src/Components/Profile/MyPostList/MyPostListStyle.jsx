import styled from "styled-components";

export const NoPostsMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px; // 높이를 원하는대로 설정할 수 있습니다.
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
`;

export const ImageItem = styled.img`
  width: 100%;
  height: 114px;
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  position: fixed; // 고정된 위치에 배치
  bottom: 60px; // 화면 아래에 붙이기 위해
  left: 0; // 화면 왼쪽에 정렬
  right: 0; // 화면 오른쪽에 정렬
  background: white;
  padding: 20px;
  border-radius: 15px 15px 0 0; // 위쪽 둥근 모서리만 적용
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: translateY(100%); // 아래로 밀어냄
  animation: slideUp 0.3s forwards; // 애니메이션 효과

  @keyframes slideUp {
    to {
      transform: translateY(0); // 원래 위치로 돌아옴
    }
  }
`;

export const ModalButton = styled.button`
  background-color: #fff;
  border: none;
  border-bottom: 1px solid #dbdbdb;
  padding: 10px;
  cursor: pointer;

  &:last-child {
    border-bottom: none;
  }
`;
