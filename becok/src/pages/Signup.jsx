import React from "react";
import styled from "styled-components";
import SignupLeftSection from "../components/SignupPage/SignupLeftSection";
import SignupRightSection from "../components/SignupPage/SignupRightSection";

const Signup = () => {
  return (
    <SignupContainer>
      <SignupLeftSection />
      <SignupRightSection />
    </SignupContainer>
  );
};

export default Signup;

const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 186px;
  width: 100%;
  height: 100%;
`;
