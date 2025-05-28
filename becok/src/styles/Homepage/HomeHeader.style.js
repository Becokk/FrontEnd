import styled from "styled-components";
import { motion } from "framer-motion";

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 18vh; /* 240px / 1080 */
  width: 100%;
`;

export const Title = styled(motion.h1)`
  font-weight: 500;
  font-size: 3.5rem; /* 56px / 1920 */
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #060606;
  text-align: center;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

export const SearchInputWrapper = styled.div`
  margin-top: 4.16vh;
  width: 51.25vw; /* 984px / 1920 */
  height: 7.59vh; /* 82px / 1080 */
  background-color: #f1f1f4;
  border-radius: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2vw;
`;

export const SearchInput = styled.input`
  flex: 1;
  font-size: 1.2em; /* 18px / 1920 */
  border: none;
  background: none;
  color: #4f4f4f;

  &::placeholder {
    font-weight: 400;
    font-size: 1.2rem; /* 24px / 1920 */
    color: #b4b4b4;
    line-height: 150%;
    letter-spacing: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const CharacterCount = styled.span`
  font-size: 0.9vw;
  color: #b4b4b4;
  margin-left: 1vw;
`;

export const ErrorMessage = styled.div`
  min-height: 1.9vh;
  margin-top: 1vh;
  margin-left: 1vw;
  width: 51.25vw; /* match input box */
  text-align: left;
  padding-left: 1vw;
  color: #e64942;
  font-size: 0.83vw;
  font-family: "Pretendard";
  font-weight: 400;
`;

export const ArrowButton = styled.button`
  width: 2.5vw;
  height: 2.5vw;
  margin-left: 1vw;
  border-radius: 50%;
  border: none;
  background-color: ${({ disabled }) => (disabled ? "#e0e0e0" : "#2e65f3")};
  color: ${({ disabled }) => (disabled ? "#a0a0a0" : "#ffffff")};
  font-size: 1.5vw;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
`;
