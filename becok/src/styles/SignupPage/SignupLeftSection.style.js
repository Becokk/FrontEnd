import styled, { createGlobalStyle } from "styled-components";

export const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const Title = styled.h2`
  font-weight: 500;
  font-size: 3rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  text-align: left;
  white-space: nowrap;
  margin-top: 5vh;
  width: 100%;

  opacity: 0;
  animation: fadeSlideUp 0.6s ease-out forwards;
  @media (max-width: 768px) {
    font-size: 1.8rem;
    white-space: normal;
  }
`;

export const Subtitle = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 1.375rem;
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #626474;
  vertical-align: middle;
  text-align: left;
  padding-bottom: 8vh;

  opacity: 0;
  animation: fadeSlideUp 0.8s ease-out forwards;
  animation-delay: 0.2s;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const Character = styled.img`
  width: 23.18vw;
  align-self: center;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

export const BottomLine = styled.img`
  width: calc(30vw + 117px);
  height: auto;
  margin-top: 2vh;
`;

export const GlobalStyle = createGlobalStyle`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Grop1 = styled.div`
  padding-right: 10vw;
`;
