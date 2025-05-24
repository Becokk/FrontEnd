import React from "react";
import styled from "styled-components";
import bang from "../../assets/bang.png";
import Step5Modal from "./Step5Modal";

const Step5 = ({ onNoHistory, onValidityChange }) => {
  const [inputText, setInputText] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    if (onValidityChange) {
      onValidityChange(inputText.trim().length > 0);
    }
  }, [inputText, onValidityChange]);

  const autoResizeTextarea = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto";
      textarea.style.height = `${Math.min(textarea.scrollHeight, 330)}px`;
    }
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
    autoResizeTextarea();
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
            ref={textareaRef}
            value={inputText}
            onChange={handleInputChange}
            placeholder="비교과 프로그램을 입력해주세요."
          />
        </SearchInputWrapper>
        <NoHistoryButton onClick={onNoHistory}>
          참여한 이력이 없다면?
        </NoHistoryButton>
      </InputSection>
      {isModalOpen && <Step5Modal onClose={() => setIsModalOpen(false)} />}
    </Container>
  );
};

export default Step5;

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
`;

const SearchInputWrapper = styled.div`
  width: 66.56vw;
  background-color: #f1f1f4;
  border-radius: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1vh 2vw;
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

const SearchInput = styled.textarea`
  flex: 1;
  font-size: 2rem;
  border: none;
  background: none;
  color: #363636;
  resize: none;
  line-height: 150%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  height: auto;
  overflow-y: auto;
  min-height: 12.04vh;
  max-height: 30.56vh;
  display: block;
  box-sizing: border-box;
  padding: 0;
  padding-top: 4vh;
  padding-left: 1vw;

  &::placeholder {
    font-weight: 400;
    font-size: 2rem;
    color: #b4b4b4;
    line-height: 150%;
    letter-spacing: 0;
  }

  &:focus {
    outline: none;
  }
`;

const NoHistoryButton = styled.button`
  margin-top: 2.22vh;
  font-family: "Inter";
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  color: #2e65f3;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1e4ed8;
  }
`;
