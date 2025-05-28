import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const Title = styled.h2`
  font-weight: 600;
  font-size: 2.5rem;
  color: #363636;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  margin-top: 14vh;
`;

export const OptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.85vh;
  margin-top: 24.44vh;
`;

export const OptionBox = styled.div`
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
