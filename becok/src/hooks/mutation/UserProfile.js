import { useMutation } from "@tanstack/react-query";
import { postUserProfile } from "../../apis/profile";

export const usePostUserProfile = () => {
  const memberId = localStorage.getItem("memberId");
  return useMutation({
    mutationFn: (profileData) => postUserProfile(memberId, profileData),
  });
};
