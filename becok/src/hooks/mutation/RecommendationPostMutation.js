import { useMutation } from "@tanstack/react-query";
import { postUserRecommendation } from "../../apis/recommend";

const useRecommendationPostMutation = () => {
  return useMutation({
    mutationFn: ({ memberId, recommendData }) => {
      return postUserRecommendation(memberId, recommendData);
    },
    onSuccess: () => {
      window.location.href = "/plan";
    },
  });
};

export default useRecommendationPostMutation;
