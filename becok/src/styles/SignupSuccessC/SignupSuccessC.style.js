import styled, { keyframes } from "styled-components";

const fadeSlideUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
`;

export const BackgroundGradient = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  background: linear-gradient(
    174.74deg,
    #1f59ea -19.7%,
    #2f45f0 -6.04%,
    rgba(51, 51, 236, 0.928044) -1.39%,
    rgba(52, 44, 235, 0.899322) 3.36%,
    rgba(54, 36, 233, 0.866908) 12.99%,
    rgba(73, 48, 242, 0.795999) 29.04%,
    rgba(72, 52, 244, 0.787478) 41.41%,
    rgba(57, 45, 238, 0.835037) 51.63%,
    rgba(36, 36, 229, 0.905416) 63.64%,
    rgba(30, 72, 214, 0.888907) 83.1%,
    #3492e4 108.76%
  );
`;

export const BackgroundCircle = styled.div`
  position: absolute;
  bottom: -15%;
  left: -5%;
  width: 35vw;
  height: 35vw;
  border-radius: 50%;
  background: linear-gradient(
    174.47deg,
    rgba(46, 101, 243, 0.07) -37.86%,
    rgba(134, 239, 248, 0.35) 103.47%
  );

  filter: blur(100px);
  z-index: 1; // 변경
`;

export const TopRightCircle = styled.div`
  position: absolute;
  top: -30%;
  right: -25%;
  width: 47.5vw;
  height: 47.5vw;
  border-radius: 50%;
  background: linear-gradient(
    170.95deg,
    rgba(240, 119, 228, 0.5) 15.95%,
    rgba(46, 101, 243, 0.05) 93.13%
  );

  opacity: 0.5;
  filter: blur(100px);
  z-index: 1;
`;

export const ContentWrapper = styled.div`
  text-align: center;
  z-index: 2;
  animation: ${fadeSlideUp} 1.2s ease-out forwards;
  margin-top: 10vh;
`;

export const Logo = styled.img`
  width: 24.79vh;
  margin-bottom: 2rem;
`;

export const WelcomeTitle = styled.h1`
  font-weight: 500;
  font-size: 4.5rem; /* 72px */
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  vertical-align: middle;
  color: #f7f9ff;
  margin-bottom: 1.5rem;
  animation: ${fadeSlideUp} 1.5s ease-out forwards;

  @media (max-width: 768px) {
    font-size: 6vw;
    white-space: normal;
  }
`;

export const WelcomeSubTitle = styled.p`
  font-weight: 400;
  font-size: 2rem; /* 36px */
  line-height: 140%;
  letter-spacing: -2.5%;
  color: #f7f9ff;
  text-align: center;
  vertical-align: middle;
  padding-bottom: 20.74vh;
  animation: ${fadeSlideUp} 1.7s ease-out forwards;
  animation-delay: 0.3s;
  animation-fill-mode: both;

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const LoginButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-weight: 600;
  font-size: 1.25rem; /* 24px */
  line-height: 140%;
  letter-spacing: -2.5%;
  text-align: center;
  vertical-align: middle;
  text-decoration: underline;
  text-underline-offset: 0.15em;
  text-decoration-thickness: 0.5px;
  color: #f7f9ff;
  background: none;
  border: none;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }
`;

export const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 999;
`;
