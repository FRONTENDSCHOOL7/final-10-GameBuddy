import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { postListDataAtom } from "../../../Store/Store";
import * as S from "./PostItemStyle";
import siren from "../../../assets/image/icon-small-siren.svg";
import heart from "../../../assets/image/icon-heart.svg";
import comment from "../../../assets/image/icon-comment.svg";

// {"\u00A0"} 이거 야무지게 사용가능합니다. react에서 스페이스바 안먹히는거 이걸로 사용하면 됩니다.
// feat 조병민.

function PostItem() {
  const postData = useRecoilValue(postListDataAtom);
  const [hoveredId, setHoveredId] = useState(null);
  console.log(postData);

  return (
    <S.Article>
      {postData.map((post, id) => {
        return (
          <S.Section
            key={id}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            isHovered={hoveredId === id}>
            <S.PostHeaderImg src={post.author.image} alt="Profile Image" />
            <S.PostWrapper>
              <S.HeaderTextBox>
                <div className="flexBox">
                  <S.HeaderH3>{post.author.username}</S.HeaderH3>
                  <S.HeaderImg src={siren} alt="Siren" />
                </div>
                <S.HeaderP>{post.author.accountname}</S.HeaderP>
              </S.HeaderTextBox>
              <S.PostContent>{post.content}</S.PostContent>
              <S.PostContentImg src={post.image} alt="Post Content Image" />
              <S.Footer>
                <S.FooterImg src={heart} alt="Heart" />
                <S.FooterCount>{post.heartCount}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.commentCount}</S.FooterCount>
              </S.Footer>
              <S.Date>{post.createdAt}</S.Date>
            </S.PostWrapper>
          </S.Section>
        );
      })}
    </S.Article>
  );
}

export default PostItem;
