import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Step5 = ({ onValidityChange }) => {
  const [selectedKeywords, setSelectedKeywords] = useState([]);

  const toggleKeyword = (keyword) => {
    setSelectedKeywords((prev) =>
      prev.includes(keyword)
        ? prev.filter((item) => item !== keyword)
        : prev.length < 5
          ? [...prev, keyword]
          : prev
    );
  };

  useEffect(() => {
    if (onValidityChange) {
      onValidityChange(
        selectedKeywords.length >= 2 && selectedKeywords.length <= 5
      );
    }
  }, [selectedKeywords, onValidityChange]);

  return (
    <Container>
      <TitleText>관심 분야를 선택해주세요.</TitleText>
      <SubtitleText>
        회원님이 평소 관심가는 분야 <span>2~5개</span>를 선택하세요.
        <br />
        선택하신 키워드는 언제든지 바꿀 수 있습니다.
      </SubtitleText>
      <KeywordGrid>
        <KeywordRow>
          {["마케팅", "자기개발", "자원봉사", "진로 로드맵"].map((keyword) => (
            <KeywordWrapper key={keyword}>
              <KeywordButton
                selected={selectedKeywords.includes(keyword)}
                onClick={() => toggleKeyword(keyword)}
              >
                <>
                  {keyword}
                  {selectedKeywords.includes(keyword) && (
                    <OrderBadge>
                      {selectedKeywords.indexOf(keyword) + 1}
                    </OrderBadge>
                  )}
                </>
              </KeywordButton>
            </KeywordWrapper>
          ))}
        </KeywordRow>
        <KeywordRow>
          {["주식", "창업", "IT", "공모전", "자기이해", "디자인", "여행"].map(
            (keyword) => (
              <KeywordWrapper key={keyword}>
                <KeywordButton
                  selected={selectedKeywords.includes(keyword)}
                  onClick={() => toggleKeyword(keyword)}
                >
                  <>
                    {keyword}
                    {selectedKeywords.includes(keyword) && (
                      <OrderBadge>
                        {selectedKeywords.indexOf(keyword) + 1}
                      </OrderBadge>
                    )}
                  </>
                </KeywordButton>
              </KeywordWrapper>
            )
          )}
        </KeywordRow>
        <KeywordRow>
          {[
            "인문예술",
            "상담",
            "백앤드",
            "스포츠",
            "글쓰기",
            "진로의사 결정",
          ].map((keyword) => (
            <KeywordWrapper key={keyword}>
              <KeywordButton
                selected={selectedKeywords.includes(keyword)}
                onClick={() => toggleKeyword(keyword)}
              >
                <>
                  {keyword}
                  {selectedKeywords.includes(keyword) && (
                    <OrderBadge>
                      {selectedKeywords.indexOf(keyword) + 1}
                    </OrderBadge>
                  )}
                </>
              </KeywordButton>
            </KeywordWrapper>
          ))}
        </KeywordRow>
      </KeywordGrid>
    </Container>
  );
};

export default Step5;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 13vh;
`;

const TitleText = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  color: #363636;
  margin-bottom: 1.11vh;
`;

const SubtitleText = styled.p`
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

const KeywordGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.25vw 1.39vw; // 수평, 수직 간격 조정
  margin-top: 6.67vh;
  width: 64.4vw;
`;

const KeywordRow = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 0.5vh;
  gap: 1.25vw;
`;

const KeywordWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const KeywordButton = styled.button`
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

const OrderBadge = styled.span`
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
