import React from "react";
import styled from "styled-components";
import DropdownArrow from "../../assets/qwe.png";

const Card = ({ category }) => {
  return (
    <CardContainer>
      <SectionTitle>
        {category === "공모전"
          ? "인기 급상승 공모전"
          : "인기 급상승 비교과 프로그램"}
      </SectionTitle>
      <CardImageContainer>
        <CardImage src={DropdownArrow} alt="dropdown arrow" />
        <GradientOverlay />
      </CardImageContainer>
    </CardContainer>
  );
};

export default Card;

// title
const CardContainer = styled.div`
  margin-top: 1.85vh;
`;

const SectionTitle = styled.h2`
  margin-left: 1.4vw;
  font-size: 2rem; // 32px / 1920
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -2.5%;
  color: #626474;
`;

// 카드
const CardImageContainer = styled.div`
  margin-top: 1vh;
  position: relative;
  width: 23.75vw; /* 456px / 1920 */
  height: 21.94vh; /* 237px / 1080 */
  border-radius: 1.82vw; /* 35px / 1920 */
  overflow: hidden;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const GradientOverlay = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.6) 100%
  );
  pointer-events: none;
`;
