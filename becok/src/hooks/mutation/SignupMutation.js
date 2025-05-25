import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { signup } from "../../apis/auth";

export const useSignupMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (signupData) => signup(signupData),
    onSuccess: (res) => {
      if (res.data.isSuccess) {
        navigate("/signup-success");
      } else {
        alert("회원가입 실패: " + res.data.message);
      }
    },
    onError: () => {
      alert("회원가입 중 오류가 발생했습니다. 에러메시지를 확인해주세요!");
    },
  });
};
