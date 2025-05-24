import React from "react";
import styled from "styled-components";
import cancelIcon from "../../assets/cancel.png";

const Step5Modal = ({ onClose }) => {
  const handleOverlayClick = (e) => {
    // e.target이 ModalContent가 아닌 경우에만 onClose 호출
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
        <CloseButton onClick={onClose}>
          <img src={cancelIcon} alt="닫기" />
        </CloseButton>
      </ModalContent>
    </Overlay>
  );
};

export default Step5Modal;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const ModalContent = styled.div`
  position: relative;
  width: 41.56vw;
  height: 81.48vh;
  border-radius: 2.5vh;
  background-color: #fcfcfc;
  box-shadow: 0 4px 10px rgba(62, 60, 60, 0.3);
  backdrop-filter: blur(2px);
  padding: 2vh 2vw;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 4.55vh;
  right: 3vw;
  background: none;
  border: none;
  cursor: pointer;

  img {
    width: 5vh;
    height: 5vh;
  }
`;

const ModalTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #363636;
  line-height: 120%;
  letter-spacing: -0.025em;
  margin-top: 7.95vh;
  margin-left: 4vw;
`;

const Instructions = styled.ol`
  font-size: 1.6rem;
  color: #363636;
  margin-top: 4.32vh;
  margin-left: 6vw;
  line-height: 180%;
  font-weight: 500;

  li {
    margin-top: 0.3vh;
  }
`;

const Highlight = styled.span`
  color: #2e65f3;
  font-weight: 500;
`;
