import React, { useEffect, useState } from "react";
import followingPostAPI from "../../API/followingPostAPI";
import { useRecoilState } from "recoil";
import { postListDataAtom } from "../../Store/Store";
import CommonPostList from "../Commons/List/CommonPostList";

function PostList() {
  const [postData, setPostData] = useRecoilState(postListDataAtom);

  useEffect(() => {
    async function fetchData() {
      const obj = await followingPostAPI();
      setPostData(obj);
    }
    fetchData();
  }, []);

  return <CommonPostList />;
}

export default PostList;
