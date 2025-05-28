import styled from "styled-components";

export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6.85vh;

  opacity: 0;
  animation: fadeIn 1s ease forwards;
  @keyframes fadeIn {
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

export const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5vh;
`;

export const Logo = styled.img`
  width: 19.58vw;
  height: auto;
  min-width: 200px;
  max-width: 376px;
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #363636;
  text-align: center;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.025em;
  color: #626474;
  text-align: center;
  margin-top: 0.56vh;
  // max-width: 90%;

  opacity: 0;
  animation: fadeSlideUp 0.8s ease-out forwards;
  animation-delay: 0.3s;
  animation-fill-mode: both;
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
