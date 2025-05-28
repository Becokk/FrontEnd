import styled from "styled-components";

export const ModalWrapper = styled.div`
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

export const ModalBox = styled.div`
  box-shadow: 0 0.25rem 1.25rem 0 #1e1e1e4d;
  background: #f7f9ff;
  width: 80%;
  max-width: 52.125rem;
  height: 80%;
  max-height: 35rem;
  border-radius: 3.125rem;
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const ModalImage = styled.img`
  width: 49.875rem;
  height: 18.75rem;
  margin-top: 1.25rem;
  margin-left: 1.125rem;
  border-top-left-radius: 2.1875rem;
  border-top-right-radius: 2.1875rem;
  object-fit: cover;
  object-position: top left;
`;

export const ProgramName = styled.h2`
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

export const ProgramHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;
  margin-left: 60px;
  margin-right: 60px;
`;

export const CategoryContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1.25vh;
  margin-left: 3.13vw;
`;

export const CategoryTag = styled.span`
  font-family: "Pretendard";
  font-weight: 500;
  font-size: 1.675rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #747e97;
`;

export const TopLeftBox = styled.div`
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

export const PointText = styled.span`
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 3.7rem;
  line-height: 130%;
  letter-spacing: -0.025em;
  color: #f8f8f8;
  margin-top: 0.625rem;
`;

export const PointInfoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const StatusButton = styled.button`
  width: ${(props) =>
    props.status === "UPCOMING" ? "10.5rem" : "9.125rem"}; /* 168px/146px */
  height: 5.74vh; /* 62px = 3.875rem */
  background-color: ${(props) =>
    props.status === "UPCOMING" ? "#E5E8EF" : "#2e65f3"};
  border-radius: 0.5rem;
  color: ${(props) => (props.status === "UPCOMING" ? "#626474" : "#ffffff")};
  font-family: "Pretendard";
  font-weight: 600;
  font-size: 1.625rem;
  border: none;
  gap: 0.5rem;
  flex-shrink: 0;
  align-self: flex-start;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProgramInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2.96vh;
`;

export const IconContainer = styled.div`
  display: flex;
  gap: 2.25rem;
  position: absolute;
  bottom: 4.63vh;
  right: 5vw;
`;

export const BookmarkIcon = styled.div`
  width: 2.08vw;
  height: 4.63vh;
  cursor: pointer;
`;

export const BellIcon = styled.div`
  width: 2.08vw;
  height: 4.63vh;
`;
