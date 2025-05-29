import React from "react";
import styled from "styled-components";
import LoginLeftSection from "../components/LoginPage/LoginLeftSection";
import LoginRightSection from "../components/LoginPage/LoginRightSection";

const LoginPage = () => {
  return (
    <LoginContainer>
      <LoginLeftSection />
      <LoginRightSection />
    </LoginContainer>
  );
};

export default LoginPage;

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 9.69vw;
  background: #f7f9ff;
`;
