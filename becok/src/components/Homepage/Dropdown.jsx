import React from "react";
import DropdownArrow from "../../assets/down.png";
import {
  Container,
  CategoryFilter,
  DropdownWrapper,
  DropdownButton,
  DropdownLabel,
  ArrowImage,
  DropdownMenu,
  DropdownItem,
} from "../../styles/Homepage/Dropdown.style";

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
