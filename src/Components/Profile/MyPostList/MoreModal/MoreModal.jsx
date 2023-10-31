import React, { useState } from "react";
import * as S from "./MoreModalStyle";
import removeMyPostAPI from "../../../../API/removeMyPostAPI";
import { useRecoilState } from "recoil";
import { userPostListAtom } from "../../../../Store/Store";

export function Modal({ isMoreModalVisible, onClose, isMyProfile, postId }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const preventPropagation = (e) => e.stopPropagation();

  const handleModalClose = () => {
    onClose(); // 원래 onClose 호출
    setShowConfirm(false); // 상태 초기화
  };

  // 신고하면 alert창 띄우기
  const handleReport = async () => {
    alert("신고되었습니다.");
    onClose(); // 신고 후 모달 닫기
  };

  return (
    isMoreModalVisible && (
      <S.ModalOverlay onClick={handleModalClose}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            onClose={handleModalClose}
            preventPropagation={preventPropagation}
            onReport={handleReport}
            postId={postId}
          />
        ) : (
          <ActionModal
            isMyProfile={isMyProfile}
            setShowConfirm={setShowConfirm}
            preventPropagation={preventPropagation}
          />
        )}
      </S.ModalOverlay>
    )
  );
}

// 수정,삭제 / 신고 구분
function ActionModal({ isMyProfile, setShowConfirm, preventPropagation }) {
  return (
    <S.ModalContainer onClick={preventPropagation}>
      {isMyProfile ? (
        <>
          {/* 게시글 수정 페이지로 이동해야함 */}
          <S.ModalButton>수정하기</S.ModalButton>
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
  onClose,
  onReport,
  preventPropagation,
  postId
}) {
  const [postList, setPostList] = useRecoilState(userPostListAtom);

  // myPost 삭제
  const handleDelete = async () => {
    try {
      const responseMessage = await removeMyPostAPI(postId);
      if (responseMessage === "게시글 삭제 성공") {
        alert("게시물이 삭제되었습니다.");

        // 상태 갱신: 게시물 목록에서 삭제된 게시물 제거
        const updatedPostList = postList.filter((post) => post.id !== postId);
        setPostList(updatedPostList);

        onClose();
      } else {
        alert(responseMessage);
      }
    } catch (error) {
      alert("잘못된 요청입니다. 로그인 정보를 확인하세요.");
    }
  };

  return (
    <S.ConfirmDeleteContainer onClick={preventPropagation}>
      <S.ConfirmMessage>
        {isMyProfile ? "정말 삭제하시겠습니까?" : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={onClose}>아니오</S.ConfirmButton>
        <S.ConfirmButton onClick={isMyProfile ? handleDelete : onReport}>
          예
        </S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}