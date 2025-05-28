import React from "react";
import EyeIcon from "../../assets/i.png";
import EyeIconOn from "../../assets/EyeIconOn.png";
import EyeIconClose from "../../assets/EyeIconClose.png";
import { useSignupMutation } from "../../hooks/mutation/SignupMutation";
import {
  RightSectionContainer,
  SignupTitle,
  IdInputBlock,
  InputLabel,
  InputRow,
  InputField,
  ErrorMessage,
  EmailSuffix,
  FieldGroupWrapper,
  PasswordInputBlock,
  PasswordLabel,
  PasswordInputRow,
  PasswordField,
  ToggleIcon,
  PasswordNotice,
  SignupButton,
} from "../../styles/SignupPage/SignupRightSection.style";

const SignupRightSection = () => {
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
            {!isEmailValid
              ? "유효한 이메일 주소를 입력해주세요."
              : signupMutation.isError &&
                  signupMutation.error?.response?.code === "MEMBER_400_1"
                ? signupMutation.error?.response?.message ||
                  "이미 사용 중인 아이디입니다."
                : ""}
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
