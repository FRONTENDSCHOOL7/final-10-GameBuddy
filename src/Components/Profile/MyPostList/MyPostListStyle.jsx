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
  margin-bottom: 50px;
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
  position: fixed;
  bottom: 60px;
  left: 0;
  right: 0;
  background: white;
  padding: 20px;
  border-radius: 15px 15px 0 0;
  display: flex;
  flex-direction: column;
  gap: 10px;

  transform: translateY(100%);
  animation: slideUp 0.3s forwards;

  @keyframes slideUp {
    to {
      transform: translateY(0);
    }
  }
`;

export const ModalButton = styled.button`
  background-color: #fff;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

// 정말 삭제하시겠습니까?
export const ConfirmDeleteContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: white;
  padding: 23px 0 14px 0; // 좌우 패딩 제거
  border-radius: 10px;
  z-index: 100;
  min-width: 250px;
  width: auto; // 너비를 auto로 설정
`;

export const ConfirmContainer = styled.div`
  display: flex;
  justify-content: center;

  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 55px;
    bottom: 0;
    width: 1px;
    background-color: #dbdbdb;
    transform: translateX(-50%);
  }
`;

export const ConfirmMessage = styled.p`
  font-size: 16px;
  text-align: center;
  margin-bottom: 14px;
  color: #333;
  border-bottom: 1px solid #dbdbdb;
  padding-bottom: 15px;
`;

export const ConfirmButton = styled.button`
  background-color: #fff;
  border: none;
  cursor: pointer;
  flex: 1;
  text-align: center;

  &:last-child {
    color: var(--color-purple);
    font-weight: 700;
  }
`;
