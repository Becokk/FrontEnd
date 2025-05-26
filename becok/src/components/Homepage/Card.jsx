import React, { useRef, useState, useEffect } from "react";
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
import test1 from "../../assets/test1.png";
import test2 from "../../assets/test2.png";
import test3 from "../../assets/test3.jpg";
import test4 from "../../assets/test4.jpg";
import CardModalPopup from "../CardModal/CardModalPopup";

const cardData = [
  {
    id: 1,
    title: "[ZARA] 기업 및 채용 설명회",
    date: "25.05.15 (목) 10:00 ~ 11:30 / 12:00~ 13:30",
    status: "모집중",
    image: test1,
  },
  {
    id: 2,
    title: "제9회 Global Culture Competition",
    date: "25.04.14 (월) ~ 25.06.04 (수)",
    status: "모집대기",
    image: test2,
  },
  {
    id: 3,
    title: "[외재인증] 2025 저자와의 만남",
    date: "25.05.25 (수) 14:00 ~ 16:00",
    status: "모집중",
    image: test3,
  },
  {
    id: 4,
    title: "2025 년 자기소개서 작성법 특강",
    date: "25.05.19 (월) ~ 25.05.20 (화)",
    status: "모집중",
    image: test4,
  },
  {
    id: 5,
    title: "[STRONG] 취업 준비 프로그램",
    date: "25.05.21 (화) 13:00 ~ 15:00",
    status: "모집대기",
    image: test1,
  },
];

const Card = ({ category }) => {
  const scrollRef = useRef(null);

  const [canScrollLeft, setCanScrollLeft] = React.useState(false);
  const [selectedCard, setSelectedCard] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {cardData.length > 0 &&
          cardData.map((card) => (
            <CardImageContainer
              key={card.id}
              onClick={() => {
                setSelectedCard(card);
                setIsModalOpen(true);
              }}
              style={{ cursor: "pointer" }}
            >
              <StatusLabel $status={card.status}>
                <LabelText>{card.status}</LabelText>
              </StatusLabel>
              <CardTitle>{card.title}</CardTitle>
              <CardDate>{card.date}</CardDate>
              <CardImage src={card.image} alt={card.title} />
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
      {isModalOpen && selectedCard && (
        <CardModalPopup
          program={selectedCard}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </CardSection>
  );
};

export default Card;
