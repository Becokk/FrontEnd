import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "../../assets/logoutModal.png";
import {
  ModalWrapper,
  ModalContent,
  ModalBody,
  ModalMessage,
  IconWrapper,
  ButtonContainer,
  CancelButton,
  ConfirmButton,
} from "../../styles/Sidebar/LogoutModal.style";

const LogoutModal = ({ onClose }) => {
  const navigate = useNavigate();

  const handleClickOutside = (e) => {
    if (e.target.id === "modalWrapper") {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  return (
    <ModalWrapper id="modalWrapper" onClick={handleClickOutside}>
      <ModalContent>
        <ModalBody>
          <ModalMessage>정말 로그아웃 하시겠습니까?</ModalMessage>
          <IconWrapper>
            <img src={LogoutIcon} alt="logout icon" style={{ width: "4vw" }} />
          </IconWrapper>
        </ModalBody>
        <ButtonContainer>
          <CancelButton onClick={onClose}>돌아가기</CancelButton>
          <ConfirmButton
            onClick={() => {
              localStorage.removeItem("memberId");
              localStorage.removeItem("email");
              navigate("/");
            }}
          >
            로그아웃
          </ConfirmButton>
        </ButtonContainer>
      </ModalContent>
    </ModalWrapper>
  );
};

export default LogoutModal;
