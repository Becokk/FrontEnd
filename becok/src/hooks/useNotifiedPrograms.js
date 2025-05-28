import { useEffect, useState } from "react";

const useNotifiedPrograms = (memberId) => {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `http://3.36.162.164:8080/api/remember?memberId=${memberId}&view=notification`
        );
        const result = await response.json();
        if (result.isSuccess && Array.isArray(result.data)) {
          const reversedData = result.data.map((item, index, arr) => ({
            id: arr.length - index,
            type: item.domain === "contest" ? "공모전" : "비교과 프로그램",
            name: item.title,
            startDate: item.period,
            endDate: null,
            linkUrl: `/${item.domain}/${item.contentId}`,
          }));
          setPrograms(reversedData);
        } else {
          console.error("API 응답 실패 또는 형식 오류", result);
        }
      } catch (error) {
        console.error("데이터를 불러오는 중 오류 발생:", error);
      }
    };

    fetchData();
  }, [memberId]);

  const handleDelete = async (idToDelete) => {
    const programToDelete = programs.find(
      (program) => program.id === idToDelete
    );
    if (programToDelete) {
      const type = programToDelete.type === "공모전" ? "contest" : "program";
      const contentId = programToDelete.linkUrl.split("/").pop();

      try {
        await fetch(`http://3.36.162.164:8080/api/notification/${memberId}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ type, contentId: parseInt(contentId) }),
        });
      } catch (error) {
        console.error("알림 삭제 중 오류 발생:", error);
      }
    }

    const filteredPrograms = programs.filter(
      (program) => program.id !== idToDelete
    );
    const updatedPrograms = filteredPrograms.map((program, index, arr) => ({
      ...program,
      id: arr.length - index,
    }));

    setPrograms(updatedPrograms);
    localStorage.setItem("markedPrograms", JSON.stringify(updatedPrograms));
  };

  return { programs, handleDelete };
};

export default useNotifiedPrograms;
