import React from "react";
import {
  Overlay,
  ModalContent,
  CloseButton,
  ModalTitle,
  Instructions,
  Highlight,
  Image,
} from "../../styles/DetailedInput/Step5Modal.style";
import cancelIcon from "../../assets/cancel.png";
import programImage from "../../assets/program.png";

const Step5Modal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      onClose();
    }
  };
  return (
    <Overlay id="overlay" onClick={handleOverlayClick}>
      <ModalContent>
        <ModalTitle>
          참여한 비교과 프로그램,
          <br />
          이렇게 가져올 수 있어요!
        </ModalTitle>
        <Instructions>
          <li>
            한성대 <Highlight>스마트 자기관리시스템</Highlight>에 로그인
          </li>
          <li>마이페이지 → 포트폴리오 클릭</li>
          <li>
            나타난 <Highlight>‘이수 프로그램’ 목록</Highlight>을 드래그 해 복사
          </li>
          <li>이 창에 그대로 붙여넣기</li>
        </Instructions>
        <Image src={programImage} alt="program example" />
        <CloseButton onClick={onClose}>
          <img src={cancelIcon} alt="닫기" />
        </CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default Step5Modal;
