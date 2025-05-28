import React from "react";
import { useEffect, useRef, useState } from "react";
import usePopularCards from "../../hooks/usePopularCards";
import noImage from "../../assets/noImage.png";
import {
  CardSection,
  CardContainer,
  SectionTitle,
  CardImageContainer,
  StatusLabel,
  LabelText,
  CardImage,
  GradientOverlay,
  CardTitle,
  CardDate,
  ScrollButtonContainer,
  ScrollButton,
} from "../../styles/Card.style";
import ProgramsModal from "../CardModal/ProgramsModal";
import ContestsModal from "../CardModal/ContestModal";

const Card = ({ category }) => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusLabel = (status) => {
    switch (status) {
      case "UPCOMING":
        return "모집 예정";
      case "ONGOING":
        return "모집 중";
      case "CLOSED":
        return "모집 종료";
      default:
        return "알 수 없음";
    }
  };

  const cards = usePopularCards(category);

  const checkScroll = () => {
    if (scrollRef.current) {
      setCanScrollLeft(scrollRef.current.scrollLeft > 0);
    }
  };

  useEffect(() => {
    const scrollEl = scrollRef.current;
    if (scrollEl) {
      scrollEl.addEventListener("scroll", checkScroll);
      checkScroll();
      return () => scrollEl.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const handleScrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft + scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: scrollRef.current.scrollLeft - scrollRef.current.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <CardSection>
      <SectionTitle>
        {category === "공모전"
          ? "인기 급상승 공모전"
          : "인기 급상승 비교과 프로그램"}
      </SectionTitle>
      <CardContainer ref={scrollRef}>
        {cards.length > 0 &&
          cards.map((card) => (
            <CardImageContainer
              key={card.id}
              onClick={() => {
                setSelectedCard(card);
                setIsModalOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <StatusLabel $status={card.status}>
                <LabelText>
                  {category === "비교과 프로그램"
                    ? getStatusLabel(card.status)
                    : card.dday !== undefined
                      ? `${card.dday}`
                      : card.status}
                </LabelText>
              </StatusLabel>
              <CardTitle>
                {category === "비교과 프로그램" ? card.title : card.name}
              </CardTitle>
              <CardDate>{`${card.startDate} ~ ${card.endDate}`}</CardDate>
              <CardImage
                src={
                  (category === "비교과 프로그램"
                    ? card.thumbnailUrl
                    : card.imgUrl) || noImage
                }
                alt={category === "비교과 프로그램" ? card.title : card.name}
              />
              <GradientOverlay />
            </CardImageContainer>
          ))}
      </CardContainer>
      {canScrollLeft && (
        <ScrollButtonContainer direction="left">
          <ScrollButton onClick={handleScrollLeft}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16 19L9 12L16 5"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ScrollButton>
        </ScrollButtonContainer>
      )}
      {!canScrollLeft && (
        <ScrollButtonContainer direction="right">
          <ScrollButton onClick={handleScrollRight}>
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 5L15 12L8 19"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </ScrollButton>
        </ScrollButtonContainer>
      )}
      {isModalOpen && selectedCard && category === "비교과 프로그램" ? (
        <ProgramsModal
          programId={selectedCard.id}
          onClose={() => setIsModalOpen(false)}
        />
      ) : (
        isModalOpen &&
        selectedCard && (
          <ContestsModal
            contestId={selectedCard.id}
            onClose={() => setIsModalOpen(false)}
          />
        )
      )}
    </CardSection>
  );
};

export default Card;
