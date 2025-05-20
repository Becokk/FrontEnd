import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import SearchIconImage from "../../assets/magnifier.png";
import DefaultMovieImage from "../../assets/moving.png";
import MovingDetailImage from "../../assets/movingDetail.png";

const HomeHeader = () => {
  const [inputText, setInputText] = useState("");

  const handleInputChange = (e) => {
    if (e.target.value.length <= 50) {
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
            maxLength={50}
          />
          <CharacterCount>{inputText.length}/50자</CharacterCount>
          <img
            src={inputText.length > 0 ? MovingDetailImage : DefaultMovieImage}
            alt="go"
            style={{
              width: "2.5vw",
              marginLeft: "1vw",
              cursor: inputText.length > 0 ? "pointer" : "default",
              opacity: inputText.length > 0 ? 1 : 0.5,
            }}
            onClick={() => {
              if (inputText.length > 0) {
                window.location.href = "main/detailed";
              }
            }}
          />
        </SearchInputWrapper>
        {inputText.length >= 50 && (
          <ErrorMessage>글자 수는 공백제외 최대 50자 입니다.</ErrorMessage>
        )}
      </InputSection>
    </HeaderContainer>
  );
};

export default HomeHeader;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 22.22vh;
  width: 100%;
`;

const Title = styled(motion.h1)`
  font-weight: 500;
  font-size: 2.92vw; /* 56px / 1920 */
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #060606;
  text-align: center;
`;

const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const SearchInputWrapper = styled.div`
  margin-top: 4.16vh;
  width: 51.25vw; /* 984px / 1920 */
  height: 7.59vh; /* 82px / 1080 */
  background-color: #f1f1f4;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
`;

const SearchInput = styled.input`
  flex: 1;
  font-size: 0.9375vw; /* 18px / 1920 */
  border: none;
  background: none;
  color: #4f4f4f;

  &::placeholder {
    font-weight: 400;
    font-size: 1vw; /* 24px / 1920 */
    color: #b4b4b4;
    line-height: 150%;
    letter-spacing: 0;
  }

  &:focus {
    outline: none;
  }
`;

const CharacterCount = styled.span`
  font-size: 0.9vw;
  color: #b4b4b4;
  margin-left: 1vw;
`;

const ErrorMessage = styled.div`
  margin-top: 1vh;
  margin-left: 1vw;
  width: 51.25vw; /* match input box */
  text-align: left;
  padding-left: 1vw;
  color: #e64942;
  font-size: 0.83vw;
  font-family: "Pretendard";
  font-weight: 400;
`;
