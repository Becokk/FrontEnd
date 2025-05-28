import styled from "styled-components";

export const RightSectionContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 41.042vw; /* 572px / 1920 */
  height: 75.93vh;
  border-radius: 2.08vw; /* 40px / 1920 */
  border: 0.104vw solid #cfcfcf;
  box-shadow: 0.52vw 0.52vw 1.04vw #eaeded;
  box-sizing: border-box;
  align-items: center;

  margin-top: 12.04vh;
  margin-bottom: 12.04vh;
`;

export const LoginTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  line-height: 100%;
  letter-spacing: -2.5%;
  color: #363636;
  padding-top: 9.26vh;
`;

export const IdInputBlock = styled.div`
  width: 100%;
  // margin-bottom: 0.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

export const InputLabel = styled.label`
  font-size: clamp(1rem, 1.5vw, 1.375rem);
  letter-spacing: 0%;
  display: block;
  color: #3f4149;
  text-align: left;
  margin-left: 0.8vw;
  margin-bottom: 0.5vh;

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
  font-size: 0.83vw;
  color: #3f4149;
  background-color: ${({ $isvalid }) => ($isvalid ? "" : "#fbeaec")};
  transition: all 0.2s ease;

  &::placeholder {
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

export const ErrorMessage = styled.div`
  min-height: 1.8vh; /* enough space for one line */
  margin-top: 0.5vh;
  margin-left: 0.8vw;
  color: red;
  font-size: clamp(0.875rem, 1vw, 1rem);
  font-family: "Pretendard";
`;

export const EmailSuffix = styled.span`
  font-weight: 400;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  color: #4f5261;
  margin-left: 3%;
`;

export const PasswordInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh; /* 91px / 1080 */
`;

export const FieldGroupWrapper = styled.div`
  width: 29.79vw; /* same as input width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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
  font-size: 0.83vw;
  color: #3f4149;
  transition: all 0.2s ease;
  background-color: ${({ $isvalid }) => ($isvalid ? "" : "#fbeaec")};

  &::placeholder {
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

export const SaveLoginBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0.5vh;
`;

export const SaveLoginLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 400;
  color: #3f4149;
  cursor: pointer;
  margin-left: 0.8vw;
`;

export const CheckBox = styled.input`
  width: 1.25rem;
  height: 1.25rem;
  appearance: none;
  border-radius: 50%;
  border: 0.104vw solid #90939f;
  background-color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Pretendard";
  margin-right: 0.3vw;
  font-size: clamp(0.625rem, 1vw, 0.75rem);

  &:checked {
    background-color: #2e65f3;
    border: 0.104vw solid #2e65f3;
  }

  &:checked::after {
    content: "✔";
    color: white;
    font-size: 0.75rem;
    line-height: 1;
  }
`;

export const SaveLoginText = styled.span`
  font-weight: 500;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
`;

export const LoginButton = styled.button`
  margin-top: 0.5vh;
  width: 29.79vw;
  height: 7.78vh;
  border-radius: 100px;
  font-size: clamp(1.5rem, 2.5vw, 2.25rem);
  font-weight: 500;
  border: none;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
  background-color: ${({ disabled }) => (disabled ? "#DFDFDF" : "#2E65F3")};
  color: ${({ disabled }) => (disabled ? "#bcbcbc" : "white")};
  transition: all 0.3s ease;
`;

export const LoginActionGroup = styled.div`
  width: 29.79vw;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const SignUpMessage = styled.p`
  margin-top: 5.93vh;
  font-size: clamp(1rem, 1.5vw, 1.375rem);
  font-family: "Pretendard";
  color: #777c89;
`;

export const SignUpLink = styled.span`
  color: #2e65f3;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
