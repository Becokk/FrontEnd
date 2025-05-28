import React from "react";
import becokLogo from "../../assets/becok.png";
import {
  LeftSection,
  LogoTitleWrapper,
  Logo,
  Title,
  Subtitle,
} from "../../styles/LoginPage/LoginLeftSection.style";

const LoginLeftSection = () => {
  return (
    <LeftSection>
      <LogoTitleWrapper>
        <Logo src={becokLogo} alt="becok 로고" />
        <Title>캠퍼스 라이프를 더 스마트하게</Title>
      </LogoTitleWrapper>
      <Subtitle>
        비교과와 공모전을 한번에 잡고 싶으신가요?
        <br />그 고민, 비콕이 해결해 드릴게요!
      </Subtitle>
    </LeftSection>
  );
};

export default LoginLeftSection;
