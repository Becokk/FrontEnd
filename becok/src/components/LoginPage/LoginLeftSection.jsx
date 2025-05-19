import React from "react";
import styled from "styled-components";
import becokLogo from "../../assets/becok.png";

const LoginLeftSection = () => {
  return (
    <LeftSection>
      <LogoTitleWrapper>
        <Logo src={becokLogo} alt="becok 로고" />
        <Title>캠퍼스 라이프를 더 스마트하게</Title>
      </LogoTitleWrapper>
      <Subtitle>
        비교과 포인트를 빠르고 스마트하게 모으고 싶으신가요?
        <br />
        비콕이 그 고민을 해결해 드릴게요!
      </Subtitle>
    </LeftSection>
  );
};

export default LoginLeftSection;

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 29.17vw;
  height: 21.15vh;
  margin-top: 27.78vh; /* 300px / 1080px */
  // margin-left: 11.15vw; /* 214px / 1920px */
  margin-bottom: 34.63vh; /* 374px / 1080px */
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

const LogoTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;

const Logo = styled.img`
  width: 19.58vw;
  min-width: 200px;
  max-width: 376px;
  height: auto;
`;

const Title = styled.h1`
  font-weight: 500;
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  line-height: 150%;
  letter-spacing: -0.025em;
  color: #626474;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: clamp(1.2rem, 1.25vw, 1.5rem);
  font-weight: 500;
  line-height: 140%;
  letter-spacing: -0.025em;
  color: #626474;
  text-align: center;
  margin-top: 0.5rem;
  max-width: 90%;
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
