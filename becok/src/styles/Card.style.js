import styled from "styled-components";

export const CardSection = styled.div`
  width: 100%;
  position: relative;
  height: auto; // CardImageContainer 높이 + 여백
  margin-top: 1.85vh;
`;

export const CardContainer = styled.div`
  display: flex;
  gap: 15px;
  overflow-x: hidden;
  overflow-y: hidden;
  padding: 1vh 0;
  position: relative;
  left: 1.88vw;
  right: 0;
  height: 100%; // 부모 높이에 맞춤

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

export const SectionTitle = styled.h2`
  margin-left: 2.89vw;
  font-size: 2rem; // 32px / 1920
  font-weight: 500;
  line-height: 130%;
  letter-spacing: -2.5%;
  color: #626474;
`;

export const CardImageContainer = styled.div`
  position: relative;
  width: 23.75vw; /* 456px / 1920 */
  height: 21vh; /* 237px / 1080 */
  border-radius: 1.82vw;
  overflow: hidden;
  flex-shrink: 0;
`;

export const StatusLabel = styled.div`
  position: absolute;
  top: 2.78vh;
  right: 1.15vw;
  background: ${(props) =>
    props.$status === "모집대기" ? "#D9D9D9" : "#2d63ef"};
  color: ${(props) => (props.$status === "모집대기" ? "#5A5A5A" : "#F5F5F5")};
  padding: 0.65vh 1.15vw;
  border-radius: 1.04vw;
  box-shadow: 0px 4px 10px 0px #00000040;
  z-index: 1;
`;

export const LabelText = styled.span`
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top left;
`;

export const GradientOverlay = styled.div`
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
  z-index: 0;
`;

export const CardTitle = styled.div`
  position: absolute;
  bottom: 7.04vh;
  left: 1.56vw;
  color: white;
  font-family: Pretendard;
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  z-index: 1;
`;

export const CardDate = styled.div`
  position: absolute;
  padding-top: 0.93vh;
  bottom: 3.7vh;
  left: 1.56vw;
  color: #f5f5f5;
  font-family: Pretendard;
  font-weight: 500;
  font-size: 1.04rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  z-index: 1;
`;

export const ScrollButtonContainer = styled.div`
  position: absolute;
  top: 50%;
  ${(props) =>
    props.direction === "left" ? "left: 3.76vw;" : "right: 3.76vw;"}
  transform: translateY(-50%);
  width: 2.6vw;
  height: 6.85vh;
  padding: 2.13vh 0.57vw;
  background: #00000066;
  border-radius: 0.26vw;
  display: flex;
  gap: 0.52vw;
  z-index: 2;
  align-items: center;
  justify-content: center;
`;

export const ScrollButton = styled.button`
  width: 2.6vw;
  height: 2.6vw;
  border: none;
  background: transparent;
  cursor: pointer;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

