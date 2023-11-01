import React, { useState } from "react";
import * as S from "./MoreModalStyle";
import removeMyPostAPI from "../../../../API/removeMyPostAPI";
import { useRecoilState } from "recoil";
import { userPostListAtom } from "../../../../Store/Store";
import { useNavigate } from "react-router-dom";

export function Modal({
  isMyProfile,
  isOptionModalVisible,
  setIsOptionModalVisible,
  postId,
  setIsPostModalVisible
}) {
  const [showConfirm, setShowConfirm] = useState(false); // 최종 확인 창이 뜨는 상태
  const [isEdit, setIsEdit] = useState(false); // 게시글 수정 상태

  // 신고하면 alert창 띄우기
  const handleReport = async () => {
    alert("신고되었습니다.");
    setIsOptionModalVisible(false); // 신고 후 모달 닫기
  };

  const handleEdit = () => {
    setIsEdit(true);
    setShowConfirm(true);
  };

  return (
    isOptionModalVisible && (
      <S.ModalOverlay onClick={() => setIsOptionModalVisible(false)}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            setShowConfirm={setShowConfirm}
            setIsOptionModalVisible={setIsOptionModalVisible}
            onReport={handleReport}
            postId={postId}
            setIsPostModalVisible={setIsPostModalVisible}
            isEdit={isEdit}
          />
        ) : (
          <ActionModal
            isMyProfile={isMyProfile}
            setShowConfirm={setShowConfirm}
            handleEdit={handleEdit}
          />
        )}
      </S.ModalOverlay>
    )
  );
}

// 수정,삭제 / 신고 구분
function ActionModal({ isMyProfile, setShowConfirm, handleEdit }) {
  return (
    <S.ModalContainer onClick={(e) => e.stopPropagation()}>
      {isMyProfile ? (
        <>
          <S.ModalButton onClick={handleEdit}>수정하기</S.ModalButton>
          <S.ModalButton onClick={() => setShowConfirm(true)}>
            삭제하기
          </S.ModalButton>
        </>
      ) : (
        <S.ModalButton onClick={() => setShowConfirm(true)}>
          신고하기
        </S.ModalButton>
      )}
    </S.ModalContainer>
  );
}

// 최종 확인 모달 (ex. 삭제하시겠습니까? / 신고하시겠습니까?)
function ConfirmModal({
  isMyProfile,
  setShowConfirm,
  setIsOptionModalVisible,
  onReport,
  postId,
  setIsPostModalVisible,
  isEdit
}) {
  const [postList, setPostList] = useRecoilState(userPostListAtom);
  const navigate = useNavigate();

  const handleNoOption = () => {
    setShowConfirm(false);
    setIsOptionModalVisible(false);
  };

  const handleEditConfirm = () => {
    setIsOptionModalVisible(false);
    navigate(`/post`, { state: { post_id: postId } });
  };

  // myPost 삭제
  const handleDelete = async () => {
    try {
      const responseMessage = await removeMyPostAPI(postId);
      if (responseMessage === "게시글 삭제 성공") {
        alert("게시물이 삭제되었습니다.");

        // 상태 갱신: 게시물 목록에서 삭제된 게시물 제거
        const updatedPostList = postList.filter((post) => post.id !== postId);
        setPostList(updatedPostList);
        setIsOptionModalVisible(false);
        setIsPostModalVisible(false);
      }
    } catch (error) {
      console.error(error);
      alert("잘못된 요청입니다. 로그인 정보를 확인하세요.");
    }
  };

  return (
    <S.ConfirmDeleteContainer onClick={(e) => e.stopPropagation()}>
      <S.ConfirmMessage>
        {isEdit
          ? "수정하시겠습니까?"
          : isMyProfile
          ? "정말 삭제하시겠습니까?"
          : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={handleNoOption}>아니오</S.ConfirmButton>
        <S.ConfirmButton
          onClick={
            isEdit ? handleEditConfirm : isMyProfile ? handleDelete : onReport
          }>
          예
        </S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}
