import React from "react";
import styled, { keyframes } from "styled-components";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/success.png";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const SignupSuccessC = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <BackgroundGradient />
      <BackgroundCircle />
      <TopRightCircle />
      <ContentWrapper>
        <Logo src={LogoImage} alt="logo" />
        <WelcomeTitle>환영합니다!</WelcomeTitle>
        <WelcomeSubTitle>
          앞으로 회원님과 함께하게 되어 정말 기뻐요.
          <br />
          이제부터 비콕과 함께 차곡차곡 비교과 포인트를 모아볼까요?
        </WelcomeSubTitle>
        <LoginButton onClick={() => navigate("/login")}>
          로그인하러 가기{" "}
          <img
            src={require("../../assets/go.png")}
            alt="arrow"
            style={{ width: "1.25rem" }}
          />
        </LoginButton>
      </ContentWrapper>
    </Container>
  );
};

export default SignupSuccessC;

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    135deg,
    rgba(46, 101, 243, 1) 0%,
    rgba(47, 69, 240, 0.88) 19%,
    rgba(72, 72, 247, 0.8) 42%,
    rgba(50, 91, 233, 0.89) 69%,
    rgba(52, 146, 228, 1) 93%
  );
`;

const BackgroundCircle = styled.div`
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 35vw;
  height: 35vw;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(46, 101, 243, 0.1) 0%,
    rgba(134, 239, 248, 0.5) 91%
  );
  filter: blur(100px);
  z-index: 1; // 변경
`;

const TopRightCircle = styled.div`
  position: absolute;
  top: -30%;
  right: -25%;
  width: 47.5vw;
  height: 47.5vw;
  border-radius: 50%;
  background: linear-gradient(
    135deg,
    rgba(240, 119, 228, 1) 3%,
    rgba(46, 101, 243, 0.1) 100%
  );
  opacity: 0.5;
  filter: blur(100px);
  z-index: 1;
`;

const ContentWrapper = styled.div`
  text-align: center;
  z-index: 2;
  animation: ${fadeSlideUp} 0.8s ease-out forwards;
`;

const Logo = styled.img`
  width: 24.79vh;
  margin-bottom: 2rem;
`;

const WelcomeTitle = styled.h1`
  font-weight: 500;
  font-size: 4.5rem; /* 72px */
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  vertical-align: middle;
  color: #f7f9ff;
  margin-bottom: 1.5rem;
  animation: ${fadeSlideUp} 0.8s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 6vw;
    white-space: normal;
  }
`;

const WelcomeSubTitle = styled.p`
  font-weight: 400;
  font-size: 2.25rem; /* 36px */
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #f7f9ff;
  text-align: center;
  vertical-align: middle;
  margin-bottom: 2.5rem;
  animation: ${fadeSlideUp} 0.8s ease-out forwards;
  animation-delay: 0.3s;
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 4.5vw;
  }
`;

const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 1.25rem; /* 24px */
  line-height: 140%;
  letter-spacing: -2.5%;
  text-align: center;
  vertical-align: middle;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  text-decoration-thickness: 0.5px;
  color: #f7f9ff;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;
