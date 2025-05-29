import React from "react";
import {
  TitleText,
  GradeSemesterWrapper,
  GradeBox,
  SemesterBox,
  NumberInput,
  Text,
} from "../../styles/DetailedInput/Step2.style";

const Step2 = ({ onValidityChange, onChange }) => {
  const [grade, setGrade] = React.useState("");
  const [semester, setSemester] = React.useState("");

  React.useEffect(() => {
    const isValid = /^[1-4]$/.test(grade) && /^[1-2]$/.test(semester);
    setTimeout(() => {
      if (typeof onValidityChange === "function") {
        onValidityChange(isValid);
      }
      if (isValid && typeof onChange === "function") {
        onChange({ grade: Number(grade), semester: Number(semester) });
      }
    }, 0);
  }, [grade, semester, onValidityChange, onChange]);

  return (
    <>
      <TitleText>현재 학년과 학기를 입력해주세요.</TitleText>
      <GradeSemesterWrapper>
        <GradeBox>
          <NumberInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="1"
            value={grade}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              if (/^[1-4]$/.test(value) || value === "") {
                setGrade(value);
              }
            }}
          />
          <Text>학년</Text>
        </GradeBox>
        <SemesterBox>
          <NumberInput
            type="text"
            inputMode="numeric"
            pattern="[0-9]*"
            placeholder="2"
            value={semester}
            onChange={(e) => {
              const value = e.target.value.replace(/[^0-9]/g, "");
              if (/^[1-2]$/.test(value) || value === "") {
                setSemester(value);
              }
            }}
          />
          <Text>학기</Text>
        </SemesterBox>
      </GradeSemesterWrapper>
    </>
  );
};

export default Step2;
