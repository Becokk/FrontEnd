import React, { useState } from "react";
import SearchIconImage from "../../assets/magnifier.png";
import { useGoalMutation } from "../../hooks/mutation/GoalMutation";
import {
  HeaderContainer,
  Title,
  InputSection,
  SearchInputWrapper,
  SearchInput,
  CharacterCount,
  ArrowButton,
  ErrorMessage,
} from "../../styles/Homepage/HomeHeader.style";

const HomeHeader = () => {
  const [inputText, setInputText] = useState("");
  const addGoalMutation = useGoalMutation();

  const handleInputChange = (e) => {
    if (e.target.value.length <= 100) {
      setInputText(e.target.value);
    }
  };

  return (
    <HeaderContainer>
      <Title
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        당신의 목표는 무엇인가요?
      </Title>
      <InputSection>
        <SearchInputWrapper>
          <img
            src={SearchIconImage}
            alt="search"
            style={{ width: "2vw", marginRight: "1vw" }}
          />
          <SearchInput
            value={inputText}
            onChange={handleInputChange}
            placeholder="“마케팅 전문가가 되고싶어”, “토익 800점을 준비중이야”"
            maxLength={100}
          />
          <CharacterCount>{inputText.length}/100자</CharacterCount>
          <ArrowButton
            disabled={inputText.length === 0}
            onClick={() => {
              if (inputText.length > 0) {
                const memberId = localStorage.getItem("memberId");
                if (memberId) {
                  addGoalMutation.mutate(
                    { memberId, goal: inputText },
                    {
                      onSuccess: () => {
                        window.location.href = "/detailed";
                      },
                      onError: () => {
                        alert("목표 저장에 실패했습니다.");
                      },
                    }
                  );
                } else {
                  alert("로그인이 필요합니다.");
                }
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
          </ArrowButton>
        </SearchInputWrapper>
        <ErrorMessage>
          {(inputText.length >= 100 &&
            "글자 수는 공백제외 최대 100자 입니다.") ||
            ""}
        </ErrorMessage>
      </InputSection>
    </HeaderContainer>
  );
};

export default HomeHeader;
