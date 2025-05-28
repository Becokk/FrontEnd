import styled from "styled-components";

export const Container = styled.div`
  margin-top: 20vh;
  padding-left: 3.51vw;
`;

export const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

export const DropdownButton = styled.button`
  border: 1px solid #cdcfd8;
  background-color: #f7f9ff;
  border-radius: 1.04vw; /* 20px / 1920 */
  padding: 0.47vh 0.94vw; /* 9px top/bottom, 18px right, 26px left converted to approx % */
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5vw;

  &:hover {
    background-color: #e1e7fb;
  }
`;

export const ArrowImage = styled.img`
  width: 1vw;
  height: auto;
`;

export const DropdownLabel = styled.span`
  font-weight: 500;
  font-size: clamp(1rem, 1.375rem, 1.5rem);
  line-height: 130%;
  letter-spacing: -0.025em; // % 대신 em 단위 사용
  color: #5d626f;
`;

export const DropdownMenu = styled.div`
  top: 100%;
  left: 0;
  position: absolute;
  margin-top: 0.7vh;
  background-color: #f0f2f8;
  border-radius: 1.04vw;
  z-index: 10;
  width: 10.5vw;
  border: 1px solid #e1e7fb;
`;

export const DropdownItem = styled.div`
  padding: 0.6vh 1vw;
  font-size: 1.04vw;
  color: ${({ $active }) => ($active ? "rgb(52, 102, 227)" : "#5D626F")};
  font-weight: 400;
  background-color: ${({ $active }) => ($active ? "#f7f9ff" : "#ffffff")};
  cursor: pointer;
  letter-spacing: -2.5%;
  line-height: 130%;

  &:hover {
    background-color: rgb(233, 237, 250);
  }
  &:first-child {
    border-top-left-radius: 1.04vw;
    border-top-right-radius: 1.04vw;
  }

  &:last-child {
    border-bottom-left-radius: 1.04vw;
    border-bottom-right-radius: 1.04vw;
  }
`;

export const DropdownWrapper = styled.div`
  position: relative;
`;
