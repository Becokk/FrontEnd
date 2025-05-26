import { useMutation } from "@tanstack/react-query";
import { postUserGoal } from "../../apis/profile";

export const useGoalMutation = () => {
  const memberId = localStorage.getItem("memberId");

  return useMutation({
    mutationFn: (goalData) => postUserGoal(memberId, goalData),
    onSuccess: (res) => {
      if (res?.isSuccess) {
        console.log("목표 등록 성공:", res.data);
      } else {
        console.warn("목표 등록 실패:", res.message);
      }
    },
    onError: (error) => {
      console.error("목표 등록 중 오류 발생:", error);
    },
  });
};
