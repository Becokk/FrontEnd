import React, { useState, useEffect } from "react";

import {
  Container,
  Title,
  OptionContainer,
  OptionBox,
} from "../../styles/DetailedInput/Step6No.style";

const options = ["비교과 프로그램 참여가  처음이에요"];

const Step6No = ({ onValidityChange, onChange }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    const isValid = selectedIdx !== null;
    if (typeof onValidityChange === "function") {
      onValidityChange(isValid);
    }
    if (typeof onChange === "function" && isValid) {
      onChange("FIRST");
    }
  }, [selectedIdx]);

  return (
    <Container>
      <Title>비교과 프로그램이 처음이에요.</Title>
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

export default Step6No;
