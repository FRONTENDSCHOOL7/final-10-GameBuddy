import React, { useState } from "react";
import styled from "styled-components";
import ListOn from "../../assets/image/icon-post-list.svg";
import ListOff from "../../assets/image/icon-post-list-off.svg";
import AlbumOn from "../../assets/image/icon-post-album.svg";
import AlbumOff from "../../assets/image/icon-post-album-off.svg";

const ViewContainer = styled.div`
  padding: 9px 21px;
  background-color: #fff;
  display: flex;
  justify-content: flex-end;
  margin-top: 8px;
  border-bottom: 1px solid #dbdbdb;

  button:first-child {
    margin-right: 16px;
  }
`;

const ViewButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => `url(${props.Img})`}; //prop에 따른 이미지 경로
  border: none;
`;

export default function PostView() {
  // 앨범형, 목록형 상태 설정
  const [viewType, setViewType] = useState("list");

  const handleListView = () => {
    setViewType("list");
  };

  const handleAlbumView = () => {
    setViewType("album");
  };
  return (
    <ViewContainer>
      {/* ListView 버튼 */}
      <ViewButton
        Img={viewType === "list" ? ListOn : ListOff}
        onClick={handleListView}></ViewButton>
      {/* AlbumView 버튼 */}
      <ViewButton
        Img={viewType === "album" ? AlbumOn : AlbumOff}
        onClick={handleAlbumView}></ViewButton>
    </ViewContainer>
  );
}
