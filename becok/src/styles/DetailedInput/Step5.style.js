import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 2vw;
`;

export const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8vw;
  margin-top: 19.07vh;
  margin-bottom: 13.24vh;
`;

export const TitleText = styled.h2`
  font-weight: 500;
  font-size: 2.5rem;
  line-height: 150%;
  letter-spacing: -2.5%;
  color: #363636;
  text-align: center;
`;

export const BangIcon = styled.img`
  width: 2.51vw;
  cursor: pointer;
`;

export const InputSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const SearchInputWrapper = styled.div`
  width: 66.56vw;
  background-color: #f1f1f4;
  border-radius: 100px;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1vh 2vw;
  overflow-y: auto;
  box-sizing: border-box;
  scrollbar-width: thin;
  scrollbar-color: #ccc transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #ccc;
    border-radius: 4px;
  }
`;

export const SearchInput = styled.textarea`
  flex: 1;
  font-size: 2rem;
  border: none;
  background: none;
  color: #363636;
  resize: none;
  line-height: 150%;
  overflow-wrap: break-word;
  white-space: pre-wrap;
  height: auto;
  overflow-y: auto;
  min-height: 12.04vh;
  max-height: 30.56vh;
  display: block;
  box-sizing: border-box;
  padding: 0;
  padding-top: 4vh;
  padding-left: 1vw;

  &::placeholder {
    font-weight: 400;
    font-size: 2rem;
    color: #b4b4b4;
    line-height: 150%;
    letter-spacing: 0;
  }

  &:focus {
    outline: none;
  }
`;

export const NoHistoryButton = styled.button`
  margin-top: 2.22vh;
  font-family: "Inter";
  font-size: 1.75rem;
  font-weight: 500;
  line-height: 150%;
  letter-spacing: -2.5%;
  text-align: center;
  color: #2e65f3;
  background: none;
  border: none;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    color: #1e4ed8;
  }
`;
