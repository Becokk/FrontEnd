import styled from "styled-components";

export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.042vw; /* 572px / 1920 */
  height: 75.926vh;
  border-radius: 2.08vw; /* 40px / 1920 */
  border: 0.104vw solid #cfcfcf; /* 2px / 1920 */
  box-shadow: 0.52vw 0.52vw 1.04vw #eaeded; /* 10px 10px 20px / 1920 */
  box-sizing: border-box;
  margin-top: 12.04vh;
  margin-bottom: 12.04vh;
  align-items: center;
`;

export const SignupTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.025em;
  color: #3f4149;
  text-align: center;
  margin-top: 7.22vh;
  margin-bottom: 4.26vh;
`;

export const IdInputBlock = styled.div`
  width: 100%;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputLabel = styled.label`
  font-family: "Pretendard", sans-serif;
  font-size: 1.5rem;
  letter-spacing: 0%;
  display: block;
  color: #3f4149;
  text-align: left;
  margin-left: 0.8vw;
  margin-bottom: 1.5vh;

  &::after {
    content: "*";
    color: red;
    margin-left: 0.25rem;
  }
`;

export const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

export const InputField = styled.input`
  width: 15.31vw;
  height: 7.78vh;
  border: 0.078vw solid ${({ $isvalid }) => ($isvalid ? "#b4b4b4" : "red")};
  border-radius: 100px;
  padding-left: 1.25vw;
  font-size: 1rem;
  color: #3f4149;
  background-color: ${({ $isvalid }) => ($isvalid ? "" : "#fbeaec")};
  transition: all 0.2s ease;

  &::placeholder {
    font-weight: 400;
    font-size: 1rem;
    color: #b4b4b4;
    line-height: 7.78vh; /* matches height of input for vertical centering */
  }

  &:focus {
    outline: none;
    border-color: ${({ $isvalid }) => ($isvalid ? "#2e65f3" : "red")};
    background-color: ${({ $isvalid }) =>
      $isvalid ? "rgba(46, 101, 243, 0.1)" : "#fbeaec"};
  }
`;

export const ErrorMessage = styled.div`
  padding-top: 1.48vh;
  padding-left: 2vw;
  color: red;
  font-size: 1.125rem;
  min-height: 2em;
`;

export const EmailSuffix = styled.span`
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  color: #4f5261;
  margin-left: 3%;
`;

export const FieldGroupWrapper = styled.div`
  width: 29.79vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const PasswordInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5vh; /* 91px / 1080 */
`;

export const PasswordLabel = styled(InputLabel).attrs({ as: "label" })`
  &::after {
    content: "*";
    color: red;
    margin-left: 0.25rem;
  }
`;

export const PasswordInputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

export const PasswordField = styled.input`
  width: 29.79vw;
  height: 7.78vh;
  border: 0.078vw solid ${({ $isvalid }) => ($isvalid ? "#b4b4b4" : "red")};
  border-radius: 100px;
  padding-left: 1.25vw;
  font-size: 0.83rem;
  color: #3f4149;
  transition: all 0.2s ease;
  background-color: ${({ $isvalid }) => ($isvalid ? "f9f9f9" : "#fbeaec")};

  &::placeholder {
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 1rem;
    color: #b4b4b4;
  }

  &:focus {
    outline: none;
    border-color: ${({ $isvalid }) => ($isvalid ? "#2e65f3" : "red")};
    background-color: ${({ $isvalid }) =>
      $isvalid ? "rgba(46, 101, 243, 0.1)" : "#fbeaec"};
  }
`;

export const ToggleIcon = styled.img`
  width: 1.67vw;
  height: auto;
  margin-left: -3vw;
  margin-right: 1.25vw;
  cursor: pointer;
`;

export const PasswordNotice = styled.div`
  font-family: "Pretendard";
  font-size: 1.125rem; /* 18px / 1920 */
  color: #6a6a6a;
  line-height: 150%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  padding-top: 1.48vh;
  padding-left: 2vw;
`;

export const SignupButton = styled.button`
  width: 29.79vw;
  height: 7.78vh;
  border-radius: 100px;
  background-color: ${({ $enabled }) => ($enabled ? "#2e65f3" : "#dfdfdf")};
  color: ${({ $enabled }) => ($enabled ? "#F7F9FF" : "#b4b4b4")};
  font-size: 2.25rem;
  font-weight: 500;
  border: none;
  margin-top: 3.52vh;
  cursor: ${({ $enabled }) => ($enabled ? "pointer" : "not-allowed")};
  transition: background-color 0.3s ease;
`;
