import React from "react";
import detailBecokImage from "../../assets/detailbecok.png";
import styled from "styled-components";

const Step1 = ({ onValidityChange }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onValidityChange(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, [onValidityChange]);
  return (
    <div>
      <StyledIntroText>정밀한 분석으로 최선의 추천을 위해,</StyledIntroText>
      <StyledMainText>당신을 조금 더 알아볼게요.</StyledMainText>
      <StyledImage src={detailBecokImage} alt="detail becok" />
    </div>
  );
};

const StyledIntroText = styled.p`
  font-weight: 400;
  font-size: 1.8vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #626474;
  padding-left: 11.73vw;
  padding-top: 9.26vh;
`;

const StyledMainText = styled.p`
  font-weight: 500;
  font-size: 3vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  padding-left: 11.73vw;
  padding-bottom: 9vh;
`;

export default Step1;

const StyledImage = styled.img`
  width: 50vw;
  height: auto;
  margin-left: 11.73vw;
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
