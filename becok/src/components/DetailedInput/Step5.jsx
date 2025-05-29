import React from "react";
import bang from "../../assets/bang.png";
import Step5Modal from "./Step5Modal";
import {
  Container,
  TitleWrapper,
  TitleText,
  BangIcon,
  InputSection,
  SearchInputWrapper,
  SearchInput,
  NoHistoryButton,
} from "../../styles/DetailedInput/Step5.style";

const Step5 = ({ onNoHistory, onValidityChange, onChange }) => {
  const [inputText, setInputText] = React.useState("");
  const [isModalOpen, setIsModalOpen] = React.useState(false);

  const textareaRef = React.useRef(null);

  React.useEffect(() => {
    const isValid = inputText.trim().length > 0;
    if (typeof onValidityChange === "function") {
      onValidityChange(isValid);
    }
    if (typeof onChange === "function" && isValid) {
      onChange(inputText);
    }
  }, [inputText, onValidityChange, onChange]);

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
        <NoHistoryButton
          onClick={() => {
            setInputText("없음");
            if (typeof onChange === "function") {
              onChange("없음");
            }
            onNoHistory();
          }}
        >
          참여한 이력이 없다면?
        </NoHistoryButton>
      </InputSection>
      {isModalOpen && <Step5Modal onClose={() => setIsModalOpen(false)} />}
    </Container>
  );
};

export default Step5;
