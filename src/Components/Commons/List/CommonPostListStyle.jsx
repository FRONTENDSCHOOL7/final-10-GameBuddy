import styled from "styled-components";
// import bgimg from "../../../assets/image/ground.jpg";

/* max-width: calc(100vw - 260px); */
export const Article = styled.article`
  background-color: #2c2f33;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 18px;
  padding-top: ${(props) =>
    props.isMyProfile
      ? "15px"
      : "80px"}; //첫번째 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
  padding-bottom: ${(props) =>
    props.isMyProfile
      ? "15px"
      : "80px"}; //마지막 게시글 바닥이 잘리는 문제를 해결하기 위해 넣음
  width: 100%;
  flex: 1 auto;
  overflow-y: hidden;
  box-sizing: border-box;
  @media screen and (min-width: 768px) {
    padding-left: 72px;
  }
`;

export const Section = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 0.5rem 0.5rem 0 0.5rem;
  width: 100%;
  height: auto;
  max-width: 300px;
  max-height: 300px;
  margin: 0 auto;
  position: relative;
  border-radius: 10px;
  /* border: 1px solid #fff; */
  box-shadow: ${
    ({ ishovered }) => (ishovered ? "0px 0px 5px #97797990" : "none")
    // ? "0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22)" : "none"
  };
  /* border: 1px solid #5e5a5a90; */
  @media screen and (min-width: 768px) {
    max-width: 550px;
    max-height: 700px;
    margin-left: auto;
    margin-right: auto;
    border-radius: 10px;
    /* box-shadow: 0px 0px 20px #ffffff90; */
    background-color: #2c2f33;
    border: 1px solid #5e5a5a90;
    cursor: pointer;
  }
`;

export const PostHeaderImg = styled.img`
  border-radius: 50%;
  width: 2.5rem; /* 작성자 이미지 크기 */
  height: 2.5rem; /* 작성자 이미지 크기 */
  position: absolute;
  top: 0.5rem; // 상단부터의 위치
  left: 0.7rem; // 왼쪽부터의 위치
`;

export const PostWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const PostHeader = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between; /* 이미지와 텍스트 박스 사이 공간 최대화 */
`;

export const HeaderTextBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start; /* 왼쪽 정렬 */
  gap: 0.1rem;
  padding-left: 50px; /* 프로필 이미지와 텍스트 사이의 간격 */
  padding-top: 8px;
`;

export const HeaderH3 = styled.h3`
  color: #fff;
  font-weight: bold;
  font-size: 1.1rem;
`;

export const HeaderP = styled.p`
  color: var(--color-purple);
  font-size: 0.9rem;
`;

export const HeaderImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  margin-left: auto;
`;

export const PostContent = styled.p`
  color: #fff;
  font-family: var(--Roboto-B);
  width: 100%;
  max-width: 250px;
  font-size: 0.9rem;
  padding-top: 1rem;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3; /* 3줄까지 표시 */
  overflow: hidden; /* 추가된 내용을 숨김 */
  text-overflow: ellipsis;
  white-space: normal;
  line-height: 20px;
  @media screen and (min-width: 768px) {
    max-width: 470px;
    max-height: 300px;
  }
`;

export const PostContentImg = styled.img`
  width: 100%;
  height: auto;
  max-width: 250px;
  max-height: 150px;
  margin-top: 0.5rem;
  border-radius: 5%;
  object-fit: cover;
  @media screen and (min-width: 768px) {
    max-width: 470px;
    max-height: 300px;
  }
`;

export const PostEmptyImg = styled.div`
  background-color: transparent;
  width: 100%;
  min-width: 250px;
  min-height: 50px;
  margin-top: 0.5rem;
  border-radius: 5%;
  @media screen and (min-width: 768px) {
    min-width: 200px;
    min-height: 100px;
  }
`;

export const Footer = styled.footer`
  display: flex;
  align-items: center;
  gap: 0.4rem;
  width: 100%; /* Footer의 너비를 PostWrapper와 동일하게 맞춤 */
  padding-left: 50px; /* 하트와 댓글 사이의 여백 */
  margin-top: 0.2rem;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 480px; // 너비를 이미지와 동일하게 설정
    padding-left: 10px;
  }
`;

export const FooterImg = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;

export const FooterCount = styled.span`
  color: gray;
  font-size: 0.9rem;
  width: 0.9rem;
  height: 0.9rem;
  line-height: 0.8rem;
`;

export const Date = styled.span`
  margin-top: 11px;
  font-size: 0.8rem;
  color: #a4a4a4;
  margin-bottom: 0.1rem;

  position: absolute;
  bottom: 0; // 섹션 하단부터의 위치
  left: 2.1rem;
  @media screen and (min-width: 768px) {
    bottom: 10px; // 하단에서 위치 조정
    left: 50px; // 왼쪽에서 위치 조정
  }
`;
