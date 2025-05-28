import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
`;

export const TitleText = styled.div`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  text-align: center;
  margin-top: 15vh;
  margin-bottom: 24.63vh;
`;

export const PointWrapper = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 1.25vw;
`;

export const NumberInput = styled.input`
  width: 13vw;
  font-size: 6rem;
  font-weight: 400;
  color: #060606;
  text-align: right;
  border: none;
  outline: none;
  background: transparent;

  &::placeholder {
    color: #b1b2ba;
    text-decoration: underline;
  }
`;

export const LabelText = styled.span`
  font-weight: 400;
  font-size: 4rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  color: #626474;
  align-self: flex-end;
`;
