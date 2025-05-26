import React from "react";
import styled from "styled-components";
import DropdownArrow from "../../assets/down.png";

const Dropdown = ({ setCategory }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selected, setSelected] = React.useState("비교과 프로그램");

  return (
    <Container>
      <CategoryFilter>
        <DropdownWrapper>
          <DropdownButton onClick={() => setIsOpen(!isOpen)}>
            <DropdownLabel>{selected}</DropdownLabel>
            <ArrowImage src={DropdownArrow} alt="dropdown arrow" />
          </DropdownButton>
          {isOpen && (
            <DropdownMenu>
              <DropdownItem
                $active={selected === "비교과 프로그램"}
                onClick={() => {
                  setSelected("비교과 프로그램");
                  setCategory("비교과 프로그램");
                  setIsOpen(false);
                }}
              >
                비교과 프로그램
              </DropdownItem>
              <DropdownItem
                $active={selected === "공모전"}
                onClick={() => {
                  setSelected("공모전");
                  setCategory("공모전");
                  setIsOpen(false);
                }}
              >
                공모전
              </DropdownItem>
            </DropdownMenu>
          )}
        </DropdownWrapper>
      </CategoryFilter>
    </Container>
  );
};

export default Dropdown;

const Container = styled.div`
  margin-top: 25vh;
  padding-left: 3.51vw;
`;

const CategoryFilter = styled.div`
  display: flex;
  align-items: center;
  gap: 1vw;
`;

const DropdownButton = styled.button`
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

const ArrowImage = styled.img`
  width: 1vw;
  height: auto;
`;

const DropdownLabel = styled.span`
  font-weight: 500;
  font-size: clamp(1rem, 1.375rem, 1.5rem);
  line-height: 130%;
  letter-spacing: -0.025em; // % 대신 em 단위 사용
  color: #5d626f;
`;

const DropdownMenu = styled.div`
  top: 100%;
  left: 0;
  position: absolute;
  margin-top: 0.7vh;
  background-color: #f0f2f8;
  border-radius: 1.04vw;
  z-index: 10;
  min-width: 150px; // 최소 너비 설정
  width: 9.9vw;
  max-width: 250px; // 최대 너비 설정
  border: 1px solid #e1e7fb;
`;

const DropdownItem = styled.div`
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

const DropdownWrapper = styled.div`
  position: relative;
`;
