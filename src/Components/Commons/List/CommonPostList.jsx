import React, { useEffect, useRef, useState } from "react";
import * as S from "./CommonPostListStyle";
import more from "../../../assets/image/icon-more.svg";
import heart from "../../../assets/image/icon-heart.svg";
import DefaultImage from "../../../assets/image/char_inactive.png";
import unheart from "../../../assets/image/icon-unheart.svg";
import comment from "../../../assets/image/icon-comment.svg";
import { useRecoilState, useSetRecoilState } from "recoil";
import {
  currentLocation,
  isTouchFeed,
  postListDataAtom,
  postListDataIndexAtom,
  userPostListAtom,
  userPostListDataIndexAtom
} from "../../../Store/Store";
import { showDate } from "../../../Functional/DateFunction";
import heartPostAPI from "../../../API/heartPostAPI";
import unheartPostAPI from "../../../API/unheartPostAPI";
import { useLocation } from "react-router-dom";
import { isValidImage } from "../../../Functional/isValidImageFunction";

function CommonPostList({
  isMyProfile,
  setIsOptionModalVisible,
  setSelectedPostId
}) {
  const [Location, setLocation] = useRecoilState(currentLocation);
  const [postData, setPostData] = useRecoilState(
    Location.includes("/profile") ? userPostListAtom : postListDataAtom
  );
  const [hoveredId, setHoveredId] = useState(null);
  const [isVisible, setIsVisible] = useRecoilState(isTouchFeed);
  const setIndex = useSetRecoilState(
    Location.includes("/profile")
      ? userPostListDataIndexAtom
      : postListDataIndexAtom
  );

  // Modal의 상태에 따라 스크롤을 제어합니다.
  const location = useLocation();

  useEffect(() => {
    // setCurrentLocation(currentLocation);
    window.scrollTo(0, 0);
    setLocation(location.pathname);
  }, [location]);

  useEffect(() => {
    document.body.style.overflow = isVisible ? "hidden" : "auto";
  }, [isVisible]);

  const handleHeartClick = async (e, post_id) => {
    e.stopPropagation();
    const currentHeart = e.target.getAttribute("src");
    let result = "";

    if (currentHeart === unheart) {
      result = await heartPostAPI(post_id);
      //예외처리도 해야댐
      if (result.includes("heart success")) {
        e.target.setAttribute("src", heart);
      } else {
        return;
      }
    } else {
      result = await unheartPostAPI(post_id);
      if (result.includes("unheart success")) {
        e.target.setAttribute("src", unheart);
      } else {
        return;
      }
    }

    let updatedPostData = [...postData];
    let changeDataIndex = postData.findIndex((e) => e.id === post_id);
    if (changeDataIndex !== -1) {
      updatedPostData[changeDataIndex] = {
        ...updatedPostData[changeDataIndex], // 해당 객체의 복사본을 만들고
        hearted: result.includes("un") ? false : true, // 속성을 수정
        heartCount:
          updatedPostData[changeDataIndex].heartCount +
          (result.includes("un") ? -1 : 1)
      };
      setPostData(updatedPostData);
    }
  };

  const openMoreModal = (e, post_id) => {
    if (isMyProfile) {
      e.stopPropagation();
      setIsOptionModalVisible(true);
      setSelectedPostId(post_id);
    }
  };

  return (
    <S.Article isMyProfile={isMyProfile}>
      {postData.map((post, index) => {
        return (
          <S.Section
            key={index}
            onMouseEnter={() => setHoveredId(index)}
            onMouseLeave={() => setHoveredId(null)}
            ishovered={hoveredId === index}
            onClick={(e) => {
              if (Location.includes("/profile")) {
                e.stopPropagation();
              }
              setIsVisible(true);
              setIndex(index);
            }}>
            <S.PostWrapper>
              <S.PostHeader>
                {isValidImage(post.author.image) ? (
                  <S.PostHeaderImg
                    src={post.author.image}
                    alt="Profile Image"
                  />
                ) : (
                  <S.PostHeaderImg src={DefaultImage} alt="Profile Image" />
                )}
                <S.HeaderTextBox>
                  <S.HeaderH3>{post.author.username}</S.HeaderH3>
                  <S.HeaderP>{post.author.accountname}</S.HeaderP>
                </S.HeaderTextBox>
                {isMyProfile ? (
                  <S.HeaderImg
                    src={more}
                    alt="Siren"
                    onClick={(e) => openMoreModal(e, post.id)}
                  />
                ) : (
                  <></>
                )}
              </S.PostHeader>
              {isValidImage(post.image) ? (
                <>
                  <S.PostContentImg src={post.image} alt="Post Content Image" />
                  <S.PostContent>{post.content}</S.PostContent>
                </>
              ) : (
                <>
                  <S.PostContent>{post.content}</S.PostContent>
                  <S.PostEmptyImg />
                </>
              )}
              <S.Footer>
                <S.FooterImg
                  src={post.hearted ? heart : unheart}
                  alt="Heart"
                  onClick={(e) => handleHeartClick(e, post.id)}
                />
                <S.FooterCount>{post.heartCount}</S.FooterCount>
                <S.FooterImg src={comment} alt="Comment" />
                <S.FooterCount>{post.commentCount}</S.FooterCount>
              </S.Footer>
              <S.Date>{showDate(post.createdAt)}</S.Date>
            </S.PostWrapper>
          </S.Section>
        );
      })}
    </S.Article>
  );
}

export default CommonPostList;
