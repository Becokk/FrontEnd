import React from "react";
import styled from "styled-components";

const mockProgram = {
  id: 1,
  thumbnailUrl:
    "https://hsportal.hansung.ac.kr/attachment/view/68693/25-1+%ED%95%9C%EC%84%B1%EC%98%81%EC%96%B4%EC%BA%A0%ED%94%84+%ED%8F%AC%EC%8A%A4%ED%84%B0+.jpg?ts=0",
  name: "비교과 프로그램 제목1",
  linkUrl: "https://example.com/program1",
  startDate: "2025-05-15",
  endDate: "2025-05-26",
  point: 30,
  status: "ONGOING",
  remember: false,
  category: ["#기획", "#마케팅"],
};

const CardModalPopup = ({ onClose, program }) => {
  const handleBackgroundClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <ModalWrapper onClick={handleBackgroundClick}>
      <ModalBox>
        <TopLeftBox>
          <PointInfoContainer>
            <PointCircle>P</PointCircle>
            <PointText>{program.point}</PointText>
            <DdayText>
              D-
              {Math.ceil(
                (new Date(program.endDate) - new Date()) / (1000 * 60 * 60 * 24)
              )}
            </DdayText>
          </PointInfoContainer>
        </TopLeftBox>
        <ModalImage src={program.thumbnailUrl} alt="thumbnail" />
        <ProgramName>{program.name}</ProgramName>
        <CategoryContainer>
          {program.category.map((tag, idx) => (
            <CategoryTag key={idx}>{tag}</CategoryTag>
          ))}
        </CategoryContainer>
        {program.status.trim() === "ONGOING" && (
          <StatusButton>모집 중</StatusButton>
        )}
      </ModalBox>
    </ModalWrapper>
  );
};

const CardModalWrapper = () => {
  return <CardModalPopup program={mockProgram} onClose={() => {}} />;
};

export default CardModalWrapper;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  backdrop-filter: blur(10px);
`;

const ModalBox = styled.div`
  box-shadow: 0 0.25rem 1.25rem 0 #1e1e1e4d;
  background: #f7f9ff;
  width: 80%;
  max-width: 52.125rem;
  height: 80%;
  max-height: 43.75rem;
  border-radius: 3.125rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const ModalImage = styled.img`
  width: 49.875rem;
  height: 18.75rem;
  margin-top: 1.25rem; /* 20px */
  margin-left: 1.125rem; /* 18px */
  border-top-left-radius: 2.1875rem;
  border-top-right-radius: 2.1875rem;
  object-fit: cover;
  object-position: top left;
`;

const ProgramName = styled.h2`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 2.5rem; /* 40px */
  line-height: 140%;
  letter-spacing: -0.025em; /* -2.5% */
  color: #363636;
  text-decoration: underline;
  margin-left: 60px;
  margin-top: 32px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25rem;
  margin-left: 3.75rem;
`;

const CategoryTag = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1.675rem; /* 26.8px */
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #747e97;
`;

const TopLeftBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1.25rem; /* 20px */
  margin-left: 1.125rem; /* 18px */
  width: 11.875rem; /* 190px */
  height: 11.6875rem; /* 187px */
  background-color: rgba(0, 0, 0, 0.5); /* #000000 50% */
  border-top-left-radius: 1.5625rem; /* 25px */
  padding: 1.375rem 2.1875rem; /* 22px 35px */
  display: flex;
  flex-direction: row;
  gap: 0.625rem; /* 10px */
  z-index: 2;
`;

const PointText = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2.215625rem; /* 35.45px */
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #f8f8f8;
  margin-top: 10px;
`;

const PointCircle = styled.div`
  width: 63.85px; /* 80px */
  height: 66px; /* 80px */
  background-color: #2d63ef;
  border-radius: 50%;
  color: white;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2.5rem; /* 40px */
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PointInfoContainer = styled.div`
  display: flex;
  gap: 1rem; /* 10px */
`;

const DdayText = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2rem; /* Match style */
  line-height: 130%;
  letter-spacing: -0.025em;
  color: white;
  margin-top: 100px;
  margin-left: -6rem;
`;

const StatusButton = styled.button`
  width: 146px;
  height: 62px;
  margin-left: 39.875rem;
  padding: 0.875rem 1.125rem;
  background-color: #2e65f3;
  border-radius: 0.5rem;
  color: white;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 1.25rem;
  border: none;
  gap: 0.5rem;
  margin-bottom: 100vh;
`;
