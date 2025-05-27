import { postNotification } from "../../apis/notification";
import { useMutation } from "@tanstack/react-query";

export const usePostNotificationSettings = () => {
  return useMutation({
    mutationFn: ({ type, contentId }) => {
      const memberId = localStorage.getItem("memberId");
      return postNotification(memberId, type, contentId);
    },
    onSuccess: (res) => {
      console.log("알림 설정 응답:", res);
    },
    onError: (err) => {
      console.error("알림 설정 오류:", err);
    },
  });
};
