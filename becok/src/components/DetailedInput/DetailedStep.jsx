import React from "react";
import {
  StepContainer,
  PaginationWrapper,
  PaginationDot,
  NextButton,
  ResultText,
} from "../../styles/DetailedInput/DetailedStep.style";
import Step1 from "./Step1";
import Step2 from "./Step2";
import Step3 from "./Step3";
import Step4 from "./Step4";
import Step5 from "./Step5";
import Step6Yes from "./Step6Yes";
import Step6No from "./Step6No";
import { usePostUserProfile } from "../../hooks/mutation/UserProfile";
import useRecommendationPostMutation from "../../hooks/mutation/RecommendationPostMutation";

const DetailedStep = ({
  step,
  totalSteps,
  onNext,
  onBack,
  isNextEnabled,
  onValidityChange,
}) => {
  const [hasExperience, setHasExperience] = React.useState(null);
  const [formData, setFormData] = React.useState({
    grade: null,
    semester: null,
    programPoint: null,
    interests: [],
    joinedPrograms: "",
    recommendType: "",
  });

  const postProfileMutation = usePostUserProfile();
  const postRecommendationMutation = useRecommendationPostMutation();

  const updateFormData = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const handleNext = () => {
    if (step === 5) {
      setHasExperience(true);
    }
    onNext();

    if (step === 6) {
      const memberId = localStorage.getItem("memberId");

      const payload = {
        grade: formData.grade,
        semester: formData.semester,
        programPoint: formData.programPoint,
        interests: formData.interests.map((i) => i.toUpperCase()),
        joinedPrograms: formData.joinedPrograms.trim(),
        recommendType: formData.recommendType.toUpperCase(),
      };

      console.log("최종 제출 데이터:", payload);
      postProfileMutation.mutate(payload, {
        onSuccess: () => {
          postRecommendationMutation.mutate({ memberId });
        },
      });
    }
  };

  const renderStep = () => {
    const props = { onNext: handleNext, onValidityChange };
    switch (step) {
      case 1:
        return (
          <Step1 {...props} onChange={(v) => updateFormData("grade", v)} />
        );
      case 2:
        return (
          <Step2
            {...props}
            onChange={(v) => {
              updateFormData("grade", v.grade);
              updateFormData("semester", v.semester);
            }}
          />
        );
      case 3:
        return (
          <Step3
            {...props}
            onChange={(v) => updateFormData("programPoint", v)}
          />
        );
      case 4:
        return (
          <Step4 {...props} onChange={(v) => updateFormData("interests", v)} />
        );
      case 5:
        return (
          <Step5
            onNext={handleNext}
            onNoHistory={() => {
              setHasExperience(false);
              onNext();
            }}
            onValidityChange={onValidityChange}
            onChange={(v) => updateFormData("joinedPrograms", v)}
          />
        );
      case 6:
        return hasExperience ? (
          <Step6Yes
            {...props}
            onChange={(v) => updateFormData("recommendType", v)}
          />
        ) : (
          <Step6No
            {...props}
            onChange={(v) => updateFormData("recommendType", v)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <StepContainer>
      {renderStep()}
      {step >= 2 && (
        <NextButton
          onClick={onBack}
          style={{ left: "22%", right: "auto", transform: "rotate(180deg)" }}
        >
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
        </NextButton>
      )}
      <PaginationWrapper>
        {Array.from({ length: totalSteps }).map((_, idx) => (
          <PaginationDot key={idx} active={step === idx + 1} />
        ))}
      </PaginationWrapper>

      <NextButton onClick={handleNext} disabled={!isNextEnabled} step={step}>
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
