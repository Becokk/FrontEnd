import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import CharacterImage from "../../assets/becokPeople.png";
import BottomLineImage from "../../assets/line.png";

const SignupLeftSection = () => {
  return (
    <LeftSection>
      <GlobalStyle />
      <Title>똑똑한 비교과 포인트 관리는, 비콕</Title>
      <Subtitle>
        비교과 프로그램 알림 뿐만 아니라, <br />
        교내/외 프로그램까지 책임지는 든든한 친구가 되어 드릴게요.
      </Subtitle>
      <Character src={CharacterImage} alt="비콕 캐릭터" />
      <BottomLine src={BottomLineImage} alt="하단 구분선" />
    </LeftSection>
  );
};

export default SignupLeftSection;

const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 30vw;
  padding: 10vh 0 0 0vw;
`;

const Title = styled.h2`
  font-family: Pretendard;
  font-weight: 500;
  font-size: 2.5vw;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #626474;
  text-align: left;
  margin-top: 0;
  margin-bottom: 1.5vh;
  white-space: nowrap;
  width: 100%;
  opacity: 0;
  animation: fadeSlideUp 0.6s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 6vw;
    white-space: normal;
  }
`;

const Subtitle = styled.p`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: 1.15vw; /* approximately 22px / 1920 */
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #626474;
  vertical-align: middle;
  text-align: left;
  margin-top: 0;
  margin-bottom: 3vh;
  opacity: 0;
  animation: fadeSlideUp 0.8s ease-out forwards;
  animation-delay: 0.2s;

  @media (max-width: 768px) {
    font-size: 4.5vw;
  }
`;

const Character = styled.img`
  width: 22vw;
  max-width: 340px;
  align-self: center;
  margin-top: auto;
  animation: float 3s ease-in-out infinite;

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const BottomLine = styled.img`
  width: calc(30vw + 117px);
  height: auto;
  margin-top: 2vh;
`;

const GlobalStyle = createGlobalStyle`
  @keyframes fadeSlideUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;
