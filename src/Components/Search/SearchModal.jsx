import React from "react";
import styled from "styled-components";
import { useSetRecoilState } from "recoil";
import { searchKeywordAtom } from "../../Store/Store";
import SearchUser from "./Common/SearchUser";

const SearchModalContainer = styled.div`
  position: fixed;
  top: 63px;
  right: 0;
  width: 400px;
  height: 100%;
  background: #25282d;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  overflow-y: scroll;
  -ms-overflow-style: none;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 20px 12px 12px;
  background-color: #2c2f33;
  box-sizing: border-box;
`;

const Input = styled.input`
  flex: 1;
  padding: 8px;
  background-color: #dbdbdb;
  border: 1px solid #dbdbdb;
  border-radius: 32px;
  margin-left: 10px;
`;

function SearchModal() {
  const setSearchKeyword = useSetRecoilState(searchKeywordAtom);

  // input에 검색어를 입력하면 호출되는 핸들러
  const handleInputChange = (e) => {
    setSearchKeyword(e.target.value); // 검색 키워드 상태 업데이트
  };

  return (
    <SearchModalContainer>
      <HeaderContainer>
        <Input
          id="search"
          placeholder="계정 검색"
          onChange={handleInputChange}
        />
      </HeaderContainer>
      <SearchUser modalStyle={true} />
    </SearchModalContainer>
  );
}

export default SearchModal;
