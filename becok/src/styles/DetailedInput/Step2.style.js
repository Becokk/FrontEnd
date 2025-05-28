import styled from "styled-components";

export const TitleText = styled.div`
  font-size: 2.5rem;
  font-weight: 500;
  color: #363636;
  text-align: center;
  padding-top: 15vh;
  margin-bottom: 26.67vh;
  line-height: 150%;
  letter-spacing: -2.5%;
`;

export const GradeSemesterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 11.61vw;
`;

export const GradeBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

export const SemesterBox = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

export const Text = styled.span`
  font-size: 4rem; /* 64px / 1920 */
  font-weight: 400;
  color: #626474;
  line-height: 130%;
  letter-spacing: -2.5%;
`;

export const NumberInput = styled.input`
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
