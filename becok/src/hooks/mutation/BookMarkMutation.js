import { useMutation } from "@tanstack/react-query";
import { postBookmark } from "../../apis/notification";

export const usePostUserBookMark = () => {
  return useMutation({
    mutationFn: ({ type, contentId }) => {
      const memberId = localStorage.getItem("memberId");
      return postBookmark(memberId, type, contentId);
    },
    onSuccess: (data) => {
      console.log("Bookmark 등록 성공:", data);
    },
  });
};
