import React from "react";
import { alertStateAtom } from "../../../Store/Store";
import { useRecoilState } from "recoil";
import * as S from "./AlertStyle";
import { useNavigate } from "react-router-dom";

function Alert() {
  const [alert, setAlert] = useRecoilState(alertStateAtom);
  const navigate = useNavigate();

  const closeModal = (e) => {
    e.stopPropagation();
    setAlert({ ...alert, message: "", isOpen: false, navigation: "" });
    if (alert.navigation !== "") {
      navigate(alert.navigation);
    }
  };

  return (
    alert.isOpen && (
      <S.PostDetailBackground
        onClick={(e) => {
          closeModal(e);
        }}>
        <S.ConfirmDeleteContainer onClick={(e) => e.stopPropagation()}>
          <S.ConfirmMessage>{alert.message}</S.ConfirmMessage>
          <S.ConfirmContainer>
            <S.ConfirmButton
              onClick={(e) => {
                closeModal(e);
              }}>
              확인
            </S.ConfirmButton>
          </S.ConfirmContainer>
        </S.ConfirmDeleteContainer>
      </S.PostDetailBackground>
    )
  );
}

export default Alert;
