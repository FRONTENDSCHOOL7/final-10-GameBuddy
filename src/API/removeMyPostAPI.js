import axios from "axios";

async function removeMyPostAPI(post_id) {
  const token = localStorage.getItem("token");
  try {
    const result = await axios.delete(
      `https://api.mandarin.weniv.co.kr/post/${post_id}`,
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );
    console.log("성공", result);

    return "게시글 삭제 성공";
  } catch (e) {
    console.log("실패", e.message);
    return "게시글 삭제 실패";
  }
}

export default removeMyPostAPI;
