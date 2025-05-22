import React from "react";
import styled, { keyframes } from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const DetailedStep = ({
  step,
  totalSteps,
  onNext,
  isNextEnabled,
  onValidityChange,
}) => {
  const renderStep = () => {
    const props = { onNext, onValidityChange };
    switch (step) {
      case 1:
        return <Step1 {...props} />;
      case 2:
        return <Step2 {...props} />;
      case 3:
        return <Step3 {...props} />;
      case 4:
        return <Step4 {...props} />;
      case 5:
        return <Step5 {...props} />;
      case 6:
        return <Step6 {...props} />;
      default:
        return null;
    }
  };

  return (
    <StepContainer>
      {renderStep()}

      {/* Pagination Dots */}
      <PaginationWrapper>
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <PaginationDot key={idx} active={step === idx + 1} />
        ))}
      </PaginationWrapper>

      {/* Next Button */}
      <NextButton onClick={onNext} disabled={!isNextEnabled} step={step}>
        {step === 6 ? (
          <>
            <ResultText>결과보기</ResultText>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
            >
              <path
                d="M8 5l8 7-8 7"
                stroke="#fff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M8 5l8 7-8 7"
              stroke="#666"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </NextButton>
    </StepContainer>
  );
};

export default DetailedStep;

const StepContainer = styled.div`
  //   display: flex;
  //   flex-direction: column;
  //   align-items: center;
  //   height: 100%;
  //   position: relative;
`;

const PaginationWrapper = styled.div`
  position: absolute;
  left: 53%;
  bottom: 5%;
  display: flex;
  gap: 8px;
`;

const PaginationDot = styled.span`
  width: ${(props) => (props.active ? "2.34vw" : "0.78vw")};
  height: 0.78vw;
  border-radius: 100px;
  background-color: ${(props) => (props.active ? "#5880E5" : "#ccc")};
  transition: all 0.3s ease;
`;

const fadeInBlue = keyframes`
  to {
    background-color: #2E65F3;
  }
`;

const fadeInIcon = keyframes`
  to {
    stroke: #F1F1F1;
  }
`;

const NextButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 15%;
  width: ${(props) => (props.step === 6 ? "15.3vw" : "5.2vw")};
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

const ResultText = styled.span`
  font-weight: 600;
  font-size: 2.08vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #f1f1f1;
  text-align: center;
  vertical-align: middle;
  margin-right: 0.4vw;
`;
