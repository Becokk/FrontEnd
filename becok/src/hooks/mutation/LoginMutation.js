import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/auth";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (loginData) => login(loginData),
    onSuccess: (res) => {
      if (res.data.isSuccess) {
        localStorage.setItem("userEmail", res.data.data.email);
        navigate("/main");
      } else {
        alert("로그인 실패: " + res.data.message);
      }
    },
    onError: () => {
      alert("회원가입 중 오류가 발생했습니다. 에러메시지를 확인해주세요!");
    },
  });
};
