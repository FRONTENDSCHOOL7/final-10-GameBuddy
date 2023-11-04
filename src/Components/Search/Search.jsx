import React from "react";
import * as S from "./SearchStyle";
import { useSetRecoilState } from "recoil";
import { searchKeywordAtom } from "../../Store/Store";
import { useNavigate } from "react-router-dom";
import { ReactComponent as GoBackIcon } from "../../assets/image/icon-goback.svg";
import SearchUser from "./Common/SearchUser";

function Search() {
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);

  // input에 검색어를 입력하면 호출되는 핸들러
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value); // 검색 키워드 상태 업데이트
  };

  // goBack 버튼: 이전 페이지로 이동
  const navigate = useNavigate();
  const goBack = () => {
    navigate(-1);
  };

  const goMain = () => {
    navigate("/main"); // 메인 페이지로 이동
  };

  return (
    <>
      <S.HeaderContainer>
        {/* 뒤로가기 아이콘은 768px 미만에서만 보임 */}
        <S.GoBackIconWrapper onClick={goBack}>
          <GoBackIcon />
        </S.GoBackIconWrapper>

        {/* GameBuddy 텍스트는 768px 이상에서만 보임 */}
        <S.GameBuddyText onClick={goMain}>GameBuddy</S.GameBuddyText>
        <S.Input
          id="search"
          placeholder="계정 검색"
          onChange={handleInputChange}
        />
      </S.HeaderContainer>
      <SearchUser />
    </>
  );
}

export default Search;
