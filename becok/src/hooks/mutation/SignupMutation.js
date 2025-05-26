import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../../apis/auth";

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signupData) => signup(signupData),
    onSuccess: (res) => {
      if (res.isSuccess) {
        navigate("/signup-success");
      } else {
        console.error("회원가입 실패: " + res.message);
      }
    },
    onError: () => {
      console.error(
        "회원가입 중 오류가 발생했습니다. 에러메시지를 확인해주세요!"
      );
    },
  });
};
