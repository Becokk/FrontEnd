import styled from "styled-components";

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(10, 10, 10, 0.3);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 9999;
`;

export const ModalContent = styled.div`
  width: 36.46vw; /* 700px / 1920 */
  height: 37.04vh; /* 400px / 1080 */
  background-color: #ffffff;
  border-radius: 1.56vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

export const ModalBody = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalMessage = styled.div`
  font-size: 2.3vw; /* 56px / 1920 */
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #060606;
  font-weight: 400;
  margin-top: -1vh;
`;

export const IconWrapper = styled.div`
  margin-top: 5vh;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0;
  //   margin-top: 1vh;
  width: 100%;
  padding: 0;
  box-sizing: border-box;
`;

export const CancelButton = styled.button`
  width: 50%;
  height: 9.26vh;
  background-color: #f1f1f4;
  color: #b4b4b4;
  font-size: 1.15vw;
  font-weight: 600;
  border: none;
  border-left: 1.61px solid #848484;
  border-top: 1.61px solid #848484;
  border-right: none;
  border-bottom: none;
  border-radius: 0 0 0 1.56vw;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: rgba(46, 101, 243, 0.1);
    color: #2e65f3;
  }
`;

export const ConfirmButton = styled.button`
  width: 50%;
  height: 9.26vh;
  background-color: #2e65f3;
  color: #ffffff;
  font-size: 1.15vw;
  font-weight: 600;
  border: none;
  border-radius: 0 0 1.56vw 0;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;

  &:hover {
    background-color: #1f4fc1;
  }
`;
