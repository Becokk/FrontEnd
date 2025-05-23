import React from "react";
import styled from "styled-components";
import SignupLeftSection from "../components/SignupPage/SignupLeftSection";
import SignupRightSection from "../components/SignupPage/SignupRightSection";
import LogoImage from "../assets/becok.png";

const Signup = () => {
  return (
    <>
      <Logo src={LogoImage} alt="becok 로고" />
      <SignupContainer>
        <SignupLeftSection />
        <SignupRightSection />
      </SignupContainer>
    </>
  );
};

export default Signup;

const Logo = styled.img`
  position: absolute;
  top: 3vh;
  left: 3vw;
  width: 8vw;
`;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;
  width: 100%;
  height: 100%;
`;
