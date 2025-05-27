import { useEffect, useState } from "react";
import { getContestById } from "../../apis/popular";

export const useContestDetails = (contestId) => {
  const [program, setProgram] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    const fetchContestDetail = async () => {
      try {
        const memberId = localStorage.getItem("memberId");
        const response = await getContestById(contestId, memberId);
        setProgram(response.data);
        setIsBookmarked(response.data.bookmarked);
      } catch (error) {
        console.error("공모전 상세 정보 호출 실패:", error);
      }
    };

    fetchContestDetail();
  }, [contestId]);

  return { program, isBookmarked, setIsBookmarked };
};