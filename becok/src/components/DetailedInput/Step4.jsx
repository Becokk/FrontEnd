import React, { useState, useEffect } from "react";
import {
  Container,
  TitleText,
  SubtitleText,
  KeywordGrid,
  KeywordRow,
  KeywordWrapper,
  KeywordButton,
  OrderBadge,
} from "../../styles/DetailedInput/Step4.style";

const interestMap = {
  마케팅: "MARKETING",
  자기개발: "SELF_DEVELOPMENT",
  자원봉사: "VOLUNTEERING",
  "진로 로드맵": "CAREER_ROADMAP",
  주식: "STOCK_INVESTING",
  창업: "STARTUP",
  IT: "IT",
  공모전: "CONTEST",
  자기이해: "SELF_UNDERSTANDING",
  디자인: "DESIGN",
  여행: "TRAVEL",
  인문예술: "HUMANITIES_AND_ARTS",
  상담: "COUNSELING",
  백앤드: "BACKEND",
  스포츠: "SPORTS",
  글쓰기: "WRITING",
  "진로의사 결정": "CAREER_DECISION",
};

const Step4 = ({ onValidityChange, onChange }) => {
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
    const isValid =
      selectedKeywords.length >= 2 && selectedKeywords.length <= 5;
    if (typeof onValidityChange === "function") {
      onValidityChange(isValid);
    }
    if (typeof onChange === "function") {
      onChange(selectedKeywords.map((k) => interestMap[k]));
    }
  }, [selectedKeywords, onValidityChange, onChange]);

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
          {["주식", "여행", "인문예술", "진로의사 결정"].map((keyword) => (
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
          {["창업", "IT", "공모전", "자기이해", "디자인"].map((keyword) => (
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
          {["상담", "백앤드", "스포츠", "글쓰기"].map((keyword) => (
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

export default Step4;
