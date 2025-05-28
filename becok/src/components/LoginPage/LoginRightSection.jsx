import React, { useState, useEffect } from "react";
import EyeIcon from "../../assets/i.png";
import EyeIconOn from "../../assets/EyeIconOn.png";
import EyeIconClose from "../../assets/EyeIconClose.png";
import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../hooks/mutation/LoginMutation";
import {
  RightSectionContainer,
  LoginTitle,
  IdInputBlock,
  FieldGroupWrapper,
  InputLabel,
  InputRow,
  InputField,
  EmailSuffix,
  ErrorMessage,
  PasswordInputBlock,
  PasswordLabel,
  PasswordInputRow,
  PasswordField,
  ToggleIcon,
  LoginActionGroup,
  SaveLoginBlock,
  SaveLoginLabel,
  CheckBox,
  SaveLoginText,
  LoginButton,
  SignUpMessage,
  SignUpLink,
} from "../../styles/LoginPage/LoginRightSection.style";

const LoginRightSection = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);
  const [loginError, setLoginError] = useState(false);

  const navigate = useNavigate();
  const loginMutation = useLoginMutation();
  const goToSignup = () => navigate("/signup");

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    const emailRegex = /^[a-zA-Z0-9._%+-]+$/;
    setIsEmailValid(emailRegex.test(value));
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
    setLoginError(false);
    if (isFormValid) {
      loginMutation.mutate(
        { email: email, password },
        {
          onError: () => {
            setLoginError(true);
          },
        }
      );
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
                src={
                  showPassword
                    ? EyeIconOn
                    : password.length > 0
                    ? EyeIconClose
                    : EyeIcon
                }
                alt="비밀번호 보기"
                onClick={() => setShowPassword(!showPassword)}
              />
            </PasswordInputRow>
            <ErrorMessage>
              {!isPasswordValid
                ? "비밀번호를 입력해주세요."
                : loginError
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
