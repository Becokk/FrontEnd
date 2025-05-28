import React, { useState, useEffect } from "react";
import {
  Container,
  Title,
  OptionContainer,
  OptionBox,
} from "../../styles/DetailedInput/Step6Yes.style";

const options = [
  "상대적으로 부족한 역량의 프로그램을 추천해주세요",
  "주로 참여한 역량의 프로그램을 추천해주세요",
];

const Step6Yes = ({ onValidityChange, onChange }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  const recommendTypes = ["LACKING", "EXPERIENCED"];

  useEffect(() => {
    const isValid = selectedIdx !== null;
    if (isValid) {
      if (typeof onChange === "function") {
        onChange(recommendTypes[selectedIdx]);
      }
    }
    if (typeof onValidityChange === "function") {
      onValidityChange(isValid);
    }
  }, [selectedIdx]);

  return (
    <Container>
      <Title>비콕이 회원님의 선택에 맞춰 추천해드릴게요.</Title>
      <OptionContainer>
        {options.map((option, idx) => (
          <OptionBox
            key={option}
            selected={selectedIdx === idx}
            onClick={() => setSelectedIdx(idx)}
          >
            {option}
          </OptionBox>
        ))}
      </OptionContainer>
    </Container>
  );
};

export default Step6Yes;
