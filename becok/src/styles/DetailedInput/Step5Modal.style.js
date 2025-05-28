import styled from "styled-components";

export const Overlay = styled.div`
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

export const ModalContent = styled.div`
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

export const CloseButton = styled.button`
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

export const ModalTitle = styled.h2`
  font-size: 3rem;
  font-weight: 700;
  color: #363636;
  line-height: 120%;
  letter-spacing: -0.025em;
  margin-top: 7.95vh;
  margin-left: 4vw;
`;

export const Instructions = styled.ol`
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

export const Highlight = styled.span`
  color: #2e65f3;
  font-weight: 500;
`;

export const Image = styled.img`
  display: block;
  width: 28vw;
  margin: 4vh auto 0;
  border-radius: 1.5vh;
`;
