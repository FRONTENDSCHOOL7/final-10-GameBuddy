import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchKeywordAtom, userSearchResultAtom } from "../../../Store/Store";
import searchUserAPI from "../../../API/searchUserAPI";
import { useNavigate } from "react-router-dom";
import DefaultImage from "../../../assets/image/char_inactive.png";
import { isValidImage } from "../../../Functional/isValidImageFunction";

function SearchUser({ modalStyle }) {
  const searchKeyword = useRecoilValue(searchKeywordAtom);
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);
  const [searchResult, setSearchResult] = useRecoilState(userSearchResultAtom);

  const navigate = useNavigate();

  // 디바운스를 위한 입력값 타이머
  const [timer, setTimer] = useState(null);

  useEffect(() => {
    if (timer) {
      clearTimeout(timer); // 타이머 초기화
    }

    // 사용자가 키워드를 입력한 뒤 600ms 뒤에 api 호출
    const newTimer = setTimeout(async () => {
      if (searchKeyword) {
        const results = await searchUserAPI(searchKeyword);
        setSearchResult(results); // 검색 결과 상태 업데이트
      }
    }, 300);
    setTimer(newTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  return (
    <SearchUserContainer modalStyle={modalStyle}>
      {searchResult.map((data, id) => {
        return (
          <SearchResultForm key={id}>
            <SearchUserBox
              onClick={() => navigate(`/profile/${data.accountname}`)}>
              <Image
                src={isValidImage(data.image) ? data.image : DefaultImage}
              />
              <Article>
                <UserName style={{color: "#ffffff"}} modalStyle={modalStyle}>{data.username}</UserName>
                <Intro>@{data.accountname}</Intro>
              </Article>
            </SearchUserBox>
          </SearchResultForm>
        );
      })}
    </SearchUserContainer>
  );
}

const SearchUserContainer = styled.div`
  padding-top: ${(props) => (props.modalStyle ? "0" : "62px")};
  @media screen and (min-width: 768px) {
    margin-left: ${(props) => (props.modalStyle ? "10px" : "270px")};
    padding-left: ${(props) => (props.modalStyle ? "0" : "30px")};
  }

  /* 모달의 크기에 따라 조정할 스타일 */
  width: 100%; /* 모달 안에서 가득 차도록 */
  max-height: calc(
    100% - 62px
  ); /* 모달 상단 헤더 높이 제외한 영역 내에서 스크롤 가능하도록 */
  overflow-y: auto; /* 세로 스크롤바를 표시하고 필요한 경우 스크롤할 수 있도록 */
`;

const SearchResultForm = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  padding: 16px 16px 0;
`;

const SearchUserBox = styled.div`
  display: flex;
  align-items: center;
`;

const Image = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50px;
`;

const Article = styled.article`
  margin-left: 12px;
  line-height: 25px;
`;

const UserName = styled.p`
  color: ${(props) => (props.modalStyle ? "#fff" : "#000")};
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
`;

const Intro = styled.p`
  color: #767676;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 180px;
`;

export default SearchUser;
