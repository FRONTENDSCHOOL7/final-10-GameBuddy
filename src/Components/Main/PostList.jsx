import React, { useEffect, useState } from "react";
import followingPostAPI from "../../API/followingPostAPI";
import { useRecoilState } from "recoil";
import { postListDataAtom } from "../../Store/Store";
import CommonPostList from "../Commons/List/CommonPostList";
import HomeNoFeed from "./HomeNoFeed";
import Loading from "../../Components/Commons/Loading";

function PostList() {
  const [postData, setPostData] = useRecoilState(postListDataAtom);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true); // API 호출 시작 전에 로딩 상태를 true로 설정
      const obj = await followingPostAPI();
      setPostData(obj);
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (isLoading) {
    return <Loading />; // 로딩 중일 때 <Loading/> 렌더링
  }

  return postData.length !== 0 ? <CommonPostList /> : <HomeNoFeed />;
}

export default PostList;
