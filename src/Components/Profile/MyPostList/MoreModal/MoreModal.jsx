import React, { useState } from "react";
import * as S from "./MoreModalStyle";
import reportCommentAPI from "../../../../API/reportCommentAPI";

export function Modal({
  isMoreModalVisible,
  onClose,
  isMyProfile,
  commentId,
  username,
  onReport
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const preventPropagation = (e) => e.stopPropagation();

  const handleReport = async () => {
    alert("신고되었습니다.");
    onClose(); // 신고 후 모달 닫기
  };
  // 필요하다면 여기에 수정하기, 삭제하기에 대한 로직도 추가

  return (
    isMoreModalVisible && (
      <S.ModalOverlay onClick={onClose}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            onClose={onClose}
            preventPropagation={preventPropagation}
            onReport={handleReport}
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

function ActionModal({ isMyProfile, setShowConfirm, preventPropagation }) {
  return (
    <S.ModalContainer onClick={preventPropagation}>
      {isMyProfile ? (
        <>
          <S.ModalButton onClick={() => setShowConfirm(true)}>
            수정하기
          </S.ModalButton>
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

function ConfirmModal({ isMyProfile, onClose, onReport, preventPropagation }) {
  return (
    <S.ConfirmDeleteContainer onClick={preventPropagation}>
      <S.ConfirmMessage>
        {isMyProfile ? "정말 삭제하시겠습니까?" : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={onClose}>아니오</S.ConfirmButton>
        <S.ConfirmButton onClick={isMyProfile ? onClose : onReport}>
          예
        </S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}
