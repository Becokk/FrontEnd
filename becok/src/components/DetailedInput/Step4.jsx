import React from "react";
import Step4Modal from "./Step4Modal";
import styled from "styled-components";
import bang from "../../assets/bang.png";

const Step4 = () => {
  const [inputText, setInputText] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleIconClick = () => {
    setIsModalOpen(true);
  };

  return (
    <Container>
      <TitleWrapper>
        <TitleText>지금까지 참여한 비교과 프로그램을 알려주세요.</TitleText>
        <BangIcon src={bang} alt="정보 아이콘" onClick={handleIconClick} />
      </TitleWrapper>
      <InputSection>
        <SearchInputWrapper>
          <SearchInput
            value={inputText}
            onChange={handleInputChange}
            placeholder="비교과 프로그램을 모두 입력해주세요."
          />
          {/* <CharacterCount>{inputText.length}/50자</CharacterCount> */}
          {/* <ArrowButton
            disabled={inputText.length === 0}
            onClick={() => {
              if (inputText.length > 0) {
                window.location.href = "main/detailed";
              }
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2vw"
              height="1.2vw"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="1" y1="12" x2="21" y2="12" />
              <polyline points="12 5 21 12 12 19" />
            </svg>
          </ArrowButton> */}
        </SearchInputWrapper>
      </InputSection>
      {isModalOpen && <Step4Modal onClose={() => setIsModalOpen(false)} />}
    </Container>
  );
};

export default Step4;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 2vw;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8vw;
  margin-top: 19.07vh;
  margin-bottom: 13.24vh;
`;

const TitleText = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  text-align: center;
`;

const BangIcon = styled.img`
  width: 2.51vw;
  cursor: pointer;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchInputWrapper = styled.div`
  width: 66.56vw;
  height: 30.56vh;
  background-color: #f1f1f4;
  border-radius: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 1vh 2vw;
  overflow-y: auto;
  box-sizing: border-box;
  transition: max-height 0.2s ease;
`;

const SearchInput = styled.textarea`
  flex: 1;
  font-size: 1.96rem;
  border: none;
  background: none;
  color: #4f4f4f;
  resize: none;
  line-height: 150%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  min-height: 80%;
  width: 58.35vw;
  padding-left: 4vw;

  &::placeholder {
    font-weight: 400;
    font-size: 1.96rem;
    color: #b4b4b4;
    line-height: 150%;
    letter-spacing: 0;
  }

  &:focus {
    outline: none;
  }
`;

// const CharacterCount = styled.span`
//   font-size: 0.9vw;
//   color: #b4b4b4;
//   margin-left: 1vw;
// `;

// const ErrorMessage = styled.div`
//   margin-top: 1vh;
//   margin-left: 1vw;
//   width: 51.25vw; /* match input box */
//   text-align: left;
//   padding-left: 1vw;
//   color: #e64942;
//   font-size: 0.83vw;
//   font-family: "Pretendard";
//   font-weight: 400;
// `;

// const ArrowButton = styled.button`
//   width: 2.5vw;
//   height: 2.5vw;
//   margin-left: 1vw;
//   border-radius: 50%;
//   border: none;
//   background-color: ${({ disabled }) => (disabled ? "#e0e0e0" : "#2e65f3")};
//   color: ${({ disabled }) => (disabled ? "#a0a0a0" : "#ffffff")};
//   font-size: 1.5vw;
//   font-weight: bold;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
//   opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
//   transition:
//     background-color 0.3s ease,
//     color 0.3s ease;
// `;
