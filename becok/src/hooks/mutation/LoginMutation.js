import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { login } from "../../apis/auth";

export const useLoginMutation = () => {
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (loginData) => login(loginData),
    onSuccess: (res) => {
      console.log("로그인 응답:", res);

      const response = res;
      if (response.isSuccess) {
        const { id, email } = response.data;
        localStorage.setItem("memberId", id);
        localStorage.setItem("email", email);
        navigate("/main");
      } else {
        console.error("로그인 실패:", response?.message || "알 수 없는 오류");
      }
    },
    onError: () => {
      console.error("로그인 중 오류가 발생했습니다.");
    },
  });
};
