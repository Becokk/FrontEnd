import React, { useState, useEffect } from "react";
import styled from "styled-components";

const options = [
  "상대적으로 부족한 역량의 프로그램을 추천해주세요",
  "비교과 프로그램 참여가 처음이에요",
  "주로 참여한 역량의 프로그램을 추천해주세요",
];

const Step6 = ({ onValidityChange }) => {
  const [selectedIdx, setSelectedIdx] = useState(null);

  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(selectedIdx !== null);
    }
  }, [selectedIdx, onValidityChange]);

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

export default Step6;

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
  margin-top: 8.33vh;
`;

const OptionBox = styled.div`
  width: 44.79vw;
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
