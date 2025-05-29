import React, { useState, useEffect } from "react";
import {
  Container,
  TitleText,
  PointWrapper,
  NumberInput,
  LabelText,
} from "../../styles/DetailedInput/Step3.style";

const Step3 = ({ onValidityChange, onChange }) => {
  const [point, setPoint] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPoint(value);
  };

  useEffect(() => {
    if (typeof onValidityChange === "function") {
      onValidityChange(point !== "");
    }
    if (typeof onChange === "function" && point !== "") {
      onChange(Number(point));
    }
  }, [point, onValidityChange, onChange]);

  return (
    <Container>
      <TitleText>현재 비교과 포인트를 입력해주세요.</TitleText>
      <PointWrapper>
        <NumberInput
          type="text"
          inputMode="numeric"
          value={point}
          onChange={handleChange}
          placeholder="345"
        />
        <LabelText>P</LabelText>
      </PointWrapper>
    </Container>
  );
};

export default Step3;
