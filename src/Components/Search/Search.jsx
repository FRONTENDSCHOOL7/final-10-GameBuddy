import React, { useEffect, useState } from "react";
import * as S from "./SearchStyle";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { searchKeywordAtom, userSearchResultAtom } from "../../Store/Store";
import searchUserAPI from "../../API/searchUserAPI";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoBackIcon } from "../../assets/image/icon-goback.svg";

function Search() {
  const searchKeyword = useRecoilValue(searchKeywordAtom);
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);
  const [searchResult, setSearchResult] = useRecoilState(userSearchResultAtom);

  // input에 검색어를 입력하면 호출되는 핸들러
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value); // 검색 키워드 상태 업데이트
  };

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
    }, 600);
    setTimer(newTimer);

    return () => {
      clearTimeout(timer);
    };
  }, [searchKeyword]);

  // goBack 버튼: 이전 페이지로 이동
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  return (
    <>
      <S.HeaderContainer>
        <S.StyledIconButton onClick={goBack}>
          <GoBackIcon />
        </S.StyledIconButton>
        <S.Input
          id="search"
          placeholder="계정 검색"
          onChange={handleInputChange}
        />
      </S.HeaderContainer>
      <S.SearchUserContainer>
        {searchResult.map((data, id) => {
          return (
            <S.SearchResultForm key={id}>
              <S.SearchUserBox
                onClick={() => navigate(`/profile/${data.accountname}`)}>
                <S.Image src={data.image} />
                <S.Article>
                  <S.UserName>{data.username}</S.UserName>
                  <S.Intro>@{data.accountname}</S.Intro>
                </S.Article>
              </S.SearchUserBox>
            </S.SearchResultForm>
          );
        })}
      </S.SearchUserContainer>
    </>
  );
}

export default Search;
