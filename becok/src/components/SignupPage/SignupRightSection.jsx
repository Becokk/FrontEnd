import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import EyeIcon from "../../assets/i.png";
import { useSignupMutation } from "../../hooks/mutation/SignupMutation";

const SignupRightSection = () => {
  const navigate = useNavigate();
  const [email, setEmail] = React.useState("");
  const [isEmailValid, setIsEmailValid] = React.useState(true);
  const [password, setPassword] = React.useState("");
  const [isPasswordValid, setIsPasswordValid] = React.useState(true);
  const [showPassword, setShowPassword] = React.useState(false);
  const [passwordConfirm, setPasswordConfirm] = React.useState("");
  const [isPasswordMatch, setIsPasswordMatch] = React.useState(true);

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+$/;
    setIsEmailValid(emailRegex.test(value));
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    const hasLower = /[a-z]/.test(value);
    const hasUpper = /[A-Z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const isValidLength = value.length >= 8 && value.length <= 16;
    const validTypeCount =
      [hasLower, hasUpper, hasNumber].filter(Boolean).length >= 2;
    setIsPasswordValid(isValidLength && validTypeCount);
  };

  const signupMutation = useSignupMutation();

  return (
    <RightSectionContainer>
      <SignupTitle>회원가입</SignupTitle>
      <IdInputBlock>
        <FieldGroupWrapper>
          <InputLabel>아이디</InputLabel>
          <InputRow>
            <InputField
              type="text"
              placeholder="아이디를 입력해주세요"
              value={email}
              onChange={handleEmailChange}
              $isvalid={isEmailValid}
            />
            <EmailSuffix>@hansung.ac.kr</EmailSuffix>
          </InputRow>
          <ErrorMessage>
            {!isEmailValid ? "유효한 이메일 주소를 입력해주세요." : ""}
          </ErrorMessage>
        </FieldGroupWrapper>
      </IdInputBlock>

      <PasswordInputBlock>
        <FieldGroupWrapper>
          <PasswordLabel>비밀번호</PasswordLabel>
          <PasswordInputRow>
            <PasswordField
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 입력"
              value={password}
              onChange={handlePasswordChange}
              $isvalid={isPasswordValid}
            />
            <ToggleIcon
              src={EyeIcon}
              alt="비밀번호 보기"
              onClick={() => setShowPassword(!showPassword)}
            />
          </PasswordInputRow>
          {/* {!isPasswordValid && (
            <ErrorMessage>비밀번호를 입력해주세요.</ErrorMessage>
          )} */}
        </FieldGroupWrapper>
        <FieldGroupWrapper style={{ marginTop: "1.8vh" }}>
          <PasswordInputRow>
            <PasswordField
              type={showPassword ? "text" : "password"}
              placeholder="비밀번호 확인"
              value={passwordConfirm}
              onChange={(e) => {
                const confirmValue = e.target.value;
                setPasswordConfirm(confirmValue);
                setIsPasswordMatch(confirmValue === password);
              }}
              $isvalid={isPasswordMatch}
            />
            <ToggleIcon
              src={EyeIcon}
              alt="비밀번호 보기"
              onClick={() => setShowPassword(!showPassword)}
            />
          </PasswordInputRow>
          {!isPasswordMatch ? (
            <ErrorMessage>입력하신 비밀번호와 일치하지 않습니다.</ErrorMessage>
          ) : (
            <PasswordNotice>
              8~16자/ 영문 대문자, 소문자, 숫자 중 2가지 이상 조합
            </PasswordNotice>
          )}
        </FieldGroupWrapper>
        <SignupButton
          disabled={
            !email ||
            !isEmailValid ||
            !password ||
            !isPasswordValid ||
            !passwordConfirm ||
            !isPasswordMatch
          }
          $enabled={
            email &&
            isEmailValid &&
            password &&
            isPasswordValid &&
            passwordConfirm &&
            isPasswordMatch
          }
          onClick={() =>
            signupMutation.mutate({
              email,
              password,
              passwordCheck: passwordConfirm,
            })
          }
        >
          가입
        </SignupButton>
      </PasswordInputBlock>
    </RightSectionContainer>
  );
};

export default SignupRightSection;

const RightSectionContainer = styled.div`
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

const SignupTitle = styled.h2`
  font-size: 3.5rem;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.025em;
  color: #3f4149;
  text-align: center;
  margin-top: 7.22vh;
  margin-bottom: 4.26vh;
`;

const IdInputBlock = styled.div`
  width: 100%;
  margin-bottom: 1vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InputLabel = styled.label`
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

const InputRow = styled.div`
  display: flex;
  align-items: center;
`;

const InputField = styled.input`
  width: 15.31vw;
  height: 7.78vh;
  border: 0.078vw solid ${({ $isvalid }) => ($isvalid ? "#b4b4b4" : "red")};
  border-radius: 100px;
  padding-left: 1.25vw;
  font-size: 1rem;
  color: #3f4149;
  background-color: ${({ $isvalid }) => ($isvalid ? "#f7f9ff" : "#fbeaec")};
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

const ErrorMessage = styled.div`
  padding-top: 1.48vh;
  padding-left: 2vw;
  color: red;
  font-size: 1.125rem;
  min-height: 2em;
`;

const EmailSuffix = styled.span`
  font-weight: 400;
  font-size: 1.75rem;
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  color: #4f5261;
  margin-left: 3%;
`;

const FieldGroupWrapper = styled.div`
  width: 29.79vw;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const PasswordInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 0.5vh; /* 91px / 1080 */
`;

const PasswordLabel = styled(InputLabel).attrs({ as: "label" })`
  &::after {
    content: "*";
    color: red;
    margin-left: 0.25rem;
  }
`;

const PasswordInputRow = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const PasswordField = styled.input`
  width: 29.79vw;
  height: 7.78vh;
  border: 0.078vw solid ${({ $isvalid }) => ($isvalid ? "#b4b4b4" : "red")};
  border-radius: 100px;
  padding-left: 1.25vw;
  font-size: 0.83vw;
  color: #3f4149;
  transition: all 0.2s ease;
  background-color: ${({ $isvalid }) => ($isvalid ? "#f7f9ff" : "#fbeaec")};

  &::placeholder {
    font-family: "Pretendard";
    font-weight: 400;
    font-size: 0.83vw;
    color: #b4b4b4;
  }

  &:focus {
    outline: none;
    border-color: ${({ $isvalid }) => ($isvalid ? "#2e65f3" : "red")};
    background-color: ${({ $isvalid }) =>
      $isvalid ? "rgba(46, 101, 243, 0.1)" : "#fbeaec"};
  }
`;

const ToggleIcon = styled.img`
  width: 1.67vw;
  height: auto;
  margin-left: -3vw;
  margin-right: 1.25vw;
  cursor: pointer;
`;

const PasswordNotice = styled.div`
  font-family: "Pretendard";
  font-size: 1.125rem; /* 18px / 1920 */
  color: #6a6a6a;
  line-height: 150%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  padding-top: 1.48vh;
  padding-left: 2vw;
`;

const SignupButton = styled.button`
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
