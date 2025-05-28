import React, { useState, useEffect } from "react";
import styled from "styled-components";

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;
  color: #363636;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  margin-top: 14vh;
`;

const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.85vh;
  margin-top: 24.44vh;
`;

const OptionBox = styled.div`
  width: 714px;
  height: 10.09vh;
  border-radius: 20px;
  border: 3px solid ${({ selected }) => (selected ? "#2E65F3" : "#dfdfdf")};
  background-color: ${({ selected }) =>
    selected ? "rgba(46, 101, 243, 0.1)" : "transparent"};
  box-shadow: ${({ selected }) =>
    selected ? "0 4px 20px rgba(46, 101, 243, 0.25)" : "none"};
  font-size: ${({ selected }) => (selected ? "1.75rem" : "1.5rem")};
  font-weight: ${({ selected }) => (selected ? 500 : 400)};
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  color: ${({ selected }) => (selected ? "#2E65F3" : "#b1b2ba")};
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  cursor: pointer;
`;
