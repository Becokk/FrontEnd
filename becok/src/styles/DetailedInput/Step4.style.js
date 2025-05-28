import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15vh;
`;

export const TitleText = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  color: #363636;
  margin-bottom: 1.11vh;
`;

export const SubtitleText = styled.p`
  font-weight: 400;
  font-size: 1.5rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  text-align: center;
  color: #898eae;

  span {
    font-weight: 500;
    color: #6a6f90;
  }
`;

export const KeywordGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5vh 1.39vw; // 수평, 수직 간격 조정
  margin-top: 11vh;
  width: 64.4vw;
`;

export const KeywordRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.5vh;
  gap: 1.25vw;
`;

export const KeywordWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

export const KeywordButton = styled.button`
  font-size: 1.5rem;
  font-weight: 500;
  color: ${(props) => (props.selected ? "#2E65F3" : "#6a6f90")};
  padding: 0.94vh 1.94vw;
  border-radius: 100px;
  border: ${(props) =>
    props.selected ? "2px solid #2E65F3" : "1px solid #6a6f90"};
  background-color: ${(props) =>
    props.selected ? "rgba(0, 102, 254, 0.2)" : "transparent"};
  cursor: pointer;
  min-width: fit-content;
  height: 7.69vh;
  box-sizing: border-box;
  transition: all 0.3s ease;
`;

export const OrderBadge = styled.span`
  position: absolute;
  top: -0.8vh;
  right: -0.8vw;
  background-color: #ffffff;
  color: #2e65f3;
  font-size: 0.8rem;
  font-weight: 600;
  border: 2px solid #2e65f3;
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1);
`;
