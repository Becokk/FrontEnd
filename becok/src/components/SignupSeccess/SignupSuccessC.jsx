import {
  Container,
  BackgroundGradient,
  BackgroundCircle,
  TopRightCircle,
  ContentWrapper,
  Logo,
  WelcomeTitle,
  WelcomeSubTitle,
  LoginButton,
  ModalBackground,
} from "../../styles/SignupSuccessC/SignupSuccessC.style";
import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import LogoImage from "../../assets/success.png";

const SignupSuccessC = () => {
  const navigate = useNavigate();
  const contentRef = useRef(null);

  const handleClickOutside = (e) => {
    if (contentRef.current && !contentRef.current.contains(e.target)) {
      navigate("/login");
    }
  };

  return (
    <ModalBackground onClick={handleClickOutside}>
      <Container>
        <BackgroundGradient />
        <BackgroundCircle />
        <TopRightCircle />
        <ContentWrapper ref={contentRef}>
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
    </ModalBackground>
  );
};

export default SignupSuccessC;
