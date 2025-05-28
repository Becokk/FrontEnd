import styled from "styled-components";

export const StyledIntroText = styled.p`
  font-weight: 400;
  font-size: 1.8vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #626474;
  padding-left: 11.67vw;
  padding-top: 8.7vh;
`;

export const StyledMainText = styled.p`
  font-weight: 500;
  font-size: 3vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  padding-left: 11.67vw;
  padding-bottom: 14vh;
`;

export const StyledImage = styled.img`
  width: 59.35vw
  height: auto;
  padding-left: 11.67vw;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeSoftRise 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;

  @keyframes fadeSoftRise {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
