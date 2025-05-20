import React from "react";
import styled, { keyframes } from "styled-components";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6 from "./Step6";

const DetailedStep = ({ step, totalSteps, onNext }) => {
  const renderStep = () => {
    switch (step) {
      case 1:
        return <Step1 onNext={onNext} />;
      case 2:
        return <Step2 onNext={onNext} />;
      case 3:
        return <Step3 onNext={onNext} />;
      case 4:
        return <Step4 onNext={onNext} />;
      case 5:
        return <Step5 onNext={onNext} />;
      case 6:
        return <Step6 onNext={onNext} />;
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
      <NextButton onClick={onNext}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
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
  width: 4vw;
  height: 4vw;
  border-radius: 50%;
  background-color: #dfdfdf;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5vw;
  color: #666;
  animation: ${fadeInBlue} 1s 1s forwards;

  svg path {
    animation: ${fadeInIcon} 1s 1s forwards;
  }

  & .arrow {
    font-weight: bold;
  }
`;
