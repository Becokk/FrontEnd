import React, { useState, useEffect } from "react";
import styled from "styled-components";
import EyeIcon from "../../assets/i.png";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../hooks/mutation/LoginMutation";

const LoginRightSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const goToSignup = () => navigate("/signup");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+$/;
    setIsEmailValid(emailRegex.test(value));
    if (isChecked) {
      localStorage.setItem("savedEmail", value);
    }
  };
  useEffect(() => {
    const savedEmail = localStorage.getItem("savedEmail");
    if (savedEmail) {
      setEmail(savedEmail);
      setIsChecked(true);
    }
  }, []);

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    setIsPasswordValid(value.trim().length > 0);
  };

  const isFormValid =
    isEmailValid && isPasswordValid && email.length > 0 && password.length > 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid) {
      loginMutation.mutate({ email: email, password });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <RightSectionContainer>
        <LoginTitle>로그인</LoginTitle>
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
                placeholder="8자 이상, 영문, 숫자 조합으로 입력해주세요."
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
            <ErrorMessage>
              {!isPasswordValid
                ? "비밀번호를 입력해주세요."
                : loginMutation.error?.response?.code === "MEMBER_400_1"
                  ? "아이디 또는 비밀번호가 잘못 입력되었습니다."
                  : ""}
            </ErrorMessage>
          </FieldGroupWrapper>
        </PasswordInputBlock>
        <LoginActionGroup>
          <SaveLoginBlock>
            <SaveLoginLabel>
              <CheckBox
                type="checkbox"
                checked={isChecked}
                onChange={() => {
                  const newChecked = !isChecked;
                  setIsChecked(newChecked);
                  if (newChecked) {
                    localStorage.setItem("savedEmail", email);
                  } else {
                    localStorage.removeItem("savedEmail");
                  }
                }}
              />
              <SaveLoginText>아이디 저장</SaveLoginText>
            </SaveLoginLabel>
          </SaveLoginBlock>
          <LoginButton disabled={!isFormValid} type="submit">
            로그인
          </LoginButton>
        </LoginActionGroup>
        <SignUpMessage>
          아직 회원이 아니신가요?{" "}
          <SignUpLink onClick={goToSignup}>회원가입</SignUpLink>
        </SignUpMessage>
      </RightSectionContainer>
    </form>
  );
};

export default LoginRightSection;

const RightSectionContainer = styled.div`
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

const LoginTitle = styled.h1`
  font-family: "Pretendard", sans-serif;
  font-weight: 500;
  font-size: clamp(2rem, 3.5vw, 3.5rem);
  line-height: 100%;
  letter-spacing: -2.5%;
  color: #363636;
  padding-top: 9.26vh;
`;

const IdInputBlock = styled.div`
  width: 100%;
  // margin-bottom: 0.5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 5vh;
`;

const InputLabel = styled.label`
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
  font-size: 0.83vw;
  color: #3f4149;
  background-color: ${({ $isvalid }) => ($isvalid ? "#f7f9ff" : "#fbeaec")};
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

const ErrorMessage = styled.div`
  min-height: 1.8vh; /* enough space for one line */
  margin-top: 0.5vh;
  margin-left: 0.8vw;
  color: red;
  font-size: clamp(0.875rem, 1vw, 1rem);
  font-family: "Pretendard";
`;

const EmailSuffix = styled.span`
  font-weight: 400;
  font-size: clamp(1.25rem, 2vw, 1.75rem);
  line-height: 130%;
  letter-spacing: -2.5%;
  vertical-align: middle;
  color: #4f5261;
  margin-left: 3%;
`;

const PasswordInputBlock = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2vh; /* 91px / 1080 */
`;

const FieldGroupWrapper = styled.div`
  width: 29.79vw; /* same as input width */
  display: flex;
  flex-direction: column;
  align-items: flex-start;
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

const ToggleIcon = styled.img`
  width: 1.67vw;
  height: auto;
  margin-left: -3vw;
  margin-right: 1.25vw;
  cursor: pointer;
`;

const SaveLoginBlock = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 0.5vh;
`;

const SaveLoginLabel = styled.label`
  display: flex;
  align-items: center;
  font-family: "Pretendard", sans-serif;
  font-size: clamp(0.9rem, 1.2vw, 1rem);
  font-weight: 400;
  color: #3f4149;
  cursor: pointer;
  margin-left: 0.8vw;
`;

const CheckBox = styled.input`
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

const SaveLoginText = styled.span`
  font-weight: 500;
  font-size: clamp(1rem, 1.4vw, 1.25rem);
`;

const LoginButton = styled.button`
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

const LoginActionGroup = styled.div`
  width: 29.79vw;
  margin-top: 3vh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SignUpMessage = styled.p`
  margin-top: 5.93vh;
  font-size: clamp(1rem, 1.5vw, 1.375rem);
  font-family: "Pretendard";
  color: #777c89;
`;

const SignUpLink = styled.span`
  color: #2e65f3;
  font-weight: 600;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }
`;
