import React, { useState } from "react";
import * as S from "./MoreModalStyle";

export function Modal({ isMoreModalVisible, onClose, isMyProfile }) {
  const [showConfirm, setShowConfirm] = useState(false);
  const preventPropagation = (e) => e.stopPropagation();

  return (
    isMoreModalVisible && (
      <S.ModalOverlay onClick={onClose}>
        {showConfirm ? (
          <ConfirmModal
            isMyProfile={isMyProfile}
            onClose={onClose}
            preventPropagation={preventPropagation}
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

function ConfirmModal({ isMyProfile, onClose, preventPropagation }) {
  return (
    <S.ConfirmDeleteContainer onClick={preventPropagation}>
      <S.ConfirmMessage>
        {isMyProfile ? "정말 삭제하시겠습니까?" : "정말 신고하시겠습니까?"}
      </S.ConfirmMessage>
      <S.ConfirmContainer>
        <S.ConfirmButton onClick={onClose}>아니오</S.ConfirmButton>
        <S.ConfirmButton>예</S.ConfirmButton>
      </S.ConfirmContainer>
    </S.ConfirmDeleteContainer>
  );
}
