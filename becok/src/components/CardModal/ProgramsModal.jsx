import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import shipIcon from "../../assets/ship.png";
import handIcon from "../../assets/hand.png";
import { getProgramById } from "../../apis/popular";

const ProgramsModal = ({ onClose, programId }) => {
  const [program, setProgram] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);
  const modalRef = useRef(null);

  useEffect(() => {
    getProgramById(programId).then((res) => {
      if (res?.isSuccess && res.data) {
        setProgram(res.data);
        setIsBookmarked(res.data.bookmarked);
      }
    });
  }, [programId]);

  const handleBackgroundClick = (e) => {
    if (modalRef.current && !modalRef.current.contains(e.target)) {
      onClose();
    }
  };

  if (!program) return null;

  return (
    <ModalWrapper onClick={handleBackgroundClick}>
      <ModalBox ref={modalRef}>
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
        <ProgramInfoWrapper>
          <ProgramHeader>
            <a href={program.linkUrl} target="_blank" rel="noopener noreferrer">
              <ProgramName>{program.title}</ProgramName>
            </a>
            {program.status === "ONGOING" && (
              <StatusButton status={program.status?.trim()}>
                <img
                  src={shipIcon}
                  alt="ship icon"
                  style={{
                    width: "1.2vw",
                    height: "2.13vh",
                    marginRight: "0.5rem",
                  }}
                />
                모집 중
              </StatusButton>
            )}
            {program.status === "UPCOMING" && (
              <StatusButton status={program.status?.trim()}>
                <img
                  src={handIcon}
                  alt="hand icon"
                  style={{
                    width: "1.2vw",
                    height: "2.13vh",
                    marginRight: "0.5rem",
                  }}
                />
                모집 예정
              </StatusButton>
            )}
          </ProgramHeader>
          <CategoryContainer>
            {Array.isArray(program.category) && program.category.length > 0 ? (
              program.category.map((tag, idx) => {
                const normalizedTag = tag.replace(/^#+/, "#");
                return <CategoryTag key={idx}>{normalizedTag}</CategoryTag>;
              })
            ) : (
              <CategoryTag>카테고리 없음</CategoryTag>
            )}
          </CategoryContainer>
        </ProgramInfoWrapper>
        <IconContainer>
          <BookmarkIcon onClick={() => setIsBookmarked(!isBookmarked)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              fill={isBookmarked ? "#2D63EF" : "none"}
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M6 4c0-1.1046.8954-2 2-2h8c1.1046 0 2 .8954 2 2v17l-6-3-6 3V4z" />
            </svg>
          </BookmarkIcon>
          <BellIcon>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="50"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
            >
              <path d="M18 8a6 6 0 10-12 0c0 7-3 9-3 9h18s-3-2-3-9z" />
              <path d="M13.73 21a2 2 0 01-3.46 0" />
            </svg>
          </BellIcon>
        </IconContainer>
      </ModalBox>
    </ModalWrapper>
  );
};

export default ProgramsModal;

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
  margin-top: 1.25rem;
  margin-left: 1.125rem;
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
  word-break: break-word;
  max-width: 100%;
`;

const ProgramHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;
`;

const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25vh;
  margin-left: 3.13vw;
`;

const CategoryTag = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1.675rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #747e97;
`;

const TopLeftBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  margin-top: 1.25vh; /* 20px = 1.25rem */
  margin-left: 1.125vw; /* 18px = 1.125rem */
  width: 11.875rem;
  height: 11.6875rem;
  background-color: rgba(0, 0, 0, 0.5); /* #000000 50% */
  border-top-left-radius: 1.5625rem;
  padding: 1.375rem 2.1875rem;
  display: flex;
  flex-direction: row;
  gap: 0.625rem;
  z-index: 2;
`;

const PointText = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2.215625rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #f8f8f8;
  margin-top: 0.625rem;
`;

const PointCircle = styled.div`
  width: 3.3vw;
  height: 5.86vh;
  background-color: #2d63ef;
  border-radius: 50%;
  color: white;
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PointInfoContainer = styled.div`
  display: flex;
  gap: 0.8vw;
`;

const DdayText = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 2rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  color: white;
  margin-top: 6.25rem;
  margin-left: -6rem;
`;

const StatusButton = styled.button`
  flex-shrink: 0;
  width: ${(props) =>
    props.status === "UPCOMING" ? "10.5rem" : "9.125rem"}; /* 168px/146px */
  height: 5.74vh; /* 62px = 3.875rem */
  padding: 0.875rem 1.125rem;
  background-color: ${(props) =>
    props.status === "UPCOMING" ? "#E5E8EF" : "#2e65f3"};
  border-radius: 0.5rem;
  color: ${(props) => (props.status === "UPCOMING" ? "#626474" : "#ffffff")};
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 1.625rem;
  border: none;
  gap: 0.5rem;
  align-self: flex-start;
`;

const ProgramInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.96vh;
`;

const IconContainer = styled.div`
  display: flex;
  gap: 2.25rem;
  position: absolute;
  bottom: 3.125vh;
  right: 4rem;
`;

const BookmarkIcon = styled.div`
  width: 2.5vw;
  height: 3.125vh;
  cursor: pointer;
`;

const BellIcon = styled.div`
  width: 2.5vw;
  height: 3.125vh;
`;
