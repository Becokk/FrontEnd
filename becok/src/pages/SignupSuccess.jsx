import React from "react";
import styled from "styled-components";
import SignupSuccessC from "../components/SignupSeccess/SignupSuccessC";

const SignupSuccess = () => {
  return (
    <Container>
      <SignupSuccessC />
    </Container>
  );
};

export default SignupSuccess;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
`;
