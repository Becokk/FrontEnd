import React from "react";

import detailBecokImage from "../../assets/detailbecok.png";
import {
  StyledIntroText,
  StyledMainText,
  StyledImage,
} from "../../styles/DetailedInput/Step1.style";

const Step1 = ({ onValidityChange, onChange }) => {
  React.useEffect(() => {
    const timer = setTimeout(() => {
      onValidityChange(true);
      onChange(1);
    }, 1000);
    return () => clearTimeout(timer);
  }, [onValidityChange, onChange]);
  return (
    <div>
      <StyledIntroText>정밀한 분석으로 최선의 추천을 위해,</StyledIntroText>
      <StyledMainText>당신을 조금 더 알아볼게요.</StyledMainText>
      <StyledImage src={detailBecokImage} alt="detail becok" />
    </div>
  );
};

export default Step1;
