import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Step3 = ({ onValidityChange }) => {
  const [point, setPoint] = useState("");

  const handleChange = (e) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    setPoint(value);
  };

  useEffect(() => {
    onValidityChange && onValidityChange(point !== "");
  }, [point, onValidityChange]);

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

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

const TitleText = styled.div`
  font-family: Pretendard;
  font-weight: 400;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  text-align: center;
  margin-top: 19.07vh;
  margin-bottom: 24.63vh;
`;

const PointWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

const NumberInput = styled.input`
  width: 9.8vw;
  font-size: 6rem;
  font-weight: 400;
  color: #060606;
  text-align: right;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #b4b4b4;
  }

  &:placeholder-shown {
    border-bottom: 2px solid #c4c4c4;
  }
`;

const LabelText = styled.span`
  font-weight: 400;
  font-size: 4rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  color: #626474;
  align-self: flex-end;
`;
