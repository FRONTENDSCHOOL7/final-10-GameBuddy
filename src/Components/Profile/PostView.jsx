import React from "react";
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
`;

const ViewButton = styled.button`
  width: 26px;
  height: 26px;
  background: ${(props) => `url(${props.img})`};
  border: none;

  &:first-child {
    margin-right: 16px;
  }
`;

function PostView({ viewType, setViewType }) {
  return (
    <ViewContainer>
      <ViewButton
        img={viewType === "list" ? ListOn : ListOff}
        onClick={() => setViewType("list")}
      />
      <ViewButton
        img={viewType === "album" ? AlbumOn : AlbumOff}
        onClick={() => setViewType("album")}
      />
    </ViewContainer>
  );
}

export default PostView;
