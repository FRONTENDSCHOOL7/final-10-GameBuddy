import React, { useEffect, useState } from "react";
import followingPostAPI from "../../API/followingPostAPI";
import { useRecoilState } from "recoil";
import { postListDataAtom } from "../../Store/Store";

function PostList() {
  const [postData, setPostData] = useRecoilState(postListDataAtom);

  useEffect(() => {
    async function fetchData() {
      const obj = await followingPostAPI();
      setPostData(obj);
    }
    fetchData();
  }, []);

  return postData.length === 0 ? (
    <div>비어있음</div>
  ) : (
    <div>
      {postData.map((post) => {
        return (
          <div key={post.id}>
            <div>{post.id}</div>
          </div>
        );
      })}
    </div>
  );
}

export default PostList;
