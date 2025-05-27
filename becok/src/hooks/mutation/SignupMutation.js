import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../../apis/auth";

export const useSignupMutation = (onErrorCallback) => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signupData) => signup(signupData),
    onSuccess: (res) => {
      if (res.isSuccess) {
        navigate("/signup-success");
      } else {
        // 서버 응답의 실패 메시지를 콜백으로 전달
        onErrorCallback?.(res.message || "회원가입에 실패했습니다.");
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "회원가입 중 알 수 없는 오류가 발생했습니다.";
      onErrorCallback?.(message);
    },
  });
};
