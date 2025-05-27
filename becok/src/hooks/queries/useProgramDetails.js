import { useEffect, useState } from "react";
import { getProgramById } from "../../apis/popular";

export const useProgramDetails = (programId) => {
  const [program, setProgram] = useState(null);
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    if (!programId) return;
    const memberId = localStorage.getItem("memberId");
    getProgramById(programId, memberId).then((res) => {
      if (res?.isSuccess && res.data) {
        setProgram(res.data);
        setIsBookmarked(res.data.bookmarked);
      }
    });
  }, [programId]);

  return { program, isBookmarked, setIsBookmarked };
};
