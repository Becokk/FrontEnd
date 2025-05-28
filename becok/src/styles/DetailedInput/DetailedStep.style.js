import styled, { keyframes } from "styled-components";

export const StepContainer = styled.div``;

export const PaginationWrapper = styled.div`
  position: absolute;
  left: 53%;
  bottom: 5%;
  display: flex;
  gap: 8px;
`;

export const PaginationDot = styled.span.withConfig({
  shouldForwardProp: (prop) => prop !== "active",
})`
  width: ${(props) => (props.active ? "2.34vw" : "0.78vw")};
  height: 0.78vw;
  border-radius: 100px;
  background-color: ${(props) => (props.active ? "#5880E5" : "#ccc")};
  transition: all 0.3s ease;
`;

export const fadeInBlue = keyframes`
  to {
    background-color: #2E65F3;
  }
`;

export const fadeInIcon = keyframes`
  to {
    stroke: #F1F1F1;
  }
`;

export const NextButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 15%;
  width: ${(props) => (props.step === 6 ? "15vw" : "5.2vw")};
  height: 5.2vw;
  border-radius: 5.2vw;
  background-color: #dfdfdf;
  stroke: #666;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5vw;
  font-size: 1.5vw;
  color: #666;
  transition: all 0.3s ease;
  box-shadow: ${(props) =>
    props.step === 6 ? "0 0.21vw 0.52vw rgba(46, 101, 243, 0.2)" : "none"};
  background-color: ${(props) => (props.step === 6 ? "#2E65F3" : "#dfdfdf")};

  &:not(:disabled) {
    animation: ${fadeInBlue} 1s forwards;
  }

  &:not(:disabled) svg path {
    animation: ${fadeInIcon} 1s forwards;
  }

  &:disabled {
    cursor: not-allowed;
    background-color: #dfdfdf;
  }
`;

export const ResultText = styled.span`
  font-weight: 600;
  font-size: 2.08vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #f1f1f1;
  text-align: center;
  vertical-align: middle;
  margin-right: 0.4vw;
`;
