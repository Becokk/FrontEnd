import React from "react";
import styled from "styled-components";

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
  }, [grade, semester]);

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

const TitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: #363636;
  text-align: center;
  padding-top: 15vh;
  margin-bottom: 26.67vh;
  line-height: 150%;
  letter-spacing: -2.5%;
`;

const GradeSemesterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.61vw;
`;

const GradeBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

const SemesterBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

const Text = styled.span`
  font-size: 4rem; /* 64px / 1920 */
  font-weight: 400;
  color: #626474;
  line-height: 130%;
  letter-spacing: -2.5%;
`;

const NumberInput = styled.input`
  width: 4vw;
  font-size: 6rem;
  font-weight: 400;
  color: #060606;
  border: none;
  text-align: center;
  background: transparent;
  outline: none;

  &::placeholder {
    color: #b1b2ba;
  }

  &:placeholder-shown {
    border-bottom: 2px solid #c4c4c4;
  }
`;

export default Step2;
